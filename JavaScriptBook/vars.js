var a, b = a = "S";
console.log(a + "s" +  b);


var x = y;
var y = 'A';
console.log(x + y); // undefinedA



var firstobj = {
    name: "Rock"
};
var secondobj = firstobj;
firstobj = {
    name: "Paper"
};
console.log(secondobj.name);