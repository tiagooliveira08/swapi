import { makeCall } from "helpers";
import { StarshipsModel } from "types";

export function getAllStarships() {
  return makeCall<StarshipsModel>({
    method: {
      methodType: "get",
    },
    url: "starships",
  });
}

interface getStarshipsByIdParams {
  id: string | number;
}

export function getStarshipsById({ id }: getStarshipsByIdParams) {
  return makeCall<StarshipsModel>({
    url: `starships/${id}`,
    method: {
      methodType: "get",
    },
  });
}
