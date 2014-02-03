define([
  'Microvent/helpers/Base',
  'Promise',
  'Bacon/trackers/Tracker'
], function(Base, Promise, Tracker) {

  describe('Bacon/trackers/Tracker', function() {
    var tracker, promise;

    beforeEach(function() {
      tracker = Tracker.create();

      promise = new Promise(function() {});
    });

    describe('#Object', function() {
      it('Should be instance of Microvent/helpers/Base.', function() {
        Tracker.instanceOf(Base).should.be.true;
      });
    });

    describe('#send', function() {
      it('Should return a promise.', function() {
        tracker
          .send()
          .should.be.instanceOf(promise.constructor);
      });

      it('Should reject if no item is present.', function(done) {
        tracker
          .send()
          .then(null, function() {
            done();
          });
      });

      it('Should resolve if item is present.', function() {
        tracker
          .send({})
          .then(function() {
            done();
          }, null);
      });
    });
  });
});