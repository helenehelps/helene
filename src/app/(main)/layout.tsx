import classes from "@/classes"
import SidebarContainer from "@/components/sidebar-container"
import { ReactNode } from "react"
import {
  container,
  main,
  menu,
  menuItem,
  menuLink,
  navigation,
} from "./layout.module.scss"

/**
 * Main layout component with sidebar and content area.
 *
 * 1. Provides a responsive layout with draggable sidebar.
 * 2. Sidebar can be resized by dragging the handle.
 * 3. Main content area fills the remaining space.
 * 4. Uses flexbox for layout management.
 *
 * @param children The main content to display.
 * @returns A layout component with sidebar and content area.
 */
export default function ({ children }: { children: ReactNode }) {
  const sidebarContent = (
    <nav className={classes(navigation)}>
      <ul className={classes(menu)}>
        <li className={classes(menuItem)}>
          <a href="/" className={classes(menuLink)}>
            Dashboard
          </a>
        </li>
        <li className={classes(menuItem)}>
          <a href="/settings" className={classes(menuLink)}>
            Settings
          </a>
        </li>
      </ul>
    </nav>
  )

  const mainContent = <main className={classes(main)}>{children}</main>

  return (
    <div className={classes(container)}>
      <SidebarContainer sidebarContent={sidebarContent}>
        {mainContent}
      </SidebarContainer>
    </div>
  )
}
