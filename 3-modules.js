// commonJS, every file is module (by default)
// modules - Encapsulated code (only share minimum)
const name = require('./4-names');
const greetings = require('./5-utils');
// import greetings from './5-utils';
const data = require('./6-Alternative-Flavor')
require("./7-mind-granade");
greetings(name.ayush);
greetings("kumar");
greetings(name.tiwary);