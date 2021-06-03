export default class sentcordTS {
    public fetch;
    public apikey: null;
    public _apikey: any;
    public botid: string;
    public _stats;
    constructor(ops = {
        apikey: null as any,
        botid: null as any
    }) {
        this.fetch = require('node-fetch')
        this._apikey = this.apikey
        this.apikey = ops.apikey
        this.botid = ops.botid
        this._stats = require('../lib/_stats')
    }
    async stats(botid?: any, servers?: string, shards?: string) {
        this._stats(botid, servers, shards)
    }
}