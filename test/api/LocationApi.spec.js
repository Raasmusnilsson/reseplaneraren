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

  beforeEach(function() {
    instance = new Reseplaneraren.LocationApi();
  });

  describe('(package)', function() {
    describe('LocationApi', function() {
      describe('getAllStops', function() {
        it('should call getAllStops successfully', function(done) {
          // TODO: uncomment, update parameter values for getAllStops call and complete the assertions
          /*
          var opts = {};
          opts.format = "format_example";
          opts.jsonpCallback = "jsonpCallback_example";

          instance.getAllStops(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Reseplaneraren.LocationList);
            expect(data.errorText).to.be.a('string');
            expect(data.errorText).to.be("");
            expect(data.error).to.be.a('string');
            expect(data.error).to.be("");
            expect(data.serverdate).to.be.a(Date);
            expect(data.serverdate).to.be(new Date());
            expect(data.servertime).to.be.a('string');
            expect(data.servertime).to.be("");
            {
              let dataCtr = data.stopLocation;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Reseplaneraren.StopLocation);
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("");
                expect(data.lon).to.be.a('string');
                expect(data.lon).to.be("");
                expect(data.idx).to.be.a('string');
                expect(data.idx).to.be("");
                expect(data.weight).to.be.a('string');
                expect(data.weight).to.be("");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.track).to.be.a('string');
                expect(data.track).to.be("");
                expect(data.lat).to.be.a('string');
                expect(data.lat).to.be("");

                      }
            }
            {
              let dataCtr = data.coordLocation;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Reseplaneraren.CoordLocation);
                expect(data.lon).to.be.a('string');
                expect(data.lon).to.be("");
                expect(data.idx).to.be.a('string');
                expect(data.idx).to.be("");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.type).to.be.a('string');
                expect(data.type).to.be("");
                expect(data.lat).to.be.a('string');
                expect(data.lat).to.be("");

                      }
            }
            expect(data.noNamespaceSchemaLocation).to.be.a('string');
            expect(data.noNamespaceSchemaLocation).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getLocationByName', function() {
        it('should call getLocationByName successfully', function(done) {
          // TODO: uncomment, update parameter values for getLocationByName call and complete the assertions
          /*
          var opts = {};
          opts.input = "input_example";
          opts.format = "format_example";
          opts.jsonpCallback = "jsonpCallback_example";

          instance.getLocationByName(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Reseplaneraren.LocationList);
            expect(data.errorText).to.be.a('string');
            expect(data.errorText).to.be("");
            expect(data.error).to.be.a('string');
            expect(data.error).to.be("");
            expect(data.serverdate).to.be.a(Date);
            expect(data.serverdate).to.be(new Date());
            expect(data.servertime).to.be.a('string');
            expect(data.servertime).to.be("");
            {
              let dataCtr = data.stopLocation;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Reseplaneraren.StopLocation);
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("");
                expect(data.lon).to.be.a('string');
                expect(data.lon).to.be("");
                expect(data.idx).to.be.a('string');
                expect(data.idx).to.be("");
                expect(data.weight).to.be.a('string');
                expect(data.weight).to.be("");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.track).to.be.a('string');
                expect(data.track).to.be("");
                expect(data.lat).to.be.a('string');
                expect(data.lat).to.be("");

                      }
            }
            {
              let dataCtr = data.coordLocation;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Reseplaneraren.CoordLocation);
                expect(data.lon).to.be.a('string');
                expect(data.lon).to.be("");
                expect(data.idx).to.be.a('string');
                expect(data.idx).to.be("");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.type).to.be.a('string');
                expect(data.type).to.be("");
                expect(data.lat).to.be.a('string');
                expect(data.lat).to.be("");

                      }
            }
            expect(data.noNamespaceSchemaLocation).to.be.a('string');
            expect(data.noNamespaceSchemaLocation).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getNearbyAddress', function() {
        it('should call getNearbyAddress successfully', function(done) {
          // TODO: uncomment, update parameter values for getNearbyAddress call and complete the assertions
          /*
          var originCoordLat = 1.2;
          var originCoordLong = 1.2;
          var opts = {};
          opts.format = "format_example";
          opts.jsonpCallback = "jsonpCallback_example";

          instance.getNearbyAddress(originCoordLat, originCoordLong, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Reseplaneraren.LocationList);
            expect(data.errorText).to.be.a('string');
            expect(data.errorText).to.be("");
            expect(data.error).to.be.a('string');
            expect(data.error).to.be("");
            expect(data.serverdate).to.be.a(Date);
            expect(data.serverdate).to.be(new Date());
            expect(data.servertime).to.be.a('string');
            expect(data.servertime).to.be("");
            {
              let dataCtr = data.stopLocation;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Reseplaneraren.StopLocation);
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("");
                expect(data.lon).to.be.a('string');
                expect(data.lon).to.be("");
                expect(data.idx).to.be.a('string');
                expect(data.idx).to.be("");
                expect(data.weight).to.be.a('string');
                expect(data.weight).to.be("");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.track).to.be.a('string');
                expect(data.track).to.be("");
                expect(data.lat).to.be.a('string');
                expect(data.lat).to.be("");

                      }
            }
            {
              let dataCtr = data.coordLocation;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Reseplaneraren.CoordLocation);
                expect(data.lon).to.be.a('string');
                expect(data.lon).to.be("");
                expect(data.idx).to.be.a('string');
                expect(data.idx).to.be("");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.type).to.be.a('string');
                expect(data.type).to.be("");
                expect(data.lat).to.be.a('string');
                expect(data.lat).to.be("");

                      }
            }
            expect(data.noNamespaceSchemaLocation).to.be.a('string');
            expect(data.noNamespaceSchemaLocation).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getNearbyStops', function() {
        it('should call getNearbyStops successfully', function(done) {
          // TODO: uncomment, update parameter values for getNearbyStops call and complete the assertions
          /*
          var originCoordLat = 1.2;
          var originCoordLong = 1.2;
          var opts = {};
          opts.maxNo = 56;
          opts.maxDist = 56;
          opts.format = "format_example";
          opts.jsonpCallback = "jsonpCallback_example";

          instance.getNearbyStops(originCoordLat, originCoordLong, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Reseplaneraren.LocationList);
            expect(data.errorText).to.be.a('string');
            expect(data.errorText).to.be("");
            expect(data.error).to.be.a('string');
            expect(data.error).to.be("");
            expect(data.serverdate).to.be.a(Date);
            expect(data.serverdate).to.be(new Date());
            expect(data.servertime).to.be.a('string');
            expect(data.servertime).to.be("");
            {
              let dataCtr = data.stopLocation;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Reseplaneraren.StopLocation);
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("");
                expect(data.lon).to.be.a('string');
                expect(data.lon).to.be("");
                expect(data.idx).to.be.a('string');
                expect(data.idx).to.be("");
                expect(data.weight).to.be.a('string');
                expect(data.weight).to.be("");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.track).to.be.a('string');
                expect(data.track).to.be("");
                expect(data.lat).to.be.a('string');
                expect(data.lat).to.be("");

                      }
            }
            {
              let dataCtr = data.coordLocation;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Reseplaneraren.CoordLocation);
                expect(data.lon).to.be.a('string');
                expect(data.lon).to.be("");
                expect(data.idx).to.be.a('string');
                expect(data.idx).to.be("");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.type).to.be.a('string');
                expect(data.type).to.be("");
                expect(data.lat).to.be.a('string');
                expect(data.lat).to.be("");

                      }
            }
            expect(data.noNamespaceSchemaLocation).to.be.a('string');
            expect(data.noNamespaceSchemaLocation).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));