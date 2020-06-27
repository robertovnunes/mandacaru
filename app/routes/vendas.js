module.exports =  function(app){
    app.get('/vendas', function(req, res){
    res.render('vendas');
});
}