import { useEffect, useState } from "react";

/* We can make sure the 'thing' is loaded on the client before we use it */
const useLoaded = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => setLoaded(true), []);
    return loaded;
};

export default useLoaded