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
Object.defineProperty(exports, "__esModule", { value: true });
class sentcordTS {
    constructor(ops = {
        apikey: null,
        botid: null
    }) {
        this.fetch = require('node-fetch');
        this._apikey = this.apikey;
        this.apikey = ops.apikey;
        this.botid = ops.botid;
        this._stats = require('../lib/_stats');
    }
    stats(botid, servers, shards) {
        return __awaiter(this, void 0, void 0, function* () {
            this._stats(botid, servers, shards);
        });
    }
}
exports.default = sentcordTS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3N0cnVjdHVyZS9DbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxNQUFxQixVQUFVO0lBTTNCLFlBQVksTUFBTTtRQUNkLE1BQU0sRUFBRSxJQUFXO1FBQ25CLEtBQUssRUFBRSxJQUFXO0tBQ3JCO1FBQ0csSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFBO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQTtRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUE7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQUNLLEtBQUssQ0FBQyxLQUFXLEVBQUUsT0FBZ0IsRUFBRSxNQUFlOztZQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDdkMsQ0FBQztLQUFBO0NBQ0o7QUFuQkQsNkJBbUJDIn0=