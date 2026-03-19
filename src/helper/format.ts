export const formatPHNumber = (input: string) => {
  const digits = input.replace(/\D/g, "");

  if (digits.startsWith("63")) {
    return digits;
  }

  if (digits.startsWith("0")) {
    return "63" + digits.slice(1);
  }

  if (digits.startsWith("9")) {
    return "63" + digits;
  }

  return digits;
};

export const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("en-PH", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

export const formatReadTime = (mins: number) => `${mins} min read`;
