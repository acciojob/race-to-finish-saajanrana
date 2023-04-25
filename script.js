window.promises = [];


function first() {
return new Promise((resolve,reject) =>{
	setTimeout(()=>{
		resolve("first Promise");
	},2000);
});
}
function second second () {
return new Promise((resolve,reject) =>{
	setTimeout(()=>{
		resolve("second Promise");
	},3000);
});
}
function third() {
return new Promise((resolve,reject) =>{
	setTimeout(()=>{
		resolve("third Promise");
	},1000);
});
}
function fourth() {
return new Promise((resolve,reject) =>{
	setTimeout(()=>{
		resolve("first Promise");
	},4000);
});
}
function fifth() {
return new Promise((resolve,reject) =>{
	setTimeout(()=>{
		resolve("first Promise");
	},5000)
});
}

Promise.any([promeis1,promis2,promeis3]).then((res)=>{


    console.log("any one will work>>>",res,new Date());
document.getElementById("output").innerHTML=res;

 });



// Do not change the code above this
// add your promises to the array `promises`
