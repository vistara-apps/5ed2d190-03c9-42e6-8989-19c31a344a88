export interface User {
  userId: string;
  farcasterId?: string;
  ethAddress?: string;
  usageCredits?: number;
  subscriptionTier?: string;
}

export interface Sample {
  sampleId: string;
  originalTrackId?: string;
  sampleStart: number;
  sampleEnd: number;
  originalArtist: string;
  isCleared: boolean;
  clearanceProcess?: string;
  rightsHolder?: string;
  similarityScore?: number;
}

export interface Remix {
  remixId: string;
  userId: string;
  title: string;
  audioUrl: string;
  analyzed: boolean;
  riskScore?: number;
}

export type ClearanceStatus = 'cleared' | 'uncleared' | 'unknown';
export type RiskLevel = 'low' | 'medium' | 'high';
