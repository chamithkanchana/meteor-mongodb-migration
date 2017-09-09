TodoList = new Mongo.Collection( 'TodoList' );

TodoList.allow({
  insert: function(userId, doc){
    return !!userId;
  },
  update: function(userId, doc){
    return !!userId;
  }
});

TodoListSchema = new SimpleSchema({
  userId: {
    type: String, 
    optional: false,
  },
  content: {
    type: String, 
    optional: false,
  }, 
  /* This is the newly added value */
  todoCount:{
    type: String, 
    optional: true,
  },
  insertDate:{
    type: Date,
  },
});

TodoList.attachSchema( TodoListSchema );