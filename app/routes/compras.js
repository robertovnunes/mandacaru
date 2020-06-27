module.exports = function(app){
        app.get('/compras', function(req, res){
        res.render('compras');
    });
}