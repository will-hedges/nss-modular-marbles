const { createMarble } = require("./marbleMaker.js");
const { weaveBag } = require("./bagMaker.js");

const marble = createMarble("small");
console.log(marble);

const bag = weaveBag("silk");
console.log(bag);

const largeMarble = createMarble("large");
console.log(largeMarble);

const flannelBag = weaveBag("flannel");
console.log(flannelBag);

const medMarble = createMarble("medium-sized");
console.log(medMarble);

const sackclothBag = weaveBag("sackcloth");
console.log(sackclothBag);
