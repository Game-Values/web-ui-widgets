export enum AdapterToken {
    API = "ApiAdapter",
    HTTP = "HttpAdapter",
}

export enum ClientToken {
    COOKIE = "CookieClient",
    HTTP = "HttpClient",
    ROUTER = "RouterToken",
    STORE = "StoreToken",
}

export enum ControllerToken {
    AUTH = "AuthController",
    GAME = "GameController",
    ITEM = "ItemController",
    SALE = "SaleController",
    USER = "UserController",
}

export enum FacadeToken {
    GAME = "GameFacade",
    MAIN = "MainFacade",
    ORDER = "OrderFacade",
    SALE = "SaleFacade",
    USER = "UserFacade",
}

export enum ModalToken {
    // AUTH_CHANGE_PASSWORD = "AuthChangePasswordModal",
    AUTH_LOGIN = "AuthLoginModal",
    AUTH_RECOVERY_PASSWORD = "AuthRecoveryPasswordModal",
    AUTH_REGISTRATION = "AuthRegistrationModal",
}

export enum ServiceToken {
    AUTH = "AuthService",
    GAME = "GameService",
    ITEM = "ItemService",
    ORDER = "OrderService",
    USER = "UserService",
}
