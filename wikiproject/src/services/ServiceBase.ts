import Axios, { AxiosRequestConfig } from 'axios';

export interface IRequestOptions {
    url?: string;
    data?: any;
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
}

export interface ISendFormDataOptions {
    url: string;
    data: FormData;
    method: "POST" | "PUT" | "PATCH";
}

export abstract class ServiceBase {
    public static async requestJson<T>(opts: IRequestOptions): Promise<T> {
        var axiosResult = null;
        var result: T = null;

        var processQuery = (url: string, data: any): string => {
            let json = new URLSearchParams(data).toString();
            if (data) return `${url}?${json}`;
            return url;
        };
        console.log(processQuery(opts.url, opts.data));
        var axiosRequestConfig: AxiosRequestConfig;
        try {
            switch (opts.method) {
                case "GET":
                    axiosResult = await Axios.get(processQuery(opts.url, opts.data), axiosRequestConfig);
                    break;
                case "POST":
                    axiosResult = await Axios.post(opts.url, opts.data, axiosRequestConfig);
                    break;
                case "PUT":
                    axiosResult = await Axios.put(opts.url, opts.data, axiosRequestConfig);
                    break;
                case "PATCH":
                    axiosResult = await Axios.patch(opts.url, opts.data, axiosRequestConfig);
                    break;
                case "DELETE":
                    axiosResult = await Axios.delete(processQuery(opts.url, opts.data), {...axiosRequestConfig});
                    break;
            }
            result = axiosResult.data;
        } catch (error) {
            console.log(error);
        }
        return result;
    }
}