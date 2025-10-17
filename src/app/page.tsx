import classes from "@/classes"
import { center, container } from "@/styles/layout.module.scss"
import { useTranslations } from "next-intl"

export default function () {
  const t = useTranslations("meta")
  return (
    <div className={classes(container, center)}>
      locale: {t("name")}({t("code")})
    </div>
  )
}
