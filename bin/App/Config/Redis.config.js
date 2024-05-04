"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisClient = void 0;
const redis_1 = require("redis");
exports.RedisClient = (0, redis_1.createClient)({ url: 'redis://103.255.39.101:6379' });
