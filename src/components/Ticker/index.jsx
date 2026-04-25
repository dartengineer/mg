export default function Ticker({ items, speed = 30 }) {
  const list = [...items, ...items];

  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "14px 0",
        background: "var(--dark)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 0,
          animation: `ticker ${speed}s linear infinite`,
          whiteSpace: "nowrap",
        }}
      >
        {list.map((t, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              padding: "0 32px",
            }}
          >
            {t} <span style={{ color: "var(--accent)", margin: "0 4px" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
