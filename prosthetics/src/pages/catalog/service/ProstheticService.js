import { HttpClient } from"@/utils/HttpClient";

export class ProstheticService {
  constructor(signal) {
    this.httpClient = new HttpClient({
      baseURL: `http://localhost:5094/prosthetics`,
      timeout: 10000,
      signal,
    });
  }
  async getAllProshetics(page = 1, pageSize = 6) {
    return await this.httpClient.get(`/list?page=${page}&pageSize=${pageSize}`);
  }
  async getProstheticById(id) {
    return await this.httpClient.get(`get/${id}`);
  }
}