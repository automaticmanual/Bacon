define([
  'Microvent/helpers/Dot'
], function(Dot) {
  
  /**
   * Extenden Dot module.
   * 
   * @exports Bacon/helpers/Dot
   */
  var Extended = Dot;

  /**
   * Partial application of functions. Returns a new function with arguments partially applied.
   * 
   * @param  {!Function} fn
   * @param  {*...}
   * @return {!Function}
   */
  Extended.partial = function(fn) {
    var partialArguments, partialFunction;

    partialArguments = [].slice.call(arguments, 1);

    partialFunction = fn;

    return function() {
      return partialFunction.apply(this, partialArguments.concat([].slice.call(arguments)));
    };
  };
  
  return Extended;
});