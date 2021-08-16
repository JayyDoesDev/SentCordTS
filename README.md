# SentCordTS-lite
 SentCordTS-lite is an api wrapper for [sentcord](https://sentcord.com) to help you post your server/shard stats easily. 

 ## Installation
 **NPM**
 ```npm i sentcordts-lite```
 
 **YARN**
 ```yarn add sentcordts-lite```


 ## TypeScript Setup
 ```typescript
import sentcord from 'sentcordts-lite'
const client: sentcord = new sentcord({
    apikey: 'Key'
})
client.PostStats('302857939910131712', 3000, 3)
```
## JavaScript Setup
```javascript
let { sentcord } = require('sentcordts-lite')
const client = new sentcord({
    apikey: 'Key'
})
client.PostStats('302857939910131712', 3000, 3)
```

# Credits
Owner Of Sentcord: [SixAiy](https://sixaiy.com)

Contributor: [Colderry](https://colderry.xyz)