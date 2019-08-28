#Toolsys for developers in nodejs

example:
```js
const sys = require('toolsys') //[data]
console.log(sys)
sys.time.init()
sys.log('ip '+sys.myIp)//your address_local
sys.log('memory free '+sys.memFree()+'%')
sys.log('data '+sys.datta())
go = sys.url('https://google.com')
.then(res => sys.log(`ping ${res.ping}ms ${res.status}`))
//sys.log('ping google '+go.ping+'ms')
//fsys.log('statuscode google'+go.status)
a = ['eu gosto d vc','foi o destino','eh aleatorio','eu quero amor']
sys.log('time '+sys.time.end()+'ms')
sys.log(sys.choice(a).random)

// sys.log() writed a text in ./public/log
```
