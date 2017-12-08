'use strict';

require('dotenv').config();
const fsx = require('fs-extra');

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

let unusedArray = [];

randomGenerator.loadMemory = () => {
  fsx.pathExists(process.env.STORAGE_PATH)
    .then(result => {
      if(!result){
        fsx.writeJSON(process.env.STORAGE_PATH, [])
          .then(() => {
            randomGenerator.randomName();
          });
      } else {
        fsx.readJSON(process.env.STORAGE_PATH)
          .then(array => {
            unusedArray = array;
          })
          .then(() => {
            randomGenerator.randomName();
          });
      }
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
  fsx.writeJSON(process.env.STORAGE_PATH,[...unusedArray]);
  console.log(name);
};
