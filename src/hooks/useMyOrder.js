import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useMyOrder = () => {
    const { user } = useAuth();
    const email = user.email;
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [email])
    return {
        orders,
        setOrders
    }
}
export default useMyOrder;