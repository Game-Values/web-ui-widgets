import { routesNames } from "@typed-router"

export enum RouteLayout {
    DEFAULT = "default",
    GAME = "game",
}

export enum RouteMiddleware {
    AUTH = "auth",
}

export enum RouteName {
    ACCOUNT = routesNames.localeAccount.accountIndexBalance,
    ACCOUNT_BALANCE = routesNames.localeAccount.accountIndexBalance,
    ACCOUNT_FAVORITES = routesNames.localeAccountFavorites,
    ACCOUNT_ITEMS = routesNames.localeAccount.accountIndexItems,
    ACCOUNT_PURCHASES = routesNames.localeAccount.accountIndexPurchases,
    ACCOUNT_REVIEWS = routesNames.localeAccount.accountIndexReviews,
    ACCOUNT_SALES = routesNames.localeAccount.accountIndexSales,
    ACCOUNT_SELL = routesNames.localeAccountSell,
    ACCOUNT_SETTINGS = routesNames.localeAccountSettings.accountSettingsBasic,
    ACCOUNT_SETTINGS_BASIC = routesNames.localeAccountSettings.accountSettingsBasic,
    ACCOUNT_SETTINGS_NOTIFICATIONS = routesNames.localeAccountSettings.accountSettingsNotifications,
    ACCOUNT_SETTINGS_REFERRAL = routesNames.localeAccountSettings.accountSettingsReferral,
    ACCOUNT_SETTINGS_SECURITY = routesNames.localeAccountSettings.accountSettingsSecurity,
    ACCOUNT_SUBSCRIPTION = routesNames.localeAccount.accountIndexSubscription,
    ACCOUNT_WITHDRAW = routesNames.localeAccountWithdraw,

    FAQ = routesNames.localeFaq.faqGeneral,
    FAQ_ACCOUNT = routesNames.localeFaq.faqAccount,
    FAQ_AFFILIATE = routesNames.localeFaq.faqAffiliate,
    FAQ_AI = routesNames.localeFaq.faqAi,
    FAQ_DELIVERY = routesNames.localeFaq.faqDelivery,
    FAQ_GENERAL = routesNames.localeFaq.faqGeneral,
    FAQ_PAYMENT = routesNames.localeFaq.faqPayment,
    FAQ_RATING = routesNames.localeFaq.faqRating,
    FAQ_SECURITY = routesNames.localeFaq.faqSecurity,
    FAQ_SELLERS = routesNames.localeFaq.faqSellers,
    FAQ_TECHNICAL = routesNames.localeFaq.faqTechnical,

    GAME = routesNames.localeGGameIdGameSection,
    GAME_ITEM_BUY = routesNames.localeGGameIdGameSectionItemIdBuy,
    GAME_ITEM_SELL = routesNames.localeGGameIdGameSectionSell,
    GAME_ITEM_SELL_EDIT = routesNames.localeGGameIdGameSectionItemIdEdit,

    MAIN = routesNames.locale,

    POLICY = routesNames.localePolicy.policyAgreement,
    POLICY_AGREEMENT = routesNames.localePolicy.policyAgreement,
    POLICY_LICENSE = routesNames.localePolicy.policyLicense,
    POLICY_PRIVACY = routesNames.localePolicy.policyPrivacy,

    STORE = routesNames.localeStore.storeSales,
    STORE_PURCHASES = routesNames.localeStore.storePurchases,
    STORE_SALES = routesNames.localeStore.storeSales,

    USER = routesNames.localeUUserId.uUserIdIndexStorefront,
    USER_REVIEWS = routesNames.localeUUserId.uUserIdIndexReviews,
    USER_STOREFRONT = routesNames.localeUUserId.uUserIdIndexStorefront,
}
