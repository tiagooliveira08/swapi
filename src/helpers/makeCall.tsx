import axios, { AxiosResponse } from "axios";
import https from "https";

type methodType = "post" | "get" | "put" | "delete";
type ApiType = "swapi";

interface baseQuerys {
  url: string;
  method: {
    methodType: methodType;
    params?: any;
  };
  options?: {
    apiBase: ApiType;
  };
}

type RequestTypes<K> = {
  [key in methodType]: () => Promise<AxiosResponse<K>>;
};

type ApyTypes = {
  [key in ApiType]: string | undefined;
};

export function makeCall<T>({ url, method, options }: baseQuerys): Promise<T> {
  const apiAlternatives: ApyTypes = {
    swapi: "https://swapi.dev/api/",
  };

  const api = axios.create({
    baseURL: apiAlternatives[options?.apiBase || "swapi"],
    headers: { accept: "*/*" },
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });
  const querysTypes: RequestTypes<T> = {
    get: async () => api.get(url, { params: method.params }),
    put: async () => api.put(url, method.params),
    post: async () => api.post(url, method.params),
    delete: async () => api.delete(url),
  };

  return querysTypes[method.methodType]().then((p) => p.data);
}
