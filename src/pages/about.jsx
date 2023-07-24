import Collapse from '../components/Collapse';
import aboutImg from '../asset/about__img.png';

let collapse__text = [
   'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
   'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
   'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
   "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
];

function About(data) {
   return (
      <div className="about">
         <div className="about__picture">
            <img
               src={aboutImg}
               alt="mountain and forest on about page"
               className="about__picture-img"
            />
         </div>
         <div className="about__main">
            <Collapse
               title={'Fiabilité'}
               text={'hello'}
               collapseClass={'about__main__1'}
               textClass={'about__main__collapse__text'}
            />
            <Collapse
               title={'titre'}
               text={'hello'}
               collapseClass={'about__main__1'}
               textClass={'about__main__collapse__text'}
            />
            <Collapse
               title={'titre'}
               text={'hello'}
               collapseClass={'about__main__1'}
               textClass={'about__main__collapse__text'}
            />
            <Collapse
               title={'titre'}
               text={'hello'}
               collapseClass={'about__main__1'}
               textClass={'about__main__collapse__text'}
            />
         </div>
      </div>
   );
}
export default About;
