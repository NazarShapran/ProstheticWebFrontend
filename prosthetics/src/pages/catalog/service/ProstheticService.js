import { HttpClient } from"@/utils/HttpClient";

export class ProstheticService {
  constructor(signal) {
    this.httpClient = new HttpClient({
      baseURL: `http://localhost:5094/prosthetics`,
      timeout: 10000,
      signal,
    });
  }
  async getAllProshetics() {
    return await this.httpClient.get("/list");
  }
  async getProstheticById(id) {
    return await this.httpClient.get(`/${id}`);
  }
}