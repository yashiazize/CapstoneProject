import React from 'react'
import StarRating from './StarRating'

const Reviews = ({ starRatings }) => {
    return (
        <div>
            <div>
                {starRatings.map((starRating) => {
return(
<div key={starRating.id}>
    <span>{starRating.name}</span>
    <span><StarRating aRating={starRating.rating}/>
    </span>
    <p>Comment: {starRating.review}</p>
</div>
)
                })}
                 
                {/* <span>Reviewer: Daliz</span>
                <span><StarRating rating={3.5}/></span>
                <p>Comment: This chef is amazing!</p> */}
            </div>
            {/* <div>
                <span>Reviewer: Daliz</span>
                <span><StarRating rating={3.5}/></span>
                <p>Comment: This chef is amazing!</p>
            </div>
            <div>
                <span>Reviewer: Daliz</span>
                <span><StarRating rating={3.5}/></span>
                <p>Comment: This chef is amazing!</p>
            </div> */}
        </div>
    )
}

export default Reviews
