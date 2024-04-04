import { Link, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "../Loader/Loader";
import css from "./AdditionalInformation.module.css";

const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));

const AdditionalInformation = () => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li>
          <Link className="link" to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link className="link" to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default AdditionalInformation;