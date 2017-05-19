var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/runoob';

var deleteData = function(db, callback) {
    var collection = db.collection('site')
    var whereStr = { name: '菜鸟工具' }
    collection.remove(whereStr, function(err, result) {
        if (err) {
            console.log('Error' + err);
            return
        }
        callback(result)
    })
}

MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log('success!');
    deleteData(db, function(result) {
        console.log(result);
        db.close()
    })
})