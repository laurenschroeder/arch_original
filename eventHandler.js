
var eventHandler = {
	addEvent: function(title, day, time, location, name){
		
		databaseHandler.db.transaction(
			function(tx) {
				tx.executeSql(
					"insert into events(title, day, time, location, name) values(?,?,?,?,?)",
					[title, day, time, location, name]);},
					function(tx, results){},

				
					function(tx, error){
					console.log('add event error '+error.message);
					
				}		
		);
	},
loadEvents: function(displayEvents) {
    databaseHandler.db.readTransaction(
        function(tx) {
            tx.executeSql(
                "select * from events", [],
                function(tx, results) {
                    //create method in index.js to display
                    displayEvents(results);

                },
                function(tx, error) { //TODO: Alert the message to user
                    console.log("Error selecting events" + error.message);
                }
            );
        }
    );
},

deleteEvent: function(rowid) {
	console.log(rowid);
	console.log(currentEvent.rowid);

	console.log(currentEvent.title);
	databaseHandler.db.transaction(
			function(tx) {
				tx.executeSql(
					"delete from events where rowid = ?",
					[rowid],
					function(tx, results){},
					function(tx, error){//todo could make alert
					console.log('delete event error '+error.message);
					
					}
				);
			}
	);}
};
