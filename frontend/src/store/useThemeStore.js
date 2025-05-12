import { create } from 'zustand'

 export const useThemeStore = create((set) => ({
 theme: localStorage.getItem("nextalk-theme") || "valentine",
 setTheme: (theme) =>{
    localStorage.setItem("nextalk-theme", theme);
    set({theme});
 } 
}))
