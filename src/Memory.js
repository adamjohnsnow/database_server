var Memory = function(exports){
  this.database = {};
}

Memory.prototype.saveRecord = function(key, value){
  this.database[key] = value;
}

Memory.prototype.findRecord = function(number){
  return this.database[number - 1];
}

module.exports = Memory;
