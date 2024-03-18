import { DetailsItem } from "./DetailsItem";

type Props = {
  status: string;
  releaseDate?: string;
  numberOfSeasons?: number;
  numberOfEpisodes?: number;
  runtime?: number;
  episodeRunTime?: number[];
  originalLanguage: string;
  budget?: number;
  revenue?: number;
  director?: string;
  creators?: string[];
  screenWriter?: string;
};
export const DetailsGrid = ({
  status,
  releaseDate,
  numberOfSeasons,
  numberOfEpisodes,
  runtime,
  episodeRunTime,
  originalLanguage,
  budget,
  revenue,
  director,
  creators,
  screenWriter,
}: Props) => {
  return (
    <div className="grid grid-cols-2  gap-5">
      <DetailsItem label="Status:" value={status} />
      <DetailsItem
        label="Release Date:"
        value={releaseDate && new Date(releaseDate).toLocaleDateString()}
      />

      {!!numberOfSeasons && (
        <DetailsItem label="Seasons:" value={numberOfSeasons.toString()} />
      )}

      {!!numberOfEpisodes && (
        <DetailsItem
          label="Number of episodes"
          value={numberOfEpisodes.toString()}
        />
      )}
      {!!(runtime || (episodeRunTime && episodeRunTime.length > 0)) && (
        <DetailsItem
          label={runtime ? "Runtime:" : "Episode Runtime:"}
          value={`${runtime || (episodeRunTime && episodeRunTime[0])} min`}
        />
      )}

      {!!originalLanguage && (
        <DetailsItem label="Original Language:" value={originalLanguage} />
      )}

      {!!budget && (
        <DetailsItem
          label="Budget:"
          value={
            "$" + budget?.toLocaleString("en-US", { maximumFractionDigits: 2 })
          }
        />
      )}
      {!!revenue && (
        <DetailsItem
          label="Revenue:"
          value={
            "$" + revenue?.toLocaleString("en-US", { maximumFractionDigits: 2 })
          }
        />
      )}

      {!!director && <DetailsItem label={"Director:"} value={director || ""} />}

      {!!creators?.length && (
        <DetailsItem label={"Creators:"} value={creators?.join(", ") || ""} />
      )}

      {!!screenWriter && (
        <DetailsItem label="Screenwriter:" value={screenWriter} />
      )}
    </div>
  );
};
