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
    describe('Point', function() {
      beforeEach(function() {
        instance = new Reseplaneraren.Point();
      });

      it('should create an instance of Point', function() {
        // TODO: update the code to test Point
        expect(instance).to.be.a(Reseplaneraren.Point);
      });

      it('should have the property lon (base name: "lon")', function() {
        // TODO: update the code to test the property lon
        expect(instance).to.have.property('lon');
        // expect(instance.lon).to.be(expectedValueLiteral);
      });

      it('should have the property lat (base name: "lat")', function() {
        // TODO: update the code to test the property lat
        expect(instance).to.have.property('lat');
        // expect(instance.lat).to.be(expectedValueLiteral);
      });

    });
  });

}));