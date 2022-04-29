export async function getList() {
    try {
        return (
            fetch('https://demo5947973.mockable.io/movies')
            .then(data => data.json())
        )
    } catch (error) {
        console.log(error);
        console.log("Error en la conexión");
    }
}