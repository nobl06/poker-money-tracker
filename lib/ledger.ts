import { LedgerEvent, PlayerSessionBalance, SessionComputationResult } from "@/lib/types";

function emptyBalance(userId: string): PlayerSessionBalance {
  return { userId, totalBuyIn: 0, totalCashOut: 0, net: 0 };
}

export function computeSessionBalances(events: LedgerEvent[]): SessionComputationResult {
  const byUser = new Map<string, PlayerSessionBalance>();

  for (const event of events) {
    const row = byUser.get(event.userId) ?? emptyBalance(event.userId);

    switch (event.type) {
      case "BUY_IN":
      case "REBUY":
        if (event.amount < 0) throw new Error("Buy-ins must be non-negative.");
        row.totalBuyIn += event.amount;
        break;
      case "CASH_OUT":
        if (event.amount < 0) throw new Error("Cash-outs must be non-negative.");
        row.totalCashOut += event.amount;
        break;
      case "ADJUSTMENT":
        if (event.amount >= 0) {
          row.totalCashOut += event.amount;
        } else {
          row.totalBuyIn += Math.abs(event.amount);
        }
        break;
      default: {
        const exhaustive: never = event.type;
        throw new Error(`Unhandled event type: ${exhaustive}`);
      }
    }

    row.net = row.totalCashOut - row.totalBuyIn;
    byUser.set(event.userId, row);
  }

  const balances = [...byUser.values()].sort((a, b) => a.userId.localeCompare(b.userId));
  const totalBuyIn = balances.reduce((sum, row) => sum + row.totalBuyIn, 0);
  const totalCashOut = balances.reduce((sum, row) => sum + row.totalCashOut, 0);
  const discrepancy = totalCashOut - totalBuyIn;

  return {
    balances,
    totalBuyIn,
    totalCashOut,
    discrepancy,
    isBalanced: discrepancy === 0,
  };
}

export function aggregateNetByUser(sessionResults: SessionComputationResult[]): Map<string, number> {
  const totals = new Map<string, number>();
  for (const session of sessionResults) {
    for (const balance of session.balances) {
      totals.set(balance.userId, (totals.get(balance.userId) ?? 0) + balance.net);
    }
  }
  return totals;
}
