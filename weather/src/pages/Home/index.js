import { useEffect } from "react";
import weatherApi from '../../api/weatherApi'

function Home() {

    // useEffect(() => {
    //     const fetProduct = async () => {
    //         const weatherApir = await weatherApi.getAll();
    //         console.log(weatherApir);
    //     }
    //     fetProduct();
    // }, [])
    console.log('re-render')

    return <h1>Home page</h1>
}

export default Home