import { useEffect, useState } from "react"


export const useFetch = (fecthFunction, params) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const stringParams = params ? new URLSearchParams(params).toString() : ""

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true)
                const result = await fecthFunction(params)
                setData(result)
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }) ();
    }, [fecthFunction, stringParams])

    return {data, isLoading, error}
}