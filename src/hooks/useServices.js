import { useEffect, useState } from "react"

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/service`
        fetch(url)
            .then(response => response.json())
            .then(data => setServices(data));
    }, []);
    return [services, setServices]
};

export default useServices;