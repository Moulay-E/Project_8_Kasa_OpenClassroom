import { Link } from 'react-router-dom';

function HomeGallery({ data }) {
   console.log(data);
   return (
      <div className="test">
         {data.map((item, index) => (
            <Link to={'/habitation'}>
               <figure key={index}>
                  <img src={item.cover} alt={item.description}></img>
                  <figcaption>{item.title}</figcaption>
               </figure>
            </Link>
         ))}
      </div>
   );
}
export default HomeGallery;
