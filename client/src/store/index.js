import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { meeting: [], userMeetings: [] };

const meetingSlice = createSlice({
    name: "MeetingSlice",
    initialState,
    reducers: {
        setMeeting(state, actions) {
            state.meeting = actions.payload;
        },
        setUserMeeting(state, actions) {
            state.userMeetings = actions.payload;
        },
    },
});

const store = configureStore({
    reducer: meetingSlice.reducer,
});

export const meetingActions = meetingSlice.actions;

export default store;