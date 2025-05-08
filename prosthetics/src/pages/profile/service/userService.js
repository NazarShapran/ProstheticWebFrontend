import { HttpClient } from"@/utils/http/HttpClient";

export class UserService {
    constructor(signal) {
        this.httpClient = new HttpClient({
          baseURL: `https://localhost:5094/user`,
          timeout: 10000,
          signal,
        });
      }
    }