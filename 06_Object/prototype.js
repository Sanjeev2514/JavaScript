const myHeros = ["thor", "spiderman"];

const heroPower = {
  thor: "hammer",
  spiderman: "sling",

  powers: function () {
    console.log(`Spider have a ${this.spiderman} power.`);
  },
};

Object.prototype.sanju = function () {
  console.log("Sanju is present in all objects.");
};

Array.prototype.heySanju = function () {
  console.log("Sanju says Hello");
};

heroPower.sanju();
myHeros.sanju();

myHeros.heySanju(); // It have the access of heySanju method but heroPower don't have the access of that just because it's not available in the main object prototype.
// heroPower.heySanju();

const name = "Sanju    ";

String.prototype.trueLength = function () {
  console.log(this);
  console.log(this.trim().length);
};

name.trueLength();
"Sanju....     ".trueLength(); // 9
