import { HttpClient } from"@/utils/http/HttpClient";

export class AuthService {
        static async login(email, password, signal) {
            const httpClient = new HttpClient({
                baseURL: "https://localhost:5094/user",
                signal
            });
            return await httpClient.post("/signin", { email, password });
        }

        static async register(firstName, lastName, email, password, signal) {
            const httpClient = new HttpClient({
                baseURL: "https://localhost:5094/user",
                signal
            });
            const userDto = { firstName, lastName, email, password };
            return await httpClient.post("/signup", userDto);

    }
}