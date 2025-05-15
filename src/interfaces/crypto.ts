export interface CryptoCoin {
    id: string;
    symbol: string;
    name: string;
    current_price: number | null;
    image: string;
    market_cap: number | null;
    market_cap_rank: number | null;
    high_24h: number | null;
    low_24h: number | null;
    price_change_percentage_24h: number | null;
  }