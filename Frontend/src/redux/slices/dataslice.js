import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const backendUrl = import.meta.env.VITE_BACKENDURL

export const fetchProjectData = createAsyncThunk('data/fetchProject', async () => {
    const response = await axios.get(`${backendUrl}/project/getall`);
    return response.data;
})
export const fetchGallleryData = createAsyncThunk('data/fetchGallery', async () => {
    const response = await axios.get(`${backendUrl}/project/getall`);
    return response.data;
})
export const fetchBlogData = createAsyncThunk('data/fetchBlog', async () => {
    const response = await axios.get(`${backendUrl}/project/getall`);
    return response.data;
})

const initialState = {
    projectData: [],
    blogData: [],
    galleryData: [],
    status: null,
    error: 'loading error',
}

const dataSlice = createSlice({
    name: 'Data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //Project data
            .addCase(fetchProjectData.pending, (state) => { state.status = 'loading'; })
            .addCase(fetchProjectData.fulfilled, (state, action) => { state.status = 'success'; state.projectData = action.payload; })
            .addCase(fetchProjectData.rejected, (state) => { state.status = 'failed'; state.error = 'Error Loading Project Data' })

            //Gallery data
            .addCase(fetchGallleryData.pending, (state) => { state.status = 'loading'; })
            .addCase(fetchGallleryData.fulfilled, (state, action) => { state.status = 'success'; state.galleryData = action.payload; })
            .addCase(fetchGallleryData.rejected, (state) => { state.status = 'failed'; state.error = 'Error Loading Gallery Data' })

            //blog data
            .addCase(fetchBlogData.pending, (state) => { state.status = 'loading'; })
            .addCase(fetchBlogData.fulfilled, (state, action) => { state.status = 'success'; state.blogData = action.payload; })
            .addCase(fetchBlogData.rejected, (state) => { state.status = 'failed'; state.error = 'Error Loading Blog Data' })
    }
})

export default dataSlice.reducer;