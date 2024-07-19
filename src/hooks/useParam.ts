import { useSearchParams } from "react-router-dom";

/*
    I wish it would be like:
        useParam<number> = useNumberParam;
        useParam<string> = useStringParam;
*/

export function useStringParam(name: string): string | null
{
    const [searchParams] = useSearchParams();
    const param = searchParams.get(name);

    if (param)
        return param;
    return null;
}

export function useNumberParam(name: string): number | null
{
    const [searchParams] = useSearchParams();
    const param = searchParams.get(name);

    if (param)
    {
        const num = Number(param);
        if (!isNaN(num))
            return num;
    }
    return null;
}