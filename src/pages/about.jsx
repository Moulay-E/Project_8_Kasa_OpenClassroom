import Collapse from '../components/Collapse';
import aboutImg from '../asset/about__img.png';

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
               title={'titre'}
               text={'hello'}
               className={'about__main__collapse__text'}
            />
            <Collapse
               title={'titre'}
               text={'hello'}
               className={'about__main__collapse__text'}
            />
            <Collapse
               title={'titre'}
               text={'hello'}
               className={'about__main__collapse__text'}
            />
            <Collapse
               title={'titre'}
               text={'hello'}
               className={'about__main__collapse__text'}
            />
         </div>
      </div>
   );
}
export default About;
