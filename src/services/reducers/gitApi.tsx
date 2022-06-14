import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import GitCommitHistory from 'services/types/GitCommitHistory';
import GitCommit from 'services/types/GitCommit';

export const GitApi = createApi({
    reducerPath: "gitApi",
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_API_HOST}),
    endpoints: (builder) => ({
        getCommitHistory: builder.query<GitCommitHistory[], {owner: string, repository:string}>({
            query:({owner, repository}) => `commits?owner=${owner}&repository=${repository}`,
        }),
        getCommit: builder.query<GitCommit, {owner: string, repository:string, commit:string}>({
            query:({owner, repository, commit}) => `commits/${commit}?owner=${owner}&repository=${repository}`
        })
    })
})

export const {
    useGetCommitHistoryQuery, 
    useGetCommitQuery, 
    useLazyGetCommitHistoryQuery, 
    useLazyGetCommitQuery
} = GitApi