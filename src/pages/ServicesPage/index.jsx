import { useState } from "react";
import { SERVICES } from "../../constants";
import Ticker from "../../components/Ticker";

export default function ServicesPage({ setPage }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "80px 80px 40px", background: "var(--black)" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <span className="section-num">SERVICES</span>
          <h1
            style={{
              fontFamily: "var(--display)",
              fontSize: "clamp(60px, 10vw, 120px)",
              letterSpacing: "0.02em",
              lineHeight: 0.92,
            }}
          >
            SERVICE
            <br />
            <span style={{ color: "var(--accent)" }}>OFFERING</span>
          </h1>
          <p
            style={{
              fontFamily: "var(--body)",
              fontSize: 15,
              color: "rgba(255,255,255,0.45)",
              maxWidth: 520,
              lineHeight: 1.8,
              marginTop: 28,
              fontWeight: 300,
            }}
          >
            Full-service creative solutions for brands that want to stand out. From concept to
            delivery, we handle it all.
          </p>
        </div>
      </section>

      <Ticker items={SERVICES.map((s) => s.title)} speed={20} />

      <section style={{ padding: "80px", background: "var(--dark)" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          {SERVICES.map((s, i) => (
            <div
              key={s.id}
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "40px 48px",
                borderBottom: "1px solid var(--border)",
                background: hovered === s.id ? "var(--card)" : "transparent",
                transition: "background 0.3s, padding 0.3s",
                cursor: "default",
                paddingLeft: hovered === s.id ? 64 : 48,
                animation: `fadeUp 0.6s ${i * 0.08}s ease both`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 40, flex: 1 }}>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    color: "rgba(255,255,255,0.25)",
                    minWidth: 32,
                  }}
                >
                  0{i + 1}
                </span>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 20,
                    color: s.color,
                    opacity: hovered === s.id ? 1 : 0.4,
                    transition: "opacity 0.3s",
                  }}
                >
                  {s.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: 40,
                    letterSpacing: "0.04em",
                    color:
                      hovered === s.id ? "#fff" : "rgba(255,255,255,0.7)",
                    transition: "color 0.3s",
                  }}
                >
                  {s.title}
                </h3>
              </div>
              <div
                style={{
                  flex: 1,
                  padding: "0 60px",
                  opacity: hovered === s.id ? 1 : 0,
                  transition: "opacity 0.3s",
                  maxWidth: 400,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--body)",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.75,
                  }}
                >
                  {s.desc}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                  maxWidth: 260,
                  justifyContent: "flex-end",
                }}
              >
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="tag"
                    style={{
                      borderColor: hovered === s.id ? s.color + "44" : "rgba(255,255,255,0.08)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Cards */}
      <section style={{ padding: "80px", background: "var(--black)" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--display)",
              fontSize: 56,
              letterSpacing: "0.03em",
              marginBottom: 48,
            }}
          >
            IN DETAIL
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 3,
            }}
          >
            {SERVICES.map((s, i) => (
              <div
                key={s.id}
                style={{
                  padding: "48px 40px",
                  background: "var(--card)",
                  borderTop: `3px solid ${s.color}`,
                  animation: `scaleIn 0.6s ${i * 0.08}s ease both`,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 32,
                    color: s.color,
                    marginBottom: 20,
                  }}
                >
                  {s.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: 28,
                    letterSpacing: "0.04em",
                    marginBottom: 14,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--body)",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.8,
                    marginBottom: 24,
                  }}
                >
                  {s.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: 6,
                    flexWrap: "wrap",
                    marginBottom: 32,
                  }}
                >
                  {s.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  className="btn btn-primary"
                  style={{ fontSize: 11, padding: "12px 24px" }}
                  onClick={() => window.scrollTo({ top: 0 })}
                >
                  Hire Us →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
