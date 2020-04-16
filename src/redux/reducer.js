import { CAMPSITES } from "../shared/campsites";
import { COMMENTS } from "../shared/comments";
import { PARTNERS } from "../shared/partners";
import { PROMOTIONS } from "../shared/promotions";
import { STAFF } from "../shared/staff";
import { CAROUSELS } from "../shared/carousels";

export const initialState = {
  campsites: CAMPSITES,
  comments: COMMENTS,
  partners: PARTNERS,
  promotions: PROMOTIONS,
  staff: STAFF,
  carousels: CAROUSELS,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
