import { HttpClient } from "@/utils/HttpClient";
import { jwtDecode } from "jwt-decode";

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

    static async autoLogin(email, password, signal) {
        const httpClient = new HttpClient({
            baseURL: "http://localhost:5094/user",
            signal
        })

        const response = await httpClient.post("/signin", {
            email,
            password
        });

        let decoded = jwtDecode(response);
        localStorage.setItem("token", response);
        localStorage.setItem("user", JSON.stringify(decoded));
        
        return response;
    }
}