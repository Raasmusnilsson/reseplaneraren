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
    define(['ApiClient', 'model/DepartureBoard'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DepartureBoard'));
  } else {
    // Browser globals (root is window)
    if (!root.Reseplaneraren) {
      root.Reseplaneraren = {};
    }
    root.Reseplaneraren.DepartureBoardApi = factory(root.Reseplaneraren.ApiClient, root.Reseplaneraren.DepartureBoard);
  }
}(this, function(ApiClient, DepartureBoard) {
  'use strict';

  /**
   * DepartureBoard service.
   * @module api/DepartureBoardApi
   * @version 1.10.1
   */

  /**
   * Constructs a new DepartureBoardApi. 
   * @alias module:api/DepartureBoardApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getDepartureBoard operation.
     * @callback module:api/DepartureBoardApi~getDepartureBoardCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DepartureBoard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return the next 20 departures (or less if not existing) from a given point in time or the next departures in a given timespan.
     * This method will return the next 20 departures (or less if not existing) from a given point in time or the next departures in a given timespan. The service can only be called for stops/stations by using according ID retrieved by the location method. The parameter is called id. The time and date are defined with the parameters date and time.
     * @param {Number} id stop id
     * @param {Date} _date the date
     * @param {String} time the time in format HH:MM
     * @param {Object} opts Optional parameters
     * @param {String} opts.useVas to exclude trips with Västtågen, set this parameter to 0.
     * @param {String} opts.useLDTrain to exclude trips with long distance trains, set this parameter to 0.
     * @param {String} opts.useRegTrain to exclude trips with regional trains, set this parameter to 0.
     * @param {String} opts.useBus to exclude trips with buses, set this parameter to 0.
     * @param {String} opts.useBoat to exclude trips with boats, set this parameter to 0.
     * @param {String} opts.useTram to exclude trips with trams, set this parameter to 0.
     * @param {String} opts.excludeDR to exclude journeys which require tel. registration, set this parameter to 0.
     * @param {Number} opts.timeSpan to get the next departures in a specified timespan of up to 24 hours (unit: minutes). If this parameter is not set, the result will contain the next 20 departures.
     * @param {Number} opts.maxDeparturesPerLine if timeSpan is set you can further reduce the number of returned journeys by adding this parameter, which will cause only the given number of journeys for every combination of line and direction.
     * @param {String} opts.needJourneyDetail if the reference URL for the journey detail service is not needed in the result, set this parameter to 0
     * @param {Number} opts.direction stop id in order to get only departures of vehicles with a specified direction
     * @param {String} opts.format the required response format
     * @param {String} opts.jsonpCallback If JSONP response format is needed, you can append an additional parameter to specify the name of a callback function, and the JSON object will be wrapped by a function call with this name.
     * @param {module:api/DepartureBoardApi~getDepartureBoardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DepartureBoard}
     */
    this.getDepartureBoard = function(id, _date, time, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDepartureBoard");
      }

      // verify the required parameter '_date' is set
      if (_date === undefined || _date === null) {
        throw new Error("Missing the required parameter '_date' when calling getDepartureBoard");
      }

      // verify the required parameter 'time' is set
      if (time === undefined || time === null) {
        throw new Error("Missing the required parameter 'time' when calling getDepartureBoard");
      }


      var pathParams = {
      };
      var queryParams = {
        'id': id,
        'date': _date,
        'time': time,
        'useVas': opts['useVas'],
        'useLDTrain': opts['useLDTrain'],
        'useRegTrain': opts['useRegTrain'],
        'useBus': opts['useBus'],
        'useBoat': opts['useBoat'],
        'useTram': opts['useTram'],
        'excludeDR': opts['excludeDR'],
        'timeSpan': opts['timeSpan'],
        'maxDeparturesPerLine': opts['maxDeparturesPerLine'],
        'needJourneyDetail': opts['needJourneyDetail'],
        'direction': opts['direction'],
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
      var returnType = DepartureBoard;

      return this.apiClient.callApi(
        '/departureBoard', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
