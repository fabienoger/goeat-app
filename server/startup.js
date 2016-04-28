Meteor.startup(function() {
  var usersId = [];

  // Create Super Admin and Admin
  if (Meteor.users.find().fetch().length === 0) {
    console.log("Creating users [...]");
    var id;
    var users = [{
        name: "Super Admin",
        email: "super@fabienoger.com",
        display: false,
        language: "france",
        password: "super123"
      },{
        name: "Admin",
        email: "admin@fabienoger.com",
        display: false,
        language: "france",
        password: "admin123"
      },{
        name: "Foger",
        email: "fab-oger@live.fr",
        display: true,
        language: "france",
        password: "admin123"
    }];

    _.each(users, function (user) {
      console.log(user);

      id = Accounts.createUser({
        display: user.display,
        email: user.email,
        password: user.password,
        profile: {
          firstName: user.name,
          lastName: "",
          active: true,
          admin: true,
          superAdmin: true
        }
      });
      usersId.push(id);
      // Email verification
      Meteor.users.update({_id: id}, {$set: {'emails.0.verified': true}});
    });
  }
});
