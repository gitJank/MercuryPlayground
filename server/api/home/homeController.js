var Home = require('./homeModel');
var _ = require('lodash');

exports.params = function(req, res, next, id){
    Home.findById(id)
        .then(function(home) {
            if(!home){
                next(new Error('no home with that id go to fucking lunch dude'));
            } else {
                req.home = home;
                next();
            }
        }, function(err) {
            next(err);
        });
};

exports.get = function(req, res, next) {
    Home.find({})
        .then(function(homes) {
            res.json(homes);
        }, function(err){
            next(err);
        });
};

exports.getOne = function(req, res, next) {
    var home = req.home;
    res.json(home);
}

exports.put = function(req, res, next) {
    var home = req.home;

    var update = req.body;

    _.merge(home, update);

    home.save(function(err, saved) {
        if(err) {
            next(err);
        } else {
            res.json(saved);
        }
    })
};

exports.post = function(req, res, next){
    var newhome = req.body;

    Home.create(newhome)
        .then(function(home) {
            res.json(home);
        }, function(err) {
            next(err);
        });
};

exports.delete = function(req, res, next) {
    req.home.remove(function(err, removed) {
        if (err) {
            next(err);
        } else {
            res.json(removed);
        }
    });
};