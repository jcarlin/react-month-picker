function HeaderComponent({monthName}) {
    console.log(monthName);
    return (
        <>
            <h3>
                Clicked Month: { monthName }
            </h3>
        </>
    )
        
}

export default HeaderComponent;