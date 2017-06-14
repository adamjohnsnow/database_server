var Memory = function(exports){
  this.database = {};
}

Memory.prototype.saveRecord = function(key, value){
  this.database[key] = value;
}

module.exports = Memory;
