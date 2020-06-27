module.exports = function(app){

    app.get('/produtos-deletar', function(req, res){

        var connection = app.config.dbConnection();

        var produtosModel = app.app.models.produtosModel;

        produtosModel.getProdutos(connection, function(error , result){
            res.render("produtos-deletar", {produtos: result});
        });

    });

}