import React from "react";
import { CryptoCoin } from "../interfaces/crypto";

const CryptoCard: React.FC<{ coinData: CryptoCoin }> = ({ coinData }) => {
  const formatNumber = (
    value: number | null | undefined,
    decimals: number = 0,
    prefix: string = "",
    suffix: string = ""
  ) => {
    if (value === null || value === undefined) {
      return "N/A";
    }
    return `${prefix}${value
      .toFixed(decimals)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${suffix}`;
  };

  return (
    <div
      key={coinData.id}
      className="border border-foreground rounded-lg p-4 shadow-sm mb-4"
    >
      <div className="flex items-center gap-3 mb-3">
        {coinData.image && (
          <img
            src={coinData.image}
            alt={`${coinData.name} icon`}
            width={40}
            height={40}
            className="rounded-full"
          />
        )}
        <div>
          <h3 className="text-lg font-semibold">
            {coinData.name} ({coinData.symbol.toUpperCase()})
          </h3>
          {coinData.market_cap_rank !== null &&
            coinData.market_cap_rank !== undefined && (
              <p className="text-sm text-gray-600">
                Rank: {coinData.market_cap_rank}
              </p>
            )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[45%,1fr] gap-2 text-sm">
        <div>
          <strong>Price:</strong> ${formatNumber(coinData.current_price, 2)}
        </div>
        <div className="truncate">
          <strong>Market Cap:</strong> ${formatNumber(coinData.market_cap, 0)}
        </div>
        <div>
          <strong>24h High:</strong> ${formatNumber(coinData.high_24h, 2)}
        </div>
        <div>
          <strong>24h Low:</strong> ${formatNumber(coinData.low_24h, 2)}
        </div>
        <div
          className={
            coinData.price_change_percentage_24h !== null
              ? coinData.price_change_percentage_24h >= 0
                ? "text-green-600"
                : "text-red-600"
              : ""
          }
        >
          <strong>24h Change (%):</strong>{" "}
          {formatNumber(coinData.price_change_percentage_24h, 2, "", "%")}
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
