"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_library_1 = __importDefault(require("sdk-library"));
const client = new sdk_library_1.default({
    apiKey: "123",
});
client.getPosts().then((p) => {
    console.log(p);
});
