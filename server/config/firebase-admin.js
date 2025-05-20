import admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.applicationDefault(), // or use service account
});

export const verifyIdToken = async (idToken) => {
  return await admin.auth().verifyIdToken(idToken);
};
