export interface GetIpAssetsRequestI {
  ipAssetIds?: string[]
  orderBy?: "id" | "ipId" | "resourceType" | "blockNumber"
  orderDirection?: "asc" | "desc"
  pagination?: { after?: string; before?: string; limit?: number }
  tokenContractIds?: string[]
  tokenIds?: string[]
  where?: {
    blockNumber?: string
    blockNumberGte?: string
    blockNumberLte?: string
    id?: string
    ipId?: string
    tokenContract?: string
    tokenId?: string
  }
}

export interface GetIpAssetsResponseI {
  data: IpAssetI[]
  hasNextPage: boolean
  hasPreviousPage: boolean
  next: string
  prev: string
}

export interface IpAssetI {
  ancestorCount: number
  blockNumber: string
  blockTimestamp: string
  childrenCount: number
  descendantCount: number
  id: string
  ipId: string
  isGroup: boolean
  latestArbitrationPolicy: string
  nftMetadata: {
    chainId: string
    imageUrl: string
    name: string
    tokenContract: string
    tokenId: string
    tokenUri: string
  }
  parentCount: number
  rootCount: number
  rootIpIds: string[]
  transactionHash: string
}

export interface GetNFTInstancesRequestI {
  tokenContractId: string
  holder_address_hash?: string
}

export interface GetNFTInstancesResponseI {
  items: NFTInstanceI[]
  next_page_params: {
    unique_token: number
  }
}

export interface NFTInstanceI {
  is_unique: boolean
  id: string
  holder_address_hash: string
  image_url: string
  animation_url: string
  external_app_url: string
  media_url: string
  media_type: string
  metadata: {
    year: number
    tags: string[]
    name: string
    image_url: string
    home_url: string
    external_url: string
    description: string
    attributes: {
      value: string
      trait_type: string
    }[]
  }
  owner: {
    hash: string
    implementation_name: string
    name: string
    ens_domain_name: string
    metadata: {
      slug: string
      name: string
      tagType: string
      ordinal: number
      meta: Record<string, unknown>
    }
    is_contract: boolean
    private_tags: {
      address_hash: string
      display_name: string
      label: string
    }[]
    watchlist_names: {
      display_name: string
      label: string
    }[]
    public_tags: {
      address_hash: string
      display_name: string
      label: string
    }[]
    is_verified: boolean
  }
  token: {
    circulating_market_cap: string
    icon_url: string
    name: string
    decimals: string
    symbol: string
    address: string
    type: string
    holders: string
    exchange_rate: string
    total_supply: string
  }
  value: string
}
