import numeral from "numeral";

const currencyFormat = "0,0.00";
export const parseMoney = (amount: number) => numeral(amount).format(currencyFormat);

export const parseTimeFromSeconds = (seconds: number) => {
  const date = new Date(0);
  date.setSeconds(seconds);
  return date.toISOString().substr(11, 8);
};

export const jsonToArray = (json: string) => {
  try {
    const data = JSON.parse(json);
    if (Array.isArray(data)) {
      return data;
    }
    return [];
  } catch (_e) {
    return [];
  }
};
