function OtherPage({ data }) {
   let test = 'b9123946';
   let result = data.find((item) => item.id === test);
   console.log(result);
   return (
      <>
         <div>
            <img src={result.pictures[0]} alt={result.description} />
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
            <p>description</p>
            <p>equipement</p>
         </div>
      </>
   );
}
export default OtherPage;
