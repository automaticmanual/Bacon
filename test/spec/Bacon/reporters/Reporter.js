define([
  'Microvent/patterns/event/EventEmitter',
  'Bacon/reporters/Reporter',
  'Fixtures/trackers/Tracker'
], function(EventEmitter, Reporter, Tracker) {

  describe('Bacon/reporters/Reporter', function() {
    var reporter;

    beforeEach(function() {
      reporter = Reporter.construct(Tracker);
    });

    describe('#Object', function() {
      it('Should be instance of Microvent/patterns/event/EventEmitter.', function() {
        Reporter.instanceOf(EventEmitter).should.be.true;
      });
    });

    describe('#send', function() {
      it('Should trigger a send event.', function(done) {
        reporter.on('send', function() {
          done();
        });

        reporter.send();
      });

      it('Should trigger a send:fail event on promise reject.', function(done) {
        reporter.on('send:fail', function() {
          done();
        });

        reporter.send({success: false});
      });

      it('Should pass rejected item with event.', function(done) {
        reporter
          .on('send:fail', function(event, item) {
            item.should.deep.equal({
              success: false
            });

            done();
          })
          .send({success: false});
      });

      it('Should trigger a send:success event on promise resolve.', function(done) {
        reporter.on('send:success', function() {
          done();
        });

        reporter.send({success:true});
      });

      it('Should pass resolved item with event.', function(done) {
        reporter
          .on('send:success', function(event, item) {
            item.should.deep.equal({
              success: true
            });

            done();
          })
          .send({success: true});
      });
    });
  });
});