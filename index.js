const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log('request made')
    res.setHeader('Content-Type', 'text/html')

    let path = './views/'

    switch (req.url) {
        case ('/'):
            path+='index.html'
            break
        default:
            path+='404.html'
    }

    fs.readFile(path, (err,data)=> {
        if (err){
            console.log(err)
            return
        }
       res.write(data)

    })
})



server.listen(8080, 'localhost')