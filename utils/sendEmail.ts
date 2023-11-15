import { SMTPClient } from "https://deno.land/x/denomailer/mod.ts";
import "https://deno.land/x/dotenv/load.ts";



export const sendEmail = async (lstDestinatarios: string[], subject : string, bodyHtml: string) => {


    const { email_user_smtp, email_password_smtp, email_bcc } = Deno.env.toObject();
    


    const client = new SMTPClient({
        connection: {
          hostname: "smtp-relay.brevo.com",
          port: 465,
         tls: true,
          auth: {
            username: email_user_smtp,
            password: email_password_smtp,
          },
          
        },
      });
      
      await client.send({
        from: `Auremillones <${email_user_smtp}>`,
        to: lstDestinatarios,
        subject: subject,
        bcc: email_bcc,
        content: "...",
        html: bodyHtml,
      });
      
      await client.close();

}



