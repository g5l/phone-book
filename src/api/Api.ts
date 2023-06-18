export enum HTTP_METHOD {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE"
}

interface Config {
  headers?: { [key: string]: string };
}

class Api {
  async get(url: string, data?: any, config?: Config): Promise<any> {
    return await this.request(HTTP_METHOD.GET, url, data, config);
  }
  
  async post(url: string, data?: any, config?: Config): Promise<any> {
    return await this.request(HTTP_METHOD.POST, url, data, config);
  }
  
  async put(url: string, data?: any, config?: Config): Promise<any> {
    return await this.request(HTTP_METHOD.PUT, url, data, config);
  }
  
  async patch(url: string, data?: any, config?: Config): Promise<any> {
    return await this.request(HTTP_METHOD.PATCH, url, data, config);
  }
  
  async delete(url: string, data?: any, config?: Config): Promise<any> {
    return await this.request(HTTP_METHOD.DELETE, url, data, config);
  }

  async request(method: string, url: string, data?: any, config?: Config): Promise<any> {
    if (!method || !url) throw new Error("Invalid Api request: method and url are required.");
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          ...(config?.headers || {})
        },
        body: JSON.stringify(data)
      });
      return await response.json();
    } catch (error: any) {
      console.error("api.request", {method, url, message: error.message});
      throw error;
    }
  }
}

export default Api;
