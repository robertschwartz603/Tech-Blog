const sequelize = require('../config/connection');
const {
    User,
    Post
} = require('../models');

const userdata = [{
        username: 'jamesjamesjames',
        email: 'jamesjames@gmail.com',
        password: 'james69nice'
    },
    {
        username: 'luke skywalker',
        email: 'dadissues@palpatine.com',
        password: 'nonoitcantbe'
    },
    {
        username: 'hackerman',
        email: 'powerglove1984@gmail.com',
        password: 'whoa-hackerman'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {
    individualHooks: true
});
module.exports = seedUsers;