import { dataDelivery } from "./dummyBD.js"; //

export const collectionRequest = async (collId) => {
  return new Promise((res, rej) => {
    if (collId == "") {
      rej(new Error("Wrong collection name"));
    }
    res(dataDelivery(collId));
  });
};
