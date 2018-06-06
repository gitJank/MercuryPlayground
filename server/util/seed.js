var User = require('../api/user/userModel');
var Home = require('../api/home/homeModel');
var _ = require('lodash');
var logger = require('./logger');

logger.log('Seeding the Database');

var users = [
  {username: 'Jimmylo', password: 'test'},
  {username: 'Tod', password: 'test'},
  {username: 'katamon', password: 'test'}
];

var homes = [
  {address: "345 Fake Address Lane", city:"Miami", state:"Florida", zipcode:"76995",
   price: "$1,300,000", type:"BUY", bedrooms:"3", bathrooms:"2", media: "../images/fake.jpeg", 
   description: "This is a description, this is a description, and this is a description"},

  {address:"178 Oak Drive", city:"Atlantic City", state:"New Jersey", zipcode:"72070",
   price: "$1900/mo", type:"RENT", bedrooms:"4", bathrooms:"2.5", media: "../images/oak.jpeg",
   description: "This is a description, this is a description, and this is a description"},

  {address:"987 Breach Front Blvd.", city:"San Diego", state:"California", zipcode:"73284",
   price: "$995,000", type:"BUY", bedrooms:"2", bathrooms:"1.5", media: "../images/breach.jpeg",
   description: "This is a description, this is a description, and this is a description"},

  {address:"740 Rage Road", city:"Galvestion", state:"Texas", zipcode:"10908",
   price: "$2,300,000", type:"BUY", bedrooms:"6", bathrooms:"4.5", media: "../images/rage.jpeg",
   description: "This is a description, this is a description, and this is a description"},

  {address:"409 Kitchen Cleaner Circle", city:"Panama City", state:"Florida", zipcode:"94795",
   price: "$2350/mo", type:"RENT", bedrooms:"3", bathrooms:"2", media: "../images/kitchen.jpeg",
   description: "This is a description, this is a description, and this is a description"},

  {address:"682 Palace Place", city:"Clarksdale", state:"Oregon", zipcode:"93846",
   price: "$750,000", type:"BUY", bedrooms:"5", bathrooms:"4", media: "../images/palace.jpeg",
   description: "This is a description, this is a description, and this is a description"}
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
      return model.deleteMany({}).exec();
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
