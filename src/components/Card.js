export default function Card(props){
    return (
        <div className="card">
        <img src={`./images/${props.item.imageName}`} alt="xyz"/>
        <div className="details">
          <div className="location">
              <i className="fa-solid fa-location-dot"></i>
              <p className="country">{props.item.location}</p>
              <a href={props.item.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h1 className="name">{props.item.title}</h1>
          <p className="duration">{`${props.item.startDate}-${props.item.endDate}`}</p>
          <p className="info">{props.item.description}</p>
        </div>   
      </div>
    )
}