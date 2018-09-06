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
  {address: "345 Fake Address Lane", city:"Miami", state:"FL", zipcode:"76995",
   price: "$1,300,000", type:"BUY", bedrooms:"3", bathrooms:"2", sqft:"1,800", media: "../images/fake.jpeg", 
   description: "Experience serene waterfront living in this active adult community! This beautiful 3- bedroom, 2-" +
   " bath home has wonderful amenities, making this property a perfect place to call home. Situated in the quaint" +
   " community of the Village at Riverwalk, this cozy lakefront property is easy to maintain and features front and" +
   " rear lanais, sunset views, large master suite with double sinks and large walk in closet, new appliances and a" +
   " newly installed air conditioner. This home has so much to offer! Come and see this peaceful respite today."},

  {address:"178 Oak Drive", city:"Atlantic City", state:"NJ", zipcode:"72070",
   price: "$1900/mo", type:"RENT", bedrooms:"4", bathrooms:"2.5", sqft:"1,650", media: "../images/oak.jpeg",
   description: "This apartment is like a private cottage set off the street. It is well maintained by owner" +
   " occupants.There is off street parking for one car Rent includes heat, water, electric, trash disposal. Owner" +
   " requires credit report, employment verification, references. No smoking in apartment or property. No pets"},

  {address:"987 Breach Front Blvd", city:"San Diego", state:"CA", zipcode:"73284",
   price: "$995,000", type:"BUY", bedrooms:"2", bathrooms:"1.5", sqft:"2,200", media: "../images/breach.jpeg",
   description: "Live Luxury Auction 6/21! Bidding to start @$1.5m! NO BUYER PREMIUM/HIDDEN FEES! Make market value offer" +
   " TODAY to STOP auction* WELCOME TO THE VERY BEST OF MISSION BEACH! South Mission is the most sought after location for a" +
   " quieter waterfront living! End unit condo boasts 200 degree unobstructed waterfront views just 20 meters from your doorstep!" +
   " Newly renovated inside & out! Home features newer kitchen, bathrooms, windows & doors, exterior remodel, secured parking." +
   " $100k+ INCOME! **SEE SUPPLEMENT**"},

  {address:"740 Rage Road", city:"Galvestion", state:"TX", zipcode:"10908",
   price: "$2,300,000", type:"BUY", bedrooms:"4", bathrooms:"3.5", sqft:"2,400", media: "../images/rage.jpeg",
   description: "Recent interior and exterior paint, lighting and flooring updates. 2016 AC replacement & Roof Maintenance." +
   " Great lease income($25K+ per year!) Metal roof & cement siding. Hardwood floors. HUGE Walk-in pantry or owner's closet." +
   " Updated kitchen w/granite and appliances. Full time living-sized Master Suite with double sinks, separate shower, linen," +
   " huge closet, balcony access and sitting area. 4th BR/Loft bunkroom/gameroom for kids. Generous guest room closets." +
   " BR hallway Washer/Dryer included. Sold w/furnishings & fridge. Large, lifetime deck w/ sun&shaded seating. TX Windstorm!" +
   " COBRA=private flood. No MUD taxes! Gravity sewer-no grinder pump. Outdoor shower & ATV-friendly beach."},

  {address:"409 Kitchen Cleaner Circle", city:"Panama City", state:"FL", zipcode:"94795",
   price: "$2350/mo", type:"RENT", bedrooms:"3", bathrooms:"2", sqft:"1,400", media: "../images/kitchen.jpeg",
   description: "Home located close to the beach. Large bedrooms, kitchen with breakfast bar, dining room, and" +
   " family room. Split floor plan with master having a walk-in closet. Washer/dryer hookups. *Pets Subject to approval"},

  {address:"682 Palace Place", city:"Clarksdale", state:"OR", zipcode:"93846",
   price: "$750,000", type:"BUY", bedrooms:"5", bathrooms:"4", sqft:"2,950", media: "../images/palace.jpeg",
   description: "Breathtaking oceanfront 5 bedroom/4.5 bathroom home with 2,950 Sq Ft located on over and acre and features" +
   " quality finishes and artistic qualities. Finishes include Colorado stone and New England pine floors, a gourmet kitchen" +
   " offering a 6-burner commercial gas range, 2 ovens, a grill, prep island, Sub Zero refrigerator and pantry. Unique cabinetry" +
   " and high end lighting are just a few of the highlights of this beautiful home. Adjacent tax lot also available"}
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
