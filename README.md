# SentCordTS-lite
 SentCordTS-lite is an api wrapper for sentcord to help you post your server/shard stats easily. (TypeScript)

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
const { sentcord } = require('sentcordts-lite')
const client = new sentcord({
    apikey: 'Key'
})
client.PostStats('302857939910131712', 3000, 3)
```