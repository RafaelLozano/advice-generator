export const getAdvice = () => {
    return fetch('https://api.adviceslip.com/advice')
    .then(res => {
        return res.json();
    })
    .catch(()=>{
        console.error('ocurrio un error');
    })
}