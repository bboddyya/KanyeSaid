import { useEffect, useState } from "react";

export function useOnKey() {
  const [key, setKey] = useState("");

  const listenKey = (e) => setKey(e.key);

  useEffect(() => {
    document.addEventListener("keydown", listenKey);

    return () => document.removeEventListener("keydown", listenKey);
  }, []);

  return key;
}
