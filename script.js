window.promises = [];


function first() {
return new Promise((resolve,reject) =>{
	setTimeout(()=>{
		resolve("first Promise");
	},2000);
});
}
promises.push(first);

function second second () {
return new Promise((resolve,reject) =>{
	setTimeout(()=>{
		resolve("second Promise");
	},3000);
});
}
promises.push(second);



function third() {
return new Promise((resolve,reject) =>{
	setTimeout(()=>{
		resolve("third Promise");
	},1000);
});
}
promises.push(third);

function fourth() {
return new Promise((resolve,reject) =>{
	setTimeout(()=>{
		resolve("first Promise");
	},4000);
});
}
promises.push(fourth);

function fifth() {
return new Promise((resolve,reject) =>{
	setTimeout(()=>{
		resolve("first Promise");
	},5000)
});
}


promises.push(fifth);
Promise.any(promises).then((res)=>{


    
document.getElementById("output").innerHTML=res;

 });



// Do not change the code above this
// add your promises to the array `promises`
