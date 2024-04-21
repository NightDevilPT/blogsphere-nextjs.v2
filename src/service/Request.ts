import { env } from "@/config/env";
import axios, { AxiosError, AxiosInstance } from "axios";

type DataType = any;
const status: number[] = [200, 201];
const error: number[] = [403, 401, 404, 500];
type methods = "POST" | "PUT" | "GET" | "DELETE";

const apiService: AxiosInstance = axios.create({
	baseURL: env.BACKEND_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export const Request = async (
	url: string,
	method: methods,
	data?: DataType
) => {
	try {
		const response = await apiService({
			method,
			data,
			url,
			headers: {
			  Authorization: `Bearer ${window.localStorage.getItem("token")}`
			},
		  });
		return response.data
	} catch (err: any) {
		return err.response.data
	}
};

export default apiService;
