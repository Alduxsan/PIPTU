import { dataDelivery } from "./dummyBD.js"; //

export const dataRequest = async (id) => {
  return new Promise((res, rej) => {
    if (id == "") {
      rej(new Error("empty data ID"));
    }
    res(dataDelivery(id));
  });
};
