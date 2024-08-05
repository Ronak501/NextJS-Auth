import nodemailer from "nodemailer";

export const sendEmail = async ({ email, emailType, userId }: any) => {
    try {
        var transport = nodemailer.createTransport({
          host: "sandbox.smtp.mailtrap.io",
          port: 2525,
          auth: {
            user: "3fd364695517df",
            pass: "7383d58fd399cf",
          },
        });

        const mailOptions = {
          from: "ronaktalaviya51@gmail.com",
          to: email,
          subject:
            emailType === "VERIFY"
              ? "Verify your email"
              : "Reset your password",
          html: `<p>Click <a href="${
            process.env.DOMAIN
          }/verifyemail?token=${hashedToken}">here</a> to ${
            emailType === "VERIFY" ? "verify your email" : "reset your password"
          }
            or copy and paste the link below in your browser. <br> ${
              process.env.DOMAIN
            }/verifyemail?token=${hashedToken}
            </p>`,
        };

        const mailresponse = await transport.sendMail(mailOptions);
        return mailresponse;
    } catch (error:any) {
        throw new Error(error.message);
    }
}