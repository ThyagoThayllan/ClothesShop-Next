import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    background: "$GRAY7",
    color: "$GRAY1",
  },

  "body, input, textarea, button": {
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    fontSize: "1rem",
  },
});
