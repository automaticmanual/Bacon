define([
  'Microvent/helpers/Base',
  'Microvent/patterns/Registry',
  'Bacon/reportables/Reportable',
  'Bacon/reporters/Reporter',
  'Bacon/reporters/Exception',
  'Bacon/trackers/Tracker',
  'Bacon/trackers/Http'
], function(Base, Registry) {

  /**
   * @todo add registration of components as template.
   */
  
  /**
   * Bacon module.
   *
   * @extends {Microvent/helpers/Base}
   * @exports Bacon/Main
   */
  var Bacon = {
    
    /**
     * Bacon factory.
     * 
     * @return {!Bacon/Main}
     */
    create: function() {
      var bacon = this.extend({
        reportables: Registry.create(),

        reporters: Registry.create(),

        trackers: Registry.create()
      });

      bacon.reportables.set('Reportable', require('Bacon/reportables/Reportable'));
      
      bacon.reporters.set('Reporter', require('Bacon/reporters/Reporter'));
      bacon.reporters.set('Exception', require('Bacon/reporters/Exception'));

      bacon.trackers.set('Tracker', require('Bacon/trackers/Tracker'));
      bacon.trackers.set('Http', require('Bacon/trackers/Http'));

      return bacon;
    },

    /**
     * Build method for reporters.
     * 
     * @param  {String=} reporter
     * @param  {String=} tracker
     * @param  {Object=} options
     * @return {?Bacon/reporters/Reporter}
     */
    assemble: function(reporter, tracker, options) {
      var myTracker, myReporter;

      reporter = reporter || 'Exception',
      
      tracker = tracker || 'Http';

      options = options || {};

      if(!this.reporters.has(reporter)) {
        throw new Error('No such reporter ' + reporter);
      } else if(!this.trackers.has(tracker)) {
        throw new Error('No such tracker ' + tracker);
      }

      myTracker = this.trackers.get(tracker);

      myReporter = this.reporters.get(reporter);

      return myReporter.create(myTracker.create(options.tracker), options.reporter);
    }
  };

  return Base.extend(Bacon);
});