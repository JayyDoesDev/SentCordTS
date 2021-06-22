export default class sentcordTS {
    private fetch;
    private apikey;
    private _apikey;
    private botid;
    private _stats;
    constructor(ops?: {
        apikey: any;
        botid: any;
    });
    stats(botid?: any, servers?: string, shards?: string): Promise<void>;
}
