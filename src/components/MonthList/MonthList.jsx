//- Create a new component for the list of months called `MonthList`. 
//`MonthList` should be handling the making of each 
//`MonthItem` (creating a `MonthItem` for each month).
//import MonthItem from '../MonthItem/MonthItem.jsx';

function MonthList({list}) {
    return(
        <>
            {list.map(calendar=>
            <MonthItems
            key = {calendar.id}
            id = {calendar.id}
            name ={calendar.name}/>
            )}
        
        </>
    )
}


export default MonthList;