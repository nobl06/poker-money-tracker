import { StatCard } from "@/components/StatCard";
import { sessionOneEvents, sessionTwoEvents } from "@/lib/demo-data";
import { aggregateNetByUser, computeSessionBalances } from "@/lib/ledger";
import { computeTransfers } from "@/lib/settlement";

export default function DashboardPage() {
  const sessionOne = computeSessionBalances(sessionOneEvents);
  const sessionTwo = computeSessionBalances(sessionTwoEvents);
  const totals = aggregateNetByUser([sessionOne, sessionTwo]);
  const transfers = computeTransfers(totals);
  const leaderboard = [...totals.entries()].sort((a, b) => b[1] - a[1]);

  return (
    <main className="grid" style={{ gap: 24 }}>
      <div className="section-title">
        <div>
          <div className="badge">Demo group</div>
          <h1 style={{ marginBottom: 8 }}>Friday Home Game</h1>
          <div className="muted">Two example sessions, rolling balances, and computed settlements.</div>
        </div>
      </div>

      <section className="grid grid-3">
        <StatCard title="Tracked sessions" value="2" subtitle="Both sessions reconcile exactly." />
        <StatCard title="Outstanding transfers" value={String(transfers.length)} subtitle="Generated from cumulative balances." />
        <StatCard title="Players" value={String(leaderboard.length)} subtitle="Alice, Bob, Charlie, Dylan." />
      </section>

      <section className="grid grid-2">
        <div className="card">
          <div className="section-title"><h2>Leaderboard</h2></div>
          <table className="table">
            <thead>
              <tr><th>Player</th><th>Net</th></tr>
            </thead>
            <tbody>
              {leaderboard.map(([userId, net]) => (
                <tr key={userId}>
                  <td>{userId}</td>
                  <td className={net >= 0 ? "positive" : "negative"}>{net >= 0 ? `+${net}` : net}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card">
          <div className="section-title"><h2>Settlement suggestions</h2></div>
          <table className="table">
            <thead>
              <tr><th>From</th><th>To</th><th>Amount</th></tr>
            </thead>
            <tbody>
              {transfers.map((transfer, index) => (
                <tr key={`${transfer.fromUserId}-${transfer.toUserId}-${index}`}>
                  <td>{transfer.fromUserId}</td>
                  <td>{transfer.toUserId}</td>
                  <td>{transfer.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid grid-2">
        <div className="card">
          <div className="section-title"><h2>Session 1 reconciliation</h2></div>
          <pre>{JSON.stringify(sessionOne, null, 2)}</pre>
        </div>
        <div className="card">
          <div className="section-title"><h2>Session 2 reconciliation</h2></div>
          <pre>{JSON.stringify(sessionTwo, null, 2)}</pre>
        </div>
      </section>
    </main>
  );
}
