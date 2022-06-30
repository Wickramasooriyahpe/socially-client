import axios from "axios";
import { useState, useEffect } from "react";
import AdvertiserDashboard from "./AdvertiserDashboard";

function useDashboard () {

    const [values, getValues] = useState('');

    const url = 'http://localhost:3000';

    useEffect(() => {
        getDashData();
    }, []);

    const getDashData = () => {
        axios.get('${url}past')
        .then ((Response) => {
            const allDashData = Response.data.values.allDashData;
            getValues(allDashData);
        })

        .catch(error => console.error('Error: ${error}'));

    }

    return(
        <AdvertiserDashboard values={values}/>
    )

};

export default useDashboard;