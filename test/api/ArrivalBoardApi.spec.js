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
    instance = new Reseplaneraren.ArrivalBoardApi();
  });

  describe('(package)', function() {
    describe('ArrivalBoardApi', function() {
      describe('getArrivalBoard', function() {
        it('should call getArrivalBoard successfully', function(done) {
          // TODO: uncomment, update parameter values for getArrivalBoard call and complete the assertions
          /*
          var id = 789;
          var _date = new Date("2013-10-20");
          var time = "time_example";
          var direction = 789;
          var opts = {};
          opts.useVas = "useVas_example";
          opts.useLDTrain = "useLDTrain_example";
          opts.useRegTrain = "useRegTrain_example";
          opts.useBus = "useBus_example";
          opts.useBoat = "useBoat_example";
          opts.useTram = "useTram_example";
          opts.excludeDR = "excludeDR_example";
          opts.timeSpan = 56;
          opts.maxDeparturesPerLine = 56;
          opts.needJourneyDetail = "needJourneyDetail_example";
          opts.format = "format_example";
          opts.jsonpCallback = "jsonpCallback_example";

          instance.getArrivalBoard(id, _date, time, direction, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Reseplaneraren.ArrivalBoard);
            expect(data.errorText).to.be.a('string');
            expect(data.errorText).to.be("");
            expect(data.error).to.be.a('string');
            expect(data.error).to.be("");
            expect(data.serverdate).to.be.a(Date);
            expect(data.serverdate).to.be(new Date());
            expect(data.servertime).to.be.a('string');
            expect(data.servertime).to.be("");
            {
              let dataCtr = data.arrival;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Reseplaneraren.Arrival);
                expect(data.fgColor).to.be.a('string');
                expect(data.fgColor).to.be("");
                expect(data.stop).to.be.a('string');
                expect(data.stop).to.be("");
                expect(data.booking).to.be.a('boolean');
                expect(data.booking).to.be(false);
                expect(data.journeyDetailRef).to.be.a(Reseplaneraren.JourneyDetailRef);
                      expect(data.journeyDetailRef.ref).to.be.a('string');
                  expect(data.journeyDetailRef.ref).to.be("");
                expect(data.origin).to.be.a('string');
                expect(data.origin).to.be("");
                expect(data.track).to.be.a('string');
                expect(data.track).to.be("");
                expect(data.rtTrack).to.be.a('string');
                expect(data.rtTrack).to.be("");
                expect(data.sname).to.be.a('string');
                expect(data.sname).to.be("");
                expect(data.type).to.be.a('string');
                expect(data.type).to.be("");
                expect(data._date).to.be.a(Date);
                expect(data._date).to.be(new Date());
                expect(data.bgColor).to.be.a('string');
                expect(data.bgColor).to.be("");
                expect(data.stroke).to.be.a('string');
                expect(data.stroke).to.be("");
                expect(data.rtDate).to.be.a(Date);
                expect(data.rtDate).to.be(new Date());
                expect(data.time).to.be.a('string');
                expect(data.time).to.be("");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.rtTime).to.be.a('string');
                expect(data.rtTime).to.be("");
                expect(data.night).to.be.a('boolean');
                expect(data.night).to.be(false);
                expect(data.stopid).to.be.a('string');
                expect(data.stopid).to.be("");
                expect(data.journeyid).to.be.a('string');
                expect(data.journeyid).to.be("");
                expect(data.accessibility).to.be.a('string');
                expect(data.accessibility).to.be("wheelChair");

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
