
import style from './Country.module.css';
export function Country({name, population, flag}){
    return(
        <div className={style.countries}>
            <div className={style.flagContainer}>
            <img className={style.flag} src={flag} alt="flag"/>
            </div>
            <div className={style.details}>
            <div className={style.title}>{name}</div>
            <div className={style.population}>{population} people</div>
            </div>
        </div>
    );
}