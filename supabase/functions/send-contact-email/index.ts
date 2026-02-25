import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactRequest = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      throw new Error("Missing required fields: name, email, and message are required");
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email address");
    }

    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    // Send email using Resend API
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>", // Use your verified domain in production
        to: ["masreshahabtamu169@gmail.com"],
        reply_to: email,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1a1a1a; color: #fff; padding: 30px; border-radius: 10px;">
            <h1 style="color: #dc2626; margin-bottom: 20px;">New Contact Form Submission</h1>
            
            <div style="background: #2a2a2a; padding: 20px; border-radius: 8px; border-left: 4px solid #dc2626; margin-bottom: 20px;">
              <h2 style="color: #fff; margin: 0 0 15px 0; font-size: 18px;">Contact Details</h2>
              <p style="margin: 8px 0; color: #ccc;"><strong style="color: #dc2626;">Name:</strong> ${name}</p>
              <p style="margin: 8px 0; color: #ccc;"><strong style="color: #dc2626;">Email:</strong> <a href="mailto:${email}" style="color: #dc2626;">${email}</a></p>
            </div>
            
            <div style="background: #2a2a2a; padding: 20px; border-radius: 8px; border-left: 4px solid #dc2626;">
              <h2 style="color: #fff; margin: 0 0 15px 0; font-size: 18px;">Message</h2>
              <p style="color: #ccc; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          
            <p style="color: #666; font-size: 12px; margin-top: 30px; text-align: center;">
              This message was sent from your portfolio contact form.
            </p>
          </div>
        `,
      }),
    });

    const resendData = await emailResponse.json();
    
    if (!emailResponse.ok) {
      throw new Error(`Resend API error: ${JSON.stringify(resendData)}`);
    }

    console.log("Contact email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: unknown) {
    console.error("Error in send-contact-email function:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
