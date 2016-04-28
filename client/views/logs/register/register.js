// Register
Template.register.events({
  // Render login template
  'click .render-login': function () {
    BlazeLayout.render('logs', {log: 'login'});
  },
  // Form processing
  'submit #register-form': function (e, t) {
    e.preventDefault();
    // Get all inputs values
    var firstName = t.find('#account-first-name').value.trim();
    var lastName = t.find('#account-last-name').value.trim();
    var email = t.find('#account-email').value.trim();
    var password = t.find('#account-password').value.trim();
    var confirmPassword = t.find('#confirm-password').value.trim();
    var geoloc = Geolocation.latLng();

    // Set RegExp for email
    var regEmail = new RegExp(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/);

    // Check if all fields are filled
    if (email && firstName && lastName && password && confirmPassword) {
      if (password == confirmPassword) {
        // Verify if email is valid
        if (regEmail.test(email)) {
          // Define user object
          var user = {
            email: email,
            password: password,
            profile:
            {
              display: true,
              firstName: firstName,
              lastName: lastName,
              active: true,
              geolocation: '',//{lat: geoloc.lat, lng: geoloc.lng},
              admin: false,
              superAdmin: false
            }
          };

          Accounts.createUser(user, function(err) {
            if (!err) {
              BlazeLayout.render('layout', { main: 'home', navbar: 'menu' });
              setTimeout(function() {
                Modules.client.utils.displayWelcomePanel();
              }, 250);
            } else {
              console.error("Accounts.createUser ", err);
              if (err.error == 400) {
                Modules.client.utils.displayPanel("register-info", "negative", "warning sign", "The password fields must be required.");

              } else if (err.error == 403) {
                Modules.client.utils.displayPanel("register-info", "negative", "warning sign", "This email address is already registered.");
              }
            }
          });
        } else {
          Modules.client.utils.displayPanel("register-info", "negative", "warning sign", "The email is not valid.");
        }
      } else {
        Modules.client.utils.displayPanel("register-info", "negative", "warning sign", "The Password and Confirm Password fields must always be equal.");
      }
    } else {
      Modules.client.utils.displayPanel("register-info", "negative", "warning sign", "All fields are required.");
    }
  }
});
