import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'theme',
  initialState: {
    name: 'light',
  },
  reducers: {
    changeTheme(state: any, { payload }: any) {
      localStorage.setItem('theme', payload);
      return { ...state, name: payload }
    },
  }
})

export const { changeTheme } = slice.actions
export const selectUser = (state: any) => state.name
export default slice.reducer