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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisCache = void 0;
const Redis_config_1 = require("../Config/Redis.config");
class RedisCache {
}
exports.RedisCache = RedisCache;
_a = RedisCache;
RedisCache.Set = (Key, Value, ExpTime) => __awaiter(void 0, void 0, void 0, function* () {
    var time = 0;
    yield Redis_config_1.RedisClient.set(Key, Value, { EX: ExpTime, NX: true });
});
RedisCache.Get = (Key) => __awaiter(void 0, void 0, void 0, function* () {
    const Data = yield Redis_config_1.RedisClient.get(Key);
    if (Data != null) {
    }
});
