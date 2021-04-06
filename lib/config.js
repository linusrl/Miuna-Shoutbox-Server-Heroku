var Conf = require('../lib/config-db');
var url = require('url');

exports.saveconfig = function(req, res){
	Conf.find({}).count({}, function(err, docs){
		if (docs==0) {
			var newConf = new Conf();
			
			domain = "linusgmbh.cyou";
			origin = 'http://'+domain+', https://'+domain+', http://www.'+domain+', https://www.'+domain+'';

			newConf.spku = req.body.secret;
			newConf.origin = [origin];
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
