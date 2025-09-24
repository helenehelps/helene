import classes from "@components/classes"
import { center, container } from "@components/layout.module.scss"
import { useTranslations } from "next-intl"

export default function () {
  const t = useTranslations("meta")
  return <div className={classes(container, center)}>locale: {t("name")}</div>
}
