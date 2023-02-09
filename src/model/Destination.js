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
    define(['ApiClient', 'model/Notes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Notes'));
  } else {
    // Browser globals (root is window)
    if (!root.Reseplaneraren) {
      root.Reseplaneraren = {};
    }
    root.Reseplaneraren.Destination = factory(root.Reseplaneraren.ApiClient, root.Reseplaneraren.Notes);
  }
}(this, function(ApiClient, Notes) {
  'use strict';

  /**
   * The Destination model module.
   * @module model/Destination
   * @version 1.10.1
   */

  /**
   * Constructs a new <code>Destination</code>.
   * @alias module:model/Destination
   * @class
   * @param value {String} 
   * @param type {String} The attribute type specifies the type of location. Valid values are ST (stop/station), ADR (address) or POI (point of interest)
   * @param _date {Date} Date in format YYYY-MM-DD
   * @param id {String} ID of this stop
   * @param time {String} Time in format HH:MM
   * @param name {String} Contains the name of the location
   */
  var exports = function(value, type, _date, id, time, name) {
    this.value = value;
    this.type = type;
    this._date = _date;
    this.id = id;
    this.time = time;
    this.name = name;
  };

  /**
   * Constructs a <code>Destination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Destination} obj Optional instance to populate.
   * @return {module:model/Destination} The populated <code>Destination</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('routeIdx'))
        obj.routeIdx = ApiClient.convertToType(data['routeIdx'], 'String');
      if (data.hasOwnProperty('$'))
        obj.value = ApiClient.convertToType(data['$'], 'String');
      if (data.hasOwnProperty('cancelled'))
        obj.cancelled = ApiClient.convertToType(data['cancelled'], 'Boolean');
      if (data.hasOwnProperty('track'))
        obj.track = ApiClient.convertToType(data['track'], 'String');
      if (data.hasOwnProperty('rtTrack'))
        obj.rtTrack = ApiClient.convertToType(data['rtTrack'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'Date');
      if (data.hasOwnProperty('Notes'))
        obj.notes = Notes.constructFromObject(data['Notes']);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('rtDate'))
        obj.rtDate = ApiClient.convertToType(data['rtDate'], 'Date');
      if (data.hasOwnProperty('time'))
        obj.time = ApiClient.convertToType(data['time'], 'String');
      if (data.hasOwnProperty('directdate'))
        obj.directdate = ApiClient.convertToType(data['directdate'], 'Date');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('rtTime'))
        obj.rtTime = ApiClient.convertToType(data['rtTime'], 'String');
      if (data.hasOwnProperty('directtime'))
        obj.directtime = ApiClient.convertToType(data['directtime'], 'String');
    }
    return obj;
  }

  /**
   * Route index of a stop/station. Can be used as a reference of the stop/station in a journeyDetail response
   * @member {String} routeIdx
   */
  exports.prototype.routeIdx = undefined;

  /**
   * @member {String} value
   */
  exports.prototype.value = undefined;

  /**
   * Will be set to true if departure/arrival at this stop is cancelled
   * @member {Boolean} cancelled
   */
  exports.prototype.cancelled = undefined;

  /**
   * Track information, if available
   * @member {String} track
   */
  exports.prototype.track = undefined;

  /**
   * Realtime track information, if available
   * @member {String} rtTrack
   */
  exports.prototype.rtTrack = undefined;

  /**
   * The attribute type specifies the type of location. Valid values are ST (stop/station), ADR (address) or POI (point of interest)
   * @member {String} type
   */
  exports.prototype.type = undefined;

  /**
   * Date in format YYYY-MM-DD
   * @member {Date} _date
   */
  exports.prototype._date = undefined;

  /**
   * @member {module:model/Notes} notes
   */
  exports.prototype.notes = undefined;

  /**
   * ID of this stop
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * Realtime date in format YYYY-MM-DD, if available
   * @member {Date} rtDate
   */
  exports.prototype.rtDate = undefined;

  /**
   * Time in format HH:MM
   * @member {String} time
   */
  exports.prototype.time = undefined;

  /**
   * Date in format YYYY-MM-DD.  Based on the direct travel time
   * @member {Date} directdate
   */
  exports.prototype.directdate = undefined;

  /**
   * Contains the name of the location
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Realtime time in format HH:MM if available
   * @member {String} rtTime
   */
  exports.prototype.rtTime = undefined;

  /**
   * Direct Time format HH:MM. Based on the direct travel time
   * @member {String} directtime
   */
  exports.prototype.directtime = undefined;


  return exports;

}));