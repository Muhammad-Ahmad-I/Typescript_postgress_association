const bcrypt = require('bcrypt');
const saltRound = 10;

exports.passwordEncryption = async (pass: string) => {
  const getHashPass = await bcrypt.hash(pass, saltRound);
  return getHashPass;

  //   return await getHashPass;
};
