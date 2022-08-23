const { Post } = require('../models')

const postdata = [
  {
    title: 'Why MVC is so important',
    post_content:
      'MVC allows developers to maintain a true separartion of concern , devising their code between the model layer for data, the view layer for design , and the controller layer for application logic',
    user_id: 10,
  },
  {
    title: 'Authentication vs Authorization',
    post_content:
      'There is a difference between authentication and authorization.Authentication means confirming your own identity, whereas authorization means begin allowed access to the system',
    user_id: 8,
  },
  {
    title: 'Object-Relational Mapping',
    post_content:
      'I have really loved learning about ORMs. Its really simplified the way I created queries in SQLI',
    user_id: 1,
  },
  {
    title: 'Why React.js is important',
    post_content: 'React is JS library',
    user_id: 4,
  },
  {
    title: 'Using Bcrypt is important ',
    post_content: 'Bcrypt helps to protect password ',
    user_id: 7,
  },
  {
    title: 'Using sequelize ',
    post_content: 'Sequelize to sequelize ',
    user_id: 4,
  },
  {
    title: 'Using test title ',
    post_content: 'Content test title',
    user_id: 1,
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content: 'http://ucla.edu/consequat/nulla.html',
    user_id: 1,
  },
  {
    title: 'Duis ac nibh.',
    post_content: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    user_id: 9,
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_content: 'https://reverbnation.com/ligula/sit.jpg',
    user_id: 5,
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'http://china.com.cn/lectus/vestibulum.json',
    user_id: 3,
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_content:
      'http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json',
    user_id: 10,
  },
  {
    title: 'Donec dapibus.',
    post_content: 'https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml',
    user_id: 8,
  },
  {
    title: 'Nulla tellus.',
    post_content: 'https://lycos.com/natoque/penatibus/et.html',
    user_id: 3,
  },
  {
    title:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_content: 'https://gmpg.org/lorem.jpg',
    user_id: 3,
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_content: 'https://paginegialle.it/mattis/egestas.jsp',
    user_id: 7,
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'http://wikia.com/turpis/eget.jpg',
    user_id: 6,
  },
  {
    title: 'Etiam justo.',
    post_content: 'https://shareasale.com/quis.json',
    user_id: 4,
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_content:
      'http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
    user_id: 6,
  },
  {
    title:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_content: 'https://java.com/at/nibh/in.png',
    user_id: 7,
  },
]

const seedPosts = () => Post.bulkCreate(postdata)

module.exports = seedPosts
