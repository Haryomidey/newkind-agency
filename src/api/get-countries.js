import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [errors, setErrors] = useState({});

    const fetchCountries = async () => {
        try {
            const res = await fetch('https://restcountries.com/v3.1/all');
            const data = await res.json();

            if (res.ok) {
                const countryData = data.map(country => ({
                    label: country.name.common,
                    value: country.name.common,
                    image: country.flags.png
                }));
                setCountries(countryData);
            } else {
                throw new Error('Failed to fetch countries');
            }
        } catch (error) {
            setErrors({ fetch: error.message });
            toast.error('Error fetching countries');
        }
    };

    useEffect(() => {
        fetchCountries();
    }, []);

    return { countries, errors };
};

export default Countries;
