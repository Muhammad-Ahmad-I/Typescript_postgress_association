const jwt = require('jsonwebtoken');

exports.generateToken = async (name: any, email: any) => {
  const token = await jwt.sign(
    {
      userName: name,
      email: email,
    },
    'jhjddkjfhalkajhdfkjhasdfhk'
  );
  return token;
};

// console.log('ABC()');
