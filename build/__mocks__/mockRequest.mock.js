"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockReq = void 0;
const mockReq = ({ params, query }) => {
    const request = {
        params: params || {},
        query: query || {}
    };
    return request;
};
exports.mockReq = mockReq;
