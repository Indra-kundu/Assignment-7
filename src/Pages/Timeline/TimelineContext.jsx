import { createContext, useState } from 'react';

const TimelineContext = createContext();
export const TimelineProvider = ({ children }) => {
    const [activities, setActivities] = useState([]);
    const [filterType, setFilterType] = useState("All");

    const addActivity = (friendName, type, picture) => {
        const newEntry = {
            id: Date.now(),
            name: friendName,
            type: type,
            picture: picture,
            time: new Date().toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            })
        };
        setActivities([newEntry, ...activities]);
    };
    return (
        <TimelineContext.Provider value={{ activities, addActivity, filterType, setFilterType }}>
            {children}
        </TimelineContext.Provider>
    );
};
export { TimelineContext };
