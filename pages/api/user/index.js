import nc from 'next-connect';
import multer from 'multer';
import { all } from '../../../middlewares/index.js';
import { updateUserById } from '../../../db/index.js';
import { extractUser } from '../../../lib/api-helpers.js';

const upload = multer({ dest: '/tmp' });
const handler = nc();


handler.use(all);

handler.get(async (req, res) => {
  // Filter out password
  if (!req.user) return res.json({ user: null });
  const { password, ...u } = req.user;
  res.json({ user: u });
});

handler.patch(upload.single('profilePicture'), async (req, res) => {
  if (!req.user) {
    req.status(401).end();
    return;
  }
  let profilePicture;
  if (req.file) {
    const image = await cloudinary.uploader.upload(req.file.path, {
      width: 512,
      height: 512,
      crop: 'fill',
    });
    profilePicture = image.secure_url;
  }
  const { name, bio } = req.body;

  const user = await updateUserById(req.db, req.user._id, {
    ...(name && { name }),
    ...(typeof bio === 'string' && { bio }),
    ...(profilePicture && { profilePicture }),
  });

  res.json({ user: extractUser(user) });
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
