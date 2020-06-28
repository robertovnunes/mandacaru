module.exports = function(app){
    app.get('/produtos-adicionar', function(req,res){
        res.render('produtos-adicionar');
    });
    app.post('/adicionar', function(req, res){
        var produto = req.body;

        var connection = app.config.dbConnection();

        var produtosModel = app.app.models.produtosModel;

        produtosModel.salvarProduto(produto, connection, function(error , result){
            res.redirect("/produtos-pesquisar");
        });
    });
}