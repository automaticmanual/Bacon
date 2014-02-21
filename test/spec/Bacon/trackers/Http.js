define([
  'Bacon/trackers/Tracker',
  'Bacon/trackers/Http'
], function(Tracker, Http) {

  describe('Bacon/trackers/Http', function() {
    var http;

    beforeEach(function() {
      http = Http.construct();
    });

    describe('#Object', function() {
      it('Should be instance of Bacon/trackers/Tracker.', function() {
        Http.instanceOf(Tracker).should.be.true;
      });
    });

    describe('#send', function() {
      it('Should reject item if transport results in a error.', function(done) {
        http
          .send({})
          .then(null, function() {
            done();
          });
      });

      it('Should resolve item if transport completes without errors.', function(done) {
        Http.construct({resource: 'https://www.google.com/images/srpr/logo11w.png'})
          .send({data: 'data'})
          .then(function() {
            done();
          });
      });
    });
  });
});