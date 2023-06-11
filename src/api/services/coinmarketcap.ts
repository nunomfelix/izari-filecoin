// CoinMarketCap service for interacting with CoinMarketCap API.

import HttpClient from '../HttpClient.js';

import { 
  LatestQuotesResponse,
  MetadataResponse
 } from '../../artifacts/api/coinmarketcap';


interface CoinMarketCapArgs {
  apiKey: string;
  baseURL?: string;
}

export class CoinMarketCap {
  private httpClient: HttpClient;
  private apiKey: string;

  constructor(args: CoinMarketCapArgs) {
    this.httpClient = new HttpClient(args.baseURL || 'https://pro-api.coinmarketcap.com/v1/');
    this.apiKey = args.apiKey;
  }

  async getLatestQuotes(symbol: string): Promise<LatestQuotesResponse> {
    try {
      const response = await this.httpClient.get(`cryptocurrency/quotes/latest?symbol=${symbol}`, {
        headers: {
          'X-CMC_PRO_API_KEY': this.apiKey,
          'Accept': 'application/json',
        },
      });
      return response.data as LatestQuotesResponse;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async getMetadata(symbol: string): Promise<MetadataResponse> {
    try {
      const response = await this.httpClient.get(`cryptocurrency/info?symbol=${symbol}`, {
        headers: {
          'X-CMC_PRO_API_KEY': this.apiKey,
          'Accept': 'application/json',
        },
      });
      return response.data as MetadataResponse;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
