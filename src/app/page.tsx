import classes from "@/classes"
import { center, container } from "@components/layout.module.scss"
import { useTranslations } from "next-intl"

export default function () {
  const meta = useTranslations("meta")
  return (
    <div className={classes(container, center)}>
      locale: {meta("name")}({meta("code")})
    </div>
  )
}
