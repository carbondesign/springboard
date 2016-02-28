Meteor.startup(function() {
    if (Goals.find().count() === 0) {
        var goals = [{
            'child': 'jackson',
            'time': '30min',
            'location': 'library'
        }];
        for (var i = 0; i < goals.length; i++)
            Goals.insert(goals[i]);
    }
});
