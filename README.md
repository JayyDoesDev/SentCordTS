# SentCordTS-lite
 SentCordTS-lite is an api wrapper for sentcord to help you post your server/shard stats easily. (TypeScript)

## Install
```
npm install sentcordts-lite
```

## TypeScript Setup
 ```typescript
import sentcordTS from "sentcordts-lite";
const key = ''
const client: sentcordTS = new sentcordTS({
    apikey: key,
    botid: 'botid'
})
client.stats('botid', 'servercount', 'shardcount')
```

## JavaScript Setup
```javascript
let
    { sentcordTS } = require('sentcordts-lite'),
    key = '',
    client = new sentcordTS({
        apikey: key,
        botid: 'botid'
    });
client.stats('botid', 'servercount', 'shardcount')
```
