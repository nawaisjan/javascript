(function chai() {
  console.log("DB CONNECTED");
})();

((name) => {
  console.log(`DB CONNECTED ${name}`);
})("jan");

/*-----------IIFE --------------*/
//Use for to not populate globe scope
// imediate function execution

(function connectDB() {
  console.log("data bas connected");
})();

((name) => {
  console.log(`DB connected using arrow  by ${name}`);
})("nawais");

/** -------  ///\\\-------------  */
