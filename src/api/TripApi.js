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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TripList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/TripList'));
  } else {
    // Browser globals (root is window)
    if (!root.Reseplaneraren) {
      root.Reseplaneraren = {};
    }
    root.Reseplaneraren.TripApi = factory(root.Reseplaneraren.ApiClient, root.Reseplaneraren.TripList);
  }
}(this, function(ApiClient, TripList) {
  'use strict';

  /**
   * Trip service.
   * @module api/TripApi
   * @version 1.10.1
   */

  /**
   * Constructs a new TripApi. 
   * @alias module:api/TripApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getTrip operation.
     * @callback module:api/TripApi~getTripCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TripList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Calculates a trip from a specified origin to a specified destination.
     * Calculates a trip from a specified origin to a specified destination. These might be stop/station IDs or coordinates based on addresses and points of interest validated by the location service or coordinates freely defined by the client. Parameters specifying both origin and destination are mandatory in calls to the trip service. When specifying a stop as origin, the parameter originId is used, while originCoordLat, originCoordLong, and originCoordName are used to specify a (named) coordinate. For the destination, the corresponding parameters are named either destId or destCoordLat, destCoordLong and destCoordName. It is also possible to define a via-stop/station. This forces the journey planner to search for trips which pass the defined station. The parameter is called viaId. When searching for a trip that goes via a coordinate, rather than a stop, two separate trip requests need to be combined into one.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.originId origin stop id
     * @param {Number} opts.originCoordLat origin latitude of center coordinate in the WGS84 system
     * @param {Number} opts.originCoordLong origin longitude of center coordinate in the WGS84 system
     * @param {String} opts.originCoordName name of the address at the specified origin coordinate
     * @param {Number} opts.destId destination stop id
     * @param {Number} opts.destCoordLat destination latitude of center coordinate in the WGS84 system
     * @param {Number} opts.destCoordLong destination longitude of center coordinate in the WGS84 system
     * @param {String} opts.destCoordName name of the address at the specified destination coordinate
     * @param {Number} opts.viaId via stop/station id
     * @param {Date} opts._date date of the trip
     * @param {String} opts.time time of the trip in format HH:MM
     * @param {String} opts.searchForArrival to specify that the given time and date is not the departure time but the latest time to arrive at the destination, set this parameter to the value 1.
     * @param {String} opts.useVas to exclude trips with Västtågen, set this parameter to 0.
     * @param {String} opts.useLDTrain to exclude trips with long distance trains, set this parameter to 0.
     * @param {String} opts.useRegTrain to exclude trips with regional trains, set this parameter to 0.
     * @param {String} opts.useBus to exclude trips with buses, set this parameter to 0.
     * @param {String} opts.useMedical to include medical transport lines trips with buses, set this parameter to 1.
     * @param {String} opts.originMedicalCon to search for medical transport connections from the origin, set this parameter to 1.
     * @param {String} opts.destMedicalCon to search for medical transport connections from the destination, set this parameter to 1.
     * @param {String} opts.wheelChairSpace to search for trips where at least one wheelchair space is present in the vehicle, set this parameter to 1.
     * @param {String} opts.strollerSpace to search for trips with space for stroller, baby carriage or rollator in the vehicle, set this parameter to 1.
     * @param {String} opts.lowFloor to search for trips where the vehicle is equipped with a low floor section, but not necessarily a ramp or lift, set this parameter to 1.
     * @param {String} opts.rampOrLift to search for trips where the vehicle is equipped with ramp or lift that allows fully barrier-free boarding and alighting, set this parameter to 1.
     * @param {String} opts.useBoat to exclude trips with boats, set this parameter to 0.
     * @param {String} opts.useTram to exclude trips with trams, set this parameter to 0.
     * @param {String} opts.usePT to exclude trips with public transportation, set this parameter to 0.
     * @param {String} opts.excludeDR to exclude journeys which require tel. registration, set this parameter to 1.
     * @param {Number} opts.maxWalkDist maximum walking distance from/to the coordinate in meters
     * @param {String} opts.walkSpeed walking speed given in percent of normal speed
     * @param {String} opts.originWalk to exclude trips with walks from/to coordinates, set this to 0
     * @param {String} opts.destWalk to exclude trips with walks from/to coordinates, set this to 0
     * @param {String} opts.onlyWalk to search for walk-only trips, set this to 1
     * @param {String} opts.originBike to search for trips with a bike ride from the origin to a nearby stop, where the journey continues using public transport, set this to 1.
     * @param {Number} opts.maxBikeDist maximum biking distance from/to the coordinate in meters
     * @param {String} opts.bikeCriterion optimize for either the fastest route or a route that is made up of a larger percentage of bike road, where 'F' is used to indicate tha fastest route with mimimized travel time, and 'D' is used to indicate dedicated bike roads to maximize use of bike roads.
     * @param {String} opts.bikeProfile determines the altitude profile of the route, based on a setting for how fast the user can bike when it is steep, where 'E' is used to indicate easy with minimized steepnes, 'N' is used to indicate normal, and 'P' is used to indicate powerful to allow more steepness.
     * @param {String} opts.onlyBike to search for bike-only trips, set this to 1
     * @param {String} opts.originCar to search for trips where customer travels by car from the origin and is dropped off at a stop to continue the trip using public transport, set this to 1.
     * @param {String} opts.originCarWithParking to search for trips where the customer travels by car from the origin, parks at a commuter parking and walks to a nearby stop to continue the trip using public transport, set this to 1.
     * @param {Number} opts.maxCarDist maximum car distance from/to the coordinate in meters
     * @param {String} opts.onlyCar to search for car-only trips, set this to 1
     * @param {Number} opts.maxChanges maximum number of changes in the trip
     * @param {Number} opts.additionalChangeTime to prolong the minimal change times in minutes between the public transport legs of the returned journeys
     * @param {String} opts.disregardDefaultChangeMargin to ignore the default change margin, set this to 1
     * @param {String} opts.needJourneyDetail if the reference URL for the journey detail service is not needed in the re, set this to 0
     * @param {String} opts.needGeo if a reference link for each leg of the resulting trips, which can be used to request the geometry, is needed, set this to 1
     * @param {String} opts.needItinerary if a reference link for each leg of the resulting trips, which can be used to request the itinerary, is needed, set this to 1
     * @param {Number} opts.numTrips the number of trips in the returned result
     * @param {String} opts.format the required response format
     * @param {String} opts.jsonpCallback If JSONP response format is needed, you can append an additional parameter to specify the name of a callback function, and the JSON object will be wrapped by a function call with this name.
     * @param {module:api/TripApi~getTripCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TripList}
     */
    this.getTrip = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'originId': opts['originId'],
        'originCoordLat': opts['originCoordLat'],
        'originCoordLong': opts['originCoordLong'],
        'originCoordName': opts['originCoordName'],
        'destId': opts['destId'],
        'destCoordLat': opts['destCoordLat'],
        'destCoordLong': opts['destCoordLong'],
        'destCoordName': opts['destCoordName'],
        'viaId': opts['viaId'],
        'date': opts['_date'],
        'time': opts['time'],
        'searchForArrival': opts['searchForArrival'],
        'useVas': opts['useVas'],
        'useLDTrain': opts['useLDTrain'],
        'useRegTrain': opts['useRegTrain'],
        'useBus': opts['useBus'],
        'useMedical': opts['useMedical'],
        'originMedicalCon': opts['originMedicalCon'],
        'destMedicalCon': opts['destMedicalCon'],
        'wheelChairSpace': opts['wheelChairSpace'],
        'strollerSpace': opts['strollerSpace'],
        'lowFloor': opts['lowFloor'],
        'rampOrLift': opts['rampOrLift'],
        'useBoat': opts['useBoat'],
        'useTram': opts['useTram'],
        'usePT': opts['usePT'],
        'excludeDR': opts['excludeDR'],
        'maxWalkDist': opts['maxWalkDist'],
        'walkSpeed': opts['walkSpeed'],
        'originWalk': opts['originWalk'],
        'destWalk': opts['destWalk'],
        'onlyWalk': opts['onlyWalk'],
        'originBike': opts['originBike'],
        'maxBikeDist': opts['maxBikeDist'],
        'bikeCriterion': opts['bikeCriterion'],
        'bikeProfile': opts['bikeProfile'],
        'onlyBike': opts['onlyBike'],
        'originCar': opts['originCar'],
        'originCarWithParking': opts['originCarWithParking'],
        'maxCarDist': opts['maxCarDist'],
        'onlyCar': opts['onlyCar'],
        'maxChanges': opts['maxChanges'],
        'additionalChangeTime': opts['additionalChangeTime'],
        'disregardDefaultChangeMargin': opts['disregardDefaultChangeMargin'],
        'needJourneyDetail': opts['needJourneyDetail'],
        'needGeo': opts['needGeo'],
        'needItinerary': opts['needItinerary'],
        'numTrips': opts['numTrips'],
        'format': opts['format'],
        'jsonpCallback': opts['jsonpCallback'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/xml', 'application/json'];
      var returnType = TripList;

      return this.apiClient.callApi(
        '/trip', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));