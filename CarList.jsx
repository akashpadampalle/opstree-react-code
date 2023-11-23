const CarList = ({ cars }) => {
	return (
		<div>
	         {cars.map( car => {
			
		   return (
		     <div key={car.name}> 
		      <h2>{car.name}</h2>
		      <p>{car.model}</p>
		      <p>{car.quantity}</p>			
		     </div>
		   )	
				
	         })}
		</div>
	)
}


export default CarList
