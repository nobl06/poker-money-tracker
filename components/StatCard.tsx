export function StatCard({ title, value, subtitle }: { title: string; value: string; subtitle: string }) {
  return (
    <div className="card">
      <div className="muted" style={{ fontSize: 14 }}>{title}</div>
      <div style={{ fontSize: 34, fontWeight: 800, marginTop: 8 }}>{value}</div>
      <div className="muted" style={{ marginTop: 8 }}>{subtitle}</div>
    </div>
  );
}
