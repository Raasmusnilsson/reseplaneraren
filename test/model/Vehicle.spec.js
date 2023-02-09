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
    describe('Vehicle', function() {
      beforeEach(function() {
        instance = new Reseplaneraren.Vehicle();
      });

      it('should create an instance of Vehicle', function() {
        // TODO: update the code to test Vehicle
        expect(instance).to.be.a(Reseplaneraren.Vehicle);
      });

      it('should have the property lcolor (base name: "lcolor")', function() {
        // TODO: update the code to test the property lcolor
        expect(instance).to.have.property('lcolor');
        // expect(instance.lcolor).to.be(expectedValueLiteral);
      });

      it('should have the property prodClass (base name: "prodClass")', function() {
        // TODO: update the code to test the property prodClass
        expect(instance).to.have.property('prodClass');
        // expect(instance.prodClass).to.be(expectedValueLiteral);
      });

      it('should have the property bcolor (base name: "bcolor")', function() {
        // TODO: update the code to test the property bcolor
        expect(instance).to.have.property('bcolor');
        // expect(instance.bcolor).to.be(expectedValueLiteral);
      });

      it('should have the property direction (base name: "direction")', function() {
        // TODO: update the code to test the property direction
        expect(instance).to.have.property('direction');
        // expect(instance.direction).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property gid (base name: "gid")', function() {
        // TODO: update the code to test the property gid
        expect(instance).to.have.property('gid');
        // expect(instance.gid).to.be(expectedValueLiteral);
      });

      it('should have the property delay (base name: "delay")', function() {
        // TODO: update the code to test the property delay
        expect(instance).to.have.property('delay');
        // expect(instance.delay).to.be(expectedValueLiteral);
      });

      it('should have the property y (base name: "y")', function() {
        // TODO: update the code to test the property y
        expect(instance).to.have.property('y');
        // expect(instance.y).to.be(expectedValueLiteral);
      });

      it('should have the property x (base name: "x")', function() {
        // TODO: update the code to test the property x
        expect(instance).to.have.property('x');
        // expect(instance.x).to.be(expectedValueLiteral);
      });

    });
  });

}));