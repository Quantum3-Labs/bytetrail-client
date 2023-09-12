import { AddressLike } from "ethers";
import { AccountData } from "../dashboard.types";
import axios from "@/config/axios";

// TODO: integrate real data
const mockGetTrackTxResponse: GetTrackTxResponse = {
  foundTxs: [
    {
      txHash:
        "0xbb7179325aa4c052de4d64bf59b59f3738dccce44af91fe6437cf352efe7cba0",
      exchange: {
        exchangeName: "Binance",
        exchangeLink: "https://www.binance.com",
        exchangeWallet: "0x28C6c06298d514Db089934071355E5743bf21d60",
      },
      account: "0x4bdb8234ad81f26985d257f36a2d2d8c30365546",
      depth: 0,
    },
    {
      txHash:
        "0x9b59a876a55c707674156197f7329e46c2760ae2f530f0f02b35099e1c0fe1e9",
      exchange: {
        exchangeName: "Disperse App",
        exchangeLink: "https://www.disperse.app",
        exchangeWallet: "0xD152f549545093347A162Dce210e7293f1452150",
      },
      account: "0x4bdb8234ad81f26985d257f36a2d2d8c30365546",
      depth: 0,
    },
    {
      txHash:
        "0x9b59a876a55c707674156197f7329e46c2760ae2f530f0f02b35099e1c0fe1e9",
      exchange: {
        exchangeName: "Disperse App",
        exchangeLink: "https://www.disperse.app",
        exchangeWallet: "0xD152f549545093347A162Dce210e7293f1452150",
      },
      account: "0x1a2d838c4bbd1e73d162d0777d142c1d783cb831",
      depth: 1,
    },
    {
      txHash:
        "0x1d17901c42c8517de276b15f92ca44da3fdb8134c8ce22fff42baedef022d67d",
      exchange: {
        exchangeName: "Gate.io",
        exchangeLink: "https://www.gate.io",
        exchangeWallet: "0x0D0707963952f2fBA59dD06f2b425ace40b492Fe",
      },
      account: "0xff70e5d3649a5f88f2230e7a6433711b00980f78",
      depth: 1,
    },
    {
      txHash:
        "0x957b760c1527bbe2c7b23057a6b6f36de02f210620c267ba7c03c7789deca249",
      exchange: {
        exchangeName: "Gate.io",
        exchangeLink: "https://www.gate.io",
        exchangeWallet: "0x0D0707963952f2fBA59dD06f2b425ace40b492Fe",
      },
      account: "0xff70e5d3649a5f88f2230e7a6433711b00980f78",
      depth: 1,
    },
    {
      txHash:
        "0x570d0a710dbb2f053254a6dfc7d484c1731af229480ff7676f575677ad5bcade",
      exchange: {
        exchangeName: "Gate.io",
        exchangeLink: "https://www.gate.io",
        exchangeWallet: "0x0D0707963952f2fBA59dD06f2b425ace40b492Fe",
      },
      account: "0xff70e5d3649a5f88f2230e7a6433711b00980f78",
      depth: 1,
    },
    {
      txHash:
        "0x4bce11bc2c633846e3330c966297cb51b8a61e39271013f8f01d8c427fae44d7",
      exchange: {
        exchangeName: "Gate.io",
        exchangeLink: "https://www.gate.io",
        exchangeWallet: "0x0D0707963952f2fBA59dD06f2b425ace40b492Fe",
      },
      account: "0xff70e5d3649a5f88f2230e7a6433711b00980f78",
      depth: 1,
    },
    {
      txHash:
        "0xa6dcffa8e68788509fd10f95fffa27b925c287091c2ba4ed3066e448d5aedf5c",
      exchange: {
        exchangeName: "Gate.io",
        exchangeLink: "https://www.gate.io",
        exchangeWallet: "0x0D0707963952f2fBA59dD06f2b425ace40b492Fe",
      },
      account: "0xff70e5d3649a5f88f2230e7a6433711b00980f78",
      depth: 1,
    },
    {
      txHash:
        "0x58fadd94e49a683e2b4b7b370f0a2f0a07490c36161c3dd0fe07fc7ac2fe0a1f",
      exchange: {
        exchangeName: "Gate.io",
        exchangeLink: "https://www.gate.io",
        exchangeWallet: "0x0D0707963952f2fBA59dD06f2b425ace40b492Fe",
      },
      account: "0xff70e5d3649a5f88f2230e7a6433711b00980f78",
      depth: 1,
    },
    {
      txHash:
        "0xbb7179325aa4c052de4d64bf59b59f3738dccce44af91fe6437cf352efe7cba0",
      exchange: {
        exchangeName: "Binance",
        exchangeLink: "https://www.binance.com",
        exchangeWallet: "0x28C6c06298d514Db089934071355E5743bf21d60",
      },
      account: "0x4bdb8234ad81f26985d257f36a2d2d8c30365546",
      depth: 1,
    },
    {
      txHash:
        "0x9b59a876a55c707674156197f7329e46c2760ae2f530f0f02b35099e1c0fe1e9",
      exchange: {
        exchangeName: "Disperse App",
        exchangeLink: "https://www.disperse.app",
        exchangeWallet: "0xD152f549545093347A162Dce210e7293f1452150",
      },
      account: "0x4bdb8234ad81f26985d257f36a2d2d8c30365546",
      depth: 1,
    },
    {
      txHash:
        "0x57a5915d198c9c92c3441b103584415f7c3c7dcb7889b32cb0706d658dac883f",
      exchange: {
        exchangeName: "Binance",
        exchangeLink: "https://www.binance.com",
        exchangeWallet: "0x21a31Ee1afC51d94C2eFcCAa2092aD1028285549",
      },
      account: "0xb4d239f98156e5387d745d6fd36c3e5d98fff703",
      depth: 2,
    },
    {
      txHash:
        "0xd4201c1940cf10c25e75b0bf55203a054a71a7b9f51406c97631761daa21e384",
      exchange: {
        exchangeName: "Binance",
        exchangeLink: "https://www.binance.com",
        exchangeWallet: "0x28C6c06298d514Db089934071355E5743bf21d60",
      },
      account: "0x56eddb7aa87536c09ccc2793473599fd21a8b17f",
      depth: 2,
    },
  ],
  foundAccounts: [
    {
      exchange: {
        exchangeName: "Binance",
        exchangeLink: "https://www.binance.com",
        exchangeWallet: "0x28C6c06298d514Db089934071355E5743bf21d60",
      },
      account: "0x4bdb8234ad81f26985d257f36a2d2d8c30365546",
      depth: 0,
      interactions: 4,
    },
    {
      exchange: {
        exchangeName: "Disperse App",
        exchangeLink: "https://www.disperse.app",
        exchangeWallet: "0xD152f549545093347A162Dce210e7293f1452150",
      },
      account: "0x1a2d838c4bbd1e73d162d0777d142c1d783cb831",
      depth: 1,
      interactions: 1,
    },
    {
      exchange: {
        exchangeName: "Gate.io",
        exchangeLink: "https://www.gate.io",
        exchangeWallet: "0x0D0707963952f2fBA59dD06f2b425ace40b492Fe",
      },
      account: "0xff70e5d3649a5f88f2230e7a6433711b00980f78",
      depth: 1,
      interactions: 6,
    },
    {
      exchange: {
        exchangeName: "Binance",
        exchangeLink: "https://www.binance.com",
        exchangeWallet: "0x21a31Ee1afC51d94C2eFcCAa2092aD1028285549",
      },
      account: "0xb4d239f98156e5387d745d6fd36c3e5d98fff703",
      depth: 2,
      interactions: 1,
    },
    {
      exchange: {
        exchangeName: "Binance",
        exchangeLink: "https://www.binance.com",
        exchangeWallet: "0x28C6c06298d514Db089934071355E5743bf21d60",
      },
      account: "0x56eddb7aa87536c09ccc2793473599fd21a8b17f",
      depth: 2,
      interactions: 1,
    },
  ],
  score: 78.43137254901961,
  from: "0x4bdB8234AD81F26985d257F36a2d2d8c30365546",
  to: "0x964c28474c3Df0de505D73fD9e5E2F6D14a592b8",
};

// =========

interface Exchange {
  exchangeName: string;
  exchangeLink: string;
  exchangeWallet: string;
}

export interface GetTrackTxParams {
  txHash: AddressLike;
  tokens?: string[]; // token official symbols, e.g. ETH, DAI, USDT
  chain: number; // chain id
  isBackwards?: boolean; // whether the transaction will trace backwards or forward
  depth?: number; // Layers of the search (<= 5)
  width?: number; // Timestamp.
}

export interface GetTrackTxResponse {
  foundTxs: {
    txHash: string;
    exchange: Exchange;
    account: string;
    depth: number;
  }[];
  foundAccounts: {
    exchange: Exchange;
    account: string;
    depth: number;
    interactions: number;
  }[];
  score: number;
  from: AddressLike;
  to: AddressLike;
}

export const getTrackTx = async (
  params: GetTrackTxParams
): Promise<GetTrackTxResponse> => {

  const response = await axios({
    url: "/transaction/trace",
    params: params,
  });
  console.log(response);
  console.log(response.data)
  return response.data;
};
