import react from'react';
import './card.css'
const Card = ({id:String,advice:String}) => {
    return (
        <article class="advice__card">
            <h1>ADVICE #{id}</h1>
            <h2>"{advice}"</h2>
            <div class="patronMobile">
                <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                        <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/>
                        <g transform="translate(138)" fill="#CEE3E9">
                            <rect width="6" height="16" rx="3"/>
                            <rect x="14" width="6" height="16" rx="3"/>
                        </g>
                    </g>
                </svg>
            </div>
            <div class="advice__diceContainer">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/>
                </svg>
            </div>
        </article>
    )

}
export default Card;