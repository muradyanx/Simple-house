import { useEffect, useState } from "react";
import Article from "../../Components/Article";
import  './style.scss';
import { Link } from "react-router-dom";
import img from '../../assets/img.jpg';
import pizza1 from '../../assets/gallery/pizza1.png';
import pizza2 from '../../assets/gallery/pizza2.jpg';
import pizza3 from '../../assets/gallery/pizza3.png';
import pizza4 from '../../assets/gallery/pizza4.png';
import pizza5 from '../../assets/gallery/pizza5.png';
import pizza6 from '../../assets/gallery/pizza6.jpg';
import noodle1 from '../../assets/gallery/noodle1.jpg';
import noodle2 from '../../assets/gallery/noodle2.jpg';
import noodle3 from '../../assets/gallery/noodle3.jpg';
import noodle4 from '../../assets/gallery/noodle4.jpg';
import noodle5 from '../../assets/gallery/noodle5.jpg';
import noodle6 from '../../assets/gallery/noodle6.jpg';
import salad1 from '../../assets/gallery/salad1.jpg';
import salad2 from '../../assets/gallery/salad2.jpg';
import salad3 from '../../assets/gallery/salad3.webp';
import salad4 from '../../assets/gallery/salad4.jpg';
import salad5 from '../../assets/gallery/salad5.jpg';
import salad6 from '../../assets/gallery/salad6.jpg';


 


const Home = () => {

    const food = [
        {
            image: pizza1,
            title: 'Fusce dictum finibus',
            content: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$45 / $55',
            category: 'pizza'
        },
        {
            image: pizza2,
            title: 'Aliquam sagittis',
            content: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$65 / $70',
            category: 'pizza'

        },
        {
            image: pizza3,
            title: 'Sed varius turpis',
            content: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$30.50',
            category: 'pizza'
        },
       
        {
            image: pizza4,
            title: 'Aliquam sagittis',
            content: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$25.50',
            category: 'pizza'
        },
        {
            image: pizza5,
            title: 'Maecenas eget justo',
            content: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$80.25',
            category: 'pizza'
        },
        {
            image: pizza6,
            title: 'Superior Salad',
            content: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$20 / $40 / $60',
            category: 'pizza'
        },
        {
            image: noodle1,
            title: 'Aliquam sagittis',
            content: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            price: '$30.25',
            category: 'noodle'
        },
        {
            image: noodle2,
            title: 'Third Soft Noodle',
            content: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            price: '$20.50',
            category: 'noodle'
        },
        {
            image: noodle3,
            title: 'Noodle Second',
            content: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            price: '$15.50',
            category: 'noodle'
        },
        {
            image: noodle4,
            title: 'Noodle One',
            content: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            price: '$12.50',
            category: 'noodle'
        },
        {
            image: noodle5,
            title: 'Noodle One',
            content: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            price: '$12.50',
            category: 'noodle'
        },
        {
            image: noodle6,
            title: 'Noodle One',
            content: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            price: '$12.50',
            category: 'noodle'
        },
        {
            image: salad1,
            title: 'Salad Menu One',
            content: 'Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique',
            price: '$25',
            category: 'salad'
        },
        {
            image: salad2,
            title: 'Maecenas eget justo',
            content: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            price: '$20.50',
            category: 'salad'
        },
        {
            image: salad3,
            title: 'Quisque et felis eros',
            content: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            price: '$40.50',
            category: 'salad'
        },
        {
            image: salad4,
            title: 'Quisque et felis eros',
            content: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            price: '$40.50',
            category: 'salad'
        },
        {
            image: salad5,
            title: 'Quisque et felis eros',
            content: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            price: '$40.50',
            category: 'salad'
        },
        {
            image: salad6,
            title: 'Quisque et felis eros',
            content: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            price: '$40.50',
            category: 'salad'
        } 
];



const [foodType, setFoodType] = useState('noodle');


const setFoodData = (foodtype) => {
    setFoodType(foodtype);
}

 


const items = (item) => {

   return  food.filter(el => el.category === item).map(el => {
        return( 
            <div className="P-item-block"> 
                <div  className="P-item-image" style={{backgroundImage: `url('${el.image}')`}}></div>
                <p  className="P-item-title">{el.title}</p>
                <p className="P-item-content">{el.content}</p>
                <p className="P-item-price">{el.price}</p>
            </div>
        )
    })
}



    return(
        <section className="g-container">
          <Article title='Welcome to Simple House' 

            content='Total 3 HTML pages are included in this template. Header image
                    has a parallax effect. You can feel free to download,
                    edit and use this TemplateMo layout for your commercial 
                    or non-commercial websites.'
          />

        <div className='P-btn-block'>
            <button  className={`btn ${foodType ==='noodle'?'bg-on':''}`}
                        onClick={() => {setFoodData('noodle')}}>Noodle </button> 

            <button   className={`btn ${foodType ==='salad'?'bg-on':''}`}
                        onClick={() => {setFoodData('salad')}}>Salad</button>

            <button  className={`btn ${foodType ==='pizza'?'bg-on':''}`}              
                         onClick={() => {setFoodData('pizza')}}>Pizza</button>
        </div>

    <div className="item-block">
        {items(foodType)}
    </div>

        <div  className="P-img-block">
        <div className="P-img-style" style={{backgroundImage: `url('${img}')`}}></div>

        <div className="P-content-block">
            <p className="P-title-block">Maecenas nulla neque</p>
            <p className="P-text-block">
                Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. 
                You will need to talk to us for additional permissions about our templates. Thank you.
            </p>
            <div className="btn-link">
            <Link to="/about" className=" btn-item"> Read More</Link>
            </div>
        </div>

        </div>
        </section>
    )
}

export default Home;