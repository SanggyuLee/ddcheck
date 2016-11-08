module.exports = function(app)
{
	app.get('/',function(req, res){
		res.render('index.html')
	});

	app.get('/main',function(req, res){
		res.render('main.html');
	});
}
