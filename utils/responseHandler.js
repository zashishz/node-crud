module.exports = {
    successResponse: (req, res, data) => {
        if(req.mysqlConn) {
            req.emit("finish");
        }
        res.status(200).json({status: true, data });
    },
    failureCodeResponse: (req, res, error, code) => {
        if(req.mysqlConn) {
            req.emit("finish");
        }
        //log error to a file but dont show
        res.status(500).json({status: false, code})
    },
    failedResponse: (req, res, message) => {
        if(req.mysqlConn) {
            req.emit("finish");
        }
        res.status(500).json({status: false, message });
    }
}