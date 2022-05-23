import { useContext, createContext, useState } from 'react';

export const MeetingContext = createContext({
    //INITIAL STATE
    meeting: []
})

export const MeetingProvider = ({ children }) => {
    const [currentMeeting, setCurrentMeeting] = useState([])
    const value = { currentMeeting, setCurrentMeeting }
    
    return <MeetingContext.Provider value={value}>{children}</MeetingContext.Provider>
}
