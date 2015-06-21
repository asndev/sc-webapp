Meteor.startup(function() {
  Meteor.subscribe('news');
  Meteor.subscribe('userData');
  Meteor.subscribe('collectionCounts');
  Meteor.subscribe('steamAccounts');
  Meteor.subscribe('apps');
  Meteor.subscribe('userStatus');
});
