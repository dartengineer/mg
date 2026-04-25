import { useState } from "react";
import { CONFIG } from "../../constants";
import Ticker from "../../components/Ticker";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  const socials = [
    { name: "Instagram", handle: "@mgcreativehub", href: CONFIG.instagram },
    { name: "Behance", handle: "mgcreativehub", href: CONFIG.behance },
    { name: "Dribbble", handle: "mgcreativehub", href: CONFIG.dribbble },
    { name: "YouTube", handle: "@mgcreativehub", href: CONFIG.youtube },
  ];

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "80px 80px 0", background: "var(--black)" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <span className="section-num">CONTACT</span>
          <h1
            style={{
              fontFamily: "var(--display)",
              fontSize: "clamp(60px, 10vw, 120px)",
              letterSpacing: "0.02em",
              lineHeight: 0.92,
              paddingBottom: 60,
            }}
          >
            SAY
            <br />
            <span style={{ color: "var(--accent)" }}>HELLO.</span>
          </h1>
        </div>
      </section>

      <Ticker
        items={[
          "Instagram",
          "Behance",
          "Dribbble",
          "YouTube",
          "WhatsApp",
          CONFIG.email,
          CONFIG.phone,
          CONFIG.location,
        ]}
        speed={18}
      />

      <section style={{ padding: "80px", background: "var(--dark)" }}>
        <div
          style={{
            maxWidth: 1300,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
          }}
        >
          {/* Left Info */}
          <div>
            <div style={{ marginBottom: 60 }}>
              {[
                {
                  label: "Email",
                  value: CONFIG.email,
                  href: `mailto:${CONFIG.email}`,
                },
                {
                  label: "Phone",
                  value: CONFIG.phone,
                  href: `tel:${CONFIG.phone}`,
                },
                { label: "Location", value: CONFIG.location, href: null },
              ].map((c) => (
                <div
                  key={c.label}
                  style={{
                    marginBottom: 32,
                    paddingBottom: 32,
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10,
                      letterSpacing: "0.2em",
                      color: "var(--accent)",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    {c.label}
                  </div>
                  {c.href ? (
                    <a
                      href={c.href}
                      style={{
                        fontFamily: "var(--display)",
                        fontSize: 28,
                        letterSpacing: "0.04em",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "color 0.25s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--accent)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#fff")
                      }
                    >
                      {c.value}
                    </a>
                  ) : (
                    <div
                      style={{
                        fontFamily: "var(--display)",
                        fontSize: 24,
                        letterSpacing: "0.04em",
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      {c.value}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  color: "rgba(255,255,255,0.3)",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                SOCIAL MEDIA
              </div>
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px 0",
                    borderBottom: "1px solid var(--border)",
                    textDecoration: "none",
                    transition: "padding-left 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.paddingLeft = "12px";
                    const sn = e.currentTarget.querySelector(".sn");
                    if (sn) sn.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.paddingLeft = "0";
                    const sn = e.currentTarget.querySelector(".sn");
                    if (sn)
                      sn.style.color = "rgba(255,255,255,0.4)";
                  }}
                >
                  <span
                    className="sn"
                    style={{
                      fontFamily: "var(--display)",
                      fontSize: 20,
                      letterSpacing: "0.05em",
                      color: "rgba(255,255,255,0.4)",
                      transition: "color 0.3s",
                    }}
                  >
                    {s.name}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10,
                      color: "var(--accent)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {s.handle}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div>
            {sent ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "80px 40px",
                  background: "var(--card)",
                  border: "1px solid rgba(16,185,129,0.3)",
                  animation: "fadeUp 0.6s ease",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: 80,
                    color: "#10B981",
                    marginBottom: 20,
                  }}
                >
                  ✓
                </div>
                <h2
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: 48,
                    letterSpacing: "0.04em",
                    marginBottom: 16,
                  }}
                >
                  MESSAGE SENT
                </h2>
                <p
                  style={{
                    fontFamily: "var(--body)",
                    fontSize: 14,
                    color: "rgba(255,255,255,0.4)",
                    lineHeight: 1.8,
                  }}
                >
                  We'll get back to you within 24 hours. For urgent matters, reach us on
                  WhatsApp.
                </p>
              </div>
            ) : (
              <div>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    color: "rgba(255,255,255,0.3)",
                    textTransform: "uppercase",
                    marginBottom: 32,
                  }}
                >
                  SEND A MESSAGE
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  {[
                    {
                      label: "Name",
                      key: "name",
                      placeholder: "Your name",
                      type: "text",
                    },
                    {
                      label: "Email",
                      key: "email",
                      placeholder: "you@example.com",
                      type: "email",
                    },
                    {
                      label: "Subject",
                      key: "subject",
                      placeholder: "What's this about?",
                      type: "text",
                    },
                  ].map((f) => (
                    <div key={f.key}>
                      <label
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: 10,
                          letterSpacing: "0.2em",
                          color: "rgba(255,255,255,0.3)",
                          textTransform: "uppercase",
                          display: "block",
                          marginBottom: 6,
                        }}
                      >
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        value={form[f.key]}
                        onChange={(e) =>
                          setForm({ ...form, [f.key]: e.target.value })
                        }
                        placeholder={f.placeholder}
                      />
                    </div>
                  ))}
                  <div>
                    <label
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 10,
                        letterSpacing: "0.2em",
                        color: "rgba(255,255,255,0.3)",
                        textTransform: "uppercase",
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      rows={5}
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>
                  <button
                    className="btn btn-primary"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      padding: "18px",
                      marginTop: 8,
                    }}
                    onClick={handleSubmit}
                  >
                    Send Message →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
