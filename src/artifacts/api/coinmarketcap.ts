export type CoinMarketCapStatus = {
  timestamp: string,
  error_code: number,
  error_message: string,
  elapsed: number,
  credit_count: number,
  notice: string
}

export type MetadataResponse = {
  data: {
    [key: string]: {
      urls: {
        website: string[],
        technical_doc: string[],
        twitter: string[],
        reddit: string[],
        message_board: string[],
        announcement: string[],
        chat: string[],
        explorer: string[],
        source_code: string[]
      },
      logo: string,
      id: number,
      name: string,
      symbol: string,
      slug: string,
      description: string,
      date_added: string,
      date_launched: string,
      tags: string[],
      platform: null | string,
      category: string,
      self_reported_circulating_supply: null | string,
      self_reported_market_cap: null | string,
      self_reported_tags: null | string,
      infinite_supply: boolean | null
    }
  },
  status: CoinMarketCapStatus
}

export type LatestQuotesResponse = {
  data: {
    [key: string]: {
      id: number,
      name: string,
      symbol: string,
      slug: string,
      is_active: number,
      is_fiat: number,
      circulating_supply: number,
      total_supply: number,
      max_supply: number,
      date_added: string,
      num_market_pairs: number,
      cmc_rank: number,
      last_updated: string,
      tags: string[],
      platform: null,
      quote: {
        USD: {
          price: number,
          volume_24h: number,
          volume_change_24h: number,
          percent_change_1h: number,
          percent_change_24h: number,
          percent_change_7d: number,
          percent_change_30d: number,
          market_cap: number,
          market_cap_dominance: number,
          fully_diluted_market_cap: number,
          last_updated: string,
        }
      }
    }
  },
  status: CoinMarketCapStatus
}
