define([
  'Bacon/helpers/Promise',
  'Bacon/trackers/Tracker'
], function(Promise, Tracker) {

  /**
   * Http tracker module.
   * 
   * @extends {Bacon/trackers/Tracker}
   * @exports Bacont/trackers/Http
   */
  var Http = {

    /**
     * Sends an item as data through using a becon image.
     * 
     * @param  {!Bacon/reportables/Reportabl} item
     * @return {!Promise}
     */
    send: function(item) {
      var promise, transport, resource;

      promise = new Promise();

      transport = document.createElement('img');

      transport.onload = function() {
        promise.resolve(item);
      };

      transport.onerror = function() {
        promise.reject(item);
      };

      resource = this.options.resource || '';
      resource += resource.indexOf('?') === -1 ? '?' : '&';
      resource += 'data=' + encodeURI(item.toString()) + '&_nocache=' + Date.now();
    
      transport.src = resource;

      return promise;
    }
  };

  return Tracker.extend(Http);
});