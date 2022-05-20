import { AxiosResponse } from "axios";
import Transaction from "../model/transaction";
import { api } from "./instance";

const RESOURCE = "/transaction";

interface CreateTransactionPayload {
  description: string;
  value: string;
  originAccount: string;
  destinationAccount: string;
}

export async function getTransactions(): Promise<AxiosResponse<Transaction[]>> {
  return api.get(RESOURCE);
}

export async function getTransaction(
  id: string
): Promise<AxiosResponse<Transaction>> {
  return await api.get(`${RESOURCE}/${id}`);
}

export async function createAccount(
  payload: CreateTransactionPayload
): Promise<AxiosResponse<Transaction>> {
  return await api.post(RESOURCE, { ...payload });
}

export async function getTransactionsByOriginAccount(
  originAccountId: string
): Promise<AxiosResponse<Transaction[]>> {
  return await api.get(`${RESOURCE}/origin/${originAccountId}`);
}

export async function getTransactionsByDestinationAccount(
  destinationAccountId: string
): Promise<AxiosResponse<Transaction[]>> {
  return await api.get(`${RESOURCE}/destination/${destinationAccountId}`);
}
