import { styled } from "..";

export const ProductContainer = styled("main", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "stretch",
  gap: "4rem",

  maxWidth: "1180px",
  margin: "0 auto",
});

export const ImageContainer = styled("main", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  width: "100%",
  height: "630px",
  maxWidth: "576px",
  borderRadius: "25px",
  padding: "0.25rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});

export const ProductDetails = styled("main", {
  display: "flex",
  flexFlow: "column",

  h1: {
    fontSize: "$2xl",
    color: "$GRAY1",
  },

  span: {
    marginTop: "1rem",
    display: "flex",
    fontSize: "$xl",
    color: "$GREEN1",
    fontWeight: "bold",
  },

  p: {
    marginTop: "2.5rem",
    fontSize: "#md",
    lineHeight: 1.6,
    color: "$GRAY2",
  },

  button: {
    marginTop: "auto",
    background: "$GREEN2",
    border: 0,
    color: "$white",
    borderRadius: "25px",
    padding: "1.25rem",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "$md",
    transition: "all 0.2s",

    "&:not(:disabled):hover": {
      background: "$GREEN1",
      transform: "scale(105%)",
    },

    "&:disabled": {
      opacity: 0.5,
      transform: "scale(1)",
      cursor: "not-allowed",
    },
  },
});
