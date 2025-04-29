const {model} = require('mongoose');

const {positionsSchema} = require("../schemas/positionsSchema");

const PositionsModel = new model('position', positionsSchema);

module.exports= { PositionsModel }