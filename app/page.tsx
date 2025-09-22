import layout from "@components/layout.module.scss"
import { useTranslations } from "next-intl"

export default function () {
  const t = useTranslations("meta")
  return (
    <div className={[layout.container, layout.center].join(" ")}>
      locale: {t("name")}
    </div>
  )
}
