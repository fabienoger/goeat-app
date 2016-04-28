/************************
         EVENTS
************************/

Template.conversations.events({
  // Open New Conversation modal
  'click #new-conversation': function() {
    $('.ui.modal.new-conversation-modal').modal("show");
  }
});

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
        participants: ["qYAvBt5An4Wt7K2F6", "ew9nkYmjqySgL8s7E"],
        createdAt: new Date(),
        lastUpdate: new Date(),
        text: "Lorem Ipsum text..."
      }, {
        participants: ["qYAvBt5An4Wt7K2F6", "ew9nkYmjqySgL8s7E"],
        createdAt: new Date(),
        lastUpdate: new Date(),
        text: "Lorem Ipsum text..."
      }, {
        participants: ["qYAvBt5An4Wt7K2F6", "ew9nkYmjqySgL8s7E"],
        createdAt: new Date(),
        lastUpdate: new Date(),
        text: "Lorem Ipsum text..."
      }, {
        participants: ["qYAvBt5An4Wt7K2F6", "ew9nkYmjqySgL8s7E"],
        createdAt: new Date(),
        lastUpdate: new Date(),
        text: "Lorem Ipsum text..."
      },
    ];
    return conversations;
  }
});
