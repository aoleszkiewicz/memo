export type Response<T, K extends boolean = false> = {
  data: K extends true
    ? Array<{
        id: number;
        attributes: T;
      }>
    : {
        id: number;
        attributes: T;
      };
  meta: Record<string, unknown>;
};
