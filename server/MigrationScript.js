
Migrations.add({
	version: 1,
	name: 'Add "todoCount" to to the entire db if the value is not available.',
	up: function() {
		/*code to migrate up to version 1} */

		TodoList.find({todoCount: {$exists: false}}).forEach(list => {
			const todoCount = TodoList.find({listId: list._id}).count();
			TodoList.update(list._id, {$set: {todoCount}});
		});
	},
	down: function() {
		/*code to migrate down to version 0} */

		AssociatedGyms.update({}, {$unset: {todoCount: true}});
	}
});