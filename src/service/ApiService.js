const baseUrl = "https://jsonplaceholder.org/";

export default class ApiService {
  async getCharacters() {
    const response = await fetch(`${baseUrl}/posts`);
    return response.json();
  }
}