"use client"

import classes from "@/classes"
import {
  content,
  resizer,
  sidebar,
} from "@/components/sidebar-container.module.scss"
import {
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
  useCallback,
  useRef,
  useState,
} from "react"

/**
 * Sidebar container component with draggable sidebar and main content area.
 *
 * 1. Provides a layout with draggable sidebar and main content area.
 * 2. Sidebar can be resized by dragging the handle.
 * 3. Main content area fills the remaining space.
 * 4. Uses flexbox for layout management.
 * 5. Maintains minimum and maximum width constraints for sidebar.
 *
 * @param children The main content to display in the content area.
 * @param sidebarContent The content to display inside the sidebar.
 * @param defaultWidth The initial width of the sidebar in pixels.
 * @param minWidth The minimum allowed width in pixels.
 * @param maxWidth The maximum allowed width in pixels.
 * @returns A sidebar container component with draggable sidebar and content area.
 */
export default function ({
  children,
  sidebarContent,
  defaultWidth = 265,
  minWidth = 200,
  maxWidth = 500,
}: {
  children: ReactNode
  sidebarContent: ReactNode
  defaultWidth?: number
  minWidth?: number
  maxWidth?: number
}) {
  const [width, setWidth] = useState(defaultWidth)
  const [isDragging, setIsDragging] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = useCallback((e: ReactMouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !sidebarRef.current) return

      const containerRect =
        sidebarRef.current.parentElement?.getBoundingClientRect()
      if (!containerRect) return

      const newWidth = e.clientX - containerRect.left
      const clampedWidth = Math.max(minWidth, Math.min(maxWidth, newWidth))

      setWidth(clampedWidth)
    },
    [isDragging, minWidth, maxWidth],
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Add global event listeners for drag
  useState(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
      }
    }
  })

  const sidebarElement = (
    <div
      ref={sidebarRef}
      className={classes(sidebar)}
      style={{ width: `${width}px` }}
    >
      <div className={classes(content)}>{sidebarContent}</div>
      <div
        className={classes(resizer)}
        onMouseDown={handleMouseDown}
        style={{ cursor: isDragging ? "col-resize" : "ew-resize" }}
      />
    </div>
  )

  const contentElement = <div className={classes(content)}>{children}</div>

  return (
    <>
      {sidebarElement}
      {contentElement}
    </>
  )
}
