export type SimplePriceResponse = {
  [symbol: string]: {
    usd: number;
  };
}

export type MetadataResponse = {
  id: string;
  symbol: string;
  name: string;
  asset_platform_id: string | null;
  platforms: {
    [platform: string]: string;
  };
  detail_platforms: {
    [platform: string]: {
      decimal_place: number | null;
      contract_address: string;
    };
  };
  block_time_in_minutes: number;
  hashing_algorithm: string;
  categories: string[];
  public_notice: string | null;
  additional_notices: string[];
  description: {
    [language: string]: string;
  };
  links: {
    homepage: string[];
    blockchain_site: string[];
    official_forum_url: string[];
    chat_url: string[];
    announcement_url: string[];
    twitter_screen_name: string;
    facebook_username: string;
    bitcointalk_thread_identifier: number | null;
    telegram_channel_identifier: string;
    subreddit_url: string;
    repos_url: {
      github: string[];
      bitbucket: string[];
    };
  };
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  country_origin: string;
  genesis_date: string;
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  watchlist_portfolio_users: number;
  market_cap_rank: number;
  coingecko_rank: number;
  coingecko_score: number;
  developer_score: number;
  community_score: number;
  liquidity_score: number;
  public_interest_score: number;
  public_interest_stats: {
    alexa_rank: number;
    bing_matches: number | null;
  };
  status_updates: unknown[];
  last_updated: string;
}
