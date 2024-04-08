const cowsay = require('cowsay');
function WOWworld() {
  console.log(cowsay.say({ text: "WOW world", f: "WOW-world" }));
}
module.exports = WOWworld;
