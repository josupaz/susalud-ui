import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { UserProfileToken } from "../Models/User";
import { environment } from "../environments/environment";

const baseUrl = environment.baseUrl

export const loginAPI = async (email: string, password: string) => {
  try {
    const data = await axios.post<UserProfileToken>(baseUrl + "/auth/login", {
      email: email,
      password: password,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const registerAPI = async (
  email: string,
  name: string,
  lastName: string,
  password: string
) => {
  try {
    const data = await axios.post<UserProfileToken>(baseUrl + "/auth/register", {
      email: email,
      name: name,
      lastName: lastName,
      password: password,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};
