import { styled } from "..";

export const SuccessContainer = styled("main", {
  width: "100%",
  display: "flex",
  flexFlow: "column",
  gap: "3rem",
  alignItems: "center",
  justifyContent: "center",

  a: {
    color: "$GOLD2",
    fontWeight: "bold",
    fontSize: "$md",
    transition: "all 0.2s",

    "&:hover": {
      color: "$GOLD1",
    },
  },

  h1: {
    color: "$GREEN1",
    fontSize: "$2xl",
  },

  p: {
    fontSize: "$xl",
    maxWidth: "560px",
    textAlign: "center",
  },

  "p strong": {
    color: "$GOLD1",
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: "180px",
  height: "200px",
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: "25px",
  padding: "0.25rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});
