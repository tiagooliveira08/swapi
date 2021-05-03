import { makeCall } from "helpers";
import { StarshipsModel } from "types";

interface GetAllStarshipsResponse {
  count: number;
  next?: string;
  previous?: string;
  results: StarshipsModel;
}

export function getAllStarships() {
  return makeCall<GetAllStarshipsResponse>({
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
