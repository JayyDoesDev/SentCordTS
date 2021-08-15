export interface APISTATSOK {
    success: boolean;
    msg: string;
    data: { time: number, servers: number, shards: number }
}

export interface APISTATBAD {
    success: boolean;
    msg: string;
}

