define([
  'Bacon/trackers/Tracker',
  'Promise'
], function(Tracker, Promise) {

  var MyTracker = {
    send: function(item) {
      return new Promise(function(resolve, reject) {
        if(item && item.success) {
          return resolve(item);
        }

        reject(item);
      });
    }
  };

  return Tracker.extend(MyTracker);
});