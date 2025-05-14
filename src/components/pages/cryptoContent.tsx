"use client";
import { CircularProgress } from "@mui/material";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { CURRENCIES } from "../../constants/currencies";
import CryptoCard from "../cryptoCard";

interface CryptoCoin {
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

const CryptoContent: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<CryptoCoin[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const formatCurrencies = () => {
    return CURRENCIES.join(",");
  };

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          `${
            process.env.REACT_APP_PUBLIC_API_DOMAIN
          }/coins/markets?vs_currency=usd&ids=${formatCurrencies()}&order=market_cap_desc&per_page=10&page=1&sparkline=false`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: CryptoCoin[] = await response.json();
        setCryptoData(data);
        setLoading(false);
      } catch (error) {
        console.error("Fetching crypto data failed:", error);
        setError(true);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full min-h-screen">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <div>{"Error fetching crypto data, please try again :("}</div>;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
      }}
      className="w-full flex-col mx-auto flex rounded-xl gap-6 p-4 lg:p-6"
    >
      <h2>Cryptocurrency Prices (USD)</h2>
      {cryptoData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 ">
          {cryptoData.map((coin) => (
            <CryptoCard coinData={coin} />
          ))}
        </div>
      ) : (
        <p>No crypto data available.</p>
      )}
    </motion.div>
  );
};

export default CryptoContent;
