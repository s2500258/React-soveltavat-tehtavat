const CountryList = (props) => (
        <div className="countries-list">
        <ul>
          {props.countriesToShow.map((country, index) => (
            <li
              key={country.cca2}
            >
              {country.name.common}
            </li>
          ))}
        </ul>
      </div>
)

export default CountryList;