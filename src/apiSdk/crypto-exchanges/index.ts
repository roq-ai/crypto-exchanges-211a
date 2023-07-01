import axios from 'axios';
import queryString from 'query-string';
import { CryptoExchangeInterface, CryptoExchangeGetQueryInterface } from 'interfaces/crypto-exchange';
import { GetQueryInterface } from '../../interfaces';

export const getCryptoExchanges = async (query?: CryptoExchangeGetQueryInterface) => {
  const response = await axios.get(`/api/crypto-exchanges${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createCryptoExchange = async (cryptoExchange: CryptoExchangeInterface) => {
  const response = await axios.post('/api/crypto-exchanges', cryptoExchange);
  return response.data;
};

export const updateCryptoExchangeById = async (id: string, cryptoExchange: CryptoExchangeInterface) => {
  const response = await axios.put(`/api/crypto-exchanges/${id}`, cryptoExchange);
  return response.data;
};

export const getCryptoExchangeById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/crypto-exchanges/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCryptoExchangeById = async (id: string) => {
  const response = await axios.delete(`/api/crypto-exchanges/${id}`);
  return response.data;
};
