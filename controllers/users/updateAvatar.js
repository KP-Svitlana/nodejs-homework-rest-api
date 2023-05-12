const { ctrlWrapper } = require("../../helpers");
const path = require("path");
const fs = require("fs/promises");
const User = require("../../models/user");
var Jimp = require("jimp");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const fileName = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarsDir, fileName);
  await fs.rename(tempUpload, resultUpload);
  const avatarURL = path.join("avatars", fileName);
  const jimpPath = path.join(avatarsDir, fileName);
  console.log(jimpPath);
  Jimp.read(jimpPath, (err, avatar) => {
    if (err) throw err;
    avatar
      .resize(250, 250) // resize
      .write(jimpPath); // save
  });
  await User.findByIdAndUpdate(_id, { avatarURL });

  return res.json({ avatarURL });
};

module.exports = { updateAvatar: ctrlWrapper(updateAvatar) };
