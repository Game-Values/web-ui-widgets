export enum AdapterToken {
    API = "ApiAdapter",
    HTTP = "HttpAdapter",
}

export enum ClientToken {
    CHAT = "ChatClient",
    COOKIE = "CookieClient",
    HTTP = "HttpClient",
    ROUTER = "RouterToken",
    STORE = "StoreToken",
}

export enum ConfirmToken {
    DELETED_LOT = "DeletedLotConfirm",
}

export enum ControllerToken {
    AUTH = "AuthController",
    CHAT = "ChatController",
    FACET = "FacetController",
    GAME = "GameController",
    ITEM = "ItemController",
    ORDER = "OrderController",
    SELL = "SellController",
    USER = "UserController",
}

export enum FacadeToken {
    BUY = "BuyFacade",
    FAVORITES = "FavoritesFacade",
    GAME = "GameFacade",
    MAIN = "MainFacade",
    SELL = "SellFacade",
    USER = "UserFacade",
    USER_ME = "UserMeFacade",
}

export enum ModalToken {
    AUTH_LOGIN = "AuthLoginModal",
    AUTH_RECOVERY_PASSWORD = "AuthRecoveryPasswordModal",
    AUTH_REGISTRATION = "AuthRegistrationModal",
}

export enum ToastToken {
    CREATED_LOT = "CreatedLotToast",
    DELETED_LOT = "DeletedLotToast",
    USER_REGISTERED = "UserRegisteredToast",
}
