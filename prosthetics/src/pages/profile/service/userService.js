import { HttpClient } from"@/utils/HttpClient";

export class UserService {
    constructor(signal) {
        this.httpClient = new HttpClient({
          baseURL: `http://localhost:5094/user`,
          timeout: 10000,
          signal,
        });
      }

      async deleteUser(userId) {
        return await this.httpClient.delete(`/delete/${userId}`);
      }
      
      async updatePassword(userId, passwordData) {
        return await this.httpClient.put(`/update-password/${userId}`, passwordData);
      }
      
      async updateDetails(userData) {
        return await this.httpClient.put(`/update-details`, userData);
      }
    }