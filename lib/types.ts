export type LedgerEventType = "BUY_IN" | "REBUY" | "CASH_OUT" | "ADJUSTMENT";

export interface LedgerEvent {
  id: string;
  sessionId: string;
  userId: string;
  type: LedgerEventType;
  amount: number;
  createdAt: string;
  createdBy: string;
  metadata?: Record<string, unknown>;
}

export interface PlayerSessionBalance {
  userId: string;
  totalBuyIn: number;
  totalCashOut: number;
  net: number;
}

export interface SessionComputationResult {
  balances: PlayerSessionBalance[];
  totalBuyIn: number;
  totalCashOut: number;
  discrepancy: number;
  isBalanced: boolean;
}

export interface TransferSuggestion {
  fromUserId: string;
  toUserId: string;
  amount: number;
}
