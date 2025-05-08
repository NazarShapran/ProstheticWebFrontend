import { HttpClient } from "@/utils/HttpClient";

export class SignUpService {
    static async signUp(fullName, phoneNumber, email, password, birthDate, signal) {
        const httpClient = new HttpClient({
            baseURL: "http://localhost:5094/user",
            signal
        })

        return await httpClient.post("/signup", {
            fullName,
            email,
            phoneNumber,
            birthDate,
            password
        });
    }
}