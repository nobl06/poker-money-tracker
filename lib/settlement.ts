import { TransferSuggestion } from "@/lib/types";

export function computeTransfers(inputBalances: Map<string, number>): TransferSuggestion[] {
  const creditors = [...inputBalances.entries()]
    .filter(([, amount]) => amount > 0)
    .map(([userId, amount]) => ({ userId, amount }))
    .sort((a, b) => b.amount - a.amount || a.userId.localeCompare(b.userId));

  const debtors = [...inputBalances.entries()]
    .filter(([, amount]) => amount < 0)
    .map(([userId, amount]) => ({ userId, amount: Math.abs(amount) }))
    .sort((a, b) => b.amount - a.amount || a.userId.localeCompare(b.userId));

  const transfers: TransferSuggestion[] = [];
  let i = 0;
  let j = 0;

  while (i < debtors.length && j < creditors.length) {
    const debtor = debtors[i];
    const creditor = creditors[j];
    const amount = Math.min(debtor.amount, creditor.amount);

    if (amount > 0) {
      transfers.push({
        fromUserId: debtor.userId,
        toUserId: creditor.userId,
        amount,
      });
    }

    debtor.amount -= amount;
    creditor.amount -= amount;

    if (debtor.amount === 0) i += 1;
    if (creditor.amount === 0) j += 1;
  }

  return transfers;
}
