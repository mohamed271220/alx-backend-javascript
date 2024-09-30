export default function getBudgetForCurrentYear(income, gdp, capita) {
  const getCurrentYear = () => new Date().getFullYear();

  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };

  return budget;
}
