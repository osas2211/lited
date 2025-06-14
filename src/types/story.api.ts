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
  data: [
    {
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
  ]
  hasNextPage: boolean
  hasPreviousPage: boolean
  next: string
  prev: string
}
