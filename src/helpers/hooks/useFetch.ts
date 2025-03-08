import { useEffect, useState } from "react"

interface FecthFunction<P, T> {
    (params?: P): Promise<T>
}

interface UseFetchResult<T> {
    data: T | null | undefined;
    isLoading: boolean;
    error: Error | null;
}

export const useFetch =<T, P> (
    fecthFunction: FecthFunction<P,T>, 
    params?: P
    ): UseFetchResult<T> => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const stringParams = params ? new URLSearchParams(params).toString() : ""

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true)
                const result = await fecthFunction(params)
                setData(result)
            } catch (error) {
                setError(error as Error)
            } finally {
                setIsLoading(false)
            }
        })();
    }, [fecthFunction, stringParams])

    return { data, isLoading, error }
}