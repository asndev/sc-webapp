Meteor.startup(function() {
  Meteor.subscribe('news');
  Meteor.subscribe('userData');
  Meteor.subscribe('collectionCounts');
  Meteor.subscribe('userStatus');
  
  // TODO: This is only to get all available steam ids to make testing easier
  Meteor.subscribe('steamAccounts');

});
