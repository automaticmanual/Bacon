define([
  'Bacon/trackers/Tracker',
  'Bacon/helpers/Promise'
], function(Tracker, Promise) {

  var MyTracker = {
    send: function(item) {
      var promise = new Promise();

      if(item && item.success) {
        promise.resolve(item);
      } else {
        promise.reject(item);
      }

      return promise;
    }
  };

  return Tracker.extend(MyTracker);
});