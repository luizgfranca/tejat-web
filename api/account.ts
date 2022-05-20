import { AxiosResponse } from "axios";
import Account from "../model/account";
import { api } from "./instance";

const RESOURCE = "/account";

export async function getAccounts(): Promise<AxiosResponse<Account[]>> {
  return api.get(RESOURCE);
}

export async function getAccount(id: string): Promise<AxiosResponse<Account>> {
  return await api.get(`${RESOURCE}/${id}`);
}

export async function createAccount(
  name: string
): Promise<AxiosResponse<Account>> {
  return await api.post(RESOURCE, { name });
}

export async function updateAccount(
  id: string,
  newName: string
): Promise<AxiosResponse<Account>> {
  return await api.put(RESOURCE, { id, name: newName });
}

export async function deleteAccount(id: string) {
  await api.delete(`${RESOURCE}/${id}`);
}
