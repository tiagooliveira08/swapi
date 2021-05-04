import { useMemo, useState } from "react";
import { useQuery } from "react-query";
import { differenceInHours, add } from "date-fns";

import { StarshipsModel } from "types";
import { getAllStarships } from "services";

export interface StarshipsModelWithStops extends StarshipsModel {
  stops: number;
}

export function useSwapi() {
  const [search, setSearch] = useState<string | null>(null);

  const { data: allStarships } = useQuery(
    getAllStarships.name,
    getAllStarships,
    {
      refetchOnWindowFocus: false,
    }
  );

  interface consumeblesToHoursParams {
    consumables: string;
  }

  function consumeblesToHours(params: consumeblesToHoursParams) {
    const [quantity, period] = params.consumables.split(" ");
    const singularPeriod = Number(quantity) === 1 ? period.concat("s") : period;
    const today = new Date();
    const endRange = add(today, { [singularPeriod]: quantity });
    const rangeInHour = differenceInHours(endRange, today);

    return { consumeblesInHours: rangeInHour };
  }

  interface StopsByDistanceParams {
    distance: string | null;
    MGLT: string;
    consumables: string;
  }

  function stopsByDistance(params: StopsByDistanceParams) {
    const { consumeblesInHours } = consumeblesToHours({
      consumables: params.consumables,
    });
    const hoursOnTheRoute = Number(params.distance || 0) / Number(params.MGLT);
    return { stops: Math.floor(hoursOnTheRoute / consumeblesInHours) };
  }

  const allstarshipsWithStops = useMemo(
    () =>
      allStarships?.results.map(
        (starships): StarshipsModelWithStops => ({
          ...starships,
          stops: stopsByDistance({
            distance: search,
            MGLT: starships.MGLT,
            consumables: starships.consumables,
          }).stops,
        })
      ),
    [allStarships, search]
  );

  return {
    allStarships: allstarshipsWithStops,
    search,
    setSearch,
  };
}
