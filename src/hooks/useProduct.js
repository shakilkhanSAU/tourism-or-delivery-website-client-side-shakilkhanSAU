import { useEffect, useState } from 'react';

const useProduct = () => {
    const [tours, setTours] = useState([])
    const url = "http://localhost:5000/services"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTours(data)
            })
    }, []);
    return {
        tours
    }
}
export default useProduct;