module.exports = {
    promisify: (connection, query) => {
        return new Promise((resolve, reject) => {
            connection.query(query, (err, result) => err ? reject(err) : resolve(result));
        })
    }
}