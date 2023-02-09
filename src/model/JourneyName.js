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
    root.Reseplaneraren.JourneyName = factory(root.Reseplaneraren.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The JourneyName model module.
   * @module model/JourneyName
   * @version 1.10.1
   */

  /**
   * Constructs a new <code>JourneyName</code>.
   * @alias module:model/JourneyName
   * @class
   * @param routeIdxTo {Number} End of validity on total route.
   * @param routeIdxFrom {Number} Start of validity on total route
   * @param name {String} Name to be displayed
   */
  var exports = function(routeIdxTo, routeIdxFrom, name) {
    this.routeIdxTo = routeIdxTo;
    this.routeIdxFrom = routeIdxFrom;
    this.name = name;
  };

  /**
   * Constructs a <code>JourneyName</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JourneyName} obj Optional instance to populate.
   * @return {module:model/JourneyName} The populated <code>JourneyName</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('routeIdxTo'))
        obj.routeIdxTo = ApiClient.convertToType(data['routeIdxTo'], 'Number');
      if (data.hasOwnProperty('routeIdxFrom'))
        obj.routeIdxFrom = ApiClient.convertToType(data['routeIdxFrom'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }

  /**
   * End of validity on total route.
   * @member {Number} routeIdxTo
   */
  exports.prototype.routeIdxTo = undefined;

  /**
   * Start of validity on total route
   * @member {Number} routeIdxFrom
   */
  exports.prototype.routeIdxFrom = undefined;

  /**
   * Name to be displayed
   * @member {String} name
   */
  exports.prototype.name = undefined;


  return exports;

}));