var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

db.serialize(function() {
  db.run("CREATE TABLE IF NOT EXISTS student (id INTEGER PRIMARY KEY AUTOINCREMENT, lastname TEXT,firstname TEXT, phone TEXT)");

  var stmt = db.prepare("INSERT INTO student (firstname,lastname,  phone) VALUES (?,?,?)");
  stmt.run("Jon", "Snow", "06xxxxxxxx");
  stmt.run("Cersei", "Lannister", "06xxxxxxxx");
  stmt.finalize();

  db.each("SELECT * FROM student", function(err, row) {
      console.log(row);
  });
});
// db.close();


module.exports = db;