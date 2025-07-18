/*
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.69
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient';
import SkillProgressDto from './SkillProgressDto';

/**
 * The SkillCategoryDto model module.
 * @module model/SkillCategoryDto
 * @version v0
 */
export default class SkillCategoryDto {
  /**
   * Constructs a new <code>SkillCategoryDto</code>.
   * @alias module:model/SkillCategoryDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SkillCategoryDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SkillCategoryDto} obj Optional instance to populate.
   * @return {module:model/SkillCategoryDto} The populated <code>SkillCategoryDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SkillCategoryDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('progresses'))
        obj.progresses = ApiClient.convertToType(data['progresses'], [SkillProgressDto]);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
SkillCategoryDto.prototype.id = undefined;

/**
 * @member {String} name
 */
SkillCategoryDto.prototype.name = undefined;

/**
 * @member {Array.<module:model/SkillProgressDto>} progresses
 */
SkillCategoryDto.prototype.progresses = undefined;

