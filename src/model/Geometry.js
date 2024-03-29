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
    define(['ApiClient', 'model/Points'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Points'));
  } else {
    // Browser globals (root is window)
    if (!root.Reseplaneraren) {
      root.Reseplaneraren = {};
    }
    root.Reseplaneraren.Geometry = factory(root.Reseplaneraren.ApiClient, root.Reseplaneraren.Points);
  }
}(this, function(ApiClient, Points) {
  'use strict';

  /**
   * The Geometry model module.
   * @module model/Geometry
   * @version 1.10.1
   */

  /**
   * Constructs a new <code>Geometry</code>.
   * @alias module:model/Geometry
   * @class
   * @param noNamespaceSchemaLocation {String} 
   */
  var exports = function(noNamespaceSchemaLocation) {
    this.noNamespaceSchemaLocation = noNamespaceSchemaLocation;
  };

  /**
   * Constructs a <code>Geometry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Geometry} obj Optional instance to populate.
   * @return {module:model/Geometry} The populated <code>Geometry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('errorText'))
        obj.errorText = ApiClient.convertToType(data['errorText'], 'String');
      if (data.hasOwnProperty('error'))
        obj.error = ApiClient.convertToType(data['error'], 'String');
      if (data.hasOwnProperty('serverdate'))
        obj.serverdate = ApiClient.convertToType(data['serverdate'], 'Date');
      if (data.hasOwnProperty('servertime'))
        obj.servertime = ApiClient.convertToType(data['servertime'], 'String');
      if (data.hasOwnProperty('Points'))
        obj.points = ApiClient.convertToType(data['Points'], [Points]);
      if (data.hasOwnProperty('noNamespaceSchemaLocation'))
        obj.noNamespaceSchemaLocation = ApiClient.convertToType(data['noNamespaceSchemaLocation'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} errorText
   */
  exports.prototype.errorText = undefined;

  /**
   * @member {String} error
   */
  exports.prototype.error = undefined;

  /**
   * @member {Date} serverdate
   */
  exports.prototype.serverdate = undefined;

  /**
   * Current server time in format HH:MM
   * @member {String} servertime
   */
  exports.prototype.servertime = undefined;

  /**
   * @member {Array.<module:model/Points>} points
   */
  exports.prototype.points = undefined;

  /**
   * @member {String} noNamespaceSchemaLocation
   */
  exports.prototype.noNamespaceSchemaLocation = undefined;


  return exports;

}));
