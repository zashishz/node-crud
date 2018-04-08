const postModel = require('../models/post');
const responseHandlers = require('../middlewares/errorHandlers');

module.exports = {
    createPost: async (req, res) => {
        let data = await postModel.createPost(req.mysqlConn, req.body);
        responseHandlers.successResponse(req, res, req.body);
    },

    getPostList: async (req, res) => {
        let data = await postModel.getAllPosts(req.mysqlConn);
        responseHandlers.successResponse(req, res, data);
    },

    getPostById: async(req, res) => {
        let data = await postModel.getPostById(req.mysqlConn, req.params.id);
        responseHandlers.successResponse(req, res, data);
    },

    updatePostById: async(req, res) => {
        let data = await postModel.updatePostById(req.mysqlConn, {id: req.params.id, ...req.body })
        responseHandlers.successResponse(req, res, req.body);
    },

    deletePostById: async(req, res) => {
        await postModel.deletePostById(req.mysqlConn, req.params.id);
        responseHandlers.successResponse(req, res, "removed");
    }
    
}