// // import SessionStorage from "../storage/SessionStorage";
// import { questionFactory } from "../application/questionFactory";
// import TmdbApi from "../application/tmdbApi";
// import {
//   questionTypeToEndpoint,
//   TmdbEndpoint,
// } from "../application/types/mappings";
// import {
//   QuestionNeedsDetails,
//   Option,
//   Options,
// } from "../application/types/types";
// import {
//   Details,
//   GenreDetails,
//   isGenreDetails,
//   isPersonDetails,
// } from "../domain/types/types";
// import SessionStorage from "../storage/SessionStorage";
// import MovieStorage from "../storage/Storage";
// import { HelperStorageLabel } from "../storage/types";

// Initialize in-mem storage from JSON files on HDD
// const movieStorage: MovieStorage = new MovieStorage(
//   process.env.MOVIE_DB_PATH as string,
//   {
//     genres: process.env.GENRES_DB_PATH,
//     people: process.env.PEOPLE_DB_PATH,
//     production_companies: process.env.PRODUCTION_COMPANIES_DB_PATH,
//     keywords: process.env.KEYWORDS_DB_PATH,
//   }
// );
//
// const api = new TmdbApi();

// const allSessionsStorage: SessionStorage = new SessionStorage();
// const session = allSessionsStorage.getSessionById(
//   allSessionsStorage.createNewSession()
// );
// const mockOptions: Options = {
//   keywords: {
//     "4458": 100000,
//     "227304": 100000,
//     "41645": 1,
//   },
// };

// const allMovies = movieStorage.getAllMovies();
// (async () => {
//   const question = await questionFactory(mockOptions, movieStorage, session!);
//   console.log(question);
// })();
