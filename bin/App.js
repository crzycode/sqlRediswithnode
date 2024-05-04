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
const express_1 = __importDefault(require("express"));
const RootRoutes_1 = __importDefault(require("./RootRoutes"));
const Redis_config_1 = require("./App/Config/Redis.config");
const compression_1 = __importDefault(require("compression"));
const app = (0, express_1.default)();
const PORT = 4004;
app.use((0, compression_1.default)({
    level: 6, //
    threshold: 0,
    filter: (req, res) => {
        if (!req.headers['x-no-compression']) {
            return compression_1.default.filter(req, res);
        }
        return false; // Don't apply compression if 'x-no-compression' header is present
    },
}));
app.use('/', RootRoutes_1.default);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Redis_config_1.RedisClient.connect();
        app.listen(PORT, () => {
            console.log("Working");
        });
    }
    catch (err) {
        console.log(err);
    }
});
start();
// docker build -t crud .
// docker run -it -p 4004:4004 crud
