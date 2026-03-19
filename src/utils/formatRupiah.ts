export const formatCurrency = (value: string) => {
  const numericValue = value.replace(/[^0-9]/g, "");
  if (!numericValue) return "";
  return new Intl.NumberFormat("id-ID").format(Number(numericValue));
};
