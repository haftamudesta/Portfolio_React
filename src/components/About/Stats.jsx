import "./Stats.css";
import { stats } from '../../Data/Data';
import parse from 'html-react-parser';

const Stats = () => {
  return (
    <main className="stats__info">
        {stats.map(({number,title},index)=>{
            return (
                <div className="stats__info__list" key={index}>
                    <button className="border border-r-red-700 border-l-slate-700 p-2 stats__number">{number}</button>
                    <p className="stats__title">{parse(title)}</p>
                </div>
            )
        })}
    </main>
  )
}

export default Stats