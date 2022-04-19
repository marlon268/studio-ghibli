export function getList (){
    return (
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(data => data.json())
    ) 
}