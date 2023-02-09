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
    describe('JourneyDetail', function() {
      beforeEach(function() {
        instance = new Reseplaneraren.JourneyDetail();
      });

      it('should create an instance of JourneyDetail', function() {
        // TODO: update the code to test JourneyDetail
        expect(instance).to.be.a(Reseplaneraren.JourneyDetail);
      });

      it('should have the property journeyType (base name: "JourneyType")', function() {
        // TODO: update the code to test the property journeyType
        expect(instance).to.have.property('journeyType');
        // expect(instance.journeyType).to.be(expectedValueLiteral);
      });

      it('should have the property errorText (base name: "errorText")', function() {
        // TODO: update the code to test the property errorText
        expect(instance).to.have.property('errorText');
        // expect(instance.errorText).to.be(expectedValueLiteral);
      });

      it('should have the property error (base name: "error")', function() {
        // TODO: update the code to test the property error
        expect(instance).to.have.property('error');
        // expect(instance.error).to.be(expectedValueLiteral);
      });

      it('should have the property serverdate (base name: "serverdate")', function() {
        // TODO: update the code to test the property serverdate
        expect(instance).to.have.property('serverdate');
        // expect(instance.serverdate).to.be(expectedValueLiteral);
      });

      it('should have the property servertime (base name: "servertime")', function() {
        // TODO: update the code to test the property servertime
        expect(instance).to.have.property('servertime');
        // expect(instance.servertime).to.be(expectedValueLiteral);
      });

      it('should have the property journeyId (base name: "JourneyId")', function() {
        // TODO: update the code to test the property journeyId
        expect(instance).to.have.property('journeyId');
        // expect(instance.journeyId).to.be(expectedValueLiteral);
      });

      it('should have the property direction (base name: "Direction")', function() {
        // TODO: update the code to test the property direction
        expect(instance).to.have.property('direction');
        // expect(instance.direction).to.be(expectedValueLiteral);
      });

      it('should have the property stop (base name: "Stop")', function() {
        // TODO: update the code to test the property stop
        expect(instance).to.have.property('stop');
        // expect(instance.stop).to.be(expectedValueLiteral);
      });

      it('should have the property journeyName (base name: "JourneyName")', function() {
        // TODO: update the code to test the property journeyName
        expect(instance).to.have.property('journeyName');
        // expect(instance.journeyName).to.be(expectedValueLiteral);
      });

      it('should have the property geometryRef (base name: "GeometryRef")', function() {
        // TODO: update the code to test the property geometryRef
        expect(instance).to.have.property('geometryRef');
        // expect(instance.geometryRef).to.be(expectedValueLiteral);
      });

      it('should have the property color (base name: "Color")', function() {
        // TODO: update the code to test the property color
        expect(instance).to.have.property('color');
        // expect(instance.color).to.be(expectedValueLiteral);
      });

      it('should have the property noNamespaceSchemaLocation (base name: "noNamespaceSchemaLocation")', function() {
        // TODO: update the code to test the property noNamespaceSchemaLocation
        expect(instance).to.have.property('noNamespaceSchemaLocation');
        // expect(instance.noNamespaceSchemaLocation).to.be(expectedValueLiteral);
      });

    });
  });

}));