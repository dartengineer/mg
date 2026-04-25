import { useState } from "react";
import { CONFIG, SERVICES } from "../../constants";
import Ticker from "../../components/Ticker";

export default function HirePage() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    phone: "",
    service: "",
    desc: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.service) e.service = "Please select a service";
    if (!form.desc.trim()) e.desc = "Please describe your project";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }

    const msg = `Hello Vortex Studio! 🔥\n\nI'd like to discuss a project.\n\n*Name:* ${form.name}\n${form.business ? `*Business:* ${form.business}\n` : ""}*Phone:* ${form.phone}\n*Service Needed:* ${form.service}\n\n*Project Description:*\n${form.desc}\n\nLooking forward to working together!`;

    window.open(
      `https://wa.me/${CONFIG.adminPhone}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <div style={{ paddingTop: 72 }}>
      <section
        style={{
          padding: "80px 80px 0",
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
            width: 3,
            background: "var(--accent)",
          }}
        />
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <span className="section-num">HIRE US</span>
          <h1
            style={{
              fontFamily: "var(--display)",
              fontSize: "clamp(60px, 10vw, 120px)",
              letterSpacing: "0.02em",
              lineHeight: 0.92,
              marginBottom: 24,
            }}
          >
            LET'S BUILD
            <br />
            SOMETHING
            <br />
            <span style={{ color: "var(--accent)" }}>GREAT.</span>
          </h1>
          <p
            style={{
              fontFamily: "var(--body)",
              fontSize: 15,
              color: "rgba(255,255,255,0.4)",
              maxWidth: 480,
              lineHeight: 1.8,
              paddingBottom: 60,
              fontWeight: 300,
            }}
          >
            Tell us about your project and we'll get back to you within 24 hours. We work
            with brands of all sizes — from startups to enterprises.
          </p>
        </div>
      </section>

      <Ticker items={SERVICES.map((s) => s.title)} speed={20} />

      <section style={{ padding: "80px", background: "var(--dark)" }}>
        <div
          style={{
            maxWidth: 1300,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 80,
          }}
        >
          {/* Left */}
          <div>
            <div style={{ marginBottom: 60 }}>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                HOW IT WORKS
              </div>
              {[
                {
                  num: "01",
                  title: "Submit Brief",
                  desc: "Fill the form with your project details and requirements.",
                },
                {
                  num: "02",
                  title: "WhatsApp Connect",
                  desc: "You'll be redirected to WhatsApp to discuss further with our team.",
                },
                {
                  num: "03",
                  title: "Proposal & Quote",
                  desc: "We'll send a detailed proposal and timeline within 48 hours.",
                },
                {
                  num: "04",
                  title: "Kick Off",
                  desc: "Deposit confirmed? We get to work. Simple.",
                },
              ].map((s) => (
                <div
                  key={s.num}
                  style={{
                    display: "flex",
                    gap: 20,
                    marginBottom: 28,
                    paddingBottom: 28,
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--display)",
                      fontSize: 36,
                      color: "var(--accent)",
                      opacity: 0.5,
                      minWidth: 44,
                    }}
                  >
                    {s.num}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--display)",
                        fontSize: 20,
                        letterSpacing: "0.04em",
                        marginBottom: 6,
                      }}
                    >
                      {s.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--body)",
                        fontSize: 13,
                        color: "rgba(255,255,255,0.4)",
                        lineHeight: 1.6,
                      }}
                    >
                      {s.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp direct */}
            <a
              href={`https://wa.me/${CONFIG.adminPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "20px 24px",
                background: "#25D366",
                textDecoration: "none",
                transition: "filter 0.25s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.filter = "none")}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="black">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <div>
                <div
                  style={{
                    fontFamily: "var(--body)",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#000",
                  }}
                >
                  Chat Directly on WhatsApp
                </div>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 10,
                    color: "rgba(0,0,0,0.6)",
                    marginTop: 2,
                  }}
                >
                  {CONFIG.phone}
                </div>
              </div>
            </a>
          </div>

          {/* Form */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {[
                {
                  label: "Your Name",
                  key: "name",
                  placeholder: "Full name",
                  type: "text",
                  required: true,
                },
                {
                  label: "Business Name",
                  key: "business",
                  placeholder: "Company or brand (optional)",
                  type: "text",
                  required: false,
                },
                {
                  label: "Phone Number",
                  key: "phone",
                  placeholder: "+234 800 000 0000",
                  type: "tel",
                  required: true,
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
                    {f.label} {f.required && <span style={{ color: "var(--accent)" }}>*</span>}
                  </label>
                  <input
                    type={f.type}
                    value={form[f.key]}
                    onChange={(e) => {
                      setForm({ ...form, [f.key]: e.target.value });
                      setErrors({ ...errors, [f.key]: "" });
                    }}
                    placeholder={f.placeholder}
                    style={
                      errors[f.key]
                        ? { borderBottomColor: "var(--accent)" }
                        : {}
                    }
                  />
                  {errors[f.key] && (
                    <span
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 10,
                        color: "var(--accent)",
                        marginTop: 4,
                        display: "block",
                      }}
                    >
                      {errors[f.key]}
                    </span>
                  )}
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
                  Service Needed <span style={{ color: "var(--accent)" }}>*</span>
                </label>
                <select
                  value={form.service}
                  onChange={(e) => {
                    setForm({ ...form, service: e.target.value });
                    setErrors({ ...errors, service: "" });
                  }}
                  style={
                    errors.service ? { borderBottomColor: "var(--accent)" } : {}
                  }
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Multiple Services">Multiple Services</option>
                  <option value="Not Sure Yet">Not Sure Yet</option>
                </select>
                {errors.service && (
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10,
                      color: "var(--accent)",
                      marginTop: 4,
                      display: "block",
                    }}
                  >
                    {errors.service}
                  </span>
                )}
              </div>

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
                  Project Description <span style={{ color: "var(--accent)" }}>*</span>
                </label>
                <textarea
                  value={form.desc}
                  onChange={(e) => {
                    setForm({ ...form, desc: e.target.value });
                    setErrors({ ...errors, desc: "" });
                  }}
                  rows={5}
                  placeholder="Describe your project, goals, timeline, and any references you have in mind..."
                  style={
                    errors.desc ? { borderBottomColor: "var(--accent)" } : {}
                  }
                />
                {errors.desc && (
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10,
                      color: "var(--accent)",
                      marginTop: 4,
                      display: "block",
                    }}
                  >
                    {errors.desc}
                  </span>
                )}
              </div>

              <button
                className="btn btn-primary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "18px",
                  fontSize: 13,
                  letterSpacing: "0.12em",
                  marginTop: 8,
                }}
                onClick={handleSubmit}
              >
                Send Brief via WhatsApp →
              </button>
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  color: "rgba(255,255,255,0.2)",
                  textAlign: "center",
                  lineHeight: 1.6,
                }}
              >
                Submitting opens WhatsApp with your details pre-filled. No account required.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
