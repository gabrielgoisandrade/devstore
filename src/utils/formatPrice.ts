/* eslint-disable import/no-anonymous-default-export */
export default (price: number) => {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  });
};
