export function getList (){
    return (
        fetch(' https://demo5947973.mockable.io/movies')
            .then(data => data.json())
    ) 
}