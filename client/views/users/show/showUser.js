/************
   RENDERED
*************/

Template.showUser.rendered = function() {
  // 
}

/************
   HELPERS
*************/

Template.showUser.helpers({
  // Get the mongo object for the param :id
  getUser: function() {
    // return the User
    return Meteor.users.findOne({_id: FlowRouter.getParam("id")});
  }
});

