import {
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  NAARI_WELCOME_EMAIL_TEMPLATE,
} from "./emailsTemplates.js";

import { transporter } from "./email.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  await transporter.sendMail({
    from: '"Vrushabh Somani" <hello@demomailtrap.com>',
    to: email,
    subject: "Verify your email",
    html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
  });
};

export const sendWelcomeEmail = async (email, name) => {
  await transporter.sendMail({
    from: '"Vrushabh Somani | NAARI" <hello@demomailtrap.com>',
    to: email,
    subject: `Welcome to NAARI, ${name}! 🌸`,
    html: NAARI_WELCOME_EMAIL_TEMPLATE.replace("{name}", name),
  });
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  await transporter.sendMail({
    from: '"Vrushabh Somani" <hello@demomailtrap.com>',
    to: email,
    subject: "Reset your password",
    html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
  });
};

export const sendResetSuccessEmail = async (email) => {
  await transporter.sendMail({
    from: '"Vrushabh Somani" <hello@demomailtrap.com>',
    to: email,
    subject: "Password Reset Successful",
    html: PASSWORD_RESET_SUCCESS_TEMPLATE,
  });
};