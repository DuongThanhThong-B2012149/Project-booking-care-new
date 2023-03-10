import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Code } from "interfaces";
import { userService } from "services";

interface CodeSlice {
  loading: boolean;
  genders: Code[];
  positions: Code[];
  times: Code[];
  status: Code[];
  roles: Code[];
}

const initialState: CodeSlice = {
  loading: false,
  genders: [],
  positions: [],
  times: [],
  status: [],
  roles: [],
};

export const fetchGenders = createAsyncThunk<Code[]>(
  "genders/fetchGenders",
  async () => {
    const { data } = await userService.getAllCodes("gender");
    return data;
  }
);

export const fetchPositions = createAsyncThunk<Code[]>(
  "positions/fetchPositions",
  async () => {
    const { data } = await userService.getAllCodes("position");
    return data;
  }
);

export const fetchStatus = createAsyncThunk<Code[]>(
  "genders/fetchStatus",
  async () => {
    const { data } = await userService.getAllCodes("status");
    return data;
  }
);

export const fetchTimes = createAsyncThunk<Code[]>(
  "genders/fetchTimes",
  async () => {
    const { data } = await userService.getAllCodes("time");
    return data;
  }
);

export const fetchRoles = createAsyncThunk<Code[]>(
  "genders/fetchRoles",
  async () => {
    const { data } = await userService.getAllCodes("role");
    return data;
  }
);

export const codeSlice = createSlice({
  name: "codes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenders.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(
        fetchGenders.fulfilled,
        (state, action: PayloadAction<Code[]>) => {
          state.genders = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchGenders.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(fetchPositions.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(
        fetchPositions.fulfilled,
        (state, action: PayloadAction<Code[]>) => {
          state.positions = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchPositions.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(fetchStatus.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(
        fetchStatus.fulfilled,
        (state, action: PayloadAction<Code[]>) => {
          state.status = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchStatus.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(fetchTimes.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchTimes.fulfilled, (state, action: PayloadAction<Code[]>) => {
        state.times = action.payload;
        state.loading = false;
      })
      .addCase(fetchTimes.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(fetchRoles.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchRoles.fulfilled, (state, action: PayloadAction<Code[]>) => {
        state.roles = action.payload;
        state.loading = false;
      })
      .addCase(fetchRoles.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default codeSlice.reducer;
