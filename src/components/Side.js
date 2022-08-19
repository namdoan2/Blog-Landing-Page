import './Side.css';

const Side = ({imageURL, title, description, author}) => {
    return(
        <article>
            <img src={imageURL} alt='image of article'/>
            <h4>{title}</h4>
            <h4><a href=''>{description}</a></h4>
            <div className="author">{author}</div>
        </article>
    )
}

export default Side;