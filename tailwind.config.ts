import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {

      /* Custom palette with added pink range: 94A684 / AEC3AE / E4E4D0 / F9F5F6 / F8E8EE / FDCEDF / F2BED1 */
      colors: {
        pastel: {
          pink: {
            50: "#f9f5f6",
            100: "#f8e8ee",
            200: "#fdcedf",
            soft: "#f2bed1",
            lighter: "#f9f5f6",
          },
          green: {
            50: "#f6faf4",
            100: "#e7efe4",
            200: "#aec3ae",
            soft: "#aec3ae",
            lighter: "#f6faf4",
          },
        },

        /* Optional direct color references for easier use */
        accent: {
          green: "#94a684",
        },
      },

      /* Fonts from next/font */
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },

      /* Keyframe animations */
      keyframes: {

        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },

        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },

        "float-delay": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },

        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },

        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(12px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.96)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },

        "line-expand": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },

      },

      /* Animation utilities */
      animation: {
        float: "float 4s ease-in-out infinite",
        "float-slow": "float-slow 5s ease-in-out infinite",
        "float-delay": "float-delay 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "line-expand":
          "line-expand 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },

    },
  },

  plugins: [],
};

export default config;
