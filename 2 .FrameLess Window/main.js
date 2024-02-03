const { app, BrowserWindow, globalShortcut, dialog, Tray, Menu, ipcMain } = require("electron");

let isMac = process.platform == "darwin"
let mainMenuTemplate = [
    ...isMac ? { label: "Ops", submenu: [{ label: "sub1", submenu: [{ label: "sub2" }] }] } : [],
    { label: "Check", submenu: [{ role: "quit", label: "Quit" }] }
]

let newMenu = Menu.buildFromTemplate(mainMenuTemplate)
// Menu.setApplicationMenu(newMenu)

ipcMain.on('msg', (event, data) => {
    console.log(data)
    event.reply('backMsg','Thanks you for data')
})

const createWindow = () => {
    const win = new BrowserWindow({
        width: "100%",
        height: "100%",
        // frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    win.loadFile('index.html')
    // win.webContents.openDevTools()
    // let wc = win.webContents;
    // wc.on('dom-ready', () => {
    //     console.log("dom ready")
    // })
    // wc.on('did-finish-load', () => {
    //     console.log("finish load")
    // })
    // globalShortcut.register("A+D", () => {
    //     win.loadFile('child.html')
    // })
    // win.webContents.on('did-finish-load', () => {
    //     dialog.showOpenDialog({
    //         defaultPath: app.getPath("desktop"),
    //         buttonLabel: "select file"
    //     })
    // })
    // let tray = new Tray('trayIcon.png')
    // tray.setToolTip("Test Tray")
    // tray.on('click', () => {
    //     win.isVisible() ? win.hide() : win.show()
    // })
    // let templete = [{ label: "item 1", type: "radio" }, { label: "item 2" }]
    // const contextMenu = Menu.buildFromTemplate(templete)
    // tray.setContextMenu(contextMenu)

    // win.webContents.on('context-menu', () => {
    //     newMenu.popup()
    // })
}

app.whenReady().then(createWindow)