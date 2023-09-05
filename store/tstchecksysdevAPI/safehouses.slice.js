import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_safehouse_list = createAsyncThunk(
  "safehouses/api_v1_safehouse_list",
  async payload => {
    const response = await apiService.api_v1_safehouse_list(payload)
    return response.data
  }
)
export const api_v1_safehouse_create = createAsyncThunk(
  "safehouses/api_v1_safehouse_create",
  async payload => {
    const response = await apiService.api_v1_safehouse_create(payload)
    return response.data
  }
)
export const api_v1_safehouse_retrieve = createAsyncThunk(
  "safehouses/api_v1_safehouse_retrieve",
  async payload => {
    const response = await apiService.api_v1_safehouse_retrieve(payload)
    return response.data
  }
)
export const api_v1_safehouse_update = createAsyncThunk(
  "safehouses/api_v1_safehouse_update",
  async payload => {
    const response = await apiService.api_v1_safehouse_update(payload)
    return response.data
  }
)
export const api_v1_safehouse_partial_update = createAsyncThunk(
  "safehouses/api_v1_safehouse_partial_update",
  async payload => {
    const response = await apiService.api_v1_safehouse_partial_update(payload)
    return response.data
  }
)
export const api_v1_safehouse_destroy = createAsyncThunk(
  "safehouses/api_v1_safehouse_destroy",
  async payload => {
    const response = await apiService.api_v1_safehouse_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const safehousesSlice = createSlice({
  name: "safehouses",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_safehouse_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_safehouse_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_safehouse_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_safehouse_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_safehouse_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_safehouse_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_safehouse_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_safehouse_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_safehouse_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_safehouse_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_safehouse_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_safehouse_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_safehouse_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_safehouse_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_safehouse_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_safehouse_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_safehouse_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_safehouse_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_safehouse_list,
  api_v1_safehouse_create,
  api_v1_safehouse_retrieve,
  api_v1_safehouse_update,
  api_v1_safehouse_partial_update,
  api_v1_safehouse_destroy,
  slice: safehousesSlice
}
