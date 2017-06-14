var Memory = require('../src/Memory.js');

describe('Memory', function(){

  beforeAll(function(done){
    memory = new Memory();
    done();
  })

  it('has a virtual database array', function(){
    expect(memory.database).toEqual([]);
  })
})
