// File System & OS Access
const fs = require("fs");
const os = require("os");



//Day, Date & Time
let date = new Date();

//getting time
let time_str = date.toLocaleTimeString();
let time_value = time_str.replaceAll(/:/g,"-").replace(/ /g,"-");
console.log("Time:-", time_value);


// writting date
let date_value = `${(new Date().toJSON().slice(0,10))}`;
console.log("Date:-", date_value);

fs.writeFile(`./${date_value}.txt`, date_value, (err)=>{
    if(err){
        console.log("error ", err)
    }else {
        console.log("date written successfully")
    }
} )


// writting time
fs.writeFile(`./${time_value}.txt`, time_value, (err)=>{
    if(err){
        console.log("error ", err)
    }else {
        console.log("time written successfully")
    }
} )

// writting date & time
let date_time = `${date_value}_${time_value}`

fs.writeFile(`./${date_time}.txt`, date_time, (err)=>{
    if(err){
        console.log("error ", err)
    }else {
        console.log("date & time written successfully")
    }
} )


// reading a directory
const folder = "newfolder"
fs.readdir(`./${folder}`, (err, data) => {
    if(err){
        console.log("error readdir", err)
    }
    else{
        console.log(`Files inside ${folder}:- ${data}`)
    }
})

// read a file 
const file = "newfile1.txt"
fs.readFile(`./${folder}/${file}`, "utf-8", (err, data)=>{
    if(err){
        console.log("error :", err)
    }else{
        console.log("Data inside file :- ", data);
    }
})
