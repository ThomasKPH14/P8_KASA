import fullstart from "../assets/Ratingfull.png";
import start from "../assets/Rating.png";


function Ratings({ rating }) {

    // for ratings Numbers
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="rate">
            {stars.map((star) =>
                rating >= star ? (
                    <img
                        key={star.toString()}
                        className="star-active"
                        src={fullstart}
                        alt=""
                    />
                ) : (
                    <img
                        key={star.toString()}
                        className="star-inactive"
                        src={start}
                        alt=""
                    />
                )
            )}
        </div>
    );
}

export default Ratings;