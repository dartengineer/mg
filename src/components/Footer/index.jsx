import { CONFIG, SERVICES } from "../../constants";

export default function Footer({ setPage }) {
  const links = ["Home", "About", "Services", "Portfolio", "Academy", "Hire Us", "Contact"];

  return (
    <footer
      style={{
        background: "var(--dark)",
        borderTop: "1px solid var(--border)",
        padding: "80px",
      }}
    >
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 60,
            marginBottom: 60,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--display)",
                fontSize: 36,
                letterSpacing: "0.05em",
                marginBottom: 6,
              }}
            >
              {CONFIG.companyName}
            </div>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                color: "var(--accent)",
                letterSpacing: "0.25em",
                marginBottom: 24,
              }}
            >
              CREATIVE STUDIO
            </div>
            <p
              style={{
                fontFamily: "var(--body)",
                fontSize: 13,
                color: "rgba(255,255,255,0.35)",
                lineHeight: 1.8,
                maxWidth: 280,
                fontWeight: 300,
              }}
            >
              A full-service creative studio and training academy built for brands that dare to
              be different.
            </p>
          </div>

          {[
            {
              heading: "Navigate",
              items: links.map((l) => ({
                label: l,
                action: () => setPage(l),
              })),
            },
            {
              heading: "Services",
              items: SERVICES.map((s) => ({
                label: s.title,
                action: () => setPage("Services"),
              })),
            },
            {
              heading: "Connect",
              items: [
                { label: CONFIG.phone, action: null },
                { label: CONFIG.email, action: null },
                { label: "Lagos, Nigeria", action: null },
              ],
            },
          ].map((col) => (
            <div key={col.heading}>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  color: "rgba(255,255,255,0.25)",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                {col.heading}
              </div>
              {col.items.map((item, i) => (
                <button
                  key={i}
                  onClick={item.action || undefined}
                  style={{
                    display: "block",
                    background: "none",
                    border: "none",
                    fontFamily: "var(--body)",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.4)",
                    cursor: item.action ? "pointer" : "default",
                    marginBottom: 10,
                    textAlign: "left",
                    padding: 0,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (item.action) e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 32,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              color: "rgba(255,255,255,0.2)",
              letterSpacing: "0.1em",
            }}
          >
            © 2024 {CONFIG.companyName} CREATIVE STUDIO. ALL RIGHTS RESERVED.
          </div>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              color: "rgba(255,255,255,0.2)",
              letterSpacing: "0.1em",
            }}
          >
            CRAFTED IN LAGOS, NIGERIA ✦
          </div>
        </div>
      </div>
    </footer>
  );
}
