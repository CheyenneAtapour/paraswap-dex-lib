import { Network, SwapSide } from '../../constants';

export const testConfig: {
  [network: number]: Array<{
    srcToken: string;
    destToken: string;
    swapSide: SwapSide;
    amount: string;
  }>;
} = {
  [Network.MAINNET]: [
    // {
    //   srcToken: 'USDT',
    //   destToken: 'WETH',
    //   swapSide: SwapSide.BUY,
    //   amount: '10000000000000000',
    // },
    // {
    //   srcToken: 'WETH',
    //   destToken: 'USDT',
    //   swapSide: SwapSide.BUY,
    //   amount: '1000000',
    // },
    // {
    //   srcToken: 'USDT',
    //   destToken: 'WETH',
    //   swapSide: SwapSide.SELL,
    //   amount: '1000000',
    // },
    {
      // srcToken: 'WETH',
      // destToken: 'DAI',
      srcToken: 'DAI',
      destToken: 'WETH',
      swapSide: SwapSide.BUY,
      amount: '10000000000000000',
    },
    {
      srcToken: 'DAI',
      destToken: 'ETH',
      swapSide: SwapSide.BUY,
      amount: '10000000000000000',
    },
    {
      srcToken: 'ETH',
      destToken: 'DAI',
      swapSide: SwapSide.BUY,
      amount: '10000000000000000',
    },
    {
      srcToken: 'WETH',
      destToken: 'DAI',
      swapSide: SwapSide.BUY,
      amount: '10000000000000000',
    },
    {
      srcToken: 'DAI',
      destToken: 'WETH',
      swapSide: SwapSide.SELL,
      amount: '10000000000000000',
    },
    {
      srcToken: 'DAI',
      destToken: 'ETH',
      swapSide: SwapSide.SELL,
      amount: '10000000000000000',
    },
    {
      srcToken: 'ETH',
      destToken: 'DAI',
      swapSide: SwapSide.SELL,
      amount: '10000000000000000',
    },
    {
      srcToken: 'WETH',
      destToken: 'DAI',
      swapSide: SwapSide.SELL,
      amount: '10000000000000000',
    },
  ],
};
