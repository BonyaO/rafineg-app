// import { API_URL } from "@env";
import { ngrokTunnelLink } from "../constants";
import { IRegistration } from "../models/Registration.model";
import { baseService } from "./base.service";

const API_URL = ngrokTunnelLink;

export const registrationService = {
  index: async () =>
    await baseService.get<IRegistration>(API_URL.concat("registration")),
  show: async (registration: IRegistration) =>
    await baseService.get<IRegistration>(
      API_URL.concat(`registration/${registration.id}`)
    ),
  store: async (registration: IRegistration) => {
    const obj = {
      phone_number: registration.phoneNumber,
      transaction_method: registration.transactionMethod,
    };
    console.log("obj: ", obj);
    const result = await baseService.post<IRegistration>(
      API_URL.concat("registration"),
      obj
    );
    console.log("registration app result: ", result);
    return result;
  },
  update: async (registration: IRegistration) =>
    await baseService.patch<IRegistration>(
      API_URL.concat(`registration/${registration.id}`),
      registration
    ),
  delete: async (registration: IRegistration) =>
    await baseService.destroy<IRegistration>(
      API_URL.concat(`registration/${registration.id}`)
    ),
};
