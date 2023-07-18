import { Link } from 'react-router-dom';

function HomeGallery({ data }) {
   console.log(data);
   return (
      <div className="home__gallery">
         <Link to="/habitation">
            <div className="home__gallery-grid">
               {data.map((item, index) => (
                  <figure key={index}>
                     <img
                        src={item.cover}
                        alt={item.description}
                        className="home__gallery-grid__img"
                     ></img>
                     <figcaption>{item.title}</figcaption>
                  </figure>
               ))}
            </div>
         </Link>
      </div>
   );
}
export default HomeGallery;
