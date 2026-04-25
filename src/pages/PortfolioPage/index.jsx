import { useState } from "react";
import { PORTFOLIO } from "../../constants";

export default function PortfolioPage() {
  const cats = ["All", "Branding", "Design", "Motion", "Video"];
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.cat === active);

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "80px 80px 40px", background: "var(--black)" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <span className="section-num">PORTFOLIO</span>
          <h1
            style={{
              fontFamily: "var(--display)",
              fontSize: "clamp(60px, 10vw, 120px)",
              letterSpacing: "0.02em",
              lineHeight: 0.92,
              marginBottom: 48,
            }}
          >
            SELECTED
            <br />
            <span style={{ color: "var(--accent)" }}>WORKS</span>
          </h1>
          {/* Filter */}
          <div style={{ display: "flex", gap: 8, marginBottom: 4 }}>
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "10px 20px",
                  background: active === c ? "var(--accent)" : "transparent",
                  color: active === c ? "#fff" : "rgba(255,255,255,0.4)",
                  border:
                    active === c
                      ? "none"
                      : "1px solid rgba(255,255,255,0.1)",
                  cursor: "pointer",
                  transition: "all 0.25s",
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 80px 80px", background: "var(--black)" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
              gap: 3,
            }}
          >
            {filtered.map((p, i) => (
              <div
                key={p.id}
                style={{
                  background: p.color,
                  aspectRatio: "16/10",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  animation: `scaleIn 0.5s ${i * 0.06}s ease both`,
                }}
                onMouseEnter={(e) => {
                  const overlay = e.currentTarget.querySelector(".overlay");
                  if (overlay) overlay.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  const overlay = e.currentTarget.querySelector(".overlay");
                  if (overlay) overlay.style.opacity = "0";
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "30%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    opacity: 0.1,
                    fontFamily: "var(--display)",
                    fontSize: 120,
                  }}
                >
                  {["◈", "◉", "▶", "◎", "▦", "⬡", "◈", "◉"][i]}
                </div>
                <div
                  className="overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.75)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: 0,
                    transition: "opacity 0.3s",
                  }}
                >
                  <span className="tag" style={{ marginBottom: 12 }}>
                    {p.cat}
                  </span>
                  <div
                    style={{
                      fontFamily: "var(--display)",
                      fontSize: 22,
                      letterSpacing: "0.04em",
                      textAlign: "center",
                      padding: "0 24px",
                    }}
                  >
                    {p.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--body)",
                      fontSize: 12,
                      color: "rgba(255,255,255,0.5)",
                      marginTop: 8,
                    }}
                  >
                    {p.desc}
                  </div>
                  <span
                    style={{
                      marginTop: 20,
                      fontFamily: "var(--mono)",
                      fontSize: 10,
                      color: p.color,
                      letterSpacing: "0.2em",
                    }}
                  >
                    {p.year}
                  </span>
                </div>
                <div style={{ position: "absolute", bottom: 16, left: 20 }}>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 9,
                      letterSpacing: "0.15em",
                      color: "rgba(255,255,255,0.5)",
                      textTransform: "uppercase",
                    }}
                  >
                    {p.cat}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: "80px",
                color: "rgba(255,255,255,0.2)",
                fontFamily: "var(--display)",
                fontSize: 32,
              }}
            >
              NO WORKS IN THIS CATEGORY YET
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
