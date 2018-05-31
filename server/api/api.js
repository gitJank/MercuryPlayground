var router = require('express').Router();

router.use('/users', require('./user/userRoutes'));
router.use('/homes', require('./home/homeRoutes'));
console.log("server running");
module.exports = router;