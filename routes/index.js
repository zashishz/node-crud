const router = require('express').Router();

const {catchErrors} = require('../middlewares/errorHandlers');
const getMysqlConnection = require('../middlewares/mysql');

const postController = require('../controllers/post');

//provides list of POSTS
router.get('/posts', getMysqlConnection, catchErrors(postController.getPostList));

//provides specific POST via ID
router.get('/posts/:id', getMysqlConnection, catchErrors(postController.getPostById));


// create new POST
router.post('/posts/create', getMysqlConnection, catchErrors(postController.createPost));

// edit specific POST via ID
router.put('/posts/:id', getMysqlConnection, catchErrors(postController.updatePostById))

// delete specific POSt via ID
router.delete('/posts/:id', getMysqlConnection, catchErrors(postController.deletePostById));

module.exports = router;