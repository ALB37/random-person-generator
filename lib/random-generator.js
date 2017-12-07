'use strict';

const randomGenerator = module.exports = {};

// Names go in here:
const nameArray = [
  'Rob',
  'Shannon',
  'Jacob',
  'Kerry',
  'David',
  'Seth',
  'Matt',
  'Jeff',
  'Cameron',
  'Nicholas',
  'Anthony',
  'Catherine',
  'Andrew',
  'Pedja',
  'Phelan',
  'Fred',
  'Dalton',
];

const unusedArray = [];

if (!nameArray.length){
  throw new Error('you must load the nameArray ');
}

randomGenerator.randomName = () => {
  if (!unusedArray.length){
    nameArray.forEach(name => {
      unusedArray.push(name);
    });
  }
  let randomIndex = Math.floor(Math.random() * unusedArray.length);
  return unusedArray.splice(randomIndex, 1)[0];
};
