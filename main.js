const electron = require("electron");
const {app , BrowserWindow} = electron;

const ejse = require("ejs-electron");

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true,
          enableRemoteModule:true // desktop appplication usme node enable
        }
      })
    //   win.loadFile('index.html').then(function(){
    //       win.maximize();
    //       win.webContents.openDevTools();
    //   });
    win.loadFile('index.ejs').then(function(){
        win.maximize();
        win.webContents.openDevTools();
    });
}

app.whenReady().then(createWindow);
