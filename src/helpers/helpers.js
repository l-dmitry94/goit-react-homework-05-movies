const helpers = {
    getYear: dateString => {
        const date = new Date(dateString);
        return date.getFullYear();
    },

    normalizedArr: arr => {
        return arr.map(({ name }, index, arr) => (
            <span key={index}>
                {name}
                {index !== arr.length - 1 ? ', ' : ''}
            </span>
        ));
    }
}

export default helpers