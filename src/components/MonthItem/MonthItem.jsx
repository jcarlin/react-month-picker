//- Create a new component called `MonthItem`. `MonthItem` should be the Month to display.

// Create a component function with the two properties: name and handleClick
function MonthItem({name, handleClick}) {
    return (
        <>
            {/* Just pass the onClick event back to parent (handleClick property), 
                we will get the month name and bind it to the event in the parent 
            */}
            <li onClick={handleClick}>
                { name }
            </li>
        </>
    )
}

export default MonthItem;