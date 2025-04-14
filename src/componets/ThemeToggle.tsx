// components/ThemeToggle.tsx
import React, { useEffect, useState } from 'react'

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light')
    setTheme(initialTheme)
    document.documentElement.classList.toggle('dark', initialTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-3xl shadow bg-gray-200 dark:bg-black text-black dark:text-white transform hover:scale-110 transition all duration-300 ease-in-out"
    >
       {theme === 'dark' ? 'Light' : 'Dark'} Theme
    </button>
  )
}

export default ThemeToggle
