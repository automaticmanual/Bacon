define([
  'Microvent/helpers/Base',
  'Bacon/reporters/Reporter'
], function(Base, Reporter) {

  describe('Bacon/reporters/Reporter', function() {
    var reporter;

    beforeEach(function() {
      reporter = Reporter.create();
    });

    describe('#Object', function() {
      it('Should be instance of Microvent/helpers/Base.', function() {
        Reporter.instanceOf(Base);
      });
    });
  });
});