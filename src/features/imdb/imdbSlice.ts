import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppDispatch, AppState, AppThunk } from '@/app/store';
import { Top250MovieTypes } from '@/features/imdb/imdbTypes';
import { getImdbTop250Movies } from './imdbAPI';

export interface Top250MovieState {
    id: string,
    rank: string,
    title: string,
    fulltitle: string,
    year: string,
    image: string,
    crew: string,
    imDbRating: string,
    imDbRatingCount: string
}

export interface Top250MovieRespondState {
    items: Array<Top250MovieState>,
    errorMessage: ''
}
const initialState: Top250MovieRespondState = {
    items: [],
    errorMessage: ''
}

export const getImdbTop250MoviesQuery = createAsyncThunk(
    'counter/fetchCount',
    async () => { 
        const response = await getImdbTop250Movies();
        // The value we return becomes the `fulfilled` action payload 
        return response;
    }
)

export const imdbTop250MoviesSlice = createSlice({
    name: "top250Movie",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getImdbTop250MoviesQuery.pending, (state) => {
                console.log("--loading--"); 
                console.log(state);
            })
            .addCase(getImdbTop250MoviesQuery.fulfilled, (state: Top250MovieRespondState, action) => {
                console.log("--idle--"); 
                console.log(action.payload);

                let items = new Array<Top250MovieState>();
                if (action.payload != undefined && action.payload.items instanceof Array) {
                    action.payload.items.forEach((element, index) => {

                        items.push({
                            id: element.id,
                            rank: element.rank,
                            title: element.title,
                            fulltitle: element.fullTitle,
                            year: element.year,
                            image: element.image,
                            crew: element.crew,
                            imDbRating: element.imDbRating,
                            imDbRatingCount: element.imDbRatingCount


                        })
                    })
                }

                state.items = items;
            })
    },
})



export const selectTop250Data = (state: AppState) => state.top250movies.items;

export default imdbTop250MoviesSlice.reducer;