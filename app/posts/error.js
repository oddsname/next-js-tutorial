'use client' //Error components must be client components

import { useEffect } from "react";

export default function ({ error, reset}) {

    useEffect(() => {
        console.log(error);
    }, [error])

    return <>
        <div>Something went wrong</div>

        <button
            onClick={() => reset()}
        >
            Reset
        </button>
    </>
}