
var userHandler = {
	addUser: function(response)
    {
    	databaseHandler.db.transaction(
			function(tx) {
				tx.executeSql(
					"select * from users");},
			function(tx, results){console.log("try");console.log(results.rows.length);},
			function(tx, error){console.log('add user error: '+error.message);
					
				}		
		);

    	console.log(response.gender,response.locale);
    	

							databaseHandler.db.transaction(
						function(tx) {
							console.log("i see progression");
							tx.executeSql(
								"insert into users(oauth_uid, first_name, last_name, gender, locale, picture, created) values(?,?,?,?,?,?,?)",
								[response.id,response.first_name, response.last_name, response.gender, response.locale, response.picture.data.url, "today"]);},
						function(tx, results){console.log("it did it??")},
						function(tx, error){console.log('create user error: '+error.message);
						
								
							}	
								

						);



		
		
	}
};