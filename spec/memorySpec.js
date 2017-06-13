var memory = require('../src/Memory');

describe('Memory', function(){

  it('has a virtual database array', function(){
    expect(memory.database).toBe([]);
  })
})
