import { Code, ListResponse, User } from "interfaces/index";
import axiosInstance from "utils/axiosInstance";
interface LoginResponse {
  email: string;
  roleId: string;
}
export const userService = {
  handleLogin: async (
    email: string,
    password: string
  ): Promise<ListResponse<LoginResponse | null>> => {
    return axiosInstance.post("/api/login", { email, password });
  },

  getAllUsers: (): Promise<ListResponse<User[] | null>> => {
    return axiosInstance.get("/api/get-all-users");
  },

  createNewUser: (data: Partial<User>): Promise<ListResponse<User | null>> => {
    return axiosInstance.post("/api/create-new-user", data);
  },

  editUser: (data: Partial<User>): Promise<ListResponse<User | null>> => {
    return axiosInstance.put("/api/edit-user", data);
  },

  deleteUser: (id: number): Promise<ListResponse<User | null>> => {
    return axiosInstance.delete(`/api/delete-user/${id}`);
  },

  getAllCodes: (type: string): Promise<ListResponse<Code[]>> => {
    return axiosInstance.get(`/api/allcode?type=${type}`);
  },
};
