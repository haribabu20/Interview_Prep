
//const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');


// using promises

const fileOps = async () => {
  try{
      const data = await fsPromises.readFile(path.join(__dirname,'files','start.txt'),'utf8');  // read the file
      console.log(data);
        await fsPromises.writeFile(path.join(__dirname,'files','subscribe.txt'), 'Please subscribe my channel')  // create a file
        console.log('Write completed');
          await fsPromises.appendFile(path.join(__dirname,'files','subscribe.txt'), 'Thanks for subscribing the channel') // update the file
          console.log('appending completed');
            await fsPromises.rename(path.join(__dirname,'files','thanks.txt'), 'Hello all, Thanks for subscribing the channel')  // rename the file
            console.log('rename completed');
              await fsPromises.unlink(path.join(__dirname,'files','thanks.txt'), 'Hello all, Thanks for subscribing the channel') // delete the file
              console.log('rename completed');
     }catch(err){
    console.error(err);
  }
}

fileOps();




// Call Back hell [func inside another func]

fs.readFile(path.join(__dirname,'files','start.txt'), 'utf8', (error,data)=>{
  if(error) throw error;
  console.log(data);
})

fs.writeFile(path.join(__dirname,'files','subscribe.txt'), 'Please subscribe my channel', (error,data)=>{
  if(error) throw error;
  console.log('Write completed');

  fs.appendFile(path.join(__dirname,'files','subscribe.txt'), 'Hello everyone, Please subscribe my channel', (error,data)=>{
  if(error) throw error;
  console.log('append completed');

    fs.rename(path.join(__dirname,'files','thanks.txt'), 'Hello everyone, Please subscribe my channel', (error,data)=>{
    if(error) throw error;
    console.log('rename completed');
    })
  })
})



