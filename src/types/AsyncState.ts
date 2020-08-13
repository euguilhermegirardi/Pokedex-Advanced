type AsyncState<T extends object = {}, E extends Error = Error> =
  | (Partial<T> & {
      status?: "loading" | undefined;
      error?: undefined;
    })
  | (Partial<T> & {
      status: "error";
      error: E;
    })
  | (T & {
      status: "loaded";
      error?: undefined;
    });

export default AsyncState;
