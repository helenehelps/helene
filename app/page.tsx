import utils from "@app/utils.module.scss"
import { useTranslations } from "next-intl"

export default function () {
  const t = useTranslations("meta")
  return <div className={utils.placeholder}>locale: {t("name")}</div>
}
