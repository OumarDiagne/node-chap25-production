const User = require("../database/models/user.model");
exports.createUser = async (user) => {
  try {
    const hashedPassword = await User.HashPassword(user.password);
    const newUser = new User({
      username: user.username,
      local: {
        email: user.email,
        password: hashedPassword,
      },
    });
    return newUser.save();
  } catch (error) {
    throw error;
  }
};

exports.findUserPerMail = (email) => {
  return User.findOne({ "local.email": email }).exec();
};

exports.findUserPerId = (id) => {
  return User.findById(id).exec();
};
