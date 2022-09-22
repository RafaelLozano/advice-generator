export const getAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => {
        console.log(res);
        return res.json();
    })
    .catch(()=>{
        console.error('ocurrio un error');
    })
}