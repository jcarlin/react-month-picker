//- Create a new component for the list of months called `MonthList`. 
//`MonthList` should be handling the making of each 
//`MonthItem` (creating a `MonthItem` for each month).
import MonthItem from '../MonthItem/MonthItem.jsx';

// Create a component function with the two properties: calendarData and handleClick
function MonthList({calendarData, handleClick}) {
    return(
        <>
            <ul>
                {/* 
                    Loop over the passed in calendarData (property) array, creating a MonthItem instance for each

                    .map is a pure js function... it's first variable can be called anything, it is the item of the array of each iteration (in this case we will call it calItem)
                */}
                {calendarData.map(calItem =>
                    <MonthItem
                        key = {calItem.id}
                        id = {calItem.id}
                        name ={calItem.name}
                        // Pass this component's handleClick property, which is passed down from app.js to MonthItem's handleClick property. 
                        // But also bind an extra value to that event, so that when the month item li is clicked, the month name is attached to the event and sent back up to app.js for processing.
                        handleClick={handleClick.bind(this, calItem)}
                    />
                )}
            </ul>
        </>
    )
}

export default MonthList;