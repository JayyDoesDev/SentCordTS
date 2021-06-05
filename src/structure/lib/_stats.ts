export = async (_botid?: string, _servers?: string, _shards?: string, _apikey?: any) => {
    const verison = require('./json/version.json')
    const fetch = require('node-fetch')
    if(!_apikey) throw new ReferenceError('In order to post your stats you need to pass in your API key. To access the api key do command ..apikey in the support server.')
    if(!_botid) throw new ReferenceError('In order to post your stats you need to pass in your bot id.')
    fetch(`https://api.sixaiy.com/${verison.api.Version.v2}/sentcord`, {
        method: 'POST',
            headers: {
                'Authorization': _apikey,
                'Content-Type': 'application/json'
            },                                
            body: JSON.stringify({
                id: _botid,
                serverCount: _servers,
                shardCount: _shards
            })
    })
}