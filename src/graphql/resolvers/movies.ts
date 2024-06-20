import apiCall from "@utils/apicall";

export const movieResolver = {
  getMoviesList: async () => {
    try {
      const data = await apiCall("/movie/popular");
      return data.results;
    } catch (error: any) {
      throw new Error(`Failed to get movies: ${error.message}`);
    }
  },
};
