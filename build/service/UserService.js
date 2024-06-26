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
exports.UserService = void 0;
const database_1 = require("../database");
const User_1 = require("../entities/User");
const UserRepository_1 = require("../repositories/UserRepository");
class UserService {
    constructor(userRepository = new UserRepository_1.UserRepository(database_1.AppDataSource.manager)) {
        this.createUser = (name, email, password) => __awaiter(this, void 0, void 0, function* () {
            const user = new User_1.User(name, email, password);
            return yield this.userRepository.createUser(user);
        });
        this.getUser = () => {
        };
        this.userRepository = userRepository;
    }
}
exports.UserService = UserService;
