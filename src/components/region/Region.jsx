import { Country } from '../country/Country';
import style from './Region.module.css';

    export function Region({title, countries}) {
        console.log(countries);
        return(
            <div className={style.region}>
                <h2>{title}</h2>
                <div className={style.countryList}>
                {countries.map((country, idx) => (
                <Country name = {country.name.common} population = {country.population} flag ={country.flags.svg}/>
                ))}
                </div>
            </div>
        );
    }

    