import { useEffect, useState } from "react";

function useCurrency(currency) {

    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://pwebassets.paytm.com/toolsapi/currency/rate/rate.json`)
            .then((resp) => resp.json())
            .then((resp) => {
                setData(resp['rates'])
            });

    }, [currency])

    return data
}

export default useCurrency