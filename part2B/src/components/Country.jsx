// eslint-disable-next-line react/prop-types
const Country = ({name, flag, languages, capital, area}) => {
    return (
        <div>
            <h3>{name}</h3>
            <h5>Capital: {capital}</h5>
            <h5>Area: {area}</h5>
            <h4>Languages:</h4>
            <ul>
                {
                    Object.values(languages).map((language) => (
                        <li key={language}>{language}</li>
                    ))
                }
            </ul>
            <img src={flag} alt={name} style={{width: '100px', height: '100px'}} />
        </div>
    )
}

export default Country;