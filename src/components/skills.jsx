import Rating from "@mui/material/Rating";

export default function About() {
  return (
    <Rating
      name="half-rating"
      defaultValue={0}
      precision={0.2}
      sx={{ filter: "drop-shadow(0px 0px 6px rgba(255,255,255,0.5))" }}
    />
  );
}
