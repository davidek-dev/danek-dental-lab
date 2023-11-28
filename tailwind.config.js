import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  variants: {},
  mode: "jit",
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: 
        {
          "primary": "#1f15e0",
          "secondary": "#b1aeef",
          "accent": "#838192",
          "neutral": "#0f0f3d",
          "base-100": "#f3f3fc",
          ".drawer-button": {
          },
        },
        dark: {
          "primary": "#6d1b83",
          "secondary": "#270a2f",
          "accent": "#b130d5",
          "neutral": "#340d3f",
          "base-100": "#23092a",
        },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
  },
};
