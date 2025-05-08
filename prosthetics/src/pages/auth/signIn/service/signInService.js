import { HttpClient } from"@/utils/HttpClient";

export class SignInService {
    static async signIn(email, password, signal) {
        const httpClient = new HttpClient({
            baseURL: "http://localhost:5094/user",
            signal
        });
        return await httpClient.post("/signin", { email, password });
    }
}