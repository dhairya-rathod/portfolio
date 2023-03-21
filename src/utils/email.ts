import nodemailer from "nodemailer";

import { SMTP_DETAILS } from "src/constants";

export const contactUsEmailTemplate = (
  userName = "",
  userEmail = "",
  userMessage = "",
) =>
  `<table cellspacing="0" cellpadding="0" border="0" role="presentation" class="nl2go-body-table" width="100%" style="width: 100%;"><tbody><tr><td align="center" class="r0-c"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r1-o" style="table-layout: fixed; width: 100%;"><tbody><tr><td valign="top" class=""> <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation"><tbody><tr><td class="r0-c" align="center"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r1-o" style="table-layout: fixed; width: 100%;"><!-- --><tbody><tr><td class="r2-i" style="background-color: #ffffff; padding-top: 20px;"> <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation"><tbody><tr><th width="100%" valign="top" class="r3-c" style="font-weight: normal;"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r4-o" style="table-layout: fixed; width: 100%;"><!-- --><tbody><tr><td valign="top" class="r5-i"> <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation"><tbody><tr><td class="r6-c" align="left"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r7-o" style="table-layout: fixed; width: 100%;"><tbody><tr><td valign="top" class=""> <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation"><tbody><tr><td class="r6-c" align="left"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r7-o" style="table-layout: fixed; width: 100%;"><tbody><tr><td align="left" valign="top" class="r8-i nl2go-default-textstyle" style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; word-break: break-word; padding-left: 16px; text-align: left;"> <div><p style="margin: 0;">Hello there,</p></div> </td> </tr></tbody></table></td> </tr><tr><td class="r6-c" align="left"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r7-o" style="table-layout: fixed; width: 100%;"><tbody><tr><td align="left" valign="top" class="r9-i nl2go-default-textstyle" style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; word-break: break-word; padding-left: 16px; padding-top: 15px; text-align: left; word-wrap: break-word;"> <div><p style="margin: 0;">My name is ${userName}.</p><p style="margin: 0;">&nbsp;</p><p style="margin: 0;">${userMessage}</p><p style="margin: 0;">&nbsp;</p><p style="margin: 0;">Email: ${userEmail}</p><p style="margin: 0;">&nbsp;</p><p style="margin: 0;">Thank you for your time and I look forward to hearing back from you soon.</p><p style="margin: 0;">&nbsp;</p><p style="margin: 0;">Best regards,</p><p style="margin: 0;">${userName}</p></div> </td> </tr></tbody></table></td> </tr></tbody></table></td> </tr></tbody></table></td> </tr></tbody></table></td> </tr></tbody></table></th> </tr></tbody></table></td> </tr></tbody></table></td> </tr></tbody></table></td> </tr></tbody></table></td> </tr></tbody></table>`;

export const sendMail = async (
  htmlContent: string,
  emailSubject: string,
  emailFrom = SMTP_DETAILS.author as string,
  emailTo = SMTP_DETAILS.author as string,
) => {
  const transporter = nodemailer.createTransport({
    service: "SendinBlue",
    auth: {
      user: SMTP_DETAILS.author,
      pass: SMTP_DETAILS.password,
    },
  });

  await transporter.sendMail({
    to: emailTo,
    from: emailFrom,
    subject: emailSubject,
    html: htmlContent,
  });
};
