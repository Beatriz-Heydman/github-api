export type FlexProps = {
  gap?: string;
  direction?: "row" | "column";
  alignItems?: "center" | "flex-start" | "flex-end";
  flexWrap?: "nowrap" | "wrap";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
};
