import { HttpClient } from"@/utils/HttpClient";

export class ReviewService {
  constructor(signal) {
    this.httpClient = new HttpClient({
      baseURL: `http://localhost:5094/review`,
      timeout: 10000,
      signal,
    });
  }
  async getAllReviews() {
    return await this.httpClient.get("/list");
  }
  async getReviewById(id) {
    return await this.httpClient.get(`/get/${id}`);
  }
  async getReviewsByProstheticId(prostheticId) {
    return await this.httpClient.get(`/getAllByProstheticId/${prostheticId}`);
  }
  async createReview(review) {
    return await this.httpClient.post(`/create`, review);
  }
}