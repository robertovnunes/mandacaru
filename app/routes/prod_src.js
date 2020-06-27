module.exports = function(app){
        app.get('/produtos-pesquisar', function(req, res){
        res.render('produtos-pesquisar');
    });
}