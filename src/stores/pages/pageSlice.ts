import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export const UPDATE_SCHEMA = 'UPDATE_SCHEMA';
export const UPDATE_PAGES = 'UPDATE_PAGES';

export interface PageDetails {
    title: string,
    description: string
}

export interface Schema {
    [key: string]: PageDetails
}

export interface Page {
    id: string,
    title: string,
    description: string,
    content: string
}

export interface Pages {
    [key: string]: Page
}

export interface UpdateSchema {
    type: typeof UPDATE_SCHEMA,
    schema: Schema
}

export interface UpdatePages {
    type: typeof UPDATE_PAGES,
    page: Page
}

export type PagesActions = UpdateSchema | UpdatePages;

interface PagesState {
  schema: Schema,
  pages: Pages
}

const initialState: PagesState = {
  schema: {},
  pages: {}
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    updateSchema: (state, action: PayloadAction<Schema>) => {
      state.schema = action.payload;
    },
    updatePages: (state, action: PayloadAction<Page>) => {
      state.pages[action.payload.id] = action.payload;
    }
  }
});

export const { updateSchema, updatePages } = pageSlice.actions;

export default pageSlice.reducer;