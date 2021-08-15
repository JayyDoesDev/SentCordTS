import { version, base, method } from "../structure/utils/util";
import fetch from 'node-fetch';

export class ServerRequest {
    constructor() {}
    public async get(method: method, endpoint: string, key: string, servers: number): Promise<void> {
        fetch(base + endpoint, {
            method: method,
            headers: {
                "Authorization": key,
                "Content-Type" : "application/json",
                body: JSON.stringify({
                    servers: servers
                })
            }
        })
    }
}
