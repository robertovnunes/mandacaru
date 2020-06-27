module.exports = function(app){

    app.get('/detalhes', function(req, res){

        var connection = app.config.dbConnection();

        var produtosModel = app.app.models.produtosModel;

        produtosModel.getProduto(connection, function(error , result){
            res.render("detalhes", {produtos: result});
        });

    });
}