A useful package for writing migrations is percolate:migrations, which provides to switching between different versions of your schema.

Aas an example, that we wanted to add a TodoList.todoCount field, and ensure that it was set for all existing lists. Then we want to write the following in the server.

Migrations.add({
	version: 1,
	name: 'Add "todoCount" to to the entire db if the value is not available.',
	up: function() {
		/*code to migrate up to version 1 */

		TodoList.find({todoCount: {$exists: false}}).forEach(list => {
			const todoCount = TodoList.find({listId: list._id}).count();
			TodoList.update(list._id, {$set: {todoCount}});
		});
	},
	down: function() {
		/*code to migrate down to version 0 */

		AssociatedGyms.update({}, {$unset: {todoCount: true}});
	}
});

    This migration, which is sequenced to be the first migration to run over the database, when called the migration, it will added "todoCount" if the field is not available

    To find out more about the API of the Migrations package, refer to its documentation.

*****************************************

    If your migration needs to change a lot of data, and especially if you need to stop your app server while it’s running, it may be a good idea to use a MongoDB Bulk Operation.
