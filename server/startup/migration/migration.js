Meteor.startup(function() {
  if (SteamAccounts.find().count() === 0) {
    SteamAccounts.insert({
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
        "1", "2"
      ]
    });

    SteamAccounts.insert({
      "real_name": "John Doe",
      "ingame_name": "JD.",
      "community_id": "125125125",
      "steam_id": "STEAM_0:0:1337",
      "avatar_url": "",
      "profile_url": "",
      "profile_name": "JD.",
      "level": "2",
      "value_in_dollar": "2,500",
      "game_count": "3",
      "creation_time": "21.03.2004",
      "country": "USA",
      "status": "1",
      "total_playtime": "3 days, 1 hours",
      "apps": [
        "1", "2"
      ]
    });
  };

  if (Apps.find().count() === 0) {
    Apps.insert({
      "app_id": "1",
      "name": "Counter Strike",
      "type": "game",
      "price": {
        "currency": "USD",
        "original_value": "155.50",
        "sale_value": "9.99"
      }
    });
    Apps.insert({
      "app_id": "2",
      "name": "Dota 2",
      "type": "game",
      "price": {
        "currency": "USD",
        "original_value": "FREE",
        "sale_value": ""
      }
    });
  }
});
