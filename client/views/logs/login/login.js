// Connexion
Template.login.events({
  // Render register template
  'click .render-register': function () {
    BlazeLayout.render('logs', {log: 'register'});
  },
  // Form processing [...]
  'submit #login-form': function (e, t) {
    e.preventDefault();
    // Get inputs values
    var email = t.find('#login-email').value.trim();
    var password = t.find('#login-password').value.trim();

    // Set RegExp for email
    var regEmail = new RegExp(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/);

    if (email && password) {
      if (regEmail.test(email)) {
        Meteor.loginWithPassword(email, password, function(err) {
          if (!err) {
            FlowRouter.go('/');
          } else {
            console.error("LoginWithPassword ", err);
            if (err.error == 403) {
              Modules.client.utils.displayPanel("login-info", "negative", "lock", "The email or the password are incorrect.");
            }
          }
        });
      } else {
        Modules.client.utils.displayPanel("login-info", "negative", "warning", "The email is not valid.");
      }
    } else {
      Modules.client.utils.displayPanel("login-info", "negative", "warning", "All fields are required.");
    }
  }
});
