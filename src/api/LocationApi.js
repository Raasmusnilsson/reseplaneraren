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
    define(['ApiClient', 'model/LocationList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LocationList'));
  } else {
    // Browser globals (root is window)
    if (!root.Reseplaneraren) {
      root.Reseplaneraren = {};
    }
    root.Reseplaneraren.LocationApi = factory(root.Reseplaneraren.ApiClient, root.Reseplaneraren.LocationList);
  }
}(this, function(ApiClient, LocationList) {
  'use strict';

  /**
   * Location service.
   * @module api/LocationApi
   * @version 1.10.1
   */

  /**
   * Constructs a new LocationApi. 
   * @alias module:api/LocationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAllStops operation.
     * @callback module:api/LocationApi~getAllStopsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LocationList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of all stops available in the journey planner.
     * Returns a list of all stops available in the journey planner. Be aware that a call of this service is very time consuming and should be only requested when it is really needed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.format the required response format
     * @param {String} opts.jsonpCallback If JSONP response format is needed, you can append an additional parameter to specify the name of a callback function, and the JSON object will be wrapped by a function call with this name.
     * @param {module:api/LocationApi~getAllStopsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LocationList}
     */
    this.getAllStops = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = LocationList;

      return this.apiClient.callApi(
        '/location.allstops', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLocationByName operation.
     * @callback module:api/LocationApi~getLocationByNameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LocationList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of possible matches in the journey planner database
     * Performs a pattern matching of a user input to retrieve a list of possible matches in the journey planner database. Possible matches might be stops/stations, points of interest and addresses.
     * @param {Object} opts Optional parameters
     * @param {String} opts.input a string with the user input
     * @param {String} opts.format the required response format
     * @param {String} opts.jsonpCallback If JSONP response format is needed, you can append an additional parameter to specify the name of a callback function, and the JSON object will be wrapped by a function call with this name.
     * @param {module:api/LocationApi~getLocationByNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LocationList}
     */
    this.getLocationByName = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'input': opts['input'],
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
      var returnType = LocationList;

      return this.apiClient.callApi(
        '/location.name', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNearbyAddress operation.
     * @callback module:api/LocationApi~getNearbyAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LocationList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the address nearest a given coordinate.
     * 
     * @param {Number} originCoordLat latitude of coordinate in the WGS84 system
     * @param {Number} originCoordLong longitude of coordinate in the WGS84 system
     * @param {Object} opts Optional parameters
     * @param {String} opts.format the required response format
     * @param {String} opts.jsonpCallback If JSONP response format is needed, you can append an additional parameter to specify the name of a callback function, and the JSON object will be wrapped by a function call with this name.
     * @param {module:api/LocationApi~getNearbyAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LocationList}
     */
    this.getNearbyAddress = function(originCoordLat, originCoordLong, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'originCoordLat' is set
      if (originCoordLat === undefined || originCoordLat === null) {
        throw new Error("Missing the required parameter 'originCoordLat' when calling getNearbyAddress");
      }

      // verify the required parameter 'originCoordLong' is set
      if (originCoordLong === undefined || originCoordLong === null) {
        throw new Error("Missing the required parameter 'originCoordLong' when calling getNearbyAddress");
      }


      var pathParams = {
      };
      var queryParams = {
        'originCoordLat': originCoordLat,
        'originCoordLong': originCoordLong,
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
      var returnType = LocationList;

      return this.apiClient.callApi(
        '/location.nearbyaddress', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNearbyStops operation.
     * @callback module:api/LocationApi~getNearbyStopsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LocationList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of stops around a given center coordinate.
     * Returns a list of stops around a given center coordinate. The returned results are ordered by their distance to the center coordinate.
     * @param {Number} originCoordLat latitude of center coordinate in the WGS84 system
     * @param {Number} originCoordLong longitude of center coordinate in the WGS84 system
     * @param {Object} opts Optional parameters
     * @param {Number} opts.maxNo maximum number of returned stops
     * @param {Number} opts.maxDist maximum distance from the center coordinate
     * @param {String} opts.format the required response format
     * @param {String} opts.jsonpCallback If JSONP response format is needed, you can append an additional parameter to specify the name of a callback function, and the JSON object will be wrapped by a function call with this name.
     * @param {module:api/LocationApi~getNearbyStopsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LocationList}
     */
    this.getNearbyStops = function(originCoordLat, originCoordLong, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'originCoordLat' is set
      if (originCoordLat === undefined || originCoordLat === null) {
        throw new Error("Missing the required parameter 'originCoordLat' when calling getNearbyStops");
      }

      // verify the required parameter 'originCoordLong' is set
      if (originCoordLong === undefined || originCoordLong === null) {
        throw new Error("Missing the required parameter 'originCoordLong' when calling getNearbyStops");
      }


      var pathParams = {
      };
      var queryParams = {
        'originCoordLat': originCoordLat,
        'originCoordLong': originCoordLong,
        'maxNo': opts['maxNo'],
        'maxDist': opts['maxDist'],
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
      var returnType = LocationList;

      return this.apiClient.callApi(
        '/location.nearbystops', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
