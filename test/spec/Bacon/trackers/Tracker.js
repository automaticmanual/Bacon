define([
  'Gizmo',
  'Bacon/helpers/Promise',
  'Bacon/trackers/Tracker'
], function(Base, Promise, Tracker) {

  describe('Bacon/trackers/Tracker', function() {
    var tracker, promise;

    beforeEach(function() {
      tracker = Tracker.construct();

      promise = new Promise();
    });

    describe('#Object', function() {
      it('Should be instance of Gizmo.', function() {
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