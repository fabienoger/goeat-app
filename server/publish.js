Meteor.publish('users', function() {
  return Meteor.users.find({roles: {$nin: ["superadmin"]}});
});

Meteor.publish("userStatus", function() {
  return Meteor.users.find({ "status.online": true });
});