import { DexParams } from './types';
import { DexConfigMap, AdapterMappings } from '../../types';
import { Network, SwapSide } from '../../constants';

export const AaveGsmConfig: DexConfigMap<DexParams> = {
  AaveGsm: {
    // TODO: complete me!
  },
};

export const Adapters: Record<number, AdapterMappings> = {
  // TODO: add adapters for each chain
  // This is an example to copy
  [Network.MAINNET]: { [SwapSide.SELL]: [{ name: '', index: 0 }] },
};
