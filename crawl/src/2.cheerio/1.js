let cheerio = require('cheerio');

const html = `
<ul id="num">
    <li>1111</li>
    <li class='haha'>2222</li>
    <li>3333</li>
</ul>
`;

let $ = cheerio.load(html)

let num = $('#num');
let lis = num.find('li')

let nums = []

lis.each((index,li)=>{
    nums.push($(li).text()) 
}) 
console.log(nums)
// console.log(Object.prototype.toString.call(lis))


// children 取的是直接子元素，也就是亲儿子
// find 取的是后代元素
// console.log(num.children().length)

// filter
let haha = num.children().filter((index,item)=> $(item).hasClass('haha'))
console.log(haha.length)