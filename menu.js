const {remote} = require('electron');
const {app, Menu} = remote;

const template = [
    {
        label: 'Edit',
        submenu: [
            {role: 'undo'},
            {role: 'redo'},
            {type: 'separator'},
            {role: 'cut'},
            {role: 'copy'},
            {role: 'paste'},
            {role: 'pasteandmatchstyle'},
            {role: 'delete'},
            {role: 'selectall'}
        ]
    },
    {
        label: 'View',
        submenu: [
            {
                role: 'reload',
                label: 'Reload App',
                accelerator: 'CommandOrControl+Shift+R'
            },
            {
                label: 'Reload Page',
                accelerator: 'CommandOrControl+R',
                click() {
                    const webview = document.querySelector('webview');
                    if (webview) {
                        webview.reload();
                    }
                }
            },
            {role: 'forcereload'},
            {role: 'toggledevtools'},
            {
                label: 'Toggle Webview Dev Tools',
                accelerator: 'CommandOrControl+Shift+W',
                click() {
                    const webview = document.querySelector('webview');
                    if (webview) {
                        webview.isDevToolsOpened()
                            ? webview.closeDevTools()
                            : webview.openDevTools();
                    }
                }
            },
            {type: 'separator'},
            {role: 'resetzoom'},
            {role: 'zoomin'},
            {role: 'zoomout'},
            {type: 'separator'},
            {role: 'togglefullscreen'}
        ]
    },
    {
        role: 'window',
        submenu: [
            {role: 'minimize'},
            {role: 'close'}
        ]
    },
    {
        role: 'help',
        submenu: [
            {
                label: 'Learn More',
                click(){
                    require('electron').shell.openExternal('https://github.com/Defenderbass/simple-page')
                }
            },
            {
                label: 'Say "Thank you, developer!"',
                click() {
                    require('electron').shell.openExternal('https://www.paypal.me/igorkatsuba')
                }
            }
        ]
    }
];

if (process.platform === 'darwin') {
    template.unshift({
        label: app.getName(),
        submenu: [
            {role: 'about'},
            {type: 'separator'},
            {role: 'services', submenu: []},
            {type: 'separator'},
            {role: 'hide'},
            {role: 'hideothers'},
            {role: 'unhide'},
            {type: 'separator'},
            {role: 'quit'}
        ]
    });

    // Edit menu
    template[1].submenu.push(
        {type: 'separator'},
        {
            label: 'Speech',
            submenu: [
                {role: 'startspeaking'},
                {role: 'stopspeaking'}
            ]
        }
    );

    // Window menu
    template[3].submenu = [
        {role: 'close'},
        {role: 'minimize'},
        {role: 'zoom'},
        {type: 'separator'},
        {role: 'front'}
    ]
}

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);