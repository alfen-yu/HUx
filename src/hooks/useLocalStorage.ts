import { useState, useEffect, Dispatch, SetStateAction } from "react";

// we have to specify that it is of the type dispatch setstateaction that you’re returning a tuple of [value, setter] 
// rather than an untyped array. Without an explicit return type (or a const‐assertion), TS will infer your return as (T | Dispatcher)[], 
// and then the destructuring in your component will complain.

export default function useLocalStorage<T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] {
    // get saved courses
    const [value, setValue] = useState<T>(() => {
        try {
            const saved = localStorage.getItem(key);
            return saved ? JSON.parse(saved) : initialValue;
        } catch (error) {
            console.error("failed to read from local storage", error);
            return initialValue;
        }
    });
    // for local storage, so that the courses remain saved
    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error("failed to update local storage", error);
        }
    }, [key, value]);

    return [value, setValue];
}