'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Article Schema
 */
var organizationLevelsSchema = new Schema({
  level: {
    type: String,
    default: ''
  },
  name:{
    type: String,
    default: ''    
  },
  id:{
    type: String    
  },
  isDeleted:{
    type: Boolean    
  }

});

mongoose.model('organizationlevels', organizationLevelsSchema);
