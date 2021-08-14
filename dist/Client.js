"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class sentcordTS {
    constructor(ops = {
        apikey: null,
        botid: null
    }) {
        this.botid = ops.botid;
        this.apikey = ops.apikey;
        this.fetch = require('node-fetch');
    }
    stats(botid, servers, shards) {
        if (!this.apikey)
            throw new ReferenceError('In order to post your stats you need to pass in your API key. To access the api key do command ..apikey in the support server.');
        if (!botid)
            throw new ReferenceError('In order to post your stats you need to pass in your bot id.');
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
        });
    }
}
exports.default = sentcordTS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQXFCLFVBQVU7SUFpQjNCLFlBQVksTUFBTTtRQUNkLE1BQU0sRUFBRSxJQUFJO1FBQ1osS0FBSyxFQUFFLElBQVc7S0FDckI7UUFDRyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUE7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ3RDLENBQUM7SUFDRCxLQUFLLENBQUMsS0FBYyxFQUFFLE9BQWdCLEVBQUUsTUFBZTtRQUNuRCxJQUFHLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRSxNQUFNLElBQUksY0FBYyxDQUFDLGdJQUFnSSxDQUFDLENBQUE7UUFDM0ssSUFBRyxDQUFDLEtBQUs7WUFBRSxNQUFNLElBQUksY0FBYyxDQUFDLDhEQUE4RCxDQUFDLENBQUE7UUFDbkcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsS0FBSyxFQUFFLEVBQUU7WUFDaEQsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUU7Z0JBQ0wsZUFBZSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUM1QixjQUFjLEVBQUUsa0JBQWtCO2FBQ3JDO1lBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ2pCLFdBQVcsRUFBRSxPQUFPO2dCQUNwQixVQUFVLEVBQUUsTUFBTTthQUNyQixDQUFDO1NBQ0wsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUNKO0FBeENELDZCQXdDQyJ9
