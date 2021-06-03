export default class sentcordTS {
    fetch: any;
    apikey: null;
    _apikey: any;
    botid: string;
    _stats: any;
    constructor(ops?: {
        apikey: any;
        botid: any;
    });
    stats(botid?: any, servers?: string, shards?: string): Promise<void>;
}
