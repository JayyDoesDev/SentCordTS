import EventEmitter from "events";
import { title, base } from './utils/util'
import { ServerRequest, Request } from "../request";
import fetch from "node-fetch";


export class sentcord {
    private apikey: string;
    private fetch;
    constructor(ops = {
        apikey: null as unknown as string
    }) {
        this.apikey = ops.apikey
        this.fetch = require('node-fetch')
    }

    public async PostStats(id: string, servers: number, shards: number): Promise<void> {
        /**
         * @typeof 
         */
        if (!id || typeof (id) !== "string") throw new ReferenceError(title + 'Bot ID must be a string.')
        if (!servers || typeof (servers) !== "number") throw new ReferenceError(title + 'Server Count must be a number.')
        if (!shards || typeof (shards) !== "number") throw new ReferenceError(title + 'Shard Count must be a number.')


        const request = new Request()
        request.get('POST', `/bot/${id}`, this.apikey, servers, shards) 
    }
}