

const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

document.getElementById("TaskLink").addEventListener("click", gotToTaskPage);

const {ipcRenderer} = require("electron")
function gotToTaskPage(){ 
  
    // Make sure to do ipc.send('some String'),  
    // where 'some String' must be same with  
    // the first parameter of ipcMain.on() in app.js  
    ipcRenderer.send('callTaskWindow',"hello from main Window");   
}
ipcRenderer.on("channel1-response",(e,args)=>{
  console.log(args)
})