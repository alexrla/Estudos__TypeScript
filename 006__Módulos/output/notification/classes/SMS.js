"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Notifications_1 = __importDefault(require("./Notifications"));
class SMS extends Notifications_1.default {
    send(user) {
        console.log(`Enviando SMS para ${user.phoneNumber}...`);
        return true;
    }
}
exports.default = SMS;
//# sourceMappingURL=SMS.js.map