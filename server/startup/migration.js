Meteor.startup(function() {
  if (SteamAccounts.find({}).count() === 0) {
    SteamAccounts.insert({
      "_id": "oxcFpGBDjtcbJvCCD",
      "real_name": "Peter Petting",
      "ingame_name": "Batman",
      "community_id": "1651251251251",
      "steam_id": "STEAM_0:0:881241",
      "avatar_url": "",
      "profile_url": "",
      "profile_name": "Batman2",
      "level": "99",
      "value_in_dollar": "1,000,000",
      "game_count": "1013",
      "creation_time": "21.03.2004",
      "country": "Germany",
      "status": "1",
      "total_playtime": "100 days, 4 hours",
      "apps": [
        12, 24, 35
      ]
    });
  }
});
