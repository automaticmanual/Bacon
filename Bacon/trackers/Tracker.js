define([
  'Gizmo',
  'Bacon/helpers/Promise'
], function(Gizmo, Promise) {

  /**
   * Base tracker module. All trackers should extend this object.
   *
   * @extends {!Gizmo}
   * @exports Bacon/trackers/Tracker
   */
  var Tracker = {

    /**
     * Tracker module factory.
     *  
     * @param  {Object=} options
     * @return {!Bacon/trackers/Tracker}
     */
    construct: function(options) {
      var trackerOptions, tracker;

      trackerOptions = options || {};

      tracker = {
        /**
         * Any options passed into tracker.
         * 
         * @type {Object}
         */
        options: trackerOptions || {},

        /**
         * Resource that this tracker will use to send data to.
         * 
         * @type {String}
         */
        resource: trackerOptions.resource || ''
      };

      return this.extend(tracker);
    },

    /**
     * Sends an item and returns a promise.
     * 
     * @param  {!Bacon/reportables/Reportable} item
     * @return {!Promise}
     */
    send: function(item) {
      var promise = new Promise();

      if(item) {
        promise.resolve(item);
      } else {
        promise.reject(item);
      }

      return promise;
    }
  };
  window.Gizmo = Gizmo;
  window.Tracker = Gizmo.extend(Tracker);
  return Gizmo.extend(Tracker);
});