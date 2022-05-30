var express = require('express');
var router = express.Router();
const req = require('express/lib/request');
const people = require('../models/people');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const peoples = await people.find({});
  res.render('index', { people: peoples });
});

async function showpeople(){
  const peoples = await people.find({});
  peoples.forEach(element => {
    router.get('/'+element.link, function(req, res) {
      var x = element
      res.render('show', { people: x });
    });
  });
}

async function LocPeople(){
  const peoples = await people.find({});
  router.post('/sex', function(req, res){
    var s = req.body.sex;
    var x = []
    peoples.forEach(element => {
      if(element.sex === s){
        x.push(element);
      }
    });
    res.render('index', {people : x});
  })
}
LocPeople();
showpeople();
module.exports = router;
