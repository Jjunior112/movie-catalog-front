
const Card = ({ image, name, description }) => {
    return (
        <div className="card" >
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Card