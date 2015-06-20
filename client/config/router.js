Router.configure({
  layoutTemplate: 'default',
  loadingTemplate: 'loading'
});

var OnBeforeActions = {
  userSignedIn: function() {
    if (!Meteor.userId()) {
      this.render('home');
    } else {
      this.next();
    }
  }
};

Router.route('/', {
  name: 'home',
  template: 'home'
});

Router.route('/faq');

Router.route('/userdashboard', {
  name: 'userdashboard',
  template: 'userdashboard',
  onBeforeAction: OnBeforeActions.userSignedIn,
  waitOn: function() {
    return Meteor.subscribe('userData');
  }
});

Router.route('/profile/:_id', {
  name: 'profile',

  onBeforeAction: function() {
    // TODO: check id and trigger calculation
    this.next();
  },

  waitOn: function() {
    return Meteor.subscribe('singleSteamAccount', this.params._id);
  },

  action: function() {
    console.log('Rendering profile template with id: ', this.params._id);
    return this.render('profile', this.params._id);
  }
});
