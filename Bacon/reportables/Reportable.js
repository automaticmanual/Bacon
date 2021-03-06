define([
  'Gizmo'
], function (Gizmo) {
  
  /**
   * Base reportable object.
   *
   * @extends {Gizmo}
   * @exports Bacon/reportables/Reportable
   */
  var Reportable = {

    /**
     * Reportable factory.
     * 
     * @param  {Object=} attributes
     * @return {!Bacon/reportables/Repotable}
     */
    construct: function(attributes) {
      return this.extend({
        attributes: attributes || {}
      });
    },

    /**
     * Returns attributes as object.
     * 
     * @return {!Object}
     */
    toJson: function() {
      return this.attributes;
    },

    /**
     * Returns Json serialized string of attributes.
     * 
     * @return {!String}
     */
    toString: function() {
      return JSON.stringify(this.toJson());
    }
  };

  return Gizmo.extend(Reportable);
});