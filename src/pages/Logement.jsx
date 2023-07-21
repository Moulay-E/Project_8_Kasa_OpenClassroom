import { useParams } from 'react-router-dom';
import Collapse from '../components/Collapse';
import Carousel from '../components/Carousel';

function Logement({ data }) {
   const { id } = useParams();
   let result = data.find((item) => item.id === id);
   console.log(result);
   return (
      <div className="logement">
         <Carousel array={result} />
         <div className="logement__container">
            <div className="logement__container__header">
               <div className="logement__container__header__title">
                  <h2 key={result.title}>{result.title}</h2>
                  <h3 key={result.location}>{result.location}</h3>
               </div>
               <ul className="logement__container__header__tags">
                  {result.tags.map((item, index) => (
                     <li
                        className="logement__container__header__tags__li"
                        key={index}
                     >
                        {item}
                     </li>
                  ))}
               </ul>
            </div>
            <div className="logement__container__aside">
               <div className="logement__container__aside__profile">
                  <h3 key={result.host.name}>{result.host.name}</h3>
                  <img src={result.host.picture} key={result} alt="profile" />
               </div>
               <div className="logement__container__aside__star">
                  <p>star</p>
               </div>
            </div>
         </div>
         <div className="logement__collapse">
            <Collapse
               title={'Description'}
               text={result.description}
               className={'description'}
            />
            <Collapse
               title={'Equipement'}
               text={result.equipments}
               className={'equipments'}
            />
         </div>
      </div>
   );
}
export default Logement;
