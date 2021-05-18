export default class sentcordTS {
    /**
     * Node fetch
     */
    public fetch;
    /**
     * apikey
     */
    public apikey: null
    /**
     * BotID
     */
    public botid: String
    /**
     * base
     */
    public base: 'https://sentcord.com/api/bot/'
    constructor(ops = {
        apikey: null,
        botid: null
    }) {
        this.botid = ops.botid
        this.apikey = ops.apikey
        this.fetch = require('node-fetch')
    }
    stats(botid?: String, servers?: string, shards?: String) {
        if(!this.apikey) throw new ReferenceError('In order to post your stats you need to pass in your API key. To access the api key do command ..apikey in the support server.')
        if(!botid) throw new ReferenceError('In order to post your stats you need to pass in your bot id.')
        this.fetch(`https://sentcord.com/api/bot/${botid}`, {
            method: 'POST',
            headers: {
                'Authorization': this.apikey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                serverCount: servers,
                shardCount: shards
            })
        })
    }
}

