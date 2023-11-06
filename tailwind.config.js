import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  variants: {},
  mode: "jit",
  plugins: [daisyui],
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
        dark: 
        {
          "primary": "#291fea",
          "secondary": "#131051",
          "accent": "#6f6d7e",
          "neutral": "#0f0f3d",
          "base-100": "#03030c",
        },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
  },
};
