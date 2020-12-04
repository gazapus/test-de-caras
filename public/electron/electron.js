const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const path = require("path");
const isDev = require("electron-is-dev");
const { channels } = require('../../src/shared/constants');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 680,
        center: true,
        show: false,
        icon: __dirname + '/icon.ico',
        fullscreenable: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    });
    mainWindow.webContents.openDevTools();
    mainWindow.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, "../index.html")}`
    );
    mainWindow.maximize();
    mainWindow.show();
    mainWindow.on("closed", () => (mainWindow = null));
}

Menu.setApplicationMenu(null);

app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});

ipcMain.on(channels.APP_INFO, (event, args) => {
    console.log(args);
    event.reply(channels.APP_INFO, 'pong')
});
