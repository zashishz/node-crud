const mysql = require('mysql');
const config = require('../utils/config');

const responsehandlers = require('../utils/responseHandler');

let pool;

module.exports = ((req, res, next) => {

    if(!pool) {
        pool = mysql.createPool(config.mysql);
    }

    pool.getConnection((err, connection) => {
        if(err) {
            responsehandlers.failedResponse(req, res, err);
        }

        //connection obtained
        req.mysqlConn = connection;
        next();
        req.on('finish', () => {
            console.log('Connection Released!!');
            connection.release();
        })
    })
})