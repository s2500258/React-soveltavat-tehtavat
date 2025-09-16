const Filter = (props) => {
    return (
        <>
            filter records with: 
            <input 
                value={props.search}
                onChange={props.handleSetSearch}
        />
        </>
    )
}

export default Filter;