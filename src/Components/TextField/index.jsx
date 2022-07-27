import { useState } from 'react';
 

const TextField = (props) => {

    
  
    const [show, setShow] = useState(false);


   

    return(
        <div> 

            <button className="input"
            style={{color: show? '#0099cc': '#626364' }}
                 
            onClick={() => setShow(!show)}> {props.title}  </button>

            <div style={{display: show? 'block': 'none' }} className='input-text'> 
          {props.content}
        </div>  
        
        </div>
    )
}

export default TextField;