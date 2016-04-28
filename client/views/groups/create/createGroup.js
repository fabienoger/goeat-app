/************************
        OnRENDERED
************************/

Template.createGroup.onRendered(function() {
  // Initialize datetime picker
  $('.datetimepicker').datetimepicker();
});

/************************
         EVENTS
************************/

Template.createGroup.events({
  // Refresh modal on open dateTimePicker
  'click #dateTimePicker': function(e, t) {
    $(".ui.modal.create-group-modal").modal("refresh")
  },
  // Manage data and insert in Group collection
  'submit #createGroupForm': function(e, t) {
    e.preventDefault();
    // Get DOM elements
    var name = t.find("#name");
    var members = t.find("#members");

    // Create selectedMembers [] & .push selectedMembers in
    var selectedMembers = [];
    selectedMembers.push(Meteor.userId());
    _.each(members.options, function(member) {
      console.log(member);
      if (member.selected) {
        selectedMembers.push(member.value);
      }
    });
    // Create Group object
    var group = {
      name: name.value.trim(),
      members: selectedMembers
    };
    console.log("Group => ", group);
/*
          // Close modal
          $('.ui.small.modal.create-group-modal').modal('hide');
          // Display Panel
          Modules.client.utils.displayPanel("message-info", "positive", "checkmark", "Le groupe a été créé avec succès !");
*/
  }
});
