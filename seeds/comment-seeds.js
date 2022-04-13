const {
    Comment
} = require('../models');

const commentdata = [{
        comment_text: 'ORMs are pretty cool. Modular programming in general is more efficient in my opinion',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'this suddenly make so much more sense...glad we now know authorization and authentication',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'oh yah, MVC kicks ass...',
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);
module.exports = seedComments;