require('dotenv').config();

module.exports = {
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    DB_NAME: process.env.DB_NAME,
    WEB_URI: process.env.WEB_URI,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    EMAIL_FROM: process.env.EMAIL_FROM,
    SESSION_SECRET: process.env.SESSION_SECRET,
    API_USER_ID:process.env.API_USER_ID,
    API_KEY:process.env.API_KEY
  },
};