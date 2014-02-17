define([
  'Microvent/patterns/event/EventEmitter',
  'Bacon/helpers/Dot'
], function(EventEmitter, Dot) {

  /**
   * Base reporter module. All reporters should extend this object.
   * 
   * @extends {Microvent/patterns/event/EventEmitter}
   * @exports Bacon/reporters/Reporter
   */
  var Reporter = {

    /**
     * Module factory.
     * 
     * @param  {!Bacon/trackers/Tracker} tracker
     * @param  {Object=} options
     * @return {!Bacon/trackers/Tracker}
     */
    create: function(tracker, options) {
      var reporter = this.extend({

        /**
         * Tracker used to deligate sending of reportables.
         * 
         * @type {Bacon/trackers/Tracker}
         */
        tracker: tracker,

        /**
         * Any options that may be needed by the reporter.
         * 
         * @type {Object}
         */
        options: options || {}
      });

      return EventEmitter.create.call(reporter, reporter);
    },

    /**
     * Sends an item via tracker. Triggers send, send:fail and send:success.
     *
     * @param  {!Bacon/reportables/Reportable} item
     */
    send: function(item) {
      this.trigger('send', item);

      var handleFail, handleSuccess;

      handleFail = Dot.partial(this._handleFail, item).bind(this);

      handleSuccess = Dot.partial(this._handleSuccess, item).bind(this);

      this.tracker
        .send(item)
        .then(handleSuccess, handleFail);
    },

    /**
     * Handles promise rejection by emitting a send:fail.
     * 
     * @param  {*=} item
     */
    _handleFail: function(item) {
      this.trigger('send:fail', item);
    },

    /**
     * Handles promise resolve by emitting a send:success
     * 
     * @param  {*=} item
     */
    _handleSuccess: function(item) {
      this.trigger('send:success', item);
    }

  };

  return EventEmitter.extend(Reporter);
});