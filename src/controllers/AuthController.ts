import type {
    BodyCreateUserProfileApiV1UsersPostRaw,
    BodyLoginWithOauth2ApiV1LoginOauthPostRaw,
    TokenRaw,
} from "#schema/data-contracts"
import type { CookieClient } from "~/clients"
import type { AuthService } from "~/services"

export class AuthController {
    public constructor(
        private _authService: AuthService,
        private _cookieClient: CookieClient,
    ) {}

    private _clearCookies(): void {
        this._cookieClient.accessToken = null
        this._cookieClient.tokenType = null

        if (this._cookieClient.chatToken)
            this._cookieClient.chatToken = null

        if (this._cookieClient.refreshToken)
            this._cookieClient.refreshToken = null
    }

    private _setCookies(tokenRaw: TokenRaw): void {
        this._cookieClient.accessToken = tokenRaw.access_token
        this._cookieClient.tokenType = tokenRaw.token_type

        if (tokenRaw.chat_token)
            this._cookieClient.chatToken = tokenRaw.chat_token

        if (tokenRaw.refresh_token)
            this._cookieClient.refreshToken = tokenRaw.refresh_token
    }

    public async login(payload: BodyLoginWithOauth2ApiV1LoginOauthPostRaw): Promise<void> {
        let tokenRaw: TokenRaw = await this._authService.login(payload)
        this._setCookies(tokenRaw)
    }

    // todo: (?)
    public async logout(): Promise<void> {
        this._clearCookies()
    }

    public async refreshToken(): Promise<void> {
        // let tokenRaw: TokenRaw = await this._authService.refreshToken()
        // this._setCookies(tokenRaw)
    }

    public async registration(payload: BodyCreateUserProfileApiV1UsersPostRaw): Promise<void> {
        await this._authService.registration(payload)
    }
}
