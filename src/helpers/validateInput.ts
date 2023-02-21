export const validateInput = (rate: number, value: string) =>
  Number(value) > rate * 1.1 || Number(value) < rate * 0.9;
