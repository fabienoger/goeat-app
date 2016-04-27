FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render('layout', { main: 'home', navbar: 'menu' });
  },
  name: 'home'
});


// Redirect the user if it is not connected

function redirectIfIsNotLogin(context) {
  if (!Meteor.userId()) {
// The following line isn't executed
//    BlazeLayout.render('layout', { main: 'login' }, {force: true});
    FlowRouter.go('login');
  } else {
//    console.log(context);
  }
}

//FlowRouter.triggers.enter([redirectIfIsNotLogin], {except: ["login", "register"]});
// Redirect the user if it is not admin

function redirectIfIsNotAdmin(context) {
  if (Meteor.user()) {
    if (Meteor.user().profile.admin) {
      return true;
    } else {
      FlowRouter.go('chat');
      return false;
    }
  } else {
    FlowRouter.go('chat')
  }
}

FlowRouter.triggers.enter([redirectIfIsNotAdmin], {only: ["feedBacks"]});

// Redirect the user if it is not Super Admin

function redirectIfIsNotSuperAdmin(context) {
  if (Meteor.user()) {
    if (Meteor.user().profile.superAdmin) {
      return true;
    } else {
      FlowRouter.go('chat');
      return false;
    }
  } else {
    FlowRouter.go('chat')
  }
}

FlowRouter.triggers.enter([redirectIfIsNotSuperAdmin], {only: ["users", "newUser", "feedBacks"]});
