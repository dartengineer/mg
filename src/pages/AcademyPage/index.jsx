import { useState } from "react";
import { CONFIG, COURSES } from "../../constants";
import Ticker from "../../components/Ticker";

export default function AcademyPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Valid email required";
    if (!form.course) e.course = "Please select a course";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: 72 }}>
      {/* Hero */}
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
            top: 0,
            right: 0,
            width: "50%",
            height: "100%",
            background: "var(--accent)",
            clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
            opacity: 0.06,
          }}
        />
        <div style={{ maxWidth: 1300, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <span className="section-num">VORTEX ACADEMY</span>
          <h1
            style={{
              fontFamily: "var(--display)",
              fontSize: "clamp(60px, 10vw, 120px)",
              letterSpacing: "0.02em",
              lineHeight: 0.92,
              marginBottom: 24,
            }}
          >
            TRAIN.
            <br />
            CREATE.
            <br />
            <span style={{ color: "var(--accent)" }}>DOMINATE.</span>
          </h1>
          <p
            style={{
              fontFamily: "var(--body)",
              fontSize: 16,
              color: "rgba(255,255,255,0.45)",
              maxWidth: 560,
              lineHeight: 1.8,
              paddingBottom: 60,
              fontWeight: 300,
            }}
          >
            Vortex Academy is our training arm — built for aspiring creatives who want
            industry-standard skills, real-world projects, and career-ready portfolios. No
            fluff. All craft.
          </p>
        </div>
      </section>

      <Ticker
        items={[
          "Graphic Design",
          "Motion Graphics",
          "Video Editing",
          "Brand Strategy",
          "Portfolio Building",
          "Industry Mentorship",
        ]}
        speed={22}
      />

      {/* Why Academy */}
      <section style={{ padding: "80px", background: "var(--dark)" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 3,
              marginBottom: 80,
            }}
          >
            {[
              { num: "500+", label: "Graduates", color: "var(--accent)" },
              { num: "4", label: "Courses", color: "#7C3AED" },
              { num: "100%", label: "Practical", color: "#0EA5E9" },
              { num: "Live", label: "Projects", color: "#10B981" },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  padding: "40px",
                  borderTop: `3px solid ${s.color}`,
                  background: "var(--card)",
                }}
              >
                <div style={{ fontFamily: "var(--display)", fontSize: 56, color: s.color }}>
                  {s.num}
                </div>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 10,
                    color: "rgba(255,255,255,0.4)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginTop: 8,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Courses */}
          <h2
            style={{
              fontFamily: "var(--display)",
              fontSize: 56,
              letterSpacing: "0.03em",
              marginBottom: 40,
            }}
          >
            AVAILABLE COURSES
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 3,
            }}
          >
            {COURSES.map((c, i) => (
              <div
                key={c.id}
                style={{
                  padding: "48px 44px",
                  background: "var(--black)",
                  borderLeft: `4px solid ${c.color}`,
                  animation: `fadeUp 0.6s ${i * 0.1}s ease both`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 20,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 28,
                      color: c.color,
                    }}
                  >
                    {c.icon}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    <span className="tag">{c.duration}</span>
                    <span
                      className="tag"
                      style={{ borderColor: c.color + "44", color: c.color }}
                    >
                      {c.level}
                    </span>
                  </div>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: 30,
                    letterSpacing: "0.04em",
                    marginBottom: 14,
                  }}
                >
                  {c.title}
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
                  {c.desc}
                </p>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10,
                      color: "rgba(255,255,255,0.3)",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginBottom: 12,
                    }}
                  >
                    MODULES
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {c.modules.map((m) => (
                      <div
                        key={m}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                        }}
                      >
                        <span
                          style={{
                            width: 4,
                            height: 4,
                            background: c.color,
                            borderRadius: "50%",
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "var(--body)",
                            fontSize: 13,
                            color: "rgba(255,255,255,0.55)",
                          }}
                        >
                          {m}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration */}
      <section
        style={{
          padding: "80px",
          background: "var(--black)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          {!CONFIG.isAcademyOpen ? (
            <div
              style={{
                textAlign: "center",
                padding: "80px 40px",
                background: "var(--dark)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--display)",
                  fontSize: 14,
                  letterSpacing: "0.3em",
                  color: "rgba(255,255,255,0.2)",
                  marginBottom: 24,
                }}
              >
                ⬡ ADMISSIONS STATUS
              </div>
              <div
                style={{
                  fontFamily: "var(--display)",
                  fontSize: 72,
                  letterSpacing: "0.04em",
                  color: "rgba(255,77,0,0.6)",
                  marginBottom: 20,
                }}
              >
                CLOSED
              </div>
              <p
                style={{
                  fontFamily: "var(--body)",
                  fontSize: 15,
                  color: "rgba(255,255,255,0.4)",
                  maxWidth: 420,
                  margin: "0 auto 40px",
                  lineHeight: 1.8,
                }}
              >
                Admissions are currently closed. Leave your email below to be notified when
                the next cohort opens.
              </p>
              <div style={{ display: "flex", gap: 0, maxWidth: 440, margin: "0 auto" }}>
                <input
                  placeholder="your@email.com"
                  style={{
                    flex: 1,
                    background: "var(--card)",
                    borderBottom: "none",
                    padding: "16px 20px",
                    border: "1px solid var(--border)",
                  }}
                />
                <button className="btn btn-primary" style={{ borderRadius: 0 }}>
                  Notify Me
                </button>
              </div>
            </div>
          ) : submitted ? (
            <div
              style={{
                textAlign: "center",
                padding: "80px 40px",
                background: "var(--dark)",
                border: "1px solid rgba(16,185,129,0.3)",
                animation: "fadeUp 0.6s ease",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--display)",
                  fontSize: 80,
                  color: "#10B981",
                  letterSpacing: "0.04em",
                  marginBottom: 20,
                }}
              >
                ✓
              </div>
              <h2
                style={{
                  fontFamily: "var(--display)",
                  fontSize: 52,
                  letterSpacing: "0.04em",
                  marginBottom: 16,
                }}
              >
                YOU'RE IN.
              </h2>
              <p
                style={{
                  fontFamily: "var(--body)",
                  fontSize: 15,
                  color: "rgba(255,255,255,0.45)",
                  maxWidth: 400,
                  margin: "0 auto",
                  lineHeight: 1.8,
                }}
              >
                Registration received, <strong style={{ color: "#fff" }}>{form.name}</strong>.
                Our team will contact you within 48 hours with enrollment details.
              </p>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.4fr",
                gap: 80,
                alignItems: "start",
              }}
            >
              <div>
                <span className="section-num">REGISTER</span>
                <h2
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: 64,
                    letterSpacing: "0.03em",
                    lineHeight: 0.92,
                    marginBottom: 24,
                  }}
                >
                  JOIN THE
                  <br />
                  NEXT
                  <br />
                  COHORT.
                </h2>
                <p
                  style={{
                    fontFamily: "var(--body)",
                    fontSize: 14,
                    color: "rgba(255,255,255,0.4)",
                    lineHeight: 1.8,
                  }}
                >
                  Classes run monthly. Cohort sizes are capped at 15 students for maximum
                  hands-on attention.
                </p>
                <div
                  style={{
                    marginTop: 40,
                    padding: "24px",
                    background: "var(--card)",
                    borderLeft: "3px solid var(--accent)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10,
                      color: "var(--accent)",
                      letterSpacing: "0.15em",
                      marginBottom: 8,
                    }}
                  >
                    ADMISSIONS OPEN
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--body)",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.7,
                    }}
                  >
                    Applications close when cohort is filled. Register early to secure your
                    spot.
                  </div>
                </div>
              </div>

              <div>
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  {[
                    {
                      label: "Full Name",
                      key: "name",
                      placeholder: "Your full name",
                      type: "text",
                    },
                    {
                      label: "Phone Number",
                      key: "phone",
                      placeholder: "+234 800 000 0000",
                      type: "tel",
                    },
                    {
                      label: "Email Address",
                      key: "email",
                      placeholder: "you@example.com",
                      type: "email",
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
                          marginBottom: 4,
                        }}
                      >
                        {f.label}
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
                        marginBottom: 4,
                      }}
                    >
                      Course of Interest
                    </label>
                    <select
                      value={form.course}
                      onChange={(e) => {
                        setForm({ ...form, course: e.target.value });
                        setErrors({ ...errors, course: "" });
                      }}
                      style={
                        errors.course
                          ? { borderBottomColor: "var(--accent)" }
                          : {}
                      }
                    >
                      <option value="">Select a course</option>
                      {COURSES.map((c) => (
                        <option key={c.id} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                    </select>
                    {errors.course && (
                      <span
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: 10,
                          color: "var(--accent)",
                          marginTop: 4,
                          display: "block",
                        }}
                      >
                        {errors.course}
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
                        marginBottom: 4,
                      }}
                    >
                      Message (Optional)
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Any questions or background info..."
                      rows={3}
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
                    Submit Application →
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
