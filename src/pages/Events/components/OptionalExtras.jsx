export default function OptionalExtras({ data }) {
  if (!data) return null;
  return <section>Optional Extras</section>;
}
