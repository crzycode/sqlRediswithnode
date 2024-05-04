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
exports.HomeController = void 0;
const Getdata_service_1 = require("../Services/Getdata.service");
class HomeController {
}
exports.HomeController = HomeController;
_a = HomeController;
HomeController.GetData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var begin = Date.now();
    var data = (0, Getdata_service_1.GetUser)();
    data.then(data => {
        var end = Date.now();
        var timeSpent = (end - begin) / 1000 + "secs";
        res.json({ Time: timeSpent, data: data });
    });
});
HomeController.Insertdata = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
