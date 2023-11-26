
import style from './Country.module.css';
export function Country({name, population, flag}){
    return(
        <div className={style.countries}>
            <div className={style.flagContainer}>
            <img className={style.flag} src={flag} alt="flag"/>
            </div>
            <div className={style.details}>
            <div className={style.title}>Country name: {name}</div>
            <div className={style.population}>Population: {population} people</div>
            </div>
        </div>
    );
}

