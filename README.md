# SentCordTS-lite
 SentCordTS-lite is an api wrapper for sentcord to help you post your server/shard stats easily. (TypeScript)

 ## Setup
 ```typescript
import sentcordTS from "sentcordts-lite";
const key = ''
const client: sentcordTS = new sentcordTS({
    apikey: key,
    botid: 'botid'
})
client.stats('botid', 'servercount', 'shardcount')
```

```javascript
const { sentcordTS } = require('sentcordts-lite')
const key = ''
const client = new sentcordTS({
    apikey: key,
    botid: 'botid'
})
client.stats('botid', 'servercount', 'shardcount')