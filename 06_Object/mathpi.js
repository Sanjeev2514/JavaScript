const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descripter);
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

const user = {
  name: "Sanju",
  course: 999,
  isAvailable: true,

  isLoggedIn: function () {
    console.log("User is logged in.");
  },
};

console.log(Object.getOwnPropertyDescriptor(user, "name"));
// {
//   value: 'Sanju',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

Object.defineProperty(user, "course", {
  value: 999,
  writable: false,
  enumerable: false,
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(user, "course"));

for (const [key, value] of Object.entries(user)) {
  if (typeof value !== "function") {
    console.log(`${key}: ${value}`);
  }
}
