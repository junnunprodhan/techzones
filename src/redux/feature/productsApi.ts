import { baseApi } from "../api/baseApi";

export const donarApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
   
        createProduct: builder.mutation({
          query: (data) =>({
            url: `/products/create-products`,
            method: "POST",
            body:data,
          }),

        }),
      }),
})
export const { useCreateProductMutation } = donarApi;
