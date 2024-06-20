import { config } from "./config";

interface ApiResponse {
  status_message?: string;
  [key: string]: any;
}

const apiCall = async (
  endpoint: string,
  method: string = "GET",
  params: Record<string, string | number> = {},
  body: any = null,
  headers: Record<string, string> = {}
): Promise<ApiResponse> => {
  try {
    const apiKey = config.apiKey || "";
    const queryString =
      method === "GET"
        ? `?${new URLSearchParams({
            api_key: apiKey,
            ...params,
          }).toString()}`
        : "";

    const url = `${config.baseURL}${endpoint}${queryString}`;

    console.log("url", url);

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: method !== "GET" && body ? JSON.stringify(body) : null,
    });

    if (!response.ok) {
      const errorData = (await response.json()) as ApiResponse;
      throw new Error(
        `API call failed: ${errorData.status_message || response.statusText}`
      );
    }

    const data = (await response.json()) as ApiResponse;
    return data;
  } catch (error: any) {
    throw new Error(`API call failed: ${error.message}`);
  }
};

export default apiCall;
