export = async (_botid?: string, _servers?: string, _shards?: string, _apikey?: any) => {
    const fetch = require('node-fetch')
    if(!_apikey) throw new ReferenceError('In order to post your stats you need to pass in your API key. To access the api key do command ..apikey in the support server.')
    if(!_botid) throw new ReferenceError('In order to post your stats you need to pass in your bot id.')
    fetch(`https://sentcord.com/api/bot/${_botid}`, {
        method: 'POST',
            headers: {
                'Authorization': _apikey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                serverCount: _servers,
                shardCount: _shards
            })
    })
}