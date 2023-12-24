import { routesNames } from "@typed-router"

export enum RouteLayout {
    ACCOUNT_ME = "account-me",
    ACCOUNT_ME_SETTINGS = "account-me-settings",
    ACCOUNT_USER = "account-user",
    DEFAULT = "default",
    ERROR = "error",
    FAQ = "faq",
    GAME = "game",
    POLICY = "policy",
}

export enum RouteName {
    PRIVATE_ACCOUNT = routesNames.privateLocaleAccount.localeAccountIndexBalance,
    PRIVATE_ACCOUNT_BALANCE = routesNames.privateLocaleAccount.localeAccountIndexBalance,
    PRIVATE_ACCOUNT_FAVORITES = routesNames.privateLocaleAccountFavorites,
    PRIVATE_ACCOUNT_ITEMS = routesNames.privateLocaleAccount.localeAccountIndexItems,
    PRIVATE_ACCOUNT_PURCHASES = routesNames.privateLocaleAccount.localeAccountIndexPurchases,
    PRIVATE_ACCOUNT_REVIEWS = routesNames.privateLocaleAccount.localeAccountIndexReviews,
    PRIVATE_ACCOUNT_SALES = routesNames.privateLocaleAccount.localeAccountIndexSales,
    PRIVATE_ACCOUNT_SELL = routesNames.privateLocaleAccountSell,
    PRIVATE_ACCOUNT_SETTINGS = routesNames.privateLocaleAccountSettings.localeAccountSettingsBasic,
    PRIVATE_ACCOUNT_SETTINGS_BASIC = routesNames.privateLocaleAccountSettings.localeAccountSettingsBasic,
    PRIVATE_ACCOUNT_SETTINGS_NOTIFICATIONS = routesNames.privateLocaleAccountSettings.localeAccountSettingsNotifications,
    PRIVATE_ACCOUNT_SETTINGS_REFERRAL = routesNames.privateLocaleAccountSettings.localeAccountSettingsReferral,
    PRIVATE_ACCOUNT_SETTINGS_SECURITY = routesNames.privateLocaleAccountSettings.localeAccountSettingsSecurity,
    PRIVATE_ACCOUNT_SUBSCRIPTION = routesNames.privateLocaleAccount.localeAccountIndexSubscription,
    PRIVATE_ACCOUNT_WITHDRAW = routesNames.privateLocaleAccountWithdraw,

    PRIVATE_GAME_ITEM_SELL = routesNames.publicLocaleGGameIdGameSectionSell,
    PRIVATE_GAME_ITEM_SELL_EDIT = routesNames.publicLocaleGGameIdGameSectionItemIdEdit,

    PUBLIC_FAQ = routesNames.publicLocaleFaq.localeFaqGeneral,
    PUBLIC_FAQ_ACCOUNT = routesNames.publicLocaleFaq.localeFaqAccount,
    PUBLIC_FAQ_AFFILIATE = routesNames.publicLocaleFaq.localeFaqAffiliate,
    PUBLIC_FAQ_AI = routesNames.publicLocaleFaq.localeFaqAi,
    PUBLIC_FAQ_DELIVERY = routesNames.publicLocaleFaq.localeFaqDelivery,
    PUBLIC_FAQ_GENERAL = routesNames.publicLocaleFaq.localeFaqGeneral,
    PUBLIC_FAQ_PAYMENT = routesNames.publicLocaleFaq.localeFaqPayment,
    PUBLIC_FAQ_RATING = routesNames.publicLocaleFaq.localeFaqRating,
    PUBLIC_FAQ_SECURITY = routesNames.publicLocaleFaq.localeFaqSecurity,
    PUBLIC_FAQ_SELLERS = routesNames.publicLocaleFaq.localeFaqSellers,
    PUBLIC_FAQ_TECHNICAL = routesNames.publicLocaleFaq.localeFaqTechnical,

    PUBLIC_GAME = routesNames.publicLocaleGGameIdGameSection,
    PUBLIC_GAME_ITEM_BUY = routesNames.publicLocaleGGameIdGameSectionItemIdBuy,

    PUBLIC_MAIN = routesNames.publicLocale,

    PUBLIC_POLICY = routesNames.publicLocalePolicy.localePolicyAgreement,
    PUBLIC_POLICY_AGREEMENT = routesNames.publicLocalePolicy.localePolicyAgreement,
    PUBLIC_POLICY_LICENSE = routesNames.publicLocalePolicy.localePolicyLicense,
    PUBLIC_POLICY_PRIVACY = routesNames.publicLocalePolicy.localePolicyPrivacy,

    PUBLIC_USER = routesNames.publicLocaleUUserId.localeUUserIdIndexStorefront,
    PUBLIC_USER_REVIEWS = routesNames.publicLocaleUUserId.localeUUserIdIndexReviews,
    PUBLIC_USER_STOREFRONT = routesNames.publicLocaleUUserId.localeUUserIdIndexStorefront,
}
