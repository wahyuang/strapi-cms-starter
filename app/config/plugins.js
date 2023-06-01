module.exports = ({ env }) => ({
  upload: {
    config: {
      breakpoints: {
        large: 1200,
        medium: 750,
      },
    },
  },
  placeholder: {
    enabled: true,
    config: {
      size: 10,
    },
  },
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 5,
    },
  },
  menus: {
    config: {
      maxDepth: 1,
      layouts: {
        menuItem: {
          relation: [
            {
              input: {
                label: "Page Item",
                name: "page_item",
                type: "relation",
              },
            },
          ],
        },
      },
    },
  },
  ezforms: {
    config: {
      captchaProvider: {
        name: "recaptcha",
        config: {
          secretKey: env("RECAPTCHA_SECRET_KEY"),
          minimumScore: 0.5,
        },
      },
      notificationProviders: [
        {
          name: "customNotificationProvider",
          enabled: true,
        },
      ],
      enableFormName: true,
    },
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST"),
        port: env("SMTP_PORT"),
        auth: {
          user: env("SMTP_USER"),
          pass: env("SMTP_PASSWORD"),
        },
      },
      settings: {
        defaultFrom: env("EMAIL_FROM"),
        defaultReplyTo: env("REPLY_TO"),
      },
    },
  },
});
