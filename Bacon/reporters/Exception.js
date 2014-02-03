define([
  'Bacon/reportables/Reportable',
  'Bacon/reporters/Reporter'
], function(Reportable, Reporter) {

  /**
   * A exception reporting module. This is very limited right now as it doesnt support dynamic script loading.
   * 
   * @extends {Bacon/reporters/Reporter}
   * @exports Bacon/reporters/Exception
   */
  var ExceptionReporter = {

    /**
     * Module factory.
     *
     * @return {!Bacon/reporters/Exception}
     */
    create: function() {
      var reporter = Reporter.create.apply(this, [].slice.call(arguments));

      reporter._listen();

      return reporter;
    },

    /**
     * Listens to the main window.onerror event.
     * This will wrap any callback currently attached so that the events will bubble through.
     */
    _listen: function() {
      var self, onerror;

      self = this;

      onerror = window.onerror;

      this.on('error', function(event, error) {
        this.send(error);
      }.bind(this));

      window.onerror = function(error, url, line) {
        self.trigger('error', Reportable.create({
          error: error,
          url: url,
          line: line
        }));

        if(onerror) {
          onerror.apply(this, [].slice.call(arguments));
        }
      };
    }
  };

  return Reporter.extend(ExceptionReporter);
});