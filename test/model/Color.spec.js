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
    describe('Color', function() {
      beforeEach(function() {
        instance = new Reseplaneraren.Color();
      });

      it('should create an instance of Color', function() {
        // TODO: update the code to test Color
        expect(instance).to.be.a(Reseplaneraren.Color);
      });

      it('should have the property bgColor (base name: "bgColor")', function() {
        // TODO: update the code to test the property bgColor
        expect(instance).to.have.property('bgColor');
        // expect(instance.bgColor).to.be(expectedValueLiteral);
      });

      it('should have the property fgColor (base name: "fgColor")', function() {
        // TODO: update the code to test the property fgColor
        expect(instance).to.have.property('fgColor');
        // expect(instance.fgColor).to.be(expectedValueLiteral);
      });

      it('should have the property stroke (base name: "stroke")', function() {
        // TODO: update the code to test the property stroke
        expect(instance).to.have.property('stroke');
        // expect(instance.stroke).to.be(expectedValueLiteral);
      });

    });
  });

}));
