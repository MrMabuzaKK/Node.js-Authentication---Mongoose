const User = require("../models/User")

async function getUserByEmail(email) {
  try {
    const userDocument = await User.findOne({ email });
    console.info('User record found');

    return userDocument;
  } catch(error) {
    console.error('Error occurred while retrieving user by email');
    throw error;
  }
}

async function getUserById(id) {
  try {
    const userDocument = await User.findOne({ _id: id });
    console.info('User record found');

    return userDocument;
  } catch(error) {
    console.error('Error occurred while retrieving user by id');
    throw error;
  }
}

module.exports = {
  getUserById,
  getUserByEmail
}