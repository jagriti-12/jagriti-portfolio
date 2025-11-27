const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6D28D9",      // Purple
          light: "#A78BFA",
          dark: "#4C1D95",
        },
        accent: "#06B6D4",          // Teal
        pinkish: "#FB7185",         // Pink accent
        darkBg: "#0F172A",          // Almost-black background
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },

      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.15)",
        glow: "0 0 20px rgba(109, 40, 217, 0.4)",
      },
    },
  },
  content: [
    // Include all paths where your components live
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
};

export default config;