var Conf = require('../lib/config-db');
var url = require('url');

exports.saveconfig = function(req, res){
	Conf.find({}).count({}, function(err, docs){
		if (docs==0) {
			var newConf = new Conf();
			
			

			newConf.spku = req.body.secret;
			newConf.origin = 'http://linusgmbh.cyou, https://linusgmbh.cyou, http://www.linusgmbh.cyou, https://www.linusgmbh.cyou';
			newConf.chrlimit = req.body.chrlimit;
			newConf.check = '1';

			newConf.save(function(err) {
				if (err)
					throw err;
				return done(null, newConf);
			});
		}
	});
};
