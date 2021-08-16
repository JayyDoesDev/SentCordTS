import { version, base, method } from "../structure/utils/util";

import fetch from 'node-fetch';

export class Request {
    constructor() {}
    public async get(method: method, endpoint: string, key: string, servers: number, shards: number) {
        fetch(base + endpoint, {
            method: method,
            headers: {
                "Authorization": key,
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                servers: servers,
                shards: shards,
            })
        }).then((res => res.json())).then(data => {
            console.log(data)
        })
    }
}
