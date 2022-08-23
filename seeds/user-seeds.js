const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'abc',
    email: 'abc@gmail.com',
    password: 'password123'
  },
  {
    username: 'test',
    email: 'test@gmail.com',
    password: 'password123'
  },
  {
    username: 'backy',
    email: 'backy@yahoo.com',
    password: 'password123'
  },
  {
    username: 'martin',
    email: 'martin@goo.ne.jp',
    password: 'password123'
  },
  {
    username: 'jacky',
    email: 'jacky@gmail.com',
    password: 'password123'
  },
  {
    username: 'msprague5',
    email: 'larnout5@imdb.com',
    password: 'password123'
  },
  {
    username: 'mpergens6',
    email: 'hnapleton6@feedburner.com',
    password: 'password123'
  },
  {
    username: 'tpenniell7',
    email: 'kperigo7@china.com.cn',
    password: 'password123'
  },
  {
    username: 'msabbins8',
    email: 'lmongain8@google.ru',
    password: 'password123'
  },
  {
    username: 'jmacarthur9',
    email: 'bsteen9@epa.gov',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
