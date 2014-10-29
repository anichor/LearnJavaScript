var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');
var file = 'test.sqlite';
var exists = fs.existsSync(file);

if(!exists) {
  console.log("Creating DB file.");
  fs.openSync(file, "w");
}

var db = new sqlite3.Database(file);

var query = process.argv[2];

var row = [];
row[0] = process.argv[3];
row[1] = process.argv[4];

db.serialize(function() {
	if(!exists) {
		db.run("CREATE TABLE lorem (info TEXT)");
	}

	if (query === 'insert') {
		var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
		stmt.run(row[0]);
		stmt.finalize();
	} else if (query === 'delete') {
	} else if (query === 'show') {
		db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
			if (!err) {
				console.log(row.id + ": " + row.info);
			}
		});
	} else if (query === 'get') {
	} else if (query === 'update') {
		db.run("UPDATE lorem SET info = ? WHERE info = ?", row[0], row[1]);
	} else if (query === 'clear') {
		db.exec("DELETE FROM lorem");
	} else {
		try {
			var err = new Error('Argument Error');
			throw err;
		} catch(err) {
			console.log(err + 'Exit...');
			return;
		}
	}
});

db.close();




// Server Side tutorial

// Client Side [Local DB] sqlite3 exe
// Command line from Javascript

// :memory: // Anonymous in memory database