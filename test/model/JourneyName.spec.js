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
    describe('JourneyName', function() {
      beforeEach(function() {
        instance = new Reseplaneraren.JourneyName();
      });

      it('should create an instance of JourneyName', function() {
        // TODO: update the code to test JourneyName
        expect(instance).to.be.a(Reseplaneraren.JourneyName);
      });

      it('should have the property routeIdxTo (base name: "routeIdxTo")', function() {
        // TODO: update the code to test the property routeIdxTo
        expect(instance).to.have.property('routeIdxTo');
        // expect(instance.routeIdxTo).to.be(expectedValueLiteral);
      });

      it('should have the property routeIdxFrom (base name: "routeIdxFrom")', function() {
        // TODO: update the code to test the property routeIdxFrom
        expect(instance).to.have.property('routeIdxFrom');
        // expect(instance.routeIdxFrom).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

    });
  });

}));
