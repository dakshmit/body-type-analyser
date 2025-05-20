import { OAuth2Client } from 'google-auth-library';
import Users from '../models/user-accounts.js';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleLogin = async (req, res) => {
  try {
    const { idToken } = req.body;
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const { email, name } = ticket.getPayload();

    let user = await Users.findOne({ username: email });
    if (!user) {
      user = new Users({ username: email, password: null });
      await user.save();
    }

    req.session.userID = user._id;
    req.session.username = user.username;

    res.status(200).json({ message: 'Google login successful', user });
  } catch (err) {
    console.error('Google login error:', err);
    res.status(500).json({ message: 'Google login failed' });
  }
};

