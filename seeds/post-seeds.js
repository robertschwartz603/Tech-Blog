const {
    Post
} = require('../models');

const postdata = [{
        title: 'Object-Relational Programming - The Future.',
        description: 'ORMs simplify a lot of mysql work. its fantastic',
        user_id: 1
    },
    {
        title: 'Auth & Auth - THE WORLD OF ACCESS',
        description: 'authentication and authorization are two sides to the same coin. Authentication validates an identity, and authorization enables access to a system.',
        user_id: 2
    },
    {
        title: 'What are the benefits of MVC',
        description: 'separation of concerns. If you can break up code into modular chunks, its not only easier to work on but its faster to debug',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postdata);
module.exports = seedPosts;