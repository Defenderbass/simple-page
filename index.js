const {ipcRenderer} = require('electron');

require('./menu');

ipcRenderer.on('get-argv', (event, cli) => {
  if (typeof cli === 'string') {

    document.body.innerHTML = `<article class="markdown-body">${cli}</article>`;
  } else {
    const fullUrl = cli.input[0];
    const url = fullUrl.replace(/^http(s?):\/\//, '');

    const {protocol = fullUrl.startsWith('https') ? 'https' : 'http', https, devTools} = cli.flags;
    console.log(protocol);
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
