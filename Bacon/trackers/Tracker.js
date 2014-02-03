define([
  'Microvent/helpers/Base',
  'Promise'
], function(Base, Promise) {

  /**
   * Base tracker module. All trackers should extend this object.
   *
   * @extends {!Microvent/helpers/Base}
   * @exports Bacon/trackers/Tracker
   */
  var Tracker = {

    /**
     * Tracker module factory.
     *  
     * @param  {Object=} options
     * @return {!Bacon/trackers/Tracker}
     */
    create: function(options) {
      var trackerOptions = options || {};

      return this.extend({

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
      });
    },

    /**
     * Sends an item and returns a promise.
     * 
     * @param  {!Bacon/reportables/Reportable} item
     * @return {!Promise}
     */
    send: function(item) {
      return new Promise(function(resolve, reject) {
        if(item) {
          return resolve(item);
        }

        return reject(item);
      });
    }
  };

  return Base.extend(Tracker);
});