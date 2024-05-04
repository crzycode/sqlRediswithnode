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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlDb = void 0;
const mssql_1 = __importDefault(require("mssql"));
const dbsetting = {
    user: "Mangal",
    password: "kali",
    server: "103.255.39.101",
    database: "test",
    options: {
        encrypt: false,
        trustedconnection: true
    },
    port: 1433
};
const sqlDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(dbsetting);
        return pool;
    }
    catch (err) {
        console.log(err);
    }
});
exports.sqlDb = sqlDb;
