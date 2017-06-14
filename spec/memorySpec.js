var Memory = require('../src/Memory.js');

describe('Memory', function(){

  beforeAll(function(done){
    memory = new Memory();
    done();
  })

  it('has a virtual database hash', function(){
    expect(memory.database).toEqual({});
  })

  it('can save key/value pair to hash memory', function(){
    memory.saveRecord('myKey', 'myValue')
    expect(memory.database).toEqual({ myKey: 'myValue' });
  })

  it('can save a second key/value pair to hash memory', function(){
    memory.saveRecord('secondKey', 'anotherValue')
    expect(memory.database).toEqual({ myKey: 'myValue', secondKey: 'anotherValue' });
  })

  it('can return 1st record', function(){
    expect(memory.database['myKey']).toEqual('myValue')
  })

  it('can return 2nd record', function(){
    expect(memory.database['secondKey']).toEqual('anotherValue')
  })
})
