module.exports = function(app){
        app.get('/produtos-adicionar', function(req,res){
        res.render('produtos-adicionar');
    });
}