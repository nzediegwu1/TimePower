const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    const user = {
        name: 'King',
        position: 'Universe',
    };
    res.send(`The Wisdom of God, the ${user.name} of the ${user.position} Rules the World!`);
});
module.exports = router;
