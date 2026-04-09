import { LedgerEvent } from "@/lib/types";

export const demoUsers = {
  alice: "alice",
  bob: "bob",
  charlie: "charlie",
  dylan: "dylan",
};

export const sessionOneEvents: LedgerEvent[] = [
  { id: "1", sessionId: "s1", userId: demoUsers.alice, type: "BUY_IN", amount: 20, createdAt: "2026-04-01T20:00:00Z", createdBy: "alice" },
  { id: "2", sessionId: "s1", userId: demoUsers.bob, type: "BUY_IN", amount: 20, createdAt: "2026-04-01T20:00:00Z", createdBy: "bob" },
  { id: "3", sessionId: "s1", userId: demoUsers.charlie, type: "BUY_IN", amount: 20, createdAt: "2026-04-01T20:00:00Z", createdBy: "charlie" },
  { id: "4", sessionId: "s1", userId: demoUsers.alice, type: "REBUY", amount: 20, createdAt: "2026-04-01T21:00:00Z", createdBy: "alice" },
  { id: "5", sessionId: "s1", userId: demoUsers.alice, type: "CASH_OUT", amount: 55, createdAt: "2026-04-01T23:30:00Z", createdBy: "alice" },
  { id: "6", sessionId: "s1", userId: demoUsers.bob, type: "CASH_OUT", amount: 10, createdAt: "2026-04-01T23:30:00Z", createdBy: "bob" },
  { id: "7", sessionId: "s1", userId: demoUsers.charlie, type: "CASH_OUT", amount: 15, createdAt: "2026-04-01T23:30:00Z", createdBy: "charlie" },
];

export const sessionTwoEvents: LedgerEvent[] = [
  { id: "8", sessionId: "s2", userId: demoUsers.alice, type: "BUY_IN", amount: 10, createdAt: "2026-04-04T20:00:00Z", createdBy: "alice" },
  { id: "9", sessionId: "s2", userId: demoUsers.bob, type: "BUY_IN", amount: 20, createdAt: "2026-04-04T20:00:00Z", createdBy: "bob" },
  { id: "10", sessionId: "s2", userId: demoUsers.dylan, type: "BUY_IN", amount: 30, createdAt: "2026-04-04T20:00:00Z", createdBy: "dylan" },
  { id: "11", sessionId: "s2", userId: demoUsers.alice, type: "CASH_OUT", amount: 5, createdAt: "2026-04-04T22:30:00Z", createdBy: "alice" },
  { id: "12", sessionId: "s2", userId: demoUsers.bob, type: "CASH_OUT", amount: 25, createdAt: "2026-04-04T22:30:00Z", createdBy: "bob" },
  { id: "13", sessionId: "s2", userId: demoUsers.dylan, type: "CASH_OUT", amount: 30, createdAt: "2026-04-04T22:30:00Z", createdBy: "dylan" },
];
