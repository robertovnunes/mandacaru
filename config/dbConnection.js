var mysql = require('mysql');

var ConnMySQL = function(){
    console.log("Conexão estabelecida");
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345',
        database: 'mandacarudb'
    });
}

module.exports = function(){
    console.log("modulo carregado");
    return ConnMySQL;
}