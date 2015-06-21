Meteor.publish('news', function() {
    return News.find({});
});

Meteor.publish('userData', function () {
    return Meteor.users.find({_id: this.userId}, {
        fields: {
            'id': 1,
            'createdAt': 1,
            'services.steam.avatar': 1
        }
    });
});

Meteor.publish('userStatus', function() {
  return Meteor.users.find({ 'status.online': true });
});

Meteor.users.find({ 'status.online': true }).observe({
  added: function(id) {
    console.log(id + ' just came online');
  },
  removed: function(id) {
    console.log(id + ' just went offline');
  }
});

Meteor.publish('collectionCounts', function() {
  Counts.publish(this, 'userCount', Meteor.users.find());
  Counts.publish(this, 'steamAccountsCount', SteamAccounts.find());
  Counts.publish(this, 'appCount', Apps.find());
});

Meteor.publish('steamAccounts', function() {
  return SteamAccounts.find();
});

Meteor.publish('apps', function() {
  return Apps.find();
})

Meteor.publish('singleSteamAccount', function(steamId) {
  return SteamAccounts.find({ steam_id: steamId });
});

Meteor.publish('appsForSteamAccountId', function(steamId) {
  var appsArray = SteamAccounts
    .find({ steam_id: steamId }, { fields: { apps: 1 }})
    .fetch().map(function(e) { return e.apps });

  return Apps.find({ 'app_id': { $in: appsArray }});
});
