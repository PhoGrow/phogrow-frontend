export interface Plant {
  _id: string;
  data: PlantData;
  growth: PlantGrowth;
  media: PlantMedia;
  nft: Nft | null;
}

export interface PlantData {
  _id: string;
  scientific_name: string;
  common_name?: string;
  family?: string;
  genus?: string;
  author?: string;
  image_url?: string;
}

export interface PlantGrowth {
  _id: string;
  condition: string;
  condition_type: ConditionType;
  version: number;
  image_count: number;
  shape_count: number;
  growth_time: number;
}

export enum ConditionType {
  Normal = 'normal',
  Ok = 'ok',
  Unnormal = 'unnormal',
}

export interface PlantMedia {
  _id: string;
  images?: string[];
  objects?: string[];
  animations?: string[];
}

export interface Nft {
  _id: string;
  smart_contract_address: string;
  total_supply: TotalSupply;
  rarity: Rarity;
  price: string;
  royalties: Royalties;
  metadata: NftMetadata;
  rpc_network: RpcNetwork;
}

export enum TotalSupply {
  Common = 10000,
  Rare = 1000,
  Epic = 100,
  Legendary = 10,
  Unique = 1,
}

export enum Rarity {
  Common = 'common',
  Rare = 'rare',
  Epic = 'epic',
  Legendary = 'legendary',
  Unique = 'unique',
}

export interface Royalties {
  payment_splitter_address: string;
  payees: string[];
  shares: number[];
  fee_numerator: number;
}

export interface NftMetadata {
  _id: string;
  metadata_uri: string;
  name: string;
  decimals: number;
  description: string;
  image: string;
  animation_url: string;
  properties: Properties;
}

export interface Properties {
  rarity: Rarity;
  //   Plant data
  scientific_name: string;
  common_name?: string;
  family?: string;
  genus?: string;
  author?: string;
  image_url?: string;
  //   Plant growth
  condition: string;
  condition_type: ConditionType;
  version: number;
  image_count: number;
  shape_count: number;
  growth_time: number;
}

export interface RpcNetwork {
  _id: string;
  network_name: string;
  rpc_url: string;
  chain_id: number;
  symbol: string;
  block_explorer_url: string;
}

export interface AddEthereumChainParameter {
  chainId: string;
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: 18;
  };
  rpcUrls: string[];
  blockExplorerUrls?: string[];
  iconUrls?: string[];
}
