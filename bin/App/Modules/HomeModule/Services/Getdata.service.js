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
exports.GetUser = void 0;
const Mssql_config_1 = require("../../../Config/Mssql.config");
const Redis_config_1 = require("../../../Config/Redis.config");
const GetUser = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var Cachedata = yield Redis_config_1.RedisClient.get("Users");
        if (Cachedata != null) {
            return { From: 'redis', Data: JSON.parse(Cachedata) };
        }
        else {
            var pool = yield (0, Mssql_config_1.sqlDb)();
            var Userdata = yield (pool === null || pool === void 0 ? void 0 : pool.request().query("select * from Products"));
            yield Redis_config_1.RedisClient.set("Users", JSON.stringify(Userdata.recordset), { EX: 60, NX: true });
            return { From: "sql", Data: Userdata.recordset };
        }
    }
    catch (err) {
        return { Message: "Something went wrong Try again Later", Error: err };
    }
});
exports.GetUser = GetUser;
