const {app,BrowserWindow,ipcMain } = require("electron")
const windowStateKeeper = require("electron-window-state")
let mainWindow,taskWindow;

function createWindow(){
    let winState = windowStateKeeper({
        defaultWidth:1000,
        defaultHeight:800
    })
    mainWindow = new BrowserWindow({
        width:winState.width,height:winState.height,
        x:winState.x,y:winState.y,
        icon: __dirname + '/Assets/logo.ico',
        webPreferences: {nodeIntegration:true,
            nodeIntegrationInWorker: true,
            contextIsolation:false
        }
    

    })
    mainWindow.setResizable(false)
    mainWindow.loadFile("index.html")
    mainWindow.webContents.openDevTools()
    mainWindow.on("closed",()=>{
        mainWindow=null
    })
}

app.on("ready",()=>{
    if(mainWindow==null)  createWindow()
})
 