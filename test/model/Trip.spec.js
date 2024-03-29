/*
 * Reseplaneraren
 * Provides access to Västtrafik journey planner
 *
 * OpenAPI spec version: 1.10.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.29
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Reseplaneraren);
  }
}(this, function(expect, Reseplaneraren) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Trip', function() {
      beforeEach(function() {
        instance = new Reseplaneraren.Trip();
      });

      it('should create an instance of Trip', function() {
        // TODO: update the code to test Trip
        expect(instance).to.be.a(Reseplaneraren.Trip);
      });

      it('should have the property leg (base name: "Leg")', function() {
        // TODO: update the code to test the property leg
        expect(instance).to.have.property('leg');
        // expect(instance.leg).to.be(expectedValueLiteral);
      });

      it('should have the property travelWarranty (base name: "travelWarranty")', function() {
        // TODO: update the code to test the property travelWarranty
        expect(instance).to.have.property('travelWarranty');
        // expect(instance.travelWarranty).to.be(expectedValueLiteral);
      });

      it('should have the property valid (base name: "valid")', function() {
        // TODO: update the code to test the property valid
        expect(instance).to.have.property('valid');
        // expect(instance.valid).to.be(expectedValueLiteral);
      });

      it('should have the property alternative (base name: "alternative")', function() {
        // TODO: update the code to test the property alternative
        expect(instance).to.have.property('alternative');
        // expect(instance.alternative).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

    });
  });

}));
