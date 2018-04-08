module.exports = {
    handleErrors: (err, req, res, next) => {
        if(err) {
            if(process.env.NODE_ENV != 'development')
                res.json({status: false, err: err.toString()})
            else
                res.json({status: false, message: "Something bad Happened"})
        }
        next();
    },
    catchErrors: (fn) => {
        return (req, res, next) => fn(req,res).catch((err) => {
            next(err)
        });
    }
}