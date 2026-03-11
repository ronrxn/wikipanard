"use client"
import React,{ useState } from "react";

export default function SideBar() {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`${isOpen ? 'w-100' : 'w-10'} h-full bg-blue-300 absolute`}>
            <button onClick={handleClick}>tralalelo tralala</button>
        </div>
    );
}