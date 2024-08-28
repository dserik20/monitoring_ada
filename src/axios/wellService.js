import api from "./api";

export const fetchWells = () => {
  return api.get("/wells");
};

export const fetch2Hours = () => {
  return api.get("/2hours");
};

export const fetchWellsABC = () => {
  return api.get(`/wells/abc`);
};

export const fetchABCByWell = () => {
  return api.get(`/wells/abc/`);
};

// export const fetchWells = (wellType = "production", fieldId = 1) => {
//   return api.get(`/wells`, {
//     params: {
//       wellType: wellType,
//       fieldId: fieldId,
//     },
//   });
// };s
