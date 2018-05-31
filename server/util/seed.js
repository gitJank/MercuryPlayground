var User = require('../api/user/userModel');
var Home = require('../api/home/homeModel');
var _ = require('lodash');
var logger = require('./logger');

logger.log('Seeding the Database');

var users = [
  {username: 'Jimmylo', password: 'test'},
  {username: 'Xoko', password: 'test'},
  {username: 'katamon', password: 'test'}
];

var homes = [
  {address: "345 Fake Address Lane", state:"Florida", zipcode:"76995", price: "$1,300,000", type:"BUY",  media: "../images/fake.jpeg"},
  {address:"178 Oak Drive", state:"New Jersey", zipcode:"72070", price: "$1900/mo", type:"RENT", media: "../images/oak.jpeg"},
  {address:"987 Breach Front Blvd.", state:"California", zipcode:"73284", price: "$995,000", type:"BUY", media: "../images/breach.jpeg"},
  {address:"740 Rage Road", state:"Texas", zipcode:"10908", price: "$2,300,000", type:"BUY", media: "../images/rage.jpeg"},
  {address:"409 Kitchen Cleaner Circle", state:"Florida", zipcode:"94795", price: "$2350/mo", type:"RENT", media: "../images/kitchen.jpeg"},
  {address:"682 Palace Place", state:"Oregon", zipcode:"93846", price: "$750,000", type:"BUY", media: "../images/palace.jpeg"}
]

var createDoc = function(model, doc) {
  return new Promise(function(resolve, reject) {
    new model(doc).save(function(err, saved) {
      return err ? reject(err) : resolve(saved);
    });
  });
};

var cleanDB = function() {
  logger.log('... cleaning the DB');
  var cleanPromises = [User, Home]
    .map(function(model) {
      return model.findOneAndRemove().exec();
    });
  return Promise.all(cleanPromises);
}

var createUsers = function(data) {
  var promises = users.map(function(user) {
    return createDoc(User, user);
  });

  return Promise.all(promises)
    .then(function(users) {
      return _.merge({users: users}, data || {});
    });
};

var createHomes = function(data) {
  var promises = homes.map(function(home) {
    return createDoc(Home, home);
  });

  return Promise.all(promises)
    .then(function(categories) {
      return _.merge({homes: homes}, data || {});
    });
};

cleanDB()
  .then(createUsers)
  .then(createHomes)
  .then(logger.log.bind(logger))
  .catch(logger.log.bind(logger));
