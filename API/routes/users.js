var express = require('express');
var router = express.Router();

var db = require('../helpers/db');


/* GET users listing. */
router.get('/', function (req, res) {
  let users = [];
  db.each("SELECT * FROM student", (err, row) => {
    console.log(row);
    users.push(row);
  }, () => res.json(users));
});

router.get('/:id', function (req, res) {
  let user = {};
  db.each("SELECT * FROM student WHERE id=" + req.params.id,
    (err, row) => {
      user = row
    },
    () => res.json(user));
});

router.post('/', function (req, res) {
  console.log(req.body);
  let stmt = db.prepare("INSERT INTO student (lastname, firstname, phone) VALUES (?,?,?)");
  stmt.run(req.body.lastname, req.body.firstname, req.body.phone);
  stmt.finalize(() => {

    res.status(200).end();
  })
});
router.put('/:id', function (req, res) {
  let stmt = db.prepare("UPDATE student set lastname=?, firstname=?, phone=?  WHERE id=?");
  stmt.run(req.body.lastname, req.body.firstname, req.body.phone, req.params.id);
  stmt.finalize(() => {

    res.status(200).end();
  })
});
router.delete('/:id', function (req, res) {
  let stmt = db.exec("DELETE FROM student WHERE id=" + req.params.id,
    () => res.status(200).end());
});

module.exports = router;
