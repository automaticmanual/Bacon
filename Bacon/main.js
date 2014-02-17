define([
  'Gizmo',
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
   * @extends {Gizmo}
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
     * Initialize bacon instance based on config.
     *
     * @param {Object=} config
     * @return {?Bacon/reporters/Reporter}
     */
    initialize: function(config) {
      var tracker, reporter;

      config = config || {};

      tracker = config.tracker || {};

      reporter = config.reporter || {};

      tracker.name = tracker.name || 'Http';

      reporter.name = reporter.name || 'Exception';

      if(!this.reporters.has(reporter.name)) {
        throw new Error('No such reporter ' + reporter.name);
      } else if(!this.trackers.has(tracker.name)) {
        throw new Error('No such tracker ' + tracker.name);
      }

      myTracker = this.trackers.get(tracker.name);

      myReporter = this.reporters.get(reporter.name);

      return myReporter.create(myTracker.create(tracker.options), reporter.options);
    }
  };

  return Base.extend(Bacon).create();
});