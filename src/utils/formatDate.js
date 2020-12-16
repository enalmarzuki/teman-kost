export default (date) => {
  const d = new Date(date);
  const dtf = new Intl.DateTimeFormat("id", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  const [{ value: mo }, , { value: da }, , { value: year }] = dtf.formatToParts(
    d
  );

  return `${mo} ${da} ${year}`;
};
