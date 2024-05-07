"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.use((0, cors_1.default)());
app.get('/', (request, response) => {
    response.status(200).send('Hello World');
});
app
    .listen(port, () => {
    console.log(`Server running at: http://localhost:${port}`);
})
    .on('error', (error) => {
    throw new Error(error.message);
});
