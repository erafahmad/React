// Apply the api and use the app

import { useEffect } from "react";
import { useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(``)
        .then((res) =>  res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency]);
    console.log(data);
    return data
}

export default useCurrencyInfo;
