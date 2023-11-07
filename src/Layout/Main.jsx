import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { FaMoon, FaRegLightbulb } from "react-icons/fa";


const Main = () => {

    const [theme, setTheme] = useState('light')

    function changeTheme() {
        const html = document.documentElement

        if (theme == 'light') {
            html.classList.remove('light')
            html.classList.add('dark')
            setTheme('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            html.classList.remove('dark')
            html.classList.add('light')
            setTheme('light')
            localStorage.setItem('theme', 'light')
        }
    }

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme') || 'light'
        document.documentElement.classList.add(currentTheme)
        setTheme(currentTheme)
    },[])

    return (
        <div className="dark:bg-slate-800 dark:text-slate-200">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <button onClick={changeTheme} className="btn fixed top-1/2 bg-[#5bbb7b] hover:bg-[#43a062] text-black">{theme === "dark" ? <FaRegLightbulb></FaRegLightbulb> : <FaMoon></FaMoon>}</button>
            <ToastContainer />
        </div>
    );
};

export default Main;