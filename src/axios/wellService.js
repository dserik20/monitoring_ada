import api from "./api";

export const fetchWells = () => {
  return api.get("/wells");
};

export const fetchWellById = (id) => {
  return api.get(`/wells/${id}`);
};

export const createWell = (wellData) => {
  return api.post("/wells", wellData);
};

export const updateWell = (id, wellData) => {
  return api.put(`/wells/${id}`, wellData);
};

export const deleteWell = (id) => {
  return api.delete(`/wells/${id}`);
};
