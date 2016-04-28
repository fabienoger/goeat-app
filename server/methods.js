Meteor.methods({
/**********************
*       Groups
*/
  // Create group
  newGroup: function(group) {
    return Groups.insert(group);
  },
  // Upsert group
  upsertGroup: function(groupId, group) {
    return Groups.upsert({_id: groupId}, group);
  },
  // Remove group
  removeGroup: function(groupId) {
    return Groups.remove({_id: groupId});
  },
/**********************
*       Conversations
*/
  // Create conversation
  newConversation: function(conversation) {
    return Conversations.insert(conversation);
  },
  // Upsert conversation
  upsertConversation: function(convId, conversation) {
    return Conversations.upsert({_id: convId}, conversation);
  },
  // Remove conversation
  removeConversation: function(convId) {
    return Conversations.remove({_id: convId});
  },
/**********************
*       Messages
*/
  // Create message
  newMessage: function(message) {
    return Messages.insert(message);
  },
  // Upsert message
  upsertMessage: function(messageId, message) {
    return Messages.upsert({_id: messageId}, message);
  },
  // Remove message
  removeMessage: function(messageId) {
    return Messages.remove({_id: messageId});
  },
/**********************
*       Users
*/
  // new User
  newUser: function(doc) {
    return Accounts.createUser(doc);
  },
  // Upsert User
  upsertUser: function(userId, object) {
    return Meteor.users.upsert({
      _id: userId,
    }, object);
  },
  // Remove User
  removeUser: function(userId) {
    return Meteor.users.remove({_id: userId});
  }
});
