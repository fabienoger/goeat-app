FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render('layout', { main: 'home', navbar: 'menu' });
  },
  name: 'home'
});

FlowRouter.route('/logs', {
  action: function() {
    BlazeLayout.render('logs', { log: 'login' });
  },
  name: 'logs'
});

// ##### USERS #####
// User route
FlowRouter.route('/users/:id', {
  action: function() {
    BlazeLayout.render('layout', { main: 'showUser', navbar: 'menu' });
  },
  name: 'showUser'
});

// ##### CONVERSATIONS #####
// Conversations route
FlowRouter.route('/conversations', {
  action: function() {
    BlazeLayout.render('layout', { main: 'conversations', navbar: 'menu' });
  },
  name: 'conversations'
});

// Redirect to register or login template

FlowRouter.route('/login', {
  action: function() {
    BlazeLayout.render('logs', { log: 'login' });
  },
  name: 'login'
});

FlowRouter.route('/register', {
  action: function() {
    BlazeLayout.render('logs', { log: 'register' });
  },
  name: 'register'
});


// Redirect the user if it is not connected

function redirectIfIsNotLogin(context) {
  if (!Meteor.userId()) {
//    BlazeLayout.render('logs', { log: 'login' }, {force: true});
    FlowRouter.go('/');
  } else {
//    console.log(context);
  }
}

FlowRouter.triggers.enter([redirectIfIsNotLogin], {except: ["login", "register"]});

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

FlowRouter.triggers.enter([redirectIfIsNotAdmin], {only: ["feedBacks", "users"]});

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
