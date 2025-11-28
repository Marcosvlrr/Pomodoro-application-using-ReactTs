import { useState, useEffect } from 'react'
import styles from './styles.module.css'
import { HouseIcon, HistoryIcon, SettingsIcon, SunIcon, MoonIcon } from 'lucide-react'
import { RouterLink } from '../RouterLink';

type AvailableThemes = 'dark' | 'light';


export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark'
        return storageTheme
    })

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />
    }


    function handleThemeChange(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) {
        event.preventDefault()
        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
            return nextTheme
        })
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])



    return <nav className={styles.menu}>

        <RouterLink className={styles.menuLink} href='/' aria-label='Go to home' title='Go to home'>
            <HouseIcon />
        </RouterLink>

        <RouterLink className={styles.menuLink} href='/history/' aria-label='View Historic' title='View Historic'>
            <HistoryIcon />
        </RouterLink>

        <RouterLink className={styles.menuLink} href='/settings' aria-label='Go to settings' title='Go to settings'>
            <SettingsIcon />
        </RouterLink>

        <RouterLink className={styles.menuLink} href='#' aria-label='Change theme' title='Change theme'
            onClick={handleThemeChange}>
            {nextThemeIcon[theme]}
        </RouterLink>
    </nav>
}