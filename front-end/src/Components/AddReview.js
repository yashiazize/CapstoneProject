import React,{ useState }  from 'react';



const AddReview = () => {
    const [name, setName] = useState("");
    const [reviewComment, setReviewComment] = useState("")
    const [rating, setRating] = useState("Rating")
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="name" type="text"/>
                </div>
                <div>
                    <label htmlFor="rating">Rating</label>
                    <select
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}>
                        <option disabled>Rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="Review"> Review</label>
                    <textarea
                    value={reviewComment}
                    onChange={(e) => setReviewComment(e.target.value)}
                    ></textarea>
                </div>
                <button>Submit</button>
            </form>
            
        </div>
    )
}

export default AddReview
