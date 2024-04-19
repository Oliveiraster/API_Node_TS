"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeMockRes = void 0;
function makeMockRes() {
    const res = {
        state: {}
    };
    res.status = (status) => {
        res.state.status = status;
        return res;
    };
    res.json = (json) => {
        res.state.json = json;
        return res;
    };
    return res;
}
exports.makeMockRes = makeMockRes;
