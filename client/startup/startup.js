
Meteor.startup(function() {
  Meteor.subscribe('news');
  Meteor.subscribe('userData');
  Meteor.subscribe('collectionCounts');
});
