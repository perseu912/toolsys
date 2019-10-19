const os = require('os');
const fs = require('fs');
const fetch = require('node-fetch')
const math = require('math')
//const request = require('request')
const sleep = require('sleepjs')

const url = async (url) => {
	let timeInit = Date.now()
	status = await fetch(url)
	.then((res)=>{
	   return res.status
	})
	let timeEnd = Date.now() - timeInit
	return {ping:timeEnd, status:status}
}

const datta = () => {
   let now = new Date().toLocaleString('pt-br', {tmeZone: 'Brazil/Brasilia'})
   ret = `[${now}]`
   return ret
}

 
//memory of the system
const memFree= () => {
   return (100*(os.freemem()/os.totalmem())).toFixed(2)
}
//ip
ip = 'localhost'
 var ifaces = os.networkInterfaces(); 
 Object.keys(ifaces).forEach(function (ifname) { var alias = 0;
 	 ifaces[ifname].forEach(function (iface) { if ('IPv4' !== iface.family || iface.internal !== false)
 	 	 { // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
 	 	  return;
 	 	  }
 	 	    if (alias >= 1) { // this single interface has multiple ipv4 addresses 
 	 	       //  console.log(ifname + ':' + alias, iface.address);
 	 	         ip = iface.address 
 	 	  }
	     else { //this interface has only one ipv4 adress 
	        //console.log(ifname, iface.address);
	        ip = iface.address
	         } 
	     ++alias;
	      });
	    }); 
const myIp = ip
//console.log(myIp)

//const log = require(`./logger`)


//log
const log = (l,name='') => {
	sleep(200)
	let text =  datta()+name+': '+l+'\n'
/*	if(fs.existsSync('public/')){
		fs.writeFile('./public/log', text, {enconding:'utf-8', flag:'a+'}, (err) => {
	  }) 
	 }
  else{
        fs.writeFile('./public/log', text, {enconding:'utf-8', flag:'a+'}, (err) => {
    })
    }
*/
   /* fetch('https://log912.000webhostapp.com/?log='+text).then()
   .catch((err) => {
	console.log('log offline')
  })
*/
    console.log(text)
    return text
}


time = {
	t : 0,
	init : function(){
		this.t = Date.now();
	},
	end : function(){
		let tf = Date.now() - this.t;
		return tf
		}
    }

//log online
const logVirtual = (txt) => {
	let text =  datta()+': '+txt+'\n'
	fetch('https://log912.000webhostapp.com/?log='+text).then((res) => {
	console.log(text);
	})
   	.catch((err) => {
        	console.log('log offline')
  	})
}




//test

const timeProcess = () =>{
    return process.uptime()
}

const choice = (array) => {
	let n = math.floor(math.random()*array.length)
	return {random:array[n]}
}

const exit =() => {
   return process.exit()
}



//exports
console.log(datta())
module.exports = {logVirtual, url, log, time, myIp, memFree, datta, timeProcess, exit, choice, sleep}
