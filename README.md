# 📄 SimplePage
## 🌐 CLI to display one web page
Usage: `simple-page [<url>] [...<args>]` where `<url>` is URL of the page and `<args>` is list of parameters.
## ↔ width
`--width, -w` width of the window in pixels; default: 800
```
    simple-page --width 400 http://example.com
    simple-page --width=400 http://example.com
    simple-page -w 400 http://example.com
    simple-page -w=400 http://example.com
```
## ↕ height
`--height, -h` height of the window in pixels; default: 600
```
    simple-page --height 400 http://example.com
    simple-page --height=400 http://example.com
    simple-page -h 400 http://example.com
    simple-page -h=400 http://example.com
```
## 📺 full screen
`--full-screen, -f` opening the window to full screen; default: false
```
    simple-page --full-screen http://example.com
    simple-page -f http://example.com
```
## 🔗 protocol
`--protocol, -p` http or https; default: http
```
    simple-page example.com --protocol https
    simple-page example.com --protocol=https
    simple-page example.com -p https
    simple-page example.com --p=https
```
## 🔗 https
`--https` alias for `--protocol=https`; default: false
```
    simple-page example.com --https
```
## ⚙ dev tools
`--dev-tools, -d` open Chrome Dev Tools; default: false
```
    simple-page example.com --dev-tools
    simple-page example.com -d
```
## ℹ️ help                
`--help, -H` helpful information
```
    simple-page --help
    simple-page -h
```
## 🔢 version                 
`--version, -v` product version
```
    simple-page --version
    simple-page -v
```

👍 Say ["Thank you, developer!"](https://www.paypal.me/igorkatsuba)