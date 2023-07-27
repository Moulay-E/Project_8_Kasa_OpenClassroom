import { Link } from 'react-router-dom';
import errorImg from '../asset/404.png';

function ErrorPage() {
   return (
      <main className="errorPage">
         <div className="errorPage__container">
            <div className="errorPage__container__img404">
               <img src={errorImg} alt="error 404" />
            </div>
            <div className="errorPage__container__text">
               <h2>
                  Oups! La page que
                  <span className="line-break"></span>
                  vous demandez n'existe pas.
               </h2>
            </div>
            <div className="errorPage__container__link">
               <Link to={'/'}>
                  <h4 className="errorPage__container__link__h4">
                     Retourner sur la page d’accueil
                  </h4>
               </Link>
            </div>
         </div>
      </main>
   );
}
export default ErrorPage;
