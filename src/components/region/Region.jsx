import { Country } from '../country/Country';
import style from './Region.module.css';

    export function Region({title, countries}) {
        console.log(countries);
        return(
            <div className={style.region}>
                <h2>{title}</h2>
                <div className={style.countryList}>
                {countries.map((country, idx) => {
                 const languageArray = country.languages && typeof country.languages === 'object'
                 ? Object.values(country.languages)
                 : [];
                  console.log(country.languages);
                      return (       
                      <Country
                      key={idx}
                          name = {country.name.common}
                          population = {country.population}
                          flag ={country.flags.svg}
                          capital = {country.capital}
                          languages={languageArray.join(', ')}/>
                )
    })}
                
                </div>
            </div>
        );
    }

    