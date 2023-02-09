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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Reseplaneraren) {
      root.Reseplaneraren = {};
    }
    root.Reseplaneraren.CoordLocation = factory(root.Reseplaneraren.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CoordLocation model module.
   * @module model/CoordLocation
   * @version 1.10.1
   */

  /**
   * Constructs a new <code>CoordLocation</code>.
   * @alias module:model/CoordLocation
   * @class
   * @param lon {String} The WGS84 longitude
   * @param idx {String} This index can be used to reorder the StopLocations and CoordLocations in JSON format response to their correct order. IN JSON you can receive two arrays, one for Stops and one for Addresses. This attribute is only contained in reponses to the location.name request. The location with idx=1 is the best fitting location.
   * @param name {String} Contains the output name of the address or point of interest
   * @param type {String} The attribute type specifies the type of location. Valid values are ADR (address) or POI (point of interest). This attribute can be used to do some sort of classification in the user interface. For later trip requests it does not have any meaning.
   * @param lat {String} The WGS84 latitude
   */
  var exports = function(lon, idx, name, type, lat) {
    this.lon = lon;
    this.idx = idx;
    this.name = name;
    this.type = type;
    this.lat = lat;
  };

  /**
   * Constructs a <code>CoordLocation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CoordLocation} obj Optional instance to populate.
   * @return {module:model/CoordLocation} The populated <code>CoordLocation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('lon'))
        obj.lon = ApiClient.convertToType(data['lon'], 'String');
      if (data.hasOwnProperty('idx'))
        obj.idx = ApiClient.convertToType(data['idx'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('lat'))
        obj.lat = ApiClient.convertToType(data['lat'], 'String');
    }
    return obj;
  }

  /**
   * The WGS84 longitude
   * @member {String} lon
   */
  exports.prototype.lon = undefined;

  /**
   * This index can be used to reorder the StopLocations and CoordLocations in JSON format response to their correct order. IN JSON you can receive two arrays, one for Stops and one for Addresses. This attribute is only contained in reponses to the location.name request. The location with idx=1 is the best fitting location.
   * @member {String} idx
   */
  exports.prototype.idx = undefined;

  /**
   * Contains the output name of the address or point of interest
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * The attribute type specifies the type of location. Valid values are ADR (address) or POI (point of interest). This attribute can be used to do some sort of classification in the user interface. For later trip requests it does not have any meaning.
   * @member {String} type
   */
  exports.prototype.type = undefined;

  /**
   * The WGS84 latitude
   * @member {String} lat
   */
  exports.prototype.lat = undefined;


  return exports;

}));
