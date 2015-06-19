
News.allow({
    insert: function(userId, doc) {
        return true;
    },
    remove: function() {
        return true;
    },
    update: function() {
        return true;
    }
});
