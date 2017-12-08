'use strict';

const fsx = require('fs-extra');

const randomGenerator = module.exports = {};

// Set the absolute path to the assets/array.json in this project here:
const STORAGE_PATH = '<your absolute path to the root directory of this project>/assets/array.json';

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

let unusedArray = [];

randomGenerator.loadMemory = () => {
  fsx.readJSON(STORAGE_PATH)
    .then(array => {
      unusedArray = array;
    })
    .then(() => {
      randomGenerator.randomName();
    })
    .catch(error => {
      console.error(error);
    });
};


randomGenerator.randomName = () => {
  if (!nameArray.length){
    throw new Error('you must load the nameArray');
  }
  if (!unusedArray.length){
    nameArray.forEach(name => {
      unusedArray.push(name);
    });
  }
  let randomIndex = Math.floor(Math.random() * unusedArray.length);
  let name = unusedArray.splice(randomIndex, 1)[0];
  fsx.writeJSON(STORAGE_PATH,[...unusedArray]);
  console.log(name);
};
