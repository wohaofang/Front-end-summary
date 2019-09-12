require('./index.css')
require('./css/less.less')
require('./css/sass.scss')

let src = require('./img/1.png')

let img = new Image()
img.src = src;
document.body.appendChild(img)