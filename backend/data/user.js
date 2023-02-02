import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'ReactJS',
    email: 'reactjsdeveloper45@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'rj',
    email: 'rj45@gmailcom',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users