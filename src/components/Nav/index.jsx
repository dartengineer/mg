import { useState, useEffect } from "react";
import { CONFIG } from "../../constants";

export default function Nav({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const links = ["Home", "About", "Services", "Portfolio", "Academy", "Hire Us", "Contact"];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 990,
        padding: "0 40px",
        background: scrolled ? "rgba(8,10,12,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        transition: "all 0.4s",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 72,
      }}
    >
      <button
        onClick={() => setPage("Home")}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "baseline",
          gap: 6,
        }}
      >
        <span
          style={{
            fontFamily: "var(--display)",
            fontSize: 28,
            color: "#fff",
            letterSpacing: "0.05em",
          }}
        >
          {CONFIG.companyName}
        </span>
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: 10,
            color: "var(--accent)",
            letterSpacing: "0.2em",
          }}
        >
          STUDIO
        </span>
      </button>

      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {links.map((l) => (
          <button
            key={l}
            onClick={() => setPage(l)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--body)",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: page === l ? "#fff" : "rgba(255,255,255,0.45)",
              transition: "color 0.25s",
              position: "relative",
              padding: "4px 0",
            }}
          >
            {l}
            {page === l && (
              <span
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 1,
                  background: "var(--accent)",
                }}
              />
            )}
          </button>
        ))}
        <button
          className="btn btn-primary"
          style={{ padding: "10px 24px", fontSize: 11 }}
          onClick={() => setPage("Hire Us")}
        >
          Get a Quote
        </button>
      </div>
    </nav>
  );
}
