import react,{useEffect,useState} from'react';
import {getAdvice}from'../../api/getAdvice'
import './card.css'
const Card = () => {
    const [adviceData,setAdviceData] = useState(null);
    const getAdviceData = () => {
        getAdvice()
        .then(data => setAdviceData(data.slip));
    }
   
    useEffect(() => {
        getAdviceData();
    }, [])
    
    return (
        <article className="advice__card">
            <h1 data-testid="advice" >ADVICE #{adviceData?.id}</h1>
            <h2>{adviceData?.advice ? `"${adviceData.advice}"`:'Cargando...'}</h2>
            <div className="divider" />

            <button className="advice__diceContainer" 
            onClick={ () => {
                setAdviceData(null); 
                getAdviceData();
                }
            }>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/>
                </svg>
            </button>
        </article>
    )

}
export default Card;