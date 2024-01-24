const ReviewsItem = ({ username, content }) => {
    return (
        <li>
            <b>{`${username}:`}</b>
            <p>{content}</p>
        </li>
    );
};

export default ReviewsItem;
