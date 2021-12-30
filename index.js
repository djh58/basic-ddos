import axios from 'axios';
import { parallel } from 'async';


const url = ``;
async function getReq(count) {
  console.log(`Getting ${count}`);
  axios.get(url).then(async (res)=>{
    await getReq(count+1);
  }, (err)=>{
    console.log(err);
    });
    
}

async function keepGetting(id) {
  console.log(`Starting thread ${id}`);
  await getReq(1);
}

var threadCount = 5000
var threads = [];
for (var i = 0; i < threadCount; i++) {
  threads.push(keepGetting(i));
}

function main () {
  console.log('Let er rippppp');
  parallel(threads);
  console.log('has been rippppped');
}



