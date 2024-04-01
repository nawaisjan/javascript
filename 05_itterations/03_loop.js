/** ---- Array Specific loop */

const arr = [1, 34, 234, 234, 234];

for (const num of arr) {
  //console.log(num);
}

const str = "hello world";

for (const s of str) {
  //console.log(s);
}

/** Maps */

const map = new Map();
map.set("in", "india");
map.set("US", "UNITED STATE");

//console.log(map);

for (const [key, value] of map) {
  console.log(key, ":", value);
}

const myObject = {
  gmae1: "nfs",
  game3: "sdfsd",
};

// for (const [key, value] of myObject) {
//   console.log(key, "", obj);
// }

for (const m of map) {
  console.log(m);
}
