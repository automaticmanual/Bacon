define([
  'Gizmo',
  'Bacon/reportables/Reportable'
], function(Gizmo, Reportable) {

  describe('Bacon/reportables/Reportable', function() {
    var reportable, attributes;

    beforeEach(function() {
      attributes = {
        key: 'value',
        cat: 'ronny'
      };

      reportable = Reportable.construct(attributes);
    });

    describe('#Object', function() {
      it('Should be instance of Gizmo.', function() {
        Reportable.instanceOf(Gizmo).should.be.true;
      });
    });

    describe('#toJson', function() {
      it('Should return public attributes as an object.', function() {
        var json = reportable.toJson();

        should.exist(json);

        json.should.be.a('object');
        json.should.deep.equal(attributes);
      });
    });

    describe('#toString', function() {
      it('Should return a serialized string.', function() {
        var serialized = reportable.toString();

        should.exist(serialized);

        serialized.should.be.a('string');
      });

      it('Should be json parsable.', function() {
        var serialized, dontThrow;

        serialized = reportable.toString();

        dontThrow = function() {
          JSON.parse(serialized);
        };

        dontThrow.should.not.throw;

        JSON.parse(serialized.toString()).should.deep.equal(attributes);
      });
    });
  });
});