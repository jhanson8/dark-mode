
import { useState, useEffect } from "react";
import { useLocalStorage } from "./localStorage";



export const useDarkMode = () => {

const [darkMode, setDarkMode] = useLocalStorage('key');


  useEffect(() => {
        if (darkMode === true) {
            document.querySelector("body").classList.add("dark-mode");
        } else {
            document.querySelector("body").classList.remove("dark-mode");
          }

    },[darkMode, setDarkMode]);

    return [darkMode, setDarkMode];


};
