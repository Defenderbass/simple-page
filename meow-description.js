const textStyles = require('ansi-styles');
const pkg = require('./package.json');
const {name, version} = pkg;

const makeColor = color => text => `${textStyles[color].open}${text}${textStyles[color].close}`;

const makeGreen = makeColor('green');
const makeGray = makeColor('gray');
const makeBlue = makeColor('blue');
const makeYellow = makeColor('yellow');

module.exports = `
Usage: ${makeGreen(`${name}`)} ${makeYellow('[<url>] [...<args>]')}

where ${makeGreen('<url>')} is URL of the page
and ${makeGreen('<args>')} is list of parameters:

${makeGreen('--width, -w')}       width of the window in pixels; ${makeYellow('default: 800')}
                        ${makeBlue(`${name} --width 400 http://example.com
                        ${name} --width=400 http://example.com
                        ${name} -w 400 http://example.com
                        ${name} -w=400 http://example.com`)}

${makeGreen('--height, -h')}      height of the window in pixels; ${makeYellow('default: 600')}
                        ${makeBlue(`${name} --height 400 http://example.com
                        ${name} --height=400 http://example.com
                        ${name} -h 400 http://example.com
                        ${name} -h=400 http://example.com`)}

${makeGreen('--full-screen, -f')} opening the window to full screen; ${makeYellow('default: false')}
                        ${makeBlue(`${name} --full-screen http://example.com
                        ${name} -f http://example.com`)}

${makeGreen('--protocol, -p')}    http or https; ${makeYellow('default: http')}
                        ${makeBlue(`${name} example.com --protocol https
                        ${name} example.com --protocol=https
                        ${name} example.com -p https
                        ${name} example.com --p=https`)}
                        
${makeGreen('--https')}           alias for ${makeGreen('--protocol=https')}; ${makeYellow('default: false')}
                        ${makeBlue(`${name} example.com --https`)}
                        
${makeGreen('--dev-tools, -d')}       open Chrome Dev Tools; ${makeYellow('default: false')}
                        ${makeBlue(`${name} example.com --dev-tools`)}
                        ${makeBlue(`${name} example.com -d`)}
                        
${makeGreen('--help, -H')}        helpful information
                        ${makeBlue(`${name} --help
                        ${name} -h`)}
                        
${makeGreen('--version, -v')}     product version
                        ${makeBlue(`${name} --version
                        ${name} -v`)}
                        
${makeGray(`${name}@${version} ${__dirname}`)}
`;