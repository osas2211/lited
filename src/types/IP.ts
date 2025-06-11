import { Address } from "viem"

export type IpCreator = {
  name: string
  address: Address
  contributionPercent: number // add up to 100
  description?: string
  image?: string
  socialMedia?: IpCreatorSocial[]
  role?: string
}

export type IpCreatorSocial = {
  platform: string
  url: string
}

export type IpMetaData = {
  title: string
  description: string
  createdAt: string
  creators: IpCreator[]
  image: string
  imageHash: string
  mediaUrl: string
  mediaHash: string
  mediaType: string
}

export type IpRelationship = {
  parentIpId: Address
  type: IpRelationshipType
}

export type IpMedia = {
  name: string
  url: string
  mimeType: string
}

// Enum for narrative relationships
export enum IpRelationshipEnum {
  APPEARS_IN = "APPEARS_IN",
  BELONGS_TO = "BELONGS_TO",
  PART_OF = "PART_OF",
  CONTINUES_FROM = "CONTINUES_FROM",
  LEADS_TO = "LEADS_TO",
  FORESHADOWS = "FORESHADOWS",
  CONFLICTS_WITH = "CONFLICTS_WITH",
  RESULTS_IN = "RESULTS_IN",
  DEPENDS_ON = "DEPENDS_ON",
  SETS_UP = "SETS_UP",
  FOLLOWS_FROM = "FOLLOWS_FROM",
  REVEALS_THAT = "REVEALS_THAT",
  DEVELOPS_OVER = "DEVELOPS_OVER",
  INTRODUCES = "INTRODUCES",
  RESOLVES_IN = "RESOLVES_IN",
  CONNECTS_TO = "CONNECTS_TO",
  RELATES_TO = "RELATES_TO",
  TRANSITIONS_FROM = "TRANSITIONS_FROM",
  INTERACTED_WITH = "INTERACTED_WITH",
  LEADS_INTO = "LEADS_INTO",
  PARALLEL = "PARALLEL",
}

// Type representing all valid narrative relation strings
export type IpRelationshipType = `${IpRelationshipEnum}`
