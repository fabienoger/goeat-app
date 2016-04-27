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
