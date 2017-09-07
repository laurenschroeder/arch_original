//https://www.youtube.com/watch?v=DKUME0tlnjI&list=PLxyOsIbHSrxmbXmqJ4WmI0-8SbrcM9fN8&index=3
var databaseHandler = {
    db: null,
    createDatabase: function() {
        this.db = window.openDatabase(
            "user.db",
            "1.0",
            "user database",
            1000000); //1MB

      

//executesql must all be on the same line or there's an error
        this.db.transaction(
            function(tx){
            tx.executeSql(
            	"create table if not exists users(id INTEGER PRIMARY KEY AUTOINCREMENT, oauth_uid, first_name, last_name, gender, locale, picture, created, modified, description text)", //query
                [], //arguments
                function(tx, results) {},
                function(tx, error) {
                    console.log("Error when creating table if not users" + error.message);
                }
            );
        	},


    function(error) {
        console.log("There's an error here: " + error.message)
    },
    function() {
        console.log("Create DB transaction completed successfully")
    }
    );

        this.db.transaction(
            function(tx){
            tx.executeSql(
                "create table if not exists userid(_id integer primary key, name text, age_range text)", //query
                [], //arguments
                function(tx, results) {},
                function(tx, error) {
                    console.log("Error when creating table userid" + error.message);
                }
            );
        	},


    function(error) {
        console.log("There's an error here: " + error.message)
    },
    function() {
        console.log("Create DB transaction completed successfully")
    }
    );

        this.db.transaction(
            function(tx){
            tx.executeSql(
            	"create table if not exists events(id INTEGER PRIMARY KEY AUTOINCREMENT, title text, day text, time text, location text, name text)", //query
                [], //arguments
                function(tx, results) {},
                function(tx, error) {
                    console.log("Error when creating table events" + error.message);
                }
            );
        	},


    function(error) {
        console.log("There's an error here: " + error.message)
    },
    function() {
        console.log("Create DB transaction completed successfully")
    }
    );


}

};