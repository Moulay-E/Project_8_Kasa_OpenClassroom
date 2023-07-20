import { useParams } from 'react-router-dom';
import Collapse from '../components/Collapse';

function Logement({ data }) {
   const { id } = useParams();
   let result = data.find((item) => item.id === id);
   console.log(result);
   return (
      <div className="logement">
         <div>
            <img
               src={result.pictures[0]}
               alt={result.description}
               className="logement__img"
            />
         </div>
         <div>
            <div>titre et sous titre</div>
            <div>nom img profile</div>
         </div>
         <div>
            <p>tag</p>
            <p>star</p>
         </div>
         <div>
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
