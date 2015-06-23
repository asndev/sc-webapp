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

// TODO: BIG TODO - extract  to route controller

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
    if (!SteamAccounts.findOne({ steam_id: this.params._id})) {
      console.log('No Steam Account was found.');
      console.info('You should try one of these:',
        SteamAccounts
          .find({}, { fields: { 'steam_id': 1 }})
          .fetch()
          .map(function(e) { return e.steam_id; }));
      Router.go('home');
    } else {
      this.next();
    }
  },

  waitOn: function() {
    return [Meteor.subscribe('appsForSteamAccountId', this.params._id),
      Meteor.subscribe('singleSteamAccount', this.params._id)];
  },

  action: function() {
    console.log('Rendering profile template with id: ', this.params._id);
    var apps = SteamAccounts
      .findOne({ steam_id: this.params._id }, { fields: { apps: 1 }});
    var appsArray = apps && apps.apps;

    console.log('AppsArray', appsArray);
    return this.render('profile', {
      data: {
        steamAccount: SteamAccounts.findOne({ "steam_id": this.params._id }),
        appsData: {
          apps: Apps.find({ 'app_id': { $in: appsArray }})
        }
      }
    });
  }
});
