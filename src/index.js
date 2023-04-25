const obj = {
  name: "Syket",
  department: {
    title: "Computer Operator",
    room: "221",
    date: new Date(),
    getDate: function () {
      return 'new Date("02-04-2001");';
    }
  }
};

// obj2 is a referrence of obj1.
// const obj2 = obj;
// If we change the value of obj2, its directly changed to the obj. Because obj2 is a referrence of obj. Its not the copied of the value.
// obj2.name = "Bhattachergee";

/*

What is Shallow copy? 
  Shallow is a way of copy of object. 
  We can do it 2 ways: 
  1. using Object.assign() method.
  2. using spread operator 

  But here it has some limitataion. 
  its allowing us to first level of the object. 
  If we want to change the object inside object its won't be changed. 

*/

// SHallow copy

// const obj3 = Object.assign({}, obj)
// const obj3 = { ...obj };

// obj3.name = "Sakib";
/*
  In that case, you can see we change the nested object. It's not chaning its only changes the first level of the object.
*/

// obj3.department.title = "Civil Engineer";

// console.log("Obj object => ", obj);
// console.log("Shallow copy => Object.assign()", obj3);

// In these type of problem deep copy comes into the picture.

/* 
What is Deep Copy?
  Deep copy is a copy of object. We can copy the nested object also, that was the limitation of the shallow copy. But it has also one limitation. If you have function inside the object that will be quietly discarded  
*/

const obj4 = JSON.parse(JSON.stringify(obj));

obj4.department.title = "Civil Engineer";

console.log(obj);
console.log("Deep copy", obj4);
