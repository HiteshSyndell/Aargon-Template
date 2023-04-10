import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserAPI = createApi({
  reducerPath: "UserPath",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    
    getUserData: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),
    
    getUserbyId: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
    }),

    getUser: builder.mutation({
      query: (admin) => ({
        url: "/",
        method: "POST",
        body:admin
      }),
    }),

    updateuser:builder.mutation({
      query:(admin)=>{
      const {id}=admin
        return{
          url: `/${id}`,
          method: "PUT",
          body:admin
        }
      }
    }),

    delUser:builder.mutation({
      query:(body)=>{
        const {id}=body
       return{
        url:`/${id}`, 
        method:"DELETE"
       }
      }
    })
  
  }),
});

export const {useGetUserDataQuery,useGetUserbyIdQuery, useGetUserMutation, useUpdateuserMutation,useDelUserMutation}=UserAPI