define([
  'Bacon/trackers/Tracker',
  'Promise'
], function(Tracker, Promise) {

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
      var self = this;

      return new Promise(function(resolved, rejected) {
        var transport, resource;

        transport = document.createElement('img');

        transport.onload = resolved;

        transport.onerror = rejected;

        resource = self.options.resource || '';
        resource += resource.indexOf('?') === -1 ? '?' : '&';
        resource += 'data=' + encodeURI(item.toString()) + '&_nocache=' + Date.now();
      
        transport.src = resource;
      });
    }
  };

  return Tracker.extend(Http);
});