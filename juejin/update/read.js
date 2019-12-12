// 此文件用来读取远程接口的数据

const request = require('request-promise');
const cheerio = require('cheerio');

exports.tags = async function (url){  //获取tag
    let options = {
        url,
        transform(body){
            return cheerio.load(body); // 转成jQ对象
        }
    }
    return request(options).then($=>{
        let infos = $('.item .tag .info-box')
        let tags = []
        infos.each((index, info)=>{
            let tagInfo = $(info)
            // debugger;
            let href = tagInfo.children().first().attr('href');

            let img = tagInfo.find('div.thumb').first().data('src');
            let title = tagInfo.find('div.title').first().text();

            let subscribe = tagInfo.find('div.subscribe').first().text();
            let article = tagInfo.find('div.article').first().text();

            tags.push({
                href : `https://juejin.im${href}`,
                title,img,
                subscribe,article
            })
        })
        // console.log(tags);
        return tags.slice(0,1);
    });
}

let tagUrl = 'https://juejin.im/subscribe/all';

// exports.tags(tagUrl).then(tags =>{
//     console.log(tags)
// })

exports.articleList = async function(url){  //获取 文章列表
    let options = {
        url,
        transform(body){
            return cheerio.load(body); // 转成jQ对象
        }
    }
    return request(options).then(async $ => {
        let articleTitles = $('.info-box .title-row .title')
        let articles = []
        // 在forEach 和 each 里 不能使用 await方法
        for(let i=0; i<1;i++){
            let article = $(articleTitles[i])
            let href = article.attr('href')
            let title = article.text();
            let id = href.slice(6)
            href = `https://juejin.im${href}`
            let detail = await articleDetail(href)
            articles.push({
                id,
                title,
                href ,
                content: detail.content,
                tags: detail.tags,
            });
        }
        
            
        return articles;
    })
}

let articleUrl = 'https://juejin.im/tag/%E5%89%8D%E7%AB%AF'

exports.articleList(articleUrl).then(res=>{
    console.log(res)
})


articleDetail = async function(url){
    let options = {
        url,
        transform(body){
            return cheerio.load(body); // 转成jQ对象
        }
    }
    return request(options).then($ => {
        let content = $('.article-content').first().html();
        let tagItems = $('.tag-list .item .tag-title');
        let tags = []
        tagItems.each((index,title)=>{
            tags.push(
                $(title).text()
            )
        })
        return {
            content,
            tags
        }
    })
}

let detailUrl = 'https://juejin.im/post/5def02e5e51d4558035994e5'

// exports.articleDetail(detailUrl).then(res=>{
//     console.log(res)
// })