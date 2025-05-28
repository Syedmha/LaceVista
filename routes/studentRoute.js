const express = require('express');
const router = express.Router();
console.log("Student route hit");


router.get('/', (req, res) => {
  res.json({
    name: "Syed Muzzammil Hassan Abedi",
    studentId: "225039695"
  });
});


module.exports = router;