import { SERVICES, PORTFOLIO, STATS, COURSES } from "../../constants";
import Ticker from "../../components/Ticker";

export default function HomePage({ setPage }) {
  const tickerItems = [
    "Graphic Design",
    "Motion Graphics",
    "Video Editing",
    "Brand Strategy",
    "UI/UX Design",
    "Content Creation",
    "Visual Storytelling",
    "Creative Direction",
  ];

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "var(--black)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Gradient blobs */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "-10%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,77,0,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "-5%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            padding: "120px 80px 60px",
            maxWidth: 1400,
            margin: "0 auto",
            width: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 28,
                animation: "fadeIn 0.8s ease",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: 32,
                  height: 1,
                  background: "var(--accent)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: "0.25em",
                  color: "var(--accent)",
                  textTransform: "uppercase",
                }}
              >
                Creative Studio — Lagos, Nigeria
              </span>
            </div>
            <h1
              style={{
                fontFamily: "var(--display)",
                fontSize: "clamp(72px, 12vw, 160px)",
                lineHeight: 0.92,
                letterSpacing: "0.02em",
                color: "#fff",
                animation: "fadeUp 0.9s ease both",
              }}
            >
              WE
              <br />
              <span
                style={{
                  WebkitTextStroke: "1px rgba(255,255,255,0.3)",
                  color: "transparent",
                }}
              >
                MAKE IT
              </span>
              <br />
              <span style={{ color: "var(--accent)" }}>MOVE.</span>
            </h1>
            <p
              style={{
                fontFamily: "var(--body)",
                fontSize: 16,
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.8,
                maxWidth: 480,
                margin: "36px 0 48px",
                fontWeight: 300,
                animation: "fadeUp 0.9s 0.15s ease both",
              }}
            >
              Graphic design, motion graphics, video editing, and brand strategy for companies
              that refuse to be ordinary.
            </p>
            <div
              style={{
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
                animation: "fadeUp 0.9s 0.25s ease both",
              }}
            >
              <button className="btn btn-primary" onClick={() => setPage("Hire Us")}>
                Hire Us →
              </button>
              <button className="btn btn-ghost" onClick={() => setPage("Portfolio")}>
                View Portfolio
              </button>
              <button className="btn btn-ghost" onClick={() => setPage("Academy")}>
                Join Academy
              </button>
            </div>
          </div>

          {/* Featured work grid */}
          <div
            style={{
              flex: "0 0 440px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              marginLeft: 60,
              animation: "slideLeft 0.9s 0.1s ease both",
            }}
          >
            {PORTFOLIO.slice(0, 4).map((p, i) => (
              <div
                key={p.id}
                style={{
                  background: p.color,
                  aspectRatio: i === 0 ? "1/1.4" : "1/1",
                  gridRow: i === 0 ? "1 / 3" : "auto",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.3s var(--spring)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: 16,
                    background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 9,
                      letterSpacing: "0.15em",
                      color: "rgba(255,255,255,0.6)",
                      textTransform: "uppercase",
                      marginBottom: 4,
                    }}
                  >
                    {p.cat}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--body)",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#fff",
                      lineHeight: 1.3,
                    }}
                  >
                    {p.title}
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "30%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    opacity: 0.15,
                    fontSize: 80,
                  }}
                >
                  {["◈", "◉", "▶", "◎"][i]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            display: "flex",
            animation: "fadeUp 1s 0.4s ease both",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                padding: "28px 0",
                textAlign: "center",
                borderRight:
                  i < STATS.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--display)",
                  fontSize: 44,
                  letterSpacing: "0.03em",
                  color: "#fff",
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  letterSpacing: "0.15em",
                  color: "rgba(255,255,255,0.35)",
                  textTransform: "uppercase",
                  marginTop: 4,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Ticker items={tickerItems} />

      {/* Services Preview */}
      <section style={{ padding: "100px 80px", background: "var(--dark)" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 64,
            }}
          >
            <div>
              <span className="section-num">01 / SERVICES</span>
              <h2
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "clamp(48px, 6vw, 80px)",
                  letterSpacing: "0.03em",
                  lineHeight: 0.95,
                }}
              >
                WHAT
                <br />
                WE DO
              </h2>
            </div>
            <button
              className="btn btn-ghost"
              onClick={() => setPage("Services")}
            >
              All Services →
            </button>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 2,
            }}
          >
            {SERVICES.slice(0, 6).map((s, i) => (
              <div
                key={s.id}
                style={{
                  padding: "40px 36px",
                  background: "var(--card)",
                  borderLeft: `3px solid transparent`,
                  transition: "all 0.3s var(--ease)",
                  cursor: "default",
                  animation: `fadeUp 0.6s ${i * 0.08}s ease both`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderLeftColor = s.color;
                  e.currentTarget.style.background = "#1A1D21";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderLeftColor = "transparent";
                  e.currentTarget.style.background = "var(--card)";
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 28,
                    color: s.color,
                    marginBottom: 20,
                    opacity: 0.8,
                  }}
                >
                  {s.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: 28,
                    letterSpacing: "0.04em",
                    marginBottom: 12,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--body)",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.75,
                    marginBottom: 20,
                  }}
                >
                  {s.short}
                </p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {s.tags.slice(0, 3).map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section style={{ padding: "100px 80px", background: "var(--black)" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 64,
            }}
          >
            <div>
              <span className="section-num">02 / PORTFOLIO</span>
              <h2
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "clamp(48px, 6vw, 80px)",
                  letterSpacing: "0.03em",
                  lineHeight: 0.95,
                }}
              >
                SELECTED
                <br />
                WORKS
              </h2>
            </div>
            <button className="btn btn-ghost" onClick={() => setPage("Portfolio")}>
              View All →
            </button>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr",
              gridTemplateRows: "auto auto",
              gap: 3,
            }}
          >
            {PORTFOLIO.slice(0, 5).map((p, i) => (
              <div
                key={p.id}
                style={{
                  background: p.color,
                  gridColumn: i === 0 ? "1" : "auto",
                  gridRow: i === 0 ? "1 / 3" : "auto",
                  aspectRatio: i === 0 ? "4/5" : "4/3",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "opacity 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: 24,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)",
                  }}
                >
                  <span
                    className="tag"
                    style={{ marginBottom: 8, alignSelf: "flex-start" }}
                  >
                    {p.cat}
                  </span>
                  <div
                    style={{
                      fontFamily: "var(--display)",
                      fontSize: 22,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {p.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--body)",
                      fontSize: 12,
                      color: "rgba(255,255,255,0.55)",
                      marginTop: 4,
                    }}
                  >
                    {p.desc} — {p.year}
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "35%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    opacity: 0.08,
                    fontFamily: "var(--display)",
                    fontSize: 100,
                  }}
                >
                  {["VX", "◉", "▶", "◎", "◈"][i]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academy CTA */}
      <section
        style={{
          padding: "100px 80px",
          background: "var(--dark)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.3) 0, rgba(255,255,255,0.3) 1px, transparent 1px, transparent 60px)",
          }}
        />
        <div
          style={{
            maxWidth: 1300,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: 80,
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ flex: 1 }}>
            <span className="section-num">03 / ACADEMY</span>
            <h2
              style={{
                fontFamily: "var(--display)",
                fontSize: "clamp(48px, 6vw, 80px)",
                letterSpacing: "0.03em",
                lineHeight: 0.95,
                marginBottom: 24,
              }}
            >
              LEARN FROM
              <br />
              THE BEST.
            </h2>
            <p
              style={{
                fontFamily: "var(--body)",
                fontSize: 15,
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.8,
                maxWidth: 480,
                marginBottom: 40,
                fontWeight: 300,
              }}
            >
              Vortex Academy offers hands-on training in graphic design, motion graphics,
              video editing, and brand strategy. Industry-ready skills from day one.
            </p>
            <div style={{ display: "flex", gap: 16 }}>
              <button
                className="btn btn-primary"
                onClick={() => setPage("Academy")}
              >
                Explore Academy →
              </button>
              <button className="btn btn-ghost" onClick={() => setPage("Academy")}>
                View Courses
              </button>
            </div>
          </div>
          <div style={{ flex: "0 0 45%" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
              {COURSES.map((c) => (
                <div
                  key={c.id}
                  style={{
                    padding: "32px 28px",
                    background: "var(--card)",
                    borderTop: `3px solid ${c.color}`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 24,
                      color: c.color,
                      marginBottom: 12,
                    }}
                  >
                    {c.icon}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--display)",
                      fontSize: 18,
                      letterSpacing: "0.04em",
                      marginBottom: 6,
                    }}
                  >
                    {c.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10,
                      color: "rgba(255,255,255,0.35)",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {c.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section
        style={{
          padding: "60px 80px",
          borderTop: "1px solid var(--border)",
          background: "var(--black)",
        }}
      >
        <div
          style={{
            maxWidth: 1300,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontFamily: "var(--display)",
              fontSize: 28,
              letterSpacing: "0.05em",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            FOLLOW THE WORK
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {[
              { name: "Instagram", href: "https://instagram.com/vortexcreative" },
              { name: "Behance", href: "https://behance.net/vortexcreative" },
              { name: "Dribbble", href: "https://dribbble.com/vortexcreative" },
              { name: "YouTube", href: "https://youtube.com/@vortexcreative" },
            ].map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
                style={{ padding: "10px 20px", fontSize: 11, letterSpacing: "0.1em" }}
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
