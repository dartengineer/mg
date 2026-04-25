import { SERVICES, STATS } from "../../constants";
import Ticker from "../../components/Ticker";

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 72 }}>
      {/* Hero */}
      <section
        style={{
          padding: "80px 80px 60px",
          background: "var(--black)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "45%",
            background: "var(--dark)",
            clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        />
        <div style={{ maxWidth: 1300, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <span className="section-num">OUR STORY</span>
          <h1
            style={{
              fontFamily: "var(--display)",
              fontSize: "clamp(60px, 10vw, 120px)",
              letterSpacing: "0.02em",
              lineHeight: 0.92,
              maxWidth: 700,
            }}
          >
            BUILT BY
            <br />
            CREATIVES
            <br />
            <span style={{ color: "var(--accent)" }}>FOR BRANDS.</span>
          </h1>
        </div>
      </section>

      <Ticker
        items={[
          "Brand Strategy",
          "Motion Design",
          "Visual Identity",
          "Creative Direction",
          "Video Production",
          "Digital Experience",
        ]}
        speed={25}
      />

      {/* Story */}
      <section style={{ padding: "100px 80px", background: "var(--dark)" }}>
        <div
          style={{
            maxWidth: 1300,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          <div>
            <span className="section-num">01 / THE STORY</span>
            <h2
              style={{
                fontFamily: "var(--display)",
                fontSize: 56,
                letterSpacing: "0.03em",
                lineHeight: 0.95,
                marginBottom: 32,
              }}
            >
              HOW WE STARTED
            </h2>
            {[
              "Founded in 2018 by a team of restless creatives tired of work that looked exactly like everyone else's, MG Cre8ive Hub was built on a single conviction: design should feel like it was made by humans, for humans.",
              "What began as a two-person freelance outfit in a shared workspace on Lekki Phase 1 has grown into a full-service creative studio trusted by startups, corporates, and cultural institutions across West Africa.",
              "We specialize in the intersection of visual identity, motion, and storytelling. Our work spans brand identities that have launched companies into new markets, motion graphics featured at international festivals, and video content that's been viewed over 50 million times.",
            ].map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "var(--body)",
                  fontSize: 15,
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.9,
                  marginBottom: 20,
                  fontWeight: 300,
                }}
              >
                {p}
              </p>
            ))}
          </div>
          <div>
            <div
              style={{
                background: "var(--accent)",
                padding: "56px 48px",
                marginBottom: 3,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--display)",
                  fontSize: 18,
                  letterSpacing: "0.1em",
                  color: "rgba(0,0,0,0.4)",
                  marginBottom: 12,
                }}
              >
                OUR VISION
              </div>
              <p
                style={{
                  fontFamily: "var(--body)",
                  fontSize: 18,
                  color: "#000",
                  lineHeight: 1.7,
                  fontWeight: 400,
                }}
              >
                "To be the creative engine behind Africa's most recognized brands — and to train
                the next generation of world-class African creatives."
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
              {STATS.map((s) => (
                <div
                  key={s.label}
                  style={{
                    padding: "32px 28px",
                    background: "var(--card)",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--display)",
                      fontSize: 48,
                      color: "#fff",
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 9,
                      color: "rgba(255,255,255,0.35)",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginTop: 6,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: "100px 80px", background: "var(--black)" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <span className="section-num">02 / THE TEAM</span>
          <h2
            style={{
              fontFamily: "var(--display)",
              fontSize: 64,
              letterSpacing: "0.03em",
              lineHeight: 0.95,
              marginBottom: 64,
            }}
          >
            MEET THE
            <br />
            CREATIVES
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 3,
            }}
          >
            {[
              { name: "Chidi Okafor", role: "Creative Director", color: "#FF4D00", initials: "CO" },
              {
                name: "Amara Nwosu",
                role: "Motion Designer",
                color: "#7C3AED",
                initials: "AN",
              },
              {
                name: "Seun Adeleke",
                role: "Brand Strategist",
                color: "#0EA5E9",
                initials: "SA",
              },
              {
                name: "Kemi Osagie",
                role: "Video Editor",
                color: "#10B981",
                initials: "KO",
              },
            ].map((m, i) => (
              <div key={i} style={{ cursor: "default" }}>
                <div
                  style={{
                    height: 280,
                    background: m.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--display)",
                    fontSize: 80,
                    color: "rgba(0,0,0,0.2)",
                    letterSpacing: "0.05em",
                    position: "relative",
                    overflow: "hidden",
                    transition: "transform 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  {m.initials}
                </div>
                <div style={{ padding: "20px 0" }}>
                  <div
                    style={{
                      fontFamily: "var(--display)",
                      fontSize: 22,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {m.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10,
                      color: m.color,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginTop: 4,
                    }}
                  >
                    {m.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        style={{
          padding: "80px",
          background: "var(--dark)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 3,
            }}
          >
            {[
              {
                icon: "◈",
                title: "Craft Over Commodity",
                desc: "We reject shortcuts. Every deliverable is hand-crafted with obsessive attention to detail.",
              },
              {
                icon: "◉",
                title: "Ideas First",
                desc: "Strong concepts outlast trends. We lead with thinking, then execute with precision.",
              },
              {
                icon: "◎",
                title: "Growth Mindset",
                desc: "We train our team, train our students, and stay relentlessly curious about what's next.",
              },
            ].map((v, i) => (
              <div
                key={i}
                style={{
                  padding: "48px 40px",
                  borderLeft: `3px solid ${["var(--accent)", "#7C3AED", "#10B981"][i]}`,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 24,
                    marginBottom: 16,
                    color: ["var(--accent)", "#7C3AED", "#10B981"][i],
                  }}
                >
                  {v.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: 26,
                    letterSpacing: "0.04em",
                    marginBottom: 14,
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--body)",
                    fontSize: 14,
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.75,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
