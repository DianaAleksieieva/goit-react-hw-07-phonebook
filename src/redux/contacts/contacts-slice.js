import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://616b18a516e7120017fa1214.mockapi.io/api/v1/' }),
  tagTypes: ['Contacts'],
  endpoints: (builder) => ({
    getAllContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contacts']
    }),
    addContact: builder.mutation({
      query: (newContact) => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts']
  }),
      deleteContact: builder.mutation({
      query: (deleteId) => ({
        url: `/contacts/${deleteId}`,
        method: 'DELETE',
        }),
        invalidatesTags: ['Contacts']
    }),
  }),
})

export const {
  useGetAllContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation
} = contactApi