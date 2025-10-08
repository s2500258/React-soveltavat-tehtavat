const ResultCountry = (props) => {
    const languagesObject = props.countriesToShow[0]?.languages || {};
    const languageNames = Object.values(languagesObject); 

    return (
    <div className="country-details">
        {props.countriesToShow.length>1 
        ? (<p>List is too big.</p>)
        : (
                <>
                 <h1>{props.countriesToShow[0]?.name.official}</h1>
                    <div className="info">
                        <p><strong>Population:</strong> {props.countriesToShow[0]?.population}</p>
                        <p><strong>Area:</strong> {props.countriesToShow[0]?.area} km²</p>
                        <p><strong>Region:</strong> {props.countriesToShow[0]?.region}</p>
                        <h3>languages:</h3>
                        <ul>
                            {languageNames.map((lang, index) => (
                                <li key={index}> 
                                    {lang} 
                                </li>
                                ))}
                        </ul>
                    </div>
                    <img src={props.countriesToShow[0]?.flags.png} className="flag" />
                </>
            )}
    </div>
)}

export default ResultCountry;