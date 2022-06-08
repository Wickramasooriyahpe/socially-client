import { useState, useEffect } from "react";

const useCampaign = () => {
    const {values, setValues} = useState({

    })
    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value} = e.target;
        setValues({
            ...values,
                [name]: value
            
        });
    };

    return { handleChange };
};

export default useCampaign;

