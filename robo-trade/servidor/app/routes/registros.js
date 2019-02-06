 module.exports = function(app) {

	var api = app.api.placar;

	app.route('/registros/')
		.get(api.lista);

    app.route('/registros/')
        .post(api.insere);
};
