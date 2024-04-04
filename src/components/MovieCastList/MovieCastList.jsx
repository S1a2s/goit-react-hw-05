import MovieCastListItem from "../MovieCastListItem/MovieCastListItem";
import css from "./MovieCastList.module.css";

const MovieCastList = ({ cast }) => {
  return cast.length > 0 ? (
    <ul className={css.list}>
      {cast.map(({ cast_id, profile_path, name, character }) => {
        const defaultImg =
          "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
        const imageUrl = `https://image.tmdb.org/t/p/w500${profile_path}`;

        return (
          <li key={cast_id}>
            <MovieCastListItem
              imageUrl={profile_path ? imageUrl : defaultImg}
              name={name}
              character={character}
            />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>We have no information about the cast</p>
  );
};

export default MovieCastList;