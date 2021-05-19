
let arr=process.argv.slice(2);

let radius=parseInt(arr[0]);

let area=radius*radius*Math.PI;
let formatArea=area.toFixed(2);
console.log(`Area of the circle with radius ${radius} is ${formatArea}`);


