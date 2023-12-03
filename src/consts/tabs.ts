import { AccountTab, ProfileTab, SettingsTab } from "~/enums"

export const ACCOUNT_TABS: AccountTab[] = useValues(AccountTab)

export const PROFILE_TABS: ProfileTab[] = [
    ProfileTab.STOREFRONT,
    ProfileTab.REVIEWS,
]

export const SETTINGS_TABS: SettingsTab[] = useValues(SettingsTab)
