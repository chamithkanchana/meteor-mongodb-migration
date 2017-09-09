import { Meteor } from 'meteor/meteor';

Meteor.publish('TodoList', function(){
	return TodoList.find();
});

Meteor.startup(() => {
  // code to run on server at startup

  /* This will automatically migrate into lates version of the DB */
  Migrations.migrateTo('latest');

  /* This will migrate db into specific version */
  //Migrations.migrateTo(1);

  /* if you want to run DB downgrade, you can use the previous db version and execute migrate command 
  It will downgrade the DB into previous version */
  //Migrations.migrateTo(0);
  
});
