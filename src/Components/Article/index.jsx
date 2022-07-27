import './style.scss';


const Article = (props) => {
 
    return(
        <section className="article">
        <p className='g-text-center P-title'> {props.title} </p>
        <p className='P-content g-text-center'> {props.content} </p>
        </section>
    )
}

export default Article;