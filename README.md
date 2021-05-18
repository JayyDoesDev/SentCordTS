# SentCordTS
 SentCordJS is an api wrapper for sentcord to help you post your server/shard stats easily. (TypeScript)

 ## Setup
 ```typescript
import sentcordTS from "sentcordts";
const key = ''
const client: sentcordTS = new sentcordTS({
    apikey: key,
    botid: 'botid'
})
client.stats('botid', 'servercount', 'shardcount')
```
