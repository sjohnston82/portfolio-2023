export const pageTransitionSideVariants = {
  enter: {
    x: -1000,
    opacity: 0,
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: {
    x: 1000,
    opacity: 0,
    scale: 0.01,
  },
};

export const navVariant = {
  open: {
    height: "20rem",

    width: "100vw",
  },
  closed: {
    width: "100vw",
    height: "64px",
  },
};
