"use client";
import React from 'react';

function DarkToggle() {
    const [isDark, setIsDark] = React.useState(false);

    const toggleTheme = () => {
        setIsDark(!isDark);
        // Actually apply dark mode to HTML element
        if (!isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <button onClick={toggleTheme} className="mb-12 font-sans text-[16px] bg-white dark:bg-black text-black dark:text-white">
            {isDark ? '(light)' : '(dark)'}
        </button>
    );
}

export default DarkToggle;