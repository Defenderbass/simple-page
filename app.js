const meow = require('meow');
const pkg = require('./package.json');
const style = require('ansi-styles');
const {ipcMain, app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
const fs = require('fs');
const MarkdownIt = require('markdown-it');

const md = new MarkdownIt();

const cli = meow({
    help: require('./meow-description'),
    version: `${pkg.name}@${style.green.open}${pkg.version}${style.green.close}`
  }, {
    alias: {
      w: 'width',
      h: 'height',
      f: 'fullScreen',
      p: 'protocol',
      H: 'help',
      v: 'version',
      d: 'devTools'
    },
    default: {
      protocol: 'http',
      https: false,
      width: 800,
      height: 600
    },
    string: ['protocol'],
    boolean: ['fullScreen', 'help']
  }
);

const readMe = fs.readFileSync(__dirname + '/README.md').toString();

let defaultPage;
if (!cli.input[0]) {
  defaultPage = md.render(readMe);
}

const config = cli.flags;


let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: config.width,
    height: config.height
  });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
  mainWindow.on('closed', function () {
    mainWindow = null
  });

  if (config.fullScreen) {
    mainWindow.maximize();
  }
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
});

ipcMain.on('page-is-ready', (event) => {

  if (cli.input[0]) {
    event.sender.send('get-argv', cli);
  } else {
    event.sender.send('get-argv', defaultPage);
  }
});

