module.exports = function(){
    
    this.getProdutos = function(connection, callback){
        connection.query('select * from produtos', callback);
    }
    this.getProduto = function(connection, callback){
        connection.query('select * from produtos where id_produto = 2', callback);
    }
        return this;
}

