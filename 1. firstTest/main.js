const { app, BrowserWindow } = require("electron");

const createWindow = () => {
    const win = new BrowserWindow({
        width: "100%",
        height: "100%",
        // alwaysOnTop:true,
        title: "Test",
        // frame:false,
        backgroundColor: "gold",
        webPreferences: {
            nodeIntegration: true
        }
    })
    // win.loadURL("")
    win.loadFile('index.html')
    // win.webContents.openDevTools()
    //child window
    // let child = new BrowserWindow({parent:win})
    // child.loadFile('child.html')
    // child.show()
}

// app.whenReady().then(createWindow)
app.on('ready', () => {
    createWindow()
})

app.on('browser-window-focus', () => {
   console.log("focus")
})
app.on('browser-window-blur',()=>{
    console.log('blur')
})