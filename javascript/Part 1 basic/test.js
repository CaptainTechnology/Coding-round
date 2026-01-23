const original = {
  num: 10,                   // primitive
  arr: [1,2,3],              // array
  obj: { city: "Delhi" },    // object
  greet: function() { console.log("Hi"); } // function
};

const shallow = { ...original };

shallow.num = 20;           // original.num stays 10
shallow.arr.push(4);        // original.arr also changes → [1,2,3,4]
shallow.obj.city = "Mumbai"; // original.obj.city changes → "Mumbai"
shallow.greet = function() { console.log("Hello"); }; 
// original.greet stays same
original.greet();
shallow.greet();