

/************************
         HELPERS
************************/

Template.conversations.helpers({
  // Return participants users for a conversation
  getParticipants: function(participantsId) {
    var filteredParticipants = [];
    _.map(participantsId, function(userId) {
      var user = Meteor.users.findOne({_id: userId});
      if (userId != Meteor.userId()) {
        filteredParticipants.push(user);
      }
    });
    return filteredParticipants;
  },
  // Return conversations for the currentUser
  getConversations: function() {
    var conversations = [{
        participants: ["L8xuAXxJfh6QsBw8E", "k9M7yfWbfFQofTqxw"],
        createdAt: new Date(),
        lastUpdate: new Date(),
        text: "Lorem Ipsum text..."
      }, {
        participants: ["L8xuAXxJfh6QsBw8E", "k9M7yfWbfFQofTqxw"],
        createdAt: new Date(),
        lastUpdate: new Date(),
        text: "Lorem Ipsum text..."
      }, {
        participants: ["L8xuAXxJfh6QsBw8E", "k9M7yfWbfFQofTqxw"],
        createdAt: new Date(),
        lastUpdate: new Date(),
        text: "Lorem Ipsum text..."
      }, {
        participants: ["L8xuAXxJfh6QsBw8E", "k9M7yfWbfFQofTqxw"],
        createdAt: new Date(),
        lastUpdate: new Date(),
        text: "Lorem Ipsum text..."
      },
    ];
    return conversations;
  }
});
