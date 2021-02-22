const { Repository } = require('./solution.js');
const { expect } = require('chai');

describe('Repository', function () {
  const properties = {
    name: 'string',
    age: 'number',
    birthday: 'object',
  };

  // valid
  const entity1 = {
    name: 'Gosho',
    age: 22,
    birthday: new Date(1998, 0, 7),
  };

  // valid
  const entity2 = {
    name: 'Peter',
    age: 37,
    birthday: new Date(1984, 3, 17),
  };

  // invalid
  const entity4 = {
    name1: 'Stamat',
    age: 29,
    birthday: new Date(1991, 0, 21),
  };

  // invalid
  const entity5 = {
    name: 'Stamat',
    age: '29',
    birthday: new Date(1991, 0, 21),
  };

  it('instance', () => {
    // Initialize the repository
    const repo = new Repository(properties);
    expect(new Repository().props).to.equal(undefined);
    expect(repo.props).to.equal(properties);
    expect(repo.props.name).to.equal('string');
    expect(repo.props.age).to.equal('number');
    expect(repo.props.birthday).to.equal('object');
    expect(repo.count).to.equal(0);
    expect(repo.nextId()).to.equal(0);
    expect(repo.nextId()).to.equal(1);
    expect(typeof repo.nextId).to.equal('function');
    expect(repo.data).to.deep.equal(new Map());
    expect(repo.data.size).to.equal(0);
    expect(repo.data).to.be.a('map');
    expect(repo.nextId).to.be.a('function');
  });

  it('add', () => {
    // testing the method 'add' with valid entity
    const repo = new Repository(properties);
    expect(repo.add(entity1)).to.equal(0);
    expect(repo.add(entity1)).to.equal(1);
    expect(repo.data.size).to.equal(2);
    expect(repo.nextId()).to.equal(2);
    expect(repo.data.get(0)).to.equal(entity1);
    expect(repo.data.get(1)).to.equal(entity1);
  });

  it('add', () => {
    // testing the method 'add' with invalid entity
    const repo = new Repository(properties);
    // Because we relies on 'this' context:
    // which is lost when the function is invoked by .throw
    // there’s no way for it to know what this is supposed to be
    // so we have these options:
    // 1 to wrap the method or function call inside of another function
    // 2 to bind the context

    expect(() => repo.add(entity4)).to.throw(
      `Property name is missing from the entity!`
    );
    expect(() => repo.add(entity5)).to.throw(
      `Property age is not of correct type!`
    );
  });

  it('get id', () => {
    // testing the method 'getId' with valid and invalid entity
    const repo = new Repository(properties);
    repo.add(entity1);
    expect(repo.getId(0)).to.equal(entity1);
    expect(repo.getId(0).birthday).to.deep.equal(new Date(1998, 0, 7));
    expect(() => repo.getId(1)).to.throw(`Entity with id: 1 does not exist!`);
  });

  it('update', () => {
    // testing the method 'update' with valid and invalid entity
    const repo = new Repository(properties);
    repo.add(entity1);
    expect(() => repo.update(0, entity4)).to.throw(
      `Property name is missing from the entity!`
    );
    expect(() => repo.update(0, entity5)).to.throw(
      `Property age is not of correct type!`
    );
    repo.update(0, entity2);
    expect(repo.getId(0)).to.equal(entity2);
    expect(() => repo.update(3, entity2)).to.throw(
      `Entity with id: 3 does not exist!`
    );
    expect(() => repo.update(-1, entity2)).to.throw(
      `Entity with id: -1 does not exist!`
    );
  });

  it('del', () => {
    // testing the method 'del' with valid and invalid entity
    const repo = new Repository(properties);
    repo.add(entity1);
    expect(() => repo.del(1)).to.throw(`Entity with id: 1 does not exist!`);
    expect(repo.data.size).to.equal(1);
    repo.del(0);
    expect(() => repo.del(0)).to.throw(`Entity with id: 0 does not exist!`);
    expect(repo.data.size).to.equal(0);
  });
});
