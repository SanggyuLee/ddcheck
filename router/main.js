module.exports = (app, Dept) =>
{
	app.get('/', (req, res) => {
		res.render('index.html')
	});

	app.get('/main', (req, res) => {
		let title = req.query.title;
		let code = req.query.code;

		res.render('main.html', {title: title, code: code});
	});

	app.get('/api/depts', (req, res) => {
		res.end();
	});

	app.get('/api/depts/:dept_code', (req, res) => {
		Dept.findOne({"code": req.params.dept_code}, (err, depts) => {
			if(err)
				return res.status(500).send({error: 'Database failure'});

			res.json(depts);
		});
	});
}
