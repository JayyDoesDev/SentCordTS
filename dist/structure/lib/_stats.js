"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
module.exports = (_botid, _servers, _shards, _apikey) => __awaiter(void 0, void 0, void 0, function* () {
    const fetch = require('node-fetch');
    if (!_apikey)
        throw new ReferenceError('In order to post your stats you need to pass in your API key. To access the api key do command ..apikey in the support server.');
    if (!_botid)
        throw new ReferenceError('In order to post your stats you need to pass in your bot id.');
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
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX3N0YXRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3N0cnVjdHVyZS9saWIvX3N0YXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpQkFBUyxDQUFPLE1BQWUsRUFBRSxRQUFpQixFQUFFLE9BQWdCLEVBQUUsT0FBYSxFQUFFLEVBQUU7SUFDbkYsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ25DLElBQUcsQ0FBQyxPQUFPO1FBQUUsTUFBTSxJQUFJLGNBQWMsQ0FBQyxnSUFBZ0ksQ0FBQyxDQUFBO0lBQ3ZLLElBQUcsQ0FBQyxNQUFNO1FBQUUsTUFBTSxJQUFJLGNBQWMsQ0FBQyw4REFBOEQsQ0FBQyxDQUFBO0lBQ3BHLEtBQUssQ0FBQyxnQ0FBZ0MsTUFBTSxFQUFFLEVBQUU7UUFDNUMsTUFBTSxFQUFFLE1BQU07UUFDVixPQUFPLEVBQUU7WUFDTCxlQUFlLEVBQUUsT0FBTztZQUN4QixjQUFjLEVBQUUsa0JBQWtCO1NBQ3JDO1FBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDakIsV0FBVyxFQUFFLFFBQVE7WUFDckIsVUFBVSxFQUFFLE9BQU87U0FDdEIsQ0FBQztLQUNULENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQSxDQUFBIn0=