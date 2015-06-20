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

Meteor.publish('collectionCounts', function() {
  Counts.publish(this, 'userCount', Meteor.users.find());
});

Meteor.publish('singleSteamAccount', function(id) {
  return SteamAccounts.find({ _id: "oxcFpGBDjtcbJvCCD" });
});
