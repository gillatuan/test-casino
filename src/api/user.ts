import { useQuery, useMutation } from "react-query";
import axiosClient from "@/config/axios";
import { Response } from "@/types/api.type";
import { Role } from "@/types/user.type";

export type LoginRequest = {
  username: string;
  password: string;
};
interface LoginResponse {
  user: {
    isOnboard: string;
    userRole?: Role | "";
    token: string;
    email: any;
    name: any;
  };
  code?: string;
  statusText?: string;
  status?: number;
  statusCode?: number;
  message?: string;
  args?: any;
  data: { user: any };
}

const useLogin = () => {
  return useMutation(
    (payload: LoginRequest | FormData): Promise<Response<LoginResponse>> =>
      axiosClient.post("/token", payload)
  );
};

export { useLogin };
