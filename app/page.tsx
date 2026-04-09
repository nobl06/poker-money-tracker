import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <span className="badge">Portfolio-ready MVP scaffold</span>
        <h1>Poker Money Tracker</h1>
        <p>
          A shared ledger and settlement platform for recurring poker cash games. Track buy-ins,
          rebuys, cash-outs, discrepancies, and rolling debts across many sessions.
        </p>
        <div className="actions">
          <Link href="/dashboard" className="button">Open demo dashboard</Link>
          <a href="https://github.com/nobl06/poker-money-tracker" className="button secondary">GitHub repo</a>
        </div>
      </section>

      <section className="grid grid-3">
        <div className="card">
          <h3>Ledger-first</h3>
          <p className="muted">Event-based accounting for auditability and clean recomputation.</p>
        </div>
        <div className="card">
          <h3>Settlement engine</h3>
          <p className="muted">Greedy transfer generation to reduce friction and show who pays whom.</p>
        </div>
        <div className="card">
          <h3>Production-minded</h3>
          <p className="muted">Next.js, Prisma, PostgreSQL, tests, and a serious architecture roadmap.</p>
        </div>
      </section>
    </main>
  );
}
