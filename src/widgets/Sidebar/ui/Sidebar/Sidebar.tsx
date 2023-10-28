import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import React, { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import { Button } from 'shared/ui/Button/Button'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = (): void => {
    setCollapsed(prevState => !prevState)
  }
  return (
        <div data-testid='sidebar' className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button data-testid='sidebar-toggle' onClick={onToggle}>toggle</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
  )
}
