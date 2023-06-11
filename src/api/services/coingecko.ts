import HttpClient from '../HttpClient.js';

import {
  MetadataResponse,
  SimplePriceResponse
} from '../../artifacts/api/coingecko';

interface CoinGeckoArgs {
  baseURL?: string;
}

const headers = {
  'Accept': 'application/json',
}

export class CoinGecko {
  private httpClient: HttpClient;

  constructor(args: CoinGeckoArgs) {
    this.httpClient = new HttpClient(args.baseURL || 'https://api.coingecko.com/api/v3/');
  }

  async getSimplePrice(symbol: string): Promise<SimplePriceResponse> {
    try {
      const response = await this.httpClient.get(`simple/price?ids=${symbol}&vs_currencies=usd`, {
        headers: headers,
      });
      return response.data as SimplePriceResponse;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async getMetadata(symbol: string): Promise<MetadataResponse> {
    try {
      const response = await this.httpClient.get(`coins/${symbol}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`, {
        headers: headers,
      });
      return response.data as MetadataResponse;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
