Goals = new Mongo.Collection('goals');
Goals.allow({
  insert: function (userId, goal) {
    return userId && goal.owner === userId;
  },
  update: function (userId, goal, fields, modifier) {
    return userId && goal.owner === userId;
  },
  remove: function (userId, goal) {
    return userId && goal.owner === userId;
  }
});