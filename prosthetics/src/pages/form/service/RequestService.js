import { HttpClient } from"@/utils/HttpClient";

export class RequestService {
  constructor(signal) {
    this.httpClient = new HttpClient({
      baseURL: `http://localhost:5094/Request`,
      timeout: 10000,
      signal,
    });
  }
  async getAllRequests() {
    return await this.httpClient.get("/list");
  }
  async getRequestById(id) {
    return await this.httpClient.get(`/${id}`);
  }
    async createRequest(request) {
        return await this.httpClient.post("/create", request);
    }
}