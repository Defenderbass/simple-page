const {ipcRenderer} = require('electron');

require('./menu');

ipcRenderer.on('get-argv', (event, cli) => {
    if (typeof cli === 'string') {

        document.body.innerHTML = `<article class="markdown-body">${cli}</article>`;
    } else {
        const {protocol, https, devTools} = cli.flags;

        const url = cli.input[0].replace(/^http(s?):\/\//, '');

        const webview = document.createElement('webview');
        webview.src = `${https ? 'https' : protocol}://${url}`;
        webview.addEventListener('dom-ready', () => {
            devTools && webview.openDevTools();

            document.title = webview.getTitle();
        });

        document.body.appendChild(webview);
    }
});

ipcRenderer.send('page-is-ready');