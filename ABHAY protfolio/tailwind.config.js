/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui"]
      },
      colors: {
        ink: "#020617",
        frost: "rgba(255,255,255,0.08)",
        neon: {
          cyan: "#22d3ee",
          violet: "#a78bfa",
          rose: "#fb7185",
          emerald: "#34d399",
          amber: "#fbbf24"
        }
      },
      boxShadow: {
        neon: "0 0 28px rgba(34, 211, 238, 0.24)",
        violet: "0 0 34px rgba(167, 139, 250, 0.28)",
        glass: "0 20px 80px rgba(2, 6, 23, 0.35)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" }
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 2.8s linear infinite"
      }
    }
  },
  plugins: []
};
