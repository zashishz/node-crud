const mysql = require('mysql');

const appQuery = require('./appQuery');

module.exports = {
    createPost : async (connection, data) => {
        const query = mysql.format("INSERT INTO `posts`(`title`, `content`) VALUES (?, ?)", [data.title, data.content]);
        return await appQuery.promisify(connection, query);
    },
    getAllPosts: async (connection) => {
        const query = mysql.format("SELECT * FROM `posts` LIMIT 10");
        return await appQuery.promisify(connection, query);
    },
    getPostById: async(connection, id) => {
        const query = mysql.format("SELECT * FROM `posts` WHERE id = ? LIMIT 1", [id]);
        return await appQuery.promisify(connection, query);
    },
    updatePostById: async(connection, data) => {
        const query = mysql.format("UPDATE `posts` SET `title` = ?, `content` = ? WHERE `posts`.`id` = ?", [data.title, data.content, data.id]);
        return await appQuery.promisify(connection, query);
    },
    deletePostById: async(connection, id) => {
        const query = mysql.format("DELETE FROM `posts` WHERE `posts`.`id` = ?", [id]);
        return await appQuery.promisify(connection, query);
    }
}