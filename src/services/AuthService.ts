import type {
    BodyCreateUserProfileApiV1UsersPostRaw,
    BodyLoginWithOauth2ApiV1LoginOauthPostRaw,
    TokenRaw,
    UserRaw,
} from "#schema/data-contracts"
import type { HttpResponse } from "#schema/http-client"
import type { ApiAdapter } from "~/adapters"

export class AuthService {
    public constructor(
        private _apiAdapter: ApiAdapter,
    ) {}

    public async login(payload: BodyLoginWithOauth2ApiV1LoginOauthPostRaw): Promise<TokenRaw> {
        let { data }: HttpResponse<TokenRaw> = (
            await this._apiAdapter.loginWithOauth2ApiV1LoginOauthPost(payload)
        )

        return data
    }

    public async refreshToken(): Promise<TokenRaw> {
        let { data }: HttpResponse<TokenRaw> = (
            await this._apiAdapter.refreshTokenApiV1LoginRefreshPost()
        )

        return data
    }

    public async registration(payload: BodyCreateUserProfileApiV1UsersPostRaw): Promise<UserRaw> {
        let { data }: HttpResponse<UserRaw> = (
            await this._apiAdapter.createUserProfileApiV1UsersPost(payload)
        )

        return data
    }
}
