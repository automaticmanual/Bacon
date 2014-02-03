define([
  'Bacon/helpers/Dot'
], function(Dot) {

  describe('Bacon/helpers/Dot', function() {
    describe('#partial', function() {
      it('Should partially apply arguments to a function.', function() {
        var myFunction, result;

        myFunction = function(first, last, age){
          return {
            first: first,
            last: last,
            age: age
          };
        };

        result = Dot.partial(myFunction, 'bob', 'sager')(30);

        result.should.deep.equal({
          first: 'bob',
          last: 'sager',
          age: 30
        });
      });
    });
  });
});