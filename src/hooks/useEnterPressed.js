import { useEffect, useState } from "react";

export function useEnterPressed() {
  const [key, setKey] = useState("");

  const useOnKey = ({ key }) => {
    if (key === "Enter") {
      setKey(true);

      setTimeout(() => {
        setKey(false);
      });
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", useOnKey);

    return () => document.removeEventListener("keydown", useOnKey);
  }, []);

  return key;
}
