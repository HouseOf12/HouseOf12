import { nanoid } from 'nanoid';

export async function findUserById(db, userId) {
  return db.collection('users').findOne({
    _id: userId,
  }).then((user) => user || null);
}

export async function findUserByEmail(db, email) {
  return db.collection('users').findOne({
    email,
  }).then((user) => user || null);
}

export async function updateUserById(db, id, update) {
  return db.collection('users').findOneAndUpdate(
    { _id: id },
    { $set: update },
    { returnOriginal: false },
  ).then(({ value }) => value);
}

//import user model from models folder as User
//User.insertOne().then(response => {})
//OR syntax
//const users = await User.find({}) 

//dont pass in db or object, pass all the fields you want into insertUser, 
//return User.insertOne().then(response => {})

export async function insertUser(db, {
  email, password, bio = '', name, profilePicture,
}) {
  return db
    .collection('users')
    .insertOne({
      _id: nanoid(12),
      emailVerified: false,
      profilePicture,
      email,
      password,
      name,
      bio,
    })
    .then(({ ops }) => ops[0]);
}