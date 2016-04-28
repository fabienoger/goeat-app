// User momentjs for date format
Template.registerHelper(
  'formatDate', function(date) {
    return moment(date).format('DD/MM/YYYY - HH:mm:ss');
  }
);

// Date format for lastMessage
Template.registerHelper(
  'lastMessage', function(date) {
    return moment(date).format('DD/MM - HH:mm:ss');
  }
);

// Return the User with the given UserId
Template.registerHelper(
  'getUser', function(userId) {
    return Meteor.users.findOne({_id: userId});
  }
);

// Return all users except the current
Template.registerHelper(
  'getUsersExceptCurrent', function() {
    return Meteor.users.find({_id: {$ne: Meteor.userId()}}).fetch();
  }
);
