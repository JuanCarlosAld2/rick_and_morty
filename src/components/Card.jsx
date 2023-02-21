import OnClose from"./Onclose"
export default function Card(props) {
   return (
      <div>
         <OnClose onClose={props.onClose}/>
         <h2>Nombre:{props.name}</h2>
         <h2>Especie: {props.species}</h2>
         <h2>Genero:{props.gender}</h2>
         <img  src={props.image} alt="rickandmorty" />

      </div>
   );
}
