import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        xl: "1200px",
        "2xl": "1400px",
      },
      animationDuration: {
        "2s": "2s",
        "3s": "3s",
        "4s": "4s",
        "5s": "5s",
        "6s": "6s",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      maxWidth: {
        "1300": "1300px",
        "1140": "1140px",
        "100p": "100%",
      },
      backgroundImage: {
        "testimonials-hero":
          'linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/people-1.png")',
        "hero-back":
          'linear-gradient(100deg, rgba(255,255,255, 1) 0%, rgba(255,255,255, 1) 60%, rgba(0, 0, 0, 0.0) 65%), url("/hero.png")',
        "course-bg": 'url("/course-back.jpg")', // Fixed closing quote
      },
      
      keyframes: {
        scale: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(4)",
          },
        },
        headerSticky: {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        "marquee-vertical": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },
        "shiny-text": {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shiny-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shiny-width)) 0",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      lineHeight: {
        soft: "1.8",
      },
      animation: {
        "scale-up-down": "scale 5s ease-in-out infinite",
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        headerSticky: "headerSticky var(--duration, .5s) ease-in-out",
        "shiny-text": "shiny-text 8s infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    plugin(function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%", // Default for small screens (below 768px)
          "@screen md": {
            maxWidth: "96%", // Above 768px
          },
          "@screen xl": {
            maxWidth: "1140px", // Above 1200px
          },
          "@screen 2xl": {
            maxWidth: "1300px", // Above 1400px
          },
        },
      });
    }),
  ],
};
export default config;
