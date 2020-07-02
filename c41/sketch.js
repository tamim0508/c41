/*console.log(4)
var str = "My name is Tamim";
console.log(str.length)
console.log(str.toUpperCase());
console.log(parseInt("14.5"));
console.log(536*67);
console.log("Hi"+5);
console.log("A"/"B");
console.log(1/0)

console.log(2===2);
var object 
console.log(object)


if(4<3){
  console.log("Hi")
}
else if(5>4){
  console.log("Hello")
}*/
for(var i = 0; i<=10; i = i+2){
  //console.log(i);
}
for(var l = 101; l<=150; l=l+2){
  //console.log(l)
}
var array = [1,2,3,4];
console.log(array[2]);
array.push(6);
console.log(array);
array.pop();
console.log(array);





function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  
  drawSprites();
  
}