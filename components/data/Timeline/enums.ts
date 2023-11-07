import tailwindConfig from "@/tailwind.config"

export enum TIMELINE_COLOR {
  ACTIVE = tailwindConfig.theme.extend.colors["blue-accent-medium"],
  ACTIVE_LINE = tailwindConfig.theme.extend.colors["blue-accent-medium"],
  ACTIVE_TEXT = tailwindConfig.theme.extend.colors.white,

  INACTIVE = tailwindConfig.theme.extend.colors.white,
  INACTIVE_LINE = tailwindConfig.theme.extend.colors.white,
  INACTIVE_TEXT = tailwindConfig.theme.extend.colors["grey-dark"],
}
