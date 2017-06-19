var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '587696',
    database: 'test'
});

connection.connect();

// 查询

// var sql = 'SELECT * FROM weblist';

// connection.query(sql, function(err, result) {
//     if (err) {
//         console.log('[SELECT ERROR] - ', err.message);
//         return;
//     }

//     console.log('--------------------------SELECT----------------------------');
//     console.log(result);
//     console.log('------------------------------------------------------------\n\n');
// });

// connection.end();

// 插入

// var addSql = 'INSERT INTO weblist(name,website) VALUES(?,?)';
// var addSqlParams = ['cainiao', 'https://c.runoob.com'];

// connection.query(addSql, addSqlParams, function(err, result) {
//     if (err) {
//         console.log('[INSERT ERROR] - ', err.message);
//         return;
//     }

//     console.log('--------------------------INSERT----------------------------');
//     //console.log('INSERT ID:',result.insertId);        
//     console.log('INSERT ID:', result);
//     console.log('-----------------------------------------------------------------\n\n');
// });

// connection.end();

// 修改

// var modSql = 'UPDATE weblist SET website = ? WHERE name = ?';
// var modSqlParams = ['https://m.runoob.com', 'cainiao'];
// //改
// connection.query(modSql, modSqlParams, function(err, result) {
//     if (err) {
//         console.log('[UPDATE ERROR] - ', err.message);
//         return;
//     }
//     console.log('--------------------------UPDATE----------------------------');
//     console.log('UPDATE affectedRows', result.affectedRows);
//     console.log('-----------------------------------------------------------------\n\n');
// });

// connection.end();

// 删除
var delSql = 'DELETE FROM weblist where name="cainiao"';

connection.query(delSql, function(err, result) {
    if (err) {
        console.log('[DELETE ERROR] - ', err.message);
        return;
    }

    console.log('--------------------------DELETE----------------------------');
    console.log('DELETE affectedRows', result.affectedRows);
    console.log('-----------------------------------------------------------------\n\n');
});