require('./index.css')

let src = require('./img/1.png')

let img = new Image()
img.src = src;
document.body.appendChild(img)