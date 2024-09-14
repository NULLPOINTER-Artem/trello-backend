import dotenv from 'dotenv';

dotenv.config();

const {
  PORT,
  USER_GMAIL,
  APP_PASSWORD_GMAIL,
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
  ACCESS_SECRET_KEY,
  REFRESH_SECRET_KEY,
  HOST,
  HOST_FRONTEND,
} = process.env;

export default {
  port: PORT,
  host: HOST,
  hostFrontend: HOST_FRONTEND,
  accessSecretKey: ACCESS_SECRET_KEY,
  refreshSecretKey: REFRESH_SECRET_KEY,
  userGmail: USER_GMAIL,
  appPasswordGmail: APP_PASSWORD_GMAIL,
  firebaseConfig: {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID,
  },
};
