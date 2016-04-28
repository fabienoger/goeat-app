Meteor.publish('users', function() {
  return Meteor.users.find({roles: {$nin: ["superadmin"]}});
});

Meteor.publish("userStatus", function() {
  return Meteor.users.find({ "status.online": true });
});

Meteor.publish('groups', function() {
  return Groups.find({});
});

Meteor.publish('conversations', function() {
  return Conversations.find({});
});

Meteor.publish('messages', function() {
  return Messages.find({});
});
