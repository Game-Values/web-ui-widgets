/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** Body_create_game_api_v1_games__post */
export interface IBodyCreateGameApiV1GamesPostRaw {
	/** Attributes */
	attributes?: string
	/**
	 * Is Active
	 * @default true
	 */
	is_active?: boolean
	/** Name */
	name: string
}

/** Body_create_user_profile_api_v1_users__post */
export interface IBodyCreateUserProfileApiV1UsersPostRaw {
	/**
	 * Email
	 * @format email
	 */
	email: string
	/** Full Name */
	full_name?: string
	/** Password */
	password: string
}

/** Body_login_with_oauth2_api_v1_login_oauth_post */
export interface IBodyLoginWithOauth2ApiV1LoginOauthPostRaw {
	/** Client Id */
	client_id?: string
	/** Client Secret */
	client_secret?: string
	/**
	 * Grant Type
	 * @pattern password
	 */
	grant_type?: string
	/** Password */
	password: string
	/**
	 * Scope
	 * @default ""
	 */
	scope?: string
	/** Username */
	username: string
}

/** Body_reset_password_api_v1_login_reset_post */
export interface IBodyResetPasswordApiV1LoginResetPostRaw {
	/** Claim */
	claim: string
	/** New Password */
	new_password: string
}

export type ICreateGameApiV1GamesPostDataRaw = IGameRaw

export type ICreateGameApiV1GamesPostErrorRaw = IHTTPValidationErrorRaw

export type ICreateItemApiV1ItemsItemPostDataRaw = IItemRaw

export type ICreateItemApiV1ItemsItemPostErrorRaw = IHTTPValidationErrorRaw

export type ICreateOrderApiV1OrderPostDataRaw = IOrderInDBRaw

export type ICreateOrderApiV1OrderPostErrorRaw = IHTTPValidationErrorRaw

/** Response Create Payment Api V1 Funds Create Payment Post */
export type ICreatePaymentApiV1FundsCreatePaymentPostDataRaw = IPaymentResponseRaw | IPaymentErrorRaw

export type ICreatePaymentApiV1FundsCreatePaymentPostErrorRaw = IHTTPValidationErrorRaw

export type ICreatePayoutApiV1FundsPayoutPostDataRaw = IPayoutResponseRaw

export type ICreatePayoutApiV1FundsPayoutPostErrorRaw = IHTTPValidationErrorRaw

export type ICreateUserApiV1UsersCreatePostDataRaw = IUserRaw

export type ICreateUserApiV1UsersCreatePostErrorRaw = IHTTPValidationErrorRaw

export type ICreateUserProfileApiV1UsersPostDataRaw = IUserRaw

export type ICreateUserProfileApiV1UsersPostErrorRaw = IHTTPValidationErrorRaw

export type IDeleteItemApiV1ItemsItemItemIdDeleteDataRaw = IMsgRaw

export type IDeleteItemApiV1ItemsItemItemIdDeleteErrorRaw = IHTTPValidationErrorRaw

export type IDeleteOrderApiV1OrderOrderIdDeleteDataRaw = IOrderInDBRaw

export type IDeleteOrderApiV1OrderOrderIdDeleteErrorRaw = IHTTPValidationErrorRaw

export type IDisableTotpAuthenticationApiV1LoginTotpDeleteDataRaw = IMsgRaw

export type IDisableTotpAuthenticationApiV1LoginTotpDeleteErrorRaw = IHTTPValidationErrorRaw

export type IDislikeGameEndpointApiV1UsersDislikeGamePostDataRaw = IUserLikeRaw

export type IDislikeGameEndpointApiV1UsersDislikeGamePostErrorRaw = IHTTPValidationErrorRaw

/** Liked Game */
export type IDislikeGameEndpointApiV1UsersDislikeGamePostPayloadRaw = string

/** EnableTOTP */
export interface IEnableTOTPRaw {
	/** Claim */
	claim: string
	/** Password */
	password?: string
	/** Uri */
	uri: string
}

export type IEnableTotpAuthenticationApiV1LoginTotpPutDataRaw = IMsgRaw

export type IEnableTotpAuthenticationApiV1LoginTotpPutErrorRaw = IHTTPValidationErrorRaw

/** Response Faceted Search Api V1 Items Search  Game Id  Post */
export type IFacetedSearchApiV1ItemsSearchGameIdPostDataRaw = object

export type IFacetedSearchApiV1ItemsSearchGameIdPostErrorRaw = IHTTPValidationErrorRaw

/** Filter Criteria */
export type IFacetedSearchApiV1ItemsSearchGameIdPostPayloadRaw = Record<string, string | string[]>

/** Game */
export interface IGameRaw {
	/** Attributes */
	attributes?: object
	/**
	 * Created
	 * @format date-time
	 */
	created?: string
	/**
	 * Id
	 * @format uuid4
	 */
	id?: string
	/**
	 * Is Active
	 * @default true
	 */
	is_active?: boolean
	/**
	 * Modified
	 * @format date-time
	 */
	modified?: string
	/** Name */
	name?: string
}

/** GameUpdate */
export interface IGameUpdateRaw {
	/** Attributes */
	attributes?: object
	/**
	 * Is Active
	 * @default true
	 */
	is_active?: boolean
	/** Name */
	name?: string
}

/** Response Get Available Facets Api V1 Items Facets  Game Id  Get */
export type IGetAvailableFacetsApiV1ItemsFacetsGameIdGetDataRaw = Record<string, number>

export type IGetAvailableFacetsApiV1ItemsFacetsGameIdGetErrorRaw = IHTTPValidationErrorRaw

/** Response Get Payment Info Api V1 Funds Payment Info  Payment Id  Get */
export type IGetPaymentInfoApiV1FundsPaymentInfoPaymentIdGetDataRaw = object

export type IGetPaymentInfoApiV1FundsPaymentInfoPaymentIdGetErrorRaw = IHTTPValidationErrorRaw

export type IGetPayoutInfoApiV1FundsPayoutsInfoPostDataRaw = any

export type IGetPayoutInfoApiV1FundsPayoutsInfoPostErrorRaw = IHTTPValidationErrorRaw

/** HTTPValidationError */
export interface IHTTPValidationErrorRaw {
	/** Detail */
	detail?: IValidationErrorRaw[]
}

/** ItemAttributes */
export interface IItemAttributesRaw {
	/**
	 * Amount
	 * @default 0
	 */
	amount?: number
	/** @default "EUR" */
	currency?: IItemCurrencyRaw
	/**
	 * Description
	 * @minLength 0
	 * @maxLength 512
	 */
	description?: string
	/**
	 * Price
	 * @default 0
	 */
	price?: number
	/**
	 * Server
	 * @minLength 1
	 * @maxLength 32
	 */
	server?: string
	/**
	 * Type
	 * @minLength 1
	 * @maxLength 32
	 */
	type?: string
}

/** ItemCreate */
export interface IItemCreateRaw {
	attributes: IItemAttributesRaw
	/**
	 * Gid
	 * @format uuid4
	 */
	gid: string
	/**
	 * Is Active
	 * @default true
	 */
	is_active?: boolean
	/** Name */
	name: string
	/**
	 * Owner Id
	 * @format uuid4
	 */
	owner_id?: string
}

/**
 * ItemCurrency
 * An enumeration.
 */
export enum IItemCurrencyRaw {
	EUR = "EUR",
}

/** Item */
export interface IItemRaw {
	attributes: IItemAttributesRaw
	/**
	 * Created
	 * @format date-time
	 */
	created?: string
	/**
	 * Gid
	 * @format uuid4
	 */
	gid?: string
	/**
	 * Id
	 * @format uuid4
	 */
	id?: string
	/**
	 * Is Active
	 * @default true
	 */
	is_active?: boolean
	/**
	 * Modified
	 * @format date-time
	 */
	modified?: string
	/** Name */
	name?: string
	/**
	 * Owner Id
	 * @format uuid4
	 */
	owner_id?: string
}

/** ItemUpdate */
export interface IItemUpdateRaw {
	attributes: IItemAttributesRaw
	/**
	 * Gid
	 * @format uuid4
	 */
	gid?: string
	/**
	 * Id
	 * @format uuid4
	 */
	id: string
	/**
	 * Is Active
	 * @default true
	 */
	is_active?: boolean
	/** Name */
	name?: string
	/**
	 * Owner Id
	 * @format uuid4
	 */
	owner_id?: string
}

export type ILikeGameEndpointApiV1UsersLikeGamePostDataRaw = IUserLikeRaw

export type ILikeGameEndpointApiV1UsersLikeGamePostErrorRaw = IHTTPValidationErrorRaw

/** Liked Game */
export type ILikeGameEndpointApiV1UsersLikeGamePostPayloadRaw = string

export type ILoginWithMagicLinkApiV1LoginMagicEmailPostDataRaw = IWebTokenRaw

export type ILoginWithMagicLinkApiV1LoginMagicEmailPostErrorRaw = IHTTPValidationErrorRaw

export type ILoginWithOauth2ApiV1LoginOauthPostDataRaw = ITokenRaw

export type ILoginWithOauth2ApiV1LoginOauthPostErrorRaw = IHTTPValidationErrorRaw

export type ILoginWithTotpApiV1LoginTotpPostDataRaw = ITokenRaw

export type ILoginWithTotpApiV1LoginTotpPostErrorRaw = IHTTPValidationErrorRaw

/** Msg */
export interface IMsgRaw {
	/** Msg */
	msg: string
}

/** NewTOTP */
export interface INewTOTPRaw {
	/** Key */
	key: string
	/** Secret */
	secret?: string
	/** Uri */
	uri: string
}

/** OrderAttributes */
export interface IOrderAttributesRaw {
	/**
	 * Amount
	 * @default 1
	 */
	amount?: number
	/** @default "EUR" */
	currency?: IOrderCurrencyRaw
	/**
	 * Order Id
	 * @format uuid4
	 */
	order_id?: string
	/**
	 * Price
	 * @default 1
	 */
	price?: number
}

/** OrderBase */
export interface IOrderBaseRaw {
	/** Attributes */
	attributes?: any
	/**
	 * Game Id
	 * @format uuid4
	 */
	game_id?: string
	/**
	 * Owner Id
	 * @format uuid4
	 */
	owner_id?: string
}

/** OrderCreate */
export interface IOrderCreateRaw {
	attributes?: IOrderAttributesRaw
	/**
	 * Game Id
	 * @format uuid4
	 */
	game_id?: string
	/**
	 * Owner Id
	 * @format uuid4
	 */
	owner_id?: string
}

/**
 * OrderCurrency
 * An enumeration.
 */
export enum IOrderCurrencyRaw {
	EUR = "EUR",
}

/** OrderInDB */
export interface IOrderInDBRaw {
	/** Attributes */
	attributes?: object
	/** Created */
	created?: any
	/**
	 * Game Id
	 * @format uuid4
	 */
	game_id?: string
	/**
	 * Id
	 * @format uuid4
	 */
	id?: string
	/**
	 * Owner Id
	 * @format uuid4
	 */
	owner_id?: string
}

/** PaymentError */
export interface IPaymentErrorRaw {
	/** Message */
	message: string
}

/** PaymentNew */
export interface IPaymentNewRaw {
	/** Desc */
	desc: string
	/** Paymenttype */
	paymentType: string
	/** Sum */
	sum: number
}

/** PaymentResponse */
export interface IPaymentResponseRaw {
	/** Message */
	message: string
	/** Paymentid */
	paymentId: number
	/** Redirecturl */
	redirectUrl: string
	/** Type */
	type: string
}

/** PayoutInfoRequest */
export interface IPayoutInfoRequestRaw {
	/** Login */
	login: string
	/** Secretkey */
	secretKey: string
	/** Transactionid */
	transactionId: string
}

/** PayoutRequest */
export interface IPayoutRequestRaw {
	/** Comment */
	comment?: string
	/** Login */
	login: string
	/** Paymenttype */
	paymentType: string
	/** Projectid */
	projectId?: number
	/** Purse */
	purse: string
	/** Secretkey */
	secretKey: string
	/** Sum */
	sum: number
	/** Transactionid */
	transactionId: string
}

/** PayoutResponse */
export interface IPayoutResponseRaw {
	/** Completedate */
	completeDate: string
	/** Createdate */
	createDate: string
	/** Message */
	message: string
	/** Partnerbalance */
	partnerBalance: number
	/** Partnercommission */
	partnerCommission: number
	/** Payoutcommission */
	payoutCommission: number
	/** Payoutid */
	payoutId: number
	/** Status */
	status: string
	/** Sum */
	sum: number
}

/** Response Proxy Get Request Api V1 Proxy  Path  Get */
export type IProxyGetRequestApiV1ProxyPathGetDataRaw = any

export type IProxyGetRequestApiV1ProxyPathGetErrorRaw = IHTTPValidationErrorRaw

/** Response Proxy Post Request Api V1 Proxy  Path  Post */
export type IProxyPostRequestApiV1ProxyPathPostDataRaw = any

export type IProxyPostRequestApiV1ProxyPathPostErrorRaw = IHTTPValidationErrorRaw

/** Response Read All Games Api V1 Games  Get */
export type IReadAllGamesApiV1GamesGetDataRaw = IGameRaw[]

export type IReadAllGamesApiV1GamesGetErrorRaw = IHTTPValidationErrorRaw

export interface IReadAllGamesApiV1GamesGetParamsRaw {
	/**
	 * Page
	 * @default 0
	 */
	page?: number
}

/** Response Read All Items Api V1 Items All Get */
export type IReadAllItemsApiV1ItemsAllGetDataRaw = IItemRaw[]

export type IReadAllItemsApiV1ItemsAllGetErrorRaw = IHTTPValidationErrorRaw

export interface IReadAllItemsApiV1ItemsAllGetParamsRaw {
	/** Gid */
	gid?: string
	/**
	 * Owner
	 * @default ""
	 */
	owner?: string
	/**
	 * Page
	 * @default 0
	 */
	page?: number
}

/** Response Read All Users Api V1 Users All Get */
export type IReadAllUsersApiV1UsersAllGetDataRaw = IUserRaw[]

export type IReadAllUsersApiV1UsersAllGetErrorRaw = IHTTPValidationErrorRaw

export interface IReadAllUsersApiV1UsersAllGetParamsRaw {
	/**
	 * Page
	 * @default 0
	 */
	page?: number
}

export type IReadGameApiV1GamesGameIdGetDataRaw = IGameRaw

export type IReadGameApiV1GamesGameIdGetErrorRaw = IHTTPValidationErrorRaw

export type IReadItemApiV1ItemsItemsItemIdGetDataRaw = IItemRaw

export type IReadItemApiV1ItemsItemsItemIdGetErrorRaw = IHTTPValidationErrorRaw

export type IReadOrderApiV1OrderOrderIdGetDataRaw = IOrderInDBRaw

export type IReadOrderApiV1OrderOrderIdGetErrorRaw = IHTTPValidationErrorRaw

/** Response Read Orders By Owner Api V1 Order User  User Id  Get */
export type IReadOrdersByOwnerApiV1OrderUserUserIdGetDataRaw = IOrderInDBRaw[]

export type IReadOrdersByOwnerApiV1OrderUserUserIdGetErrorRaw = IHTTPValidationErrorRaw

export interface IReadOrdersByOwnerApiV1OrderUserUserIdGetParamsRaw {
	/**
	 * Owner Id
	 * @format uuid
	 */
	owner_id: string
	userId: string
}

export type IReadUserApiV1UsersGetDataRaw = IUserRaw

export type IReadUserApiV1UsersUsersUserIdGetDataRaw = IUserRaw

export type IReadUserApiV1UsersUsersUserIdGetErrorRaw = IHTTPValidationErrorRaw

/** Response Recover Password Api V1 Login Recover  Email  Post */
export type IRecoverPasswordApiV1LoginRecoverEmailPostDataRaw = IWebTokenRaw | IMsgRaw

export type IRecoverPasswordApiV1LoginRecoverEmailPostErrorRaw = IHTTPValidationErrorRaw

export type IRefreshTokenApiV1LoginRefreshPostDataRaw = ITokenRaw

export type IRefundPaymentApiV1FundsRefundPaymentPostDataRaw = any

export type IRefundPaymentApiV1FundsRefundPaymentPostErrorRaw = IHTTPValidationErrorRaw

export interface IRefundPaymentApiV1FundsRefundPaymentPostParamsRaw {
	/** Payment Id */
	payment_id: number
	/** Sum */
	sum?: number
}

export type IRequestNewTotpApiV1UsersNewTotpPostDataRaw = INewTOTPRaw

export type IResetPasswordApiV1LoginResetPostDataRaw = IMsgRaw

export type IResetPasswordApiV1LoginResetPostErrorRaw = IHTTPValidationErrorRaw

export type IRevokeTokenApiV1LoginRevokePostDataRaw = IMsgRaw

export type ITestEndpointApiV1UsersTesterGetDataRaw = IMsgRaw

export type IToggleStateApiV1UsersToggleStatePostDataRaw = IMsgRaw

export type IToggleStateApiV1UsersToggleStatePostErrorRaw = IHTTPValidationErrorRaw

/** Token */
export interface ITokenRaw {
	/** Access Token */
	access_token: string
	/** Chat Token */
	chat_token?: string
	/** Chat Uid */
	chat_uid?: string
	/** Refresh Token */
	refresh_token?: string
	/** Token Type */
	token_type: string
}

export type IUpdateGameApiV1GamesGameIdPutDataRaw = IGameRaw

export type IUpdateGameApiV1GamesGameIdPutErrorRaw = IHTTPValidationErrorRaw

export type IUpdateItemApiV1ItemsItemItemIdPutDataRaw = IItemRaw

export type IUpdateItemApiV1ItemsItemItemIdPutErrorRaw = IHTTPValidationErrorRaw

export type IUpdateOrderApiV1OrderOrderIdPutDataRaw = IOrderInDBRaw

export type IUpdateOrderApiV1OrderOrderIdPutErrorRaw = IHTTPValidationErrorRaw

export type IUpdateUserApiV1UsersPutDataRaw = IUserRaw

export type IUpdateUserApiV1UsersPutErrorRaw = IHTTPValidationErrorRaw

/** UserCreate */
export interface IUserCreateRaw {
	/** Attributes */
	attributes?: object
	/**
	 * Email
	 * @format email
	 */
	email: string
	/**
	 * Email Validated
	 * @default false
	 */
	email_validated?: boolean
	/** Full Name */
	full_name?: string
	/**
	 * Is Active
	 * @default true
	 */
	is_active?: boolean
	/**
	 * Is Superuser
	 * @default false
	 */
	is_superuser?: boolean
	/** Liked Games */
	liked_games?: any[]
	/**
	 * Password
	 * @minLength 8
	 * @maxLength 64
	 */
	password?: string
}

/** UserLike */
export interface IUserLikeRaw {
	/**
	 * Liked Game
	 * @format uuid
	 */
	liked_game?: string
}

/** User */
export interface IUserRaw {
	/** Attributes */
	attributes?: object
	/** Chat Id */
	chat_id?: string
	/**
	 * Email
	 * @format email
	 */
	email?: string
	/**
	 * Email Validated
	 * @default false
	 */
	email_validated?: boolean
	/** Full Name */
	full_name?: string
	/**
	 * Id
	 * @format uuid
	 */
	id?: string
	/**
	 * Is Active
	 * @default true
	 */
	is_active?: boolean
	/**
	 * Is Superuser
	 * @default false
	 */
	is_superuser?: boolean
	/**
	 * Liked Games
	 * List of UUIDs of liked game
	 */
	liked_games?: any
	/**
	 * Password
	 * @default false
	 */
	password?: boolean
	/**
	 * Totp
	 * @default false
	 */
	totp?: boolean
}

/** UserUpdate */
export interface IUserUpdateRaw {
	/** Attributes */
	attributes?: object
	/**
	 * Email
	 * @format email
	 */
	email?: string
	/**
	 * Email Validated
	 * @default false
	 */
	email_validated?: boolean
	/** Full Name */
	full_name?: string
	/**
	 * Is Active
	 * @default true
	 */
	is_active?: boolean
	/**
	 * Is Superuser
	 * @default false
	 */
	is_superuser?: boolean
	/** Liked Games */
	liked_games?: any[]
	/**
	 * Original
	 * @minLength 8
	 * @maxLength 64
	 */
	original?: string
	/**
	 * Password
	 * @minLength 8
	 * @maxLength 64
	 */
	password?: string
}

export type IValidateMagicLinkApiV1LoginClaimPostDataRaw = ITokenRaw

export type IValidateMagicLinkApiV1LoginClaimPostErrorRaw = IHTTPValidationErrorRaw

/** ValidationError */
export interface IValidationErrorRaw {
	/** Location */
	loc: (string | number)[]
	/** Message */
	msg: string
	/** Error Type */
	type: string
}

/** WebToken */
export interface IWebTokenRaw {
	/** Claim */
	claim: string
}

export namespace Api {
	/**
	 * @description First step of a 'magic link' auth. Check if the user exists and generate a magic link. Generates two short-duration jwt tokens, one for validation, one for email.
	 * @tags auth
	 * @name LoginWithMagicLinkApiV1LoginMagicEmailPost
	 * @summary Login With Magic Link
	 * @request POST:/api/v1/auth/magic/{email}
	 * @response `200` `ILoginWithMagicLinkApiV1LoginMagicEmailPostDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace LoginWithMagicLinkApiV1LoginMagicEmailPost {
		export type RequestParams = {
			/** Email */
			email: string
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = ILoginWithMagicLinkApiV1LoginMagicEmailPostDataRaw
	}
	/**
	 * @description Second step of a 'magic link' auth.
	 * @tags auth
	 * @name ValidateMagicLinkApiV1LoginClaimPost
	 * @summary Validate Magic Link
	 * @request POST:/api/v1/auth/claim
	 * @secure
	 * @response `200` `IValidateMagicLinkApiV1LoginClaimPostDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace ValidateMagicLinkApiV1LoginClaimPost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IWebTokenRaw
		export type RequestHeaders = {}
		export type ResponseBody = IValidateMagicLinkApiV1LoginClaimPostDataRaw
	}
	/**
	 * @description First step with OAuth2 compatible token auth, get an access token for future requests. The chat_token is used to authenticate with the chat.ts server. In case if the chat.ts server is not available, the user can still auth, but will not be able to user the chat.ts and chat_token will be empty.
	 * @tags auth
	 * @name LoginWithOauth2ApiV1LoginOauthPost
	 * @summary Login With Oauth2
	 * @request POST:/api/v1/auth/oauth
	 * @response `200` `ILoginWithOauth2ApiV1LoginOauthPostDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace LoginWithOauth2ApiV1LoginOauthPost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IBodyLoginWithOauth2ApiV1LoginOauthPostRaw
		export type RequestHeaders = {}
		export type ResponseBody = ILoginWithOauth2ApiV1LoginOauthPostDataRaw
	}
	/**
	 * @description For validation of token before enabling TOTP.
	 * @tags auth
	 * @name EnableTotpAuthenticationApiV1LoginTotpPut
	 * @summary Enable Totp Authentication
	 * @request PUT:/api/v1/auth/totp
	 * @secure
	 * @response `200` `IEnableTotpAuthenticationApiV1LoginTotpPutDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace EnableTotpAuthenticationApiV1LoginTotpPut {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IEnableTOTPRaw
		export type RequestHeaders = {}
		export type ResponseBody = IEnableTotpAuthenticationApiV1LoginTotpPutDataRaw
	}
	/**
	 * @description Final validation step, using TOTP.
	 * @tags auth
	 * @name LoginWithTotpApiV1LoginTotpPost
	 * @summary Login With Totp
	 * @request POST:/api/v1/auth/totp
	 * @secure
	 * @response `200` `ILoginWithTotpApiV1LoginTotpPostDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace LoginWithTotpApiV1LoginTotpPost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IWebTokenRaw
		export type RequestHeaders = {}
		export type ResponseBody = ILoginWithTotpApiV1LoginTotpPostDataRaw
	}
	/**
	 * @description Disable TOTP.
	 * @tags auth
	 * @name DisableTotpAuthenticationApiV1LoginTotpDelete
	 * @summary Disable Totp Authentication
	 * @request DELETE:/api/v1/auth/totp
	 * @secure
	 * @response `200` `IDisableTotpAuthenticationApiV1LoginTotpDeleteDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace DisableTotpAuthenticationApiV1LoginTotpDelete {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IUserUpdateRaw
		export type RequestHeaders = {}
		export type ResponseBody = IDisableTotpAuthenticationApiV1LoginTotpDeleteDataRaw
	}
	/**
	 * @description Refresh tokens for future requests
	 * @tags auth
	 * @name RefreshTokenApiV1LoginRefreshPost
	 * @summary Refresh Token
	 * @request POST:/api/v1/auth/refresh
	 * @secure
	 * @response `200` `IRefreshTokenApiV1LoginRefreshPostDataRaw` Successful Response
	 */
	export namespace RefreshTokenApiV1LoginRefreshPost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = IRefreshTokenApiV1LoginRefreshPostDataRaw
	}
	/**
	 * @description Revoke a refresh token
	 * @tags auth
	 * @name RevokeTokenApiV1LoginRevokePost
	 * @summary Revoke Token
	 * @request POST:/api/v1/auth/revoke
	 * @secure
	 * @response `200` `IRevokeTokenApiV1LoginRevokePostDataRaw` Successful Response
	 */
	export namespace RevokeTokenApiV1LoginRevokePost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = IRevokeTokenApiV1LoginRevokePostDataRaw
	}
	/**
	 * @description Password Recovery
	 * @tags auth
	 * @name RecoverPasswordApiV1LoginRecoverEmailPost
	 * @summary Recover Password
	 * @request POST:/api/v1/auth/recover/{email}
	 * @response `200` `IRecoverPasswordApiV1LoginRecoverEmailPostDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace RecoverPasswordApiV1LoginRecoverEmailPost {
		export type RequestParams = {
			/** Email */
			email: string
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = IRecoverPasswordApiV1LoginRecoverEmailPostDataRaw
	}
	/**
	 * @description Reset password
	 * @tags auth
	 * @name ResetPasswordApiV1LoginResetPost
	 * @summary Reset Password
	 * @request POST:/api/v1/auth/reset
	 * @secure
	 * @response `200` `IResetPasswordApiV1LoginResetPostDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace ResetPasswordApiV1LoginResetPost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IBodyResetPasswordApiV1LoginResetPostRaw
		export type RequestHeaders = {}
		export type ResponseBody = IResetPasswordApiV1LoginResetPostDataRaw
	}
	/**
	 * @description Get current user.
	 * @tags users
	 * @name ReadUserApiV1UsersGet
	 * @summary Read User
	 * @request GET:/api/v1/users/
	 * @secure
	 * @response `200` `IReadUserApiV1UsersGetDataRaw` Successful Response
	 */
	export namespace ReadUserApiV1UsersGet {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = IReadUserApiV1UsersGetDataRaw
	}
	/**
	 * @description Update user.
	 * @tags users
	 * @name UpdateUserApiV1UsersPut
	 * @summary Update User
	 * @request PUT:/api/v1/users/
	 * @secure
	 * @response `200` `IUpdateUserApiV1UsersPutDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace UpdateUserApiV1UsersPut {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IUserUpdateRaw
		export type RequestHeaders = {}
		export type ResponseBody = IUpdateUserApiV1UsersPutDataRaw
	}
	/**
	 * @description Create new user without the need to be logged in.
	 * @tags users
	 * @name CreateUserProfileApiV1UsersPost
	 * @summary Create User Profile
	 * @request POST:/api/v1/users/
	 * @response `200` `ICreateUserProfileApiV1UsersPostDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace CreateUserProfileApiV1UsersPost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IBodyCreateUserProfileApiV1UsersPostRaw
		export type RequestHeaders = {}
		export type ResponseBody = ICreateUserProfileApiV1UsersPostDataRaw
	}
	/**
	 * @description Retrieve all current users.
	 * @tags users
	 * @name ReadAllUsersApiV1UsersAllGet
	 * @summary Read All Users
	 * @request GET:/api/v1/users/all
	 * @secure
	 * @response `200` `IReadAllUsersApiV1UsersAllGetDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace ReadAllUsersApiV1UsersAllGet {
		export type RequestParams = {}
		export type RequestQuery = {
			/**
			 * Page
			 * @default 0
			 */
			page?: number
		}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = IReadAllUsersApiV1UsersAllGetDataRaw
	}
	/**
	 * @description Request new keys to enable TOTP on the user account.
	 * @tags users
	 * @name RequestNewTotpApiV1UsersNewTotpPost
	 * @summary Request New Totp
	 * @request POST:/api/v1/users/new-totp
	 * @secure
	 * @response `200` `IRequestNewTotpApiV1UsersNewTotpPostDataRaw` Successful Response
	 */
	export namespace RequestNewTotpApiV1UsersNewTotpPost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = IRequestNewTotpApiV1UsersNewTotpPostDataRaw
	}
	/**
	 * @description Toggle user state (moderator function)
	 * @tags users
	 * @name ToggleStateApiV1UsersToggleStatePost
	 * @summary Toggle State
	 * @request POST:/api/v1/users/toggle-state
	 * @secure
	 * @response `200` `IToggleStateApiV1UsersToggleStatePostDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace ToggleStateApiV1UsersToggleStatePost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IUserUpdateRaw
		export type RequestHeaders = {}
		export type ResponseBody = IToggleStateApiV1UsersToggleStatePostDataRaw
	}
	/**
	 * @description Create new user (moderator function).
	 * @tags users
	 * @name CreateUserApiV1UsersCreatePost
	 * @summary Create User
	 * @request POST:/api/v1/users/create
	 * @secure
	 * @response `200` `ICreateUserApiV1UsersCreatePostDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace CreateUserApiV1UsersCreatePost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IUserCreateRaw
		export type RequestHeaders = {}
		export type ResponseBody = ICreateUserApiV1UsersCreatePostDataRaw
	}
	/**
	 * @description Test current endpoint.
	 * @tags users
	 * @name TestEndpointApiV1UsersTesterGet
	 * @summary Test Endpoint
	 * @request GET:/api/v1/users/tester
	 * @response `200` `ITestEndpointApiV1UsersTesterGetDataRaw` Successful Response
	 */
	export namespace TestEndpointApiV1UsersTesterGet {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = ITestEndpointApiV1UsersTesterGetDataRaw
	}
	/**
	 * @description Endpoint to like a game.
	 * @tags users
	 * @name LikeGameEndpointApiV1UsersLikeGamePost
	 * @summary Like Game Endpoint
	 * @request POST:/api/v1/users/like-game
	 * @secure
	 * @response `200` `ILikeGameEndpointApiV1UsersLikeGamePostDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace LikeGameEndpointApiV1UsersLikeGamePost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = ILikeGameEndpointApiV1UsersLikeGamePostPayloadRaw
		export type RequestHeaders = {}
		export type ResponseBody = ILikeGameEndpointApiV1UsersLikeGamePostDataRaw
	}
	/**
	 * @description Endpoint to dislike (unlike) a game.
	 * @tags users
	 * @name DislikeGameEndpointApiV1UsersDislikeGamePost
	 * @summary Dislike Game Endpoint
	 * @request POST:/api/v1/users/dislike-game
	 * @secure
	 * @response `200` `IDislikeGameEndpointApiV1UsersDislikeGamePostDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace DislikeGameEndpointApiV1UsersDislikeGamePost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IDislikeGameEndpointApiV1UsersDislikeGamePostPayloadRaw
		export type RequestHeaders = {}
		export type ResponseBody = IDislikeGameEndpointApiV1UsersDislikeGamePostDataRaw
	}
	/**
	 * @description Retrieve a single item by its ID.
	 * @tags users
	 * @name ReadUserApiV1UsersUsersUserIdGet
	 * @summary Read User
	 * @request GET:/api/v1/users/users/{user_id}
	 * @response `200` `IReadUserApiV1UsersUsersUserIdGetDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace ReadUserApiV1UsersUsersUserIdGet {
		export type RequestParams = {
			/**
			 * User Id
			 * @format uuid
			 */
			userId: string
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = IReadUserApiV1UsersUsersUserIdGetDataRaw
	}
	/**
	 * No description
	 * @tags proxy
	 * @name ProxyGetRequestApiV1ProxyPathGet
	 * @summary Proxy Get Request
	 * @request GET:/api/v1/proxy/{path}
	 * @secure
	 * @response `200` `IProxyGetRequestApiV1ProxyPathGetDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace ProxyGetRequestApiV1ProxyPathGet {
		export type RequestParams = {
			/**
			 * Path
			 * @format uri
			 * @minLength 1
			 * @maxLength 65536
			 */
			path: string
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = IProxyGetRequestApiV1ProxyPathGetDataRaw
	}
	/**
	 * No description
	 * @tags proxy
	 * @name ProxyPostRequestApiV1ProxyPathPost
	 * @summary Proxy Post Request
	 * @request POST:/api/v1/proxy/{path}
	 * @secure
	 * @response `200` `IProxyPostRequestApiV1ProxyPathPostDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace ProxyPostRequestApiV1ProxyPathPost {
		export type RequestParams = {
			/**
			 * Path
			 * @format uri
			 * @minLength 1
			 * @maxLength 65536
			 */
			path: string
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = IProxyPostRequestApiV1ProxyPathPostDataRaw
	}
	/**
	 * @description Retrieve game.
	 * @tags game
	 * @name ReadAllGamesApiV1GamesGet
	 * @summary Read All Games
	 * @request GET:/api/v1/game/
	 * @response `200` `IReadAllGamesApiV1GamesGetDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace ReadAllGamesApiV1GamesGet {
		export type RequestParams = {}
		export type RequestQuery = {
			/**
			 * Page
			 * @default 0
			 */
			page?: number
		}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = IReadAllGamesApiV1GamesGetDataRaw
	}
	/**
	 * @description Create new game.
	 * @tags game
	 * @name CreateGameApiV1GamesPost
	 * @summary Create Game
	 * @request POST:/api/v1/game/
	 * @secure
	 * @response `200` `ICreateGameApiV1GamesPostDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace CreateGameApiV1GamesPost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IBodyCreateGameApiV1GamesPostRaw
		export type RequestHeaders = {}
		export type ResponseBody = ICreateGameApiV1GamesPostDataRaw
	}
	/**
	 * @description Get a specific game by ID.
	 * @tags game
	 * @name ReadGameApiV1GamesGameIdGet
	 * @summary Read Game
	 * @request GET:/api/v1/game/{game_id}
	 * @response `200` `IReadGameApiV1GamesGameIdGetDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace ReadGameApiV1GamesGameIdGet {
		export type RequestParams = {
			/** Game Id */
			gameId: string
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = IReadGameApiV1GamesGameIdGetDataRaw
	}
	/**
	 * @description Update a game.
	 * @tags game
	 * @name UpdateGameApiV1GamesGameIdPut
	 * @summary Update Game
	 * @request PUT:/api/v1/game/{game_id}
	 * @secure
	 * @response `200` `IUpdateGameApiV1GamesGameIdPutDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace UpdateGameApiV1GamesGameIdPut {
		export type RequestParams = {
			/** Game Id */
			gameId: string
		}
		export type RequestQuery = {}
		export type RequestBody = IGameUpdateRaw
		export type RequestHeaders = {}
		export type ResponseBody = IUpdateGameApiV1GamesGameIdPutDataRaw
	}
	/**
	 * @description Create a new item.
	 * @tags items
	 * @name CreateItemApiV1ItemsItemPost
	 * @summary Create Item
	 * @request POST:/api/v1/items/item/
	 * @secure
	 * @response `200` `ICreateItemApiV1ItemsItemPostDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace CreateItemApiV1ItemsItemPost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IItemCreateRaw
		export type RequestHeaders = {}
		export type ResponseBody = ICreateItemApiV1ItemsItemPostDataRaw
	}
	/**
	 * @description Update an item.
	 * @tags items
	 * @name UpdateItemApiV1ItemsItemItemIdPut
	 * @summary Update Item
	 * @request PUT:/api/v1/items/item/{item_id}
	 * @secure
	 * @response `200` `IUpdateItemApiV1ItemsItemItemIdPutDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace UpdateItemApiV1ItemsItemItemIdPut {
		export type RequestParams = {
			/**
			 * Item Id
			 * @format uuid
			 */
			itemId: string
		}
		export type RequestQuery = {}
		export type RequestBody = IItemUpdateRaw
		export type RequestHeaders = {}
		export type ResponseBody = IUpdateItemApiV1ItemsItemItemIdPutDataRaw
	}
	/**
	 * @description Delete an item.
	 * @tags items
	 * @name DeleteItemApiV1ItemsItemItemIdDelete
	 * @summary Delete Item
	 * @request DELETE:/api/v1/items/item/{item_id}
	 * @secure
	 * @response `200` `IDeleteItemApiV1ItemsItemItemIdDeleteDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace DeleteItemApiV1ItemsItemItemIdDelete {
		export type RequestParams = {
			/**
			 * Item Id
			 * @format uuid
			 */
			itemId: string
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = IDeleteItemApiV1ItemsItemItemIdDeleteDataRaw
	}
	/**
	 * @description Retrieve all current users.
	 * @tags items
	 * @name ReadAllItemsApiV1ItemsAllGet
	 * @summary Read All Items
	 * @request GET:/api/v1/items/all
	 * @response `200` `IReadAllItemsApiV1ItemsAllGetDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace ReadAllItemsApiV1ItemsAllGet {
		export type RequestParams = {}
		export type RequestQuery = {
			/** Gid */
			gid?: string
			/**
			 * Owner
			 * @default ""
			 */
			owner?: string
			/**
			 * Page
			 * @default 0
			 */
			page?: number
		}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = IReadAllItemsApiV1ItemsAllGetDataRaw
	}
	/**
	 * @description Retrieve a single item by its ID.
	 * @tags items
	 * @name ReadItemApiV1ItemsItemsItemIdGet
	 * @summary Read Item
	 * @request GET:/api/v1/items/items/{item_id}
	 * @response `200` `IReadItemApiV1ItemsItemsItemIdGetDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace ReadItemApiV1ItemsItemsItemIdGet {
		export type RequestParams = {
			/**
			 * Item Id
			 * @format uuid
			 */
			itemId: string
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = IReadItemApiV1ItemsItemsItemIdGetDataRaw
	}
	/**
	 * @description Faceted search-field for items. Allowed filter criteria are: - count - price - price_from - price_till - server - description - type
	 * @tags items
	 * @name FacetedSearchApiV1ItemsSearchGameIdPost
	 * @summary Faceted Search
	 * @request POST:/api/v1/items/search-field/{game_id}
	 * @response `200` `IFacetedSearchApiV1ItemsSearchGameIdPostDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace FacetedSearchApiV1ItemsSearchGameIdPost {
		export type RequestParams = {
			/**
			 * Game Id
			 * @format uuid
			 */
			gameId: string
		}
		export type RequestQuery = {}
		export type RequestBody = IFacetedSearchApiV1ItemsSearchGameIdPostPayloadRaw
		export type RequestHeaders = {}
		export type ResponseBody = IFacetedSearchApiV1ItemsSearchGameIdPostDataRaw
	}
	/**
	 * @description Get a list of all available facet keys in the Item.attributes field.
	 * @tags items
	 * @name GetAvailableFacetsApiV1ItemsFacetsGameIdGet
	 * @summary Get Available Facets
	 * @request GET:/api/v1/items/facets/{game_id}
	 * @response `200` `IGetAvailableFacetsApiV1ItemsFacetsGameIdGetDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace GetAvailableFacetsApiV1ItemsFacetsGameIdGet {
		export type RequestParams = {
			/**
			 * Game Id
			 * @format uuid
			 */
			gameId: string
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = IGetAvailableFacetsApiV1ItemsFacetsGameIdGetDataRaw
	}
	/**
	 * @description Logic to send data to Payment API and handle the response paymentTypes: https://help.unitpay.money:8443/book-of-reference/payment-system-codes
	 * @tags funds
	 * @name CreatePaymentApiV1FundsCreatePaymentPost
	 * @summary Create Payment
	 * @request POST:/api/v1/funds/create-transaction
	 * @secure
	 * @response `200` `ICreatePaymentApiV1FundsCreatePaymentPostDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace CreatePaymentApiV1FundsCreatePaymentPost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IPaymentNewRaw
		export type RequestHeaders = {}
		export type ResponseBody = ICreatePaymentApiV1FundsCreatePaymentPostDataRaw
	}
	/**
	 * @description Retrieve information about a specific transaction.
	 * @tags funds
	 * @name GetPaymentInfoApiV1FundsPaymentInfoPaymentIdGet
	 * @summary Get Payment Info
	 * @request GET:/api/v1/funds/transaction-info/{payment_id}
	 * @secure
	 * @response `200` `IGetPaymentInfoApiV1FundsPaymentInfoPaymentIdGetDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace GetPaymentInfoApiV1FundsPaymentInfoPaymentIdGet {
		export type RequestParams = {
			/** Payment Id */
			paymentId: number
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = IGetPaymentInfoApiV1FundsPaymentInfoPaymentIdGetDataRaw
	}
	/**
	 * No description
	 * @tags funds
	 * @name RefundPaymentApiV1FundsRefundPaymentPost
	 * @summary Refund Payment
	 * @request POST:/api/v1/funds/refund-transaction
	 * @secure
	 * @response `200` `IRefundPaymentApiV1FundsRefundPaymentPostDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace RefundPaymentApiV1FundsRefundPaymentPost {
		export type RequestParams = {}
		export type RequestQuery = {
			/** Payment Id */
			payment_id: number
			/** Sum */
			sum?: number
		}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = IRefundPaymentApiV1FundsRefundPaymentPostDataRaw
	}
	/**
	 * No description
	 * @tags funds
	 * @name CreatePayoutApiV1FundsPayoutPost
	 * @summary Create Payout
	 * @request POST:/api/v1/funds/payout
	 * @secure
	 * @response `200` `ICreatePayoutApiV1FundsPayoutPostDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace CreatePayoutApiV1FundsPayoutPost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IPayoutRequestRaw
		export type RequestHeaders = {}
		export type ResponseBody = ICreatePayoutApiV1FundsPayoutPostDataRaw
	}
	/**
	 * No description
	 * @tags funds
	 * @name GetPayoutInfoApiV1FundsPayoutsInfoPost
	 * @summary Get Payout Info
	 * @request POST:/api/v1/funds/payouts/info
	 * @secure
	 * @response `200` `IGetPayoutInfoApiV1FundsPayoutsInfoPostDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace GetPayoutInfoApiV1FundsPayoutsInfoPost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IPayoutInfoRequestRaw
		export type RequestHeaders = {}
		export type ResponseBody = IGetPayoutInfoApiV1FundsPayoutsInfoPostDataRaw
	}
	/**
	 * @description Create a new order.
	 * @tags order
	 * @name CreateOrderApiV1OrderPost
	 * @summary Create Order
	 * @request POST:/api/v1/order/
	 * @secure
	 * @response `200` `ICreateOrderApiV1OrderPostDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace CreateOrderApiV1OrderPost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IOrderCreateRaw
		export type RequestHeaders = {}
		export type ResponseBody = ICreateOrderApiV1OrderPostDataRaw
	}
	/**
	 * @description Get an order by ID.
	 * @tags order
	 * @name ReadOrderApiV1OrderOrderIdGet
	 * @summary Read Order
	 * @request GET:/api/v1/order/{order_id}
	 * @secure
	 * @response `200` `IReadOrderApiV1OrderOrderIdGetDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace ReadOrderApiV1OrderOrderIdGet {
		export type RequestParams = {
			/**
			 * Order Id
			 * @format uuid
			 */
			orderId: string
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = IReadOrderApiV1OrderOrderIdGetDataRaw
	}
	/**
	 * @description Update an order.
	 * @tags order
	 * @name UpdateOrderApiV1OrderOrderIdPut
	 * @summary Update Order
	 * @request PUT:/api/v1/order/{order_id}
	 * @secure
	 * @response `200` `IUpdateOrderApiV1OrderOrderIdPutDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace UpdateOrderApiV1OrderOrderIdPut {
		export type RequestParams = {
			/**
			 * Order Id
			 * @format uuid
			 */
			orderId: string
		}
		export type RequestQuery = {}
		export type RequestBody = IOrderBaseRaw
		export type RequestHeaders = {}
		export type ResponseBody = IUpdateOrderApiV1OrderOrderIdPutDataRaw
	}
	/**
	 * @description Delete an order.
	 * @tags order
	 * @name DeleteOrderApiV1OrderOrderIdDelete
	 * @summary Delete Order
	 * @request DELETE:/api/v1/order/{order_id}
	 * @secure
	 * @response `200` `IDeleteOrderApiV1OrderOrderIdDeleteDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace DeleteOrderApiV1OrderOrderIdDelete {
		export type RequestParams = {
			/**
			 * Order Id
			 * @format uuid
			 */
			orderId: string
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = IDeleteOrderApiV1OrderOrderIdDeleteDataRaw
	}
	/**
	 * @description Get all orders for a given user.
	 * @tags order
	 * @name ReadOrdersByOwnerApiV1OrderUserUserIdGet
	 * @summary Read Orders By Owner
	 * @request GET:/api/v1/order/user/{user_id}
	 * @secure
	 * @response `200` `IReadOrdersByOwnerApiV1OrderUserUserIdGetDataRaw` Successful Response
	 * @response `422` `IHTTPValidationErrorRaw` Validation Error
	 */
	export namespace ReadOrdersByOwnerApiV1OrderUserUserIdGet {
		export type RequestParams = {
			userId: string
		}
		export type RequestQuery = {
			/**
			 * Owner Id
			 * @format uuid
			 */
			owner_id: string
		}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = IReadOrdersByOwnerApiV1OrderUserUserIdGetDataRaw
	}
}

export type QueryParamsType = Record<string | number, any>
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">

export interface FullRequestParams extends Omit<RequestInit, "body"> {
	/** set parameter to `true` for call `securityWorker` for this request */
	secure?: boolean
	/** request path */
	path: string
	/** content type of request body */
	type?: ContentType
	/** query params */
	query?: QueryParamsType
	/** format of response (i.e. response.json() -> format: "json") */
	format?: ResponseFormat
	/** request body */
	body?: unknown
	/** common url */
	baseUrl?: string
	/** request cancellation token */
	cancelToken?: CancelToken
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">

export interface ApiConfig<SecurityDataType = unknown> {
	baseUrl?: string
	baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">
	securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void
	customFetch?: typeof fetch
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
	data: D
	error: E
}

type CancelToken = Symbol | string | number

export enum ContentType {
	Json = "application/json",
	FormData = "multipart/form-data",
	UrlEncoded = "application/x-www-form-urlencoded",
	Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
	public baseUrl: string = ""
	private securityData: SecurityDataType | null = null
	private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"]
	private abortControllers = new Map<CancelToken, AbortController>()
	private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams)

	private baseApiParams: RequestParams = {
		credentials: "same-origin",
		headers: {},
		redirect: "follow",
		referrerPolicy: "no-referrer",
	}

	constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
		Object.assign(this, apiConfig)
	}

	public setSecurityData = (data: SecurityDataType | null) => {
		this.securityData = data
	}

	protected encodeQueryParam(key: string, value: any) {
		const encodedKey = encodeURIComponent(key)
		return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`
	}

	protected addQueryParam(query: QueryParamsType, key: string) {
		return this.encodeQueryParam(key, query[key])
	}

	protected addArrayQueryParam(query: QueryParamsType, key: string) {
		const value = query[key]
		return value.map((v: any) => this.encodeQueryParam(key, v)).join("&")
	}

	protected toQueryString(rawQuery?: QueryParamsType): string {
		const query = rawQuery || {}
		const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key])
		return keys
			.map((key) =>
				Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)
			)
			.join("&")
	}

	protected addQueryParams(rawQuery?: QueryParamsType): string {
		const queryString = this.toQueryString(rawQuery)
		return queryString ? `?${queryString}` : ""
	}

	private contentFormatters: Record<ContentType, (input: any) => any> = {
		[ContentType.Json]: (input: any) =>
			input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
		[ContentType.Text]: (input: any) =>
			input !== null && typeof input !== "string" ? JSON.stringify(input) : input,
		[ContentType.FormData]: (input: any) =>
			Object.keys(input || {}).reduce((formData, key) => {
				const property = input[key]
				formData.append(
					key,
					property instanceof Blob
						? property
						: typeof property === "object" && property !== null
						? JSON.stringify(property)
						: `${property}`
				)
				return formData
			}, new FormData()),
		[ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
	}

	protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
		return {
			...this.baseApiParams,
			...params1,
			...(params2 || {}),
			headers: {
				...(this.baseApiParams.headers || {}),
				...(params1.headers || {}),
				...((params2 && params2.headers) || {}),
			},
		}
	}

	protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
		if (this.abortControllers.has(cancelToken)) {
			const abortController = this.abortControllers.get(cancelToken)
			if (abortController) {
				return abortController.signal
			}
			return void 0
		}

		const abortController = new AbortController()
		this.abortControllers.set(cancelToken, abortController)
		return abortController.signal
	}

	public abortRequest = (cancelToken: CancelToken) => {
		const abortController = this.abortControllers.get(cancelToken)

		if (abortController) {
			abortController.abort()
			this.abortControllers.delete(cancelToken)
		}
	}

	public request = async <T = any, E = any>({
		body,
		secure,
		path,
		type,
		query,
		format,
		baseUrl,
		cancelToken,
		...params
	}: FullRequestParams): Promise<T> => {
		const secureParams =
			((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
				this.securityWorker &&
				(await this.securityWorker(this.securityData))) ||
			{}
		const requestParams = this.mergeRequestParams(params, secureParams)
		const queryString = query && this.toQueryString(query)
		const payloadFormatter = this.contentFormatters[type || ContentType.Json]
		const responseFormat = format || requestParams.format

		return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
			...requestParams,
			headers: {
				...(requestParams.headers || {}),
				...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
			},
			signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
			body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
		}).then(async (response) => {
			const r = response as HttpResponse<T, E>
			r.data = null as unknown as T
			r.error = null as unknown as E

			const data = !responseFormat
				? r
				: await response[responseFormat]()
						.then((data) => {
							if (r.ok) {
								r.data = data
							} else {
								r.error = data
							}
							return r
						})
						.catch((e) => {
							r.error = e
							return r
						})

			if (cancelToken) {
				this.abortControllers.delete(cancelToken)
			}

			if (!response.ok) throw data
			return data.data
		})
	}
}

/**
 * @title Game Values
 * @version 0.1.0
 */
export class Api<SecurityDataType extends unknown> {
	http: HttpClient<SecurityDataType>

	constructor(http: HttpClient<SecurityDataType>) {
		this.http = http
	}

	api = {
		/**
		 * @description First step of a 'magic link' auth. Check if the user exists and generate a magic link. Generates two short-duration jwt tokens, one for validation, one for email.
		 *
		 * @tags auth
		 * @name LoginWithMagicLinkApiV1LoginMagicEmailPost
		 * @summary Login With Magic Link
		 * @request POST:/api/v1/auth/magic/{email}
		 * @response `200` `ILoginWithMagicLinkApiV1LoginMagicEmailPostDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		loginWithMagicLinkApiV1LoginMagicEmailPost: (email: string, params: RequestParams = {}) =>
			this.http.request<
				ILoginWithMagicLinkApiV1LoginMagicEmailPostDataRaw,
				ILoginWithMagicLinkApiV1LoginMagicEmailPostErrorRaw
			>({
				path: `/api/v1/login/magic/${email}`,
				method: "POST",
				...params,
			}),

		/**
		 * @description Second step of a 'magic link' auth.
		 *
		 * @tags auth
		 * @name ValidateMagicLinkApiV1LoginClaimPost
		 * @summary Validate Magic Link
		 * @request POST:/api/v1/auth/claim
		 * @secure
		 * @response `200` `IValidateMagicLinkApiV1LoginClaimPostDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		validateMagicLinkApiV1LoginClaimPost: (data: IWebTokenRaw, params: RequestParams = {}) =>
			this.http.request<
				IValidateMagicLinkApiV1LoginClaimPostDataRaw,
				IValidateMagicLinkApiV1LoginClaimPostErrorRaw
			>({
				path: `/api/v1/login/claim`,
				method: "POST",
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * @description First step with OAuth2 compatible token auth, get an access token for future requests. The chat_token is used to authenticate with the chat.ts server. In case if the chat.ts server is not available, the user can still auth, but will not be able to user the chat.ts and chat_token will be empty.
		 *
		 * @tags auth
		 * @name LoginWithOauth2ApiV1LoginOauthPost
		 * @summary Login With Oauth2
		 * @request POST:/api/v1/auth/oauth
		 * @response `200` `ILoginWithOauth2ApiV1LoginOauthPostDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		loginWithOauth2ApiV1LoginOauthPost: (
			data: IBodyLoginWithOauth2ApiV1LoginOauthPostRaw,
			params: RequestParams = {}
		) =>
			this.http.request<ILoginWithOauth2ApiV1LoginOauthPostDataRaw, ILoginWithOauth2ApiV1LoginOauthPostErrorRaw>({
				path: `/api/v1/login/oauth`,
				method: "POST",
				body: data,
				type: ContentType.UrlEncoded,
				...params,
			}),

		/**
		 * @description For validation of token before enabling TOTP.
		 *
		 * @tags auth
		 * @name EnableTotpAuthenticationApiV1LoginTotpPut
		 * @summary Enable Totp Authentication
		 * @request PUT:/api/v1/auth/totp
		 * @secure
		 * @response `200` `IEnableTotpAuthenticationApiV1LoginTotpPutDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		enableTotpAuthenticationApiV1LoginTotpPut: (data: IEnableTOTPRaw, params: RequestParams = {}) =>
			this.http.request<
				IEnableTotpAuthenticationApiV1LoginTotpPutDataRaw,
				IEnableTotpAuthenticationApiV1LoginTotpPutErrorRaw
			>({
				path: `/api/v1/login/totp`,
				method: "PUT",
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * @description Final validation step, using TOTP.
		 *
		 * @tags auth
		 * @name LoginWithTotpApiV1LoginTotpPost
		 * @summary Login With Totp
		 * @request POST:/api/v1/auth/totp
		 * @secure
		 * @response `200` `ILoginWithTotpApiV1LoginTotpPostDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		loginWithTotpApiV1LoginTotpPost: (data: IWebTokenRaw, params: RequestParams = {}) =>
			this.http.request<ILoginWithTotpApiV1LoginTotpPostDataRaw, ILoginWithTotpApiV1LoginTotpPostErrorRaw>({
				path: `/api/v1/login/totp`,
				method: "POST",
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * @description Disable TOTP.
		 *
		 * @tags auth
		 * @name DisableTotpAuthenticationApiV1LoginTotpDelete
		 * @summary Disable Totp Authentication
		 * @request DELETE:/api/v1/auth/totp
		 * @secure
		 * @response `200` `IDisableTotpAuthenticationApiV1LoginTotpDeleteDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		disableTotpAuthenticationApiV1LoginTotpDelete: (data: IUserUpdateRaw, params: RequestParams = {}) =>
			this.http.request<
				IDisableTotpAuthenticationApiV1LoginTotpDeleteDataRaw,
				IDisableTotpAuthenticationApiV1LoginTotpDeleteErrorRaw
			>({
				path: `/api/v1/login/totp`,
				method: "DELETE",
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * @description Refresh tokens for future requests
		 *
		 * @tags auth
		 * @name RefreshTokenApiV1LoginRefreshPost
		 * @summary Refresh Token
		 * @request POST:/api/v1/auth/refresh
		 * @secure
		 * @response `200` `IRefreshTokenApiV1LoginRefreshPostDataRaw` Successful Response
		 */
		refreshTokenApiV1LoginRefreshPost: (params: RequestParams = {}) =>
			this.http.request<IRefreshTokenApiV1LoginRefreshPostDataRaw, any>({
				path: `/api/v1/login/refresh`,
				method: "POST",
				secure: true,
				...params,
			}),

		/**
		 * @description Revoke a refresh token
		 *
		 * @tags auth
		 * @name RevokeTokenApiV1LoginRevokePost
		 * @summary Revoke Token
		 * @request POST:/api/v1/auth/revoke
		 * @secure
		 * @response `200` `IRevokeTokenApiV1LoginRevokePostDataRaw` Successful Response
		 */
		revokeTokenApiV1LoginRevokePost: (params: RequestParams = {}) =>
			this.http.request<IRevokeTokenApiV1LoginRevokePostDataRaw, any>({
				path: `/api/v1/login/revoke`,
				method: "POST",
				secure: true,
				...params,
			}),

		/**
		 * @description Password Recovery
		 *
		 * @tags auth
		 * @name RecoverPasswordApiV1LoginRecoverEmailPost
		 * @summary Recover Password
		 * @request POST:/api/v1/auth/recover/{email}
		 * @response `200` `IRecoverPasswordApiV1LoginRecoverEmailPostDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		recoverPasswordApiV1LoginRecoverEmailPost: (email: string, params: RequestParams = {}) =>
			this.http.request<
				IRecoverPasswordApiV1LoginRecoverEmailPostDataRaw,
				IRecoverPasswordApiV1LoginRecoverEmailPostErrorRaw
			>({
				path: `/api/v1/login/recover/${email}`,
				method: "POST",
				...params,
			}),

		/**
		 * @description Reset password
		 *
		 * @tags auth
		 * @name ResetPasswordApiV1LoginResetPost
		 * @summary Reset Password
		 * @request POST:/api/v1/auth/reset
		 * @secure
		 * @response `200` `IResetPasswordApiV1LoginResetPostDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		resetPasswordApiV1LoginResetPost: (
			data: IBodyResetPasswordApiV1LoginResetPostRaw,
			params: RequestParams = {}
		) =>
			this.http.request<IResetPasswordApiV1LoginResetPostDataRaw, IResetPasswordApiV1LoginResetPostErrorRaw>({
				path: `/api/v1/login/reset`,
				method: "POST",
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * @description Get current user.
		 *
		 * @tags users
		 * @name ReadUserApiV1UsersGet
		 * @summary Read User
		 * @request GET:/api/v1/users/
		 * @secure
		 * @response `200` `IReadUserApiV1UsersGetDataRaw` Successful Response
		 */
		readUserApiV1UsersGet: (params: RequestParams = {}) =>
			this.http.request<IReadUserApiV1UsersGetDataRaw, any>({
				path: `/api/v1/users/`,
				method: "GET",
				secure: true,
				...params,
			}),

		/**
		 * @description Update user.
		 *
		 * @tags users
		 * @name UpdateUserApiV1UsersPut
		 * @summary Update User
		 * @request PUT:/api/v1/users/
		 * @secure
		 * @response `200` `IUpdateUserApiV1UsersPutDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		updateUserApiV1UsersPut: (data: IUserUpdateRaw, params: RequestParams = {}) =>
			this.http.request<IUpdateUserApiV1UsersPutDataRaw, IUpdateUserApiV1UsersPutErrorRaw>({
				path: `/api/v1/users/`,
				method: "PUT",
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * @description Create new user without the need to be logged in.
		 *
		 * @tags users
		 * @name CreateUserProfileApiV1UsersPost
		 * @summary Create User Profile
		 * @request POST:/api/v1/users/
		 * @response `200` `ICreateUserProfileApiV1UsersPostDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		createUserProfileApiV1UsersPost: (data: IBodyCreateUserProfileApiV1UsersPostRaw, params: RequestParams = {}) =>
			this.http.request<ICreateUserProfileApiV1UsersPostDataRaw, ICreateUserProfileApiV1UsersPostErrorRaw>({
				path: `/api/v1/users/`,
				method: "POST",
				body: data,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * @description Retrieve all current users.
		 *
		 * @tags users
		 * @name ReadAllUsersApiV1UsersAllGet
		 * @summary Read All Users
		 * @request GET:/api/v1/users/all
		 * @secure
		 * @response `200` `IReadAllUsersApiV1UsersAllGetDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		readAllUsersApiV1UsersAllGet: (query: IReadAllUsersApiV1UsersAllGetParamsRaw, params: RequestParams = {}) =>
			this.http.request<IReadAllUsersApiV1UsersAllGetDataRaw, IReadAllUsersApiV1UsersAllGetErrorRaw>({
				path: `/api/v1/users/all`,
				method: "GET",
				query: query,
				secure: true,
				...params,
			}),

		/**
		 * @description Request new keys to enable TOTP on the user account.
		 *
		 * @tags users
		 * @name RequestNewTotpApiV1UsersNewTotpPost
		 * @summary Request New Totp
		 * @request POST:/api/v1/users/new-totp
		 * @secure
		 * @response `200` `IRequestNewTotpApiV1UsersNewTotpPostDataRaw` Successful Response
		 */
		requestNewTotpApiV1UsersNewTotpPost: (params: RequestParams = {}) =>
			this.http.request<IRequestNewTotpApiV1UsersNewTotpPostDataRaw, any>({
				path: `/api/v1/users/new-totp`,
				method: "POST",
				secure: true,
				...params,
			}),

		/**
		 * @description Toggle user state (moderator function)
		 *
		 * @tags users
		 * @name ToggleStateApiV1UsersToggleStatePost
		 * @summary Toggle State
		 * @request POST:/api/v1/users/toggle-state
		 * @secure
		 * @response `200` `IToggleStateApiV1UsersToggleStatePostDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		toggleStateApiV1UsersToggleStatePost: (data: IUserUpdateRaw, params: RequestParams = {}) =>
			this.http.request<
				IToggleStateApiV1UsersToggleStatePostDataRaw,
				IToggleStateApiV1UsersToggleStatePostErrorRaw
			>({
				path: `/api/v1/users/toggle-state`,
				method: "POST",
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * @description Create new user (moderator function).
		 *
		 * @tags users
		 * @name CreateUserApiV1UsersCreatePost
		 * @summary Create User
		 * @request POST:/api/v1/users/create
		 * @secure
		 * @response `200` `ICreateUserApiV1UsersCreatePostDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		createUserApiV1UsersCreatePost: (data: IUserCreateRaw, params: RequestParams = {}) =>
			this.http.request<ICreateUserApiV1UsersCreatePostDataRaw, ICreateUserApiV1UsersCreatePostErrorRaw>({
				path: `/api/v1/users/create`,
				method: "POST",
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * @description Test current endpoint.
		 *
		 * @tags users
		 * @name TestEndpointApiV1UsersTesterGet
		 * @summary Test Endpoint
		 * @request GET:/api/v1/users/tester
		 * @response `200` `ITestEndpointApiV1UsersTesterGetDataRaw` Successful Response
		 */
		testEndpointApiV1UsersTesterGet: (params: RequestParams = {}) =>
			this.http.request<ITestEndpointApiV1UsersTesterGetDataRaw, any>({
				path: `/api/v1/users/tester`,
				method: "GET",
				...params,
			}),

		/**
		 * @description Endpoint to like a game.
		 *
		 * @tags users
		 * @name LikeGameEndpointApiV1UsersLikeGamePost
		 * @summary Like Game Endpoint
		 * @request POST:/api/v1/users/like-game
		 * @secure
		 * @response `200` `ILikeGameEndpointApiV1UsersLikeGamePostDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		likeGameEndpointApiV1UsersLikeGamePost: (
			data: ILikeGameEndpointApiV1UsersLikeGamePostPayloadRaw,
			params: RequestParams = {}
		) =>
			this.http.request<
				ILikeGameEndpointApiV1UsersLikeGamePostDataRaw,
				ILikeGameEndpointApiV1UsersLikeGamePostErrorRaw
			>({
				path: `/api/v1/users/like-game`,
				method: "POST",
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * @description Endpoint to dislike (unlike) a game.
		 *
		 * @tags users
		 * @name DislikeGameEndpointApiV1UsersDislikeGamePost
		 * @summary Dislike Game Endpoint
		 * @request POST:/api/v1/users/dislike-game
		 * @secure
		 * @response `200` `IDislikeGameEndpointApiV1UsersDislikeGamePostDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		dislikeGameEndpointApiV1UsersDislikeGamePost: (
			data: IDislikeGameEndpointApiV1UsersDislikeGamePostPayloadRaw,
			params: RequestParams = {}
		) =>
			this.http.request<
				IDislikeGameEndpointApiV1UsersDislikeGamePostDataRaw,
				IDislikeGameEndpointApiV1UsersDislikeGamePostErrorRaw
			>({
				path: `/api/v1/users/dislike-game`,
				method: "POST",
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * @description Retrieve a single item by its ID.
		 *
		 * @tags users
		 * @name ReadUserApiV1UsersUsersUserIdGet
		 * @summary Read User
		 * @request GET:/api/v1/users/users/{user_id}
		 * @response `200` `IReadUserApiV1UsersUsersUserIdGetDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		readUserApiV1UsersUsersUserIdGet: (userId: string, params: RequestParams = {}) =>
			this.http.request<IReadUserApiV1UsersUsersUserIdGetDataRaw, IReadUserApiV1UsersUsersUserIdGetErrorRaw>({
				path: `/api/v1/users/users/${userId}`,
				method: "GET",
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags proxy
		 * @name ProxyGetRequestApiV1ProxyPathGet
		 * @summary Proxy Get Request
		 * @request GET:/api/v1/proxy/{path}
		 * @secure
		 * @response `200` `IProxyGetRequestApiV1ProxyPathGetDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		proxyGetRequestApiV1ProxyPathGet: (path: string, params: RequestParams = {}) =>
			this.http.request<IProxyGetRequestApiV1ProxyPathGetDataRaw, IProxyGetRequestApiV1ProxyPathGetErrorRaw>({
				path: `/api/v1/proxy/${path}`,
				method: "GET",
				secure: true,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags proxy
		 * @name ProxyPostRequestApiV1ProxyPathPost
		 * @summary Proxy Post Request
		 * @request POST:/api/v1/proxy/{path}
		 * @secure
		 * @response `200` `IProxyPostRequestApiV1ProxyPathPostDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		proxyPostRequestApiV1ProxyPathPost: (path: string, params: RequestParams = {}) =>
			this.http.request<IProxyPostRequestApiV1ProxyPathPostDataRaw, IProxyPostRequestApiV1ProxyPathPostErrorRaw>({
				path: `/api/v1/proxy/${path}`,
				method: "POST",
				secure: true,
				...params,
			}),

		/**
		 * @description Retrieve game.
		 *
		 * @tags game
		 * @name ReadAllGamesApiV1GamesGet
		 * @summary Read All Games
		 * @request GET:/api/v1/game/
		 * @response `200` `IReadAllGamesApiV1GamesGetDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		readAllGamesApiV1GamesGet: (query: IReadAllGamesApiV1GamesGetParamsRaw, params: RequestParams = {}) =>
			this.http.request<IReadAllGamesApiV1GamesGetDataRaw, IReadAllGamesApiV1GamesGetErrorRaw>({
				path: `/api/v1/games/`,
				method: "GET",
				query: query,
				...params,
			}),

		/**
		 * @description Create new game.
		 *
		 * @tags game
		 * @name CreateGameApiV1GamesPost
		 * @summary Create Game
		 * @request POST:/api/v1/game/
		 * @secure
		 * @response `200` `ICreateGameApiV1GamesPostDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		createGameApiV1GamesPost: (data: IBodyCreateGameApiV1GamesPostRaw, params: RequestParams = {}) =>
			this.http.request<ICreateGameApiV1GamesPostDataRaw, ICreateGameApiV1GamesPostErrorRaw>({
				path: `/api/v1/games/`,
				method: "POST",
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * @description Get a specific game by ID.
		 *
		 * @tags game
		 * @name ReadGameApiV1GamesGameIdGet
		 * @summary Read Game
		 * @request GET:/api/v1/game/{game_id}
		 * @response `200` `IReadGameApiV1GamesGameIdGetDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		readGameApiV1GamesGameIdGet: (gameId: string, params: RequestParams = {}) =>
			this.http.request<IReadGameApiV1GamesGameIdGetDataRaw, IReadGameApiV1GamesGameIdGetErrorRaw>({
				path: `/api/v1/games/${gameId}`,
				method: "GET",
				...params,
			}),

		/**
		 * @description Update a game.
		 *
		 * @tags game
		 * @name UpdateGameApiV1GamesGameIdPut
		 * @summary Update Game
		 * @request PUT:/api/v1/game/{game_id}
		 * @secure
		 * @response `200` `IUpdateGameApiV1GamesGameIdPutDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		updateGameApiV1GamesGameIdPut: (gameId: string, data: IGameUpdateRaw, params: RequestParams = {}) =>
			this.http.request<IUpdateGameApiV1GamesGameIdPutDataRaw, IUpdateGameApiV1GamesGameIdPutErrorRaw>({
				path: `/api/v1/games/${gameId}`,
				method: "PUT",
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * @description Create a new item.
		 *
		 * @tags items
		 * @name CreateItemApiV1ItemsItemPost
		 * @summary Create Item
		 * @request POST:/api/v1/items/item/
		 * @secure
		 * @response `200` `ICreateItemApiV1ItemsItemPostDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		createItemApiV1ItemsItemPost: (data: IItemCreateRaw, params: RequestParams = {}) =>
			this.http.request<ICreateItemApiV1ItemsItemPostDataRaw, ICreateItemApiV1ItemsItemPostErrorRaw>({
				path: `/api/v1/items/item/`,
				method: "POST",
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * @description Update an item.
		 *
		 * @tags items
		 * @name UpdateItemApiV1ItemsItemItemIdPut
		 * @summary Update Item
		 * @request PUT:/api/v1/items/item/{item_id}
		 * @secure
		 * @response `200` `IUpdateItemApiV1ItemsItemItemIdPutDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		updateItemApiV1ItemsItemItemIdPut: (itemId: string, data: IItemUpdateRaw, params: RequestParams = {}) =>
			this.http.request<IUpdateItemApiV1ItemsItemItemIdPutDataRaw, IUpdateItemApiV1ItemsItemItemIdPutErrorRaw>({
				path: `/api/v1/items/item/${itemId}`,
				method: "PUT",
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * @description Delete an item.
		 *
		 * @tags items
		 * @name DeleteItemApiV1ItemsItemItemIdDelete
		 * @summary Delete Item
		 * @request DELETE:/api/v1/items/item/{item_id}
		 * @secure
		 * @response `200` `IDeleteItemApiV1ItemsItemItemIdDeleteDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		deleteItemApiV1ItemsItemItemIdDelete: (itemId: string, params: RequestParams = {}) =>
			this.http.request<
				IDeleteItemApiV1ItemsItemItemIdDeleteDataRaw,
				IDeleteItemApiV1ItemsItemItemIdDeleteErrorRaw
			>({
				path: `/api/v1/items/item/${itemId}`,
				method: "DELETE",
				secure: true,
				...params,
			}),

		/**
		 * @description Retrieve all current users.
		 *
		 * @tags items
		 * @name ReadAllItemsApiV1ItemsAllGet
		 * @summary Read All Items
		 * @request GET:/api/v1/items/all
		 * @response `200` `IReadAllItemsApiV1ItemsAllGetDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		readAllItemsApiV1ItemsAllGet: (query: IReadAllItemsApiV1ItemsAllGetParamsRaw, params: RequestParams = {}) =>
			this.http.request<IReadAllItemsApiV1ItemsAllGetDataRaw, IReadAllItemsApiV1ItemsAllGetErrorRaw>({
				path: `/api/v1/items/all`,
				method: "GET",
				query: query,
				...params,
			}),

		/**
		 * @description Retrieve a single item by its ID.
		 *
		 * @tags items
		 * @name ReadItemApiV1ItemsItemsItemIdGet
		 * @summary Read Item
		 * @request GET:/api/v1/items/items/{item_id}
		 * @response `200` `IReadItemApiV1ItemsItemsItemIdGetDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		readItemApiV1ItemsItemsItemIdGet: (itemId: string, params: RequestParams = {}) =>
			this.http.request<IReadItemApiV1ItemsItemsItemIdGetDataRaw, IReadItemApiV1ItemsItemsItemIdGetErrorRaw>({
				path: `/api/v1/items/items/${itemId}`,
				method: "GET",
				...params,
			}),

		/**
		 * @description Faceted search-field for items. Allowed filter criteria are: - count - price - price_from - price_till - server - description - type
		 *
		 * @tags items
		 * @name FacetedSearchApiV1ItemsSearchGameIdPost
		 * @summary Faceted Search
		 * @request POST:/api/v1/items/search-field/{game_id}
		 * @response `200` `IFacetedSearchApiV1ItemsSearchGameIdPostDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		facetedSearchApiV1ItemsSearchGameIdPost: (
			gameId: string,
			data: IFacetedSearchApiV1ItemsSearchGameIdPostPayloadRaw,
			params: RequestParams = {}
		) =>
			this.http.request<
				IFacetedSearchApiV1ItemsSearchGameIdPostDataRaw,
				IFacetedSearchApiV1ItemsSearchGameIdPostErrorRaw
			>({
				path: `/api/v1/items/search/${gameId}`,
				method: "POST",
				body: data,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * @description Get a list of all available facet keys in the Item.attributes field.
		 *
		 * @tags items
		 * @name GetAvailableFacetsApiV1ItemsFacetsGameIdGet
		 * @summary Get Available Facets
		 * @request GET:/api/v1/items/facets/{game_id}
		 * @response `200` `IGetAvailableFacetsApiV1ItemsFacetsGameIdGetDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		getAvailableFacetsApiV1ItemsFacetsGameIdGet: (gameId: string, params: RequestParams = {}) =>
			this.http.request<
				IGetAvailableFacetsApiV1ItemsFacetsGameIdGetDataRaw,
				IGetAvailableFacetsApiV1ItemsFacetsGameIdGetErrorRaw
			>({
				path: `/api/v1/items/facets/${gameId}`,
				method: "GET",
				...params,
			}),

		/**
		 * @description Logic to send data to Payment API and handle the response paymentTypes: https://help.unitpay.money:8443/book-of-reference/payment-system-codes
		 *
		 * @tags funds
		 * @name CreatePaymentApiV1FundsCreatePaymentPost
		 * @summary Create Payment
		 * @request POST:/api/v1/funds/create-transaction
		 * @secure
		 * @response `200` `ICreatePaymentApiV1FundsCreatePaymentPostDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		createPaymentApiV1FundsCreatePaymentPost: (data: IPaymentNewRaw, params: RequestParams = {}) =>
			this.http.request<
				ICreatePaymentApiV1FundsCreatePaymentPostDataRaw,
				ICreatePaymentApiV1FundsCreatePaymentPostErrorRaw
			>({
				path: `/api/v1/funds/create-payment`,
				method: "POST",
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * @description Retrieve information about a specific transaction.
		 *
		 * @tags funds
		 * @name GetPaymentInfoApiV1FundsPaymentInfoPaymentIdGet
		 * @summary Get Payment Info
		 * @request GET:/api/v1/funds/transaction-info/{payment_id}
		 * @secure
		 * @response `200` `IGetPaymentInfoApiV1FundsPaymentInfoPaymentIdGetDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		getPaymentInfoApiV1FundsPaymentInfoPaymentIdGet: (paymentId: number, params: RequestParams = {}) =>
			this.http.request<
				IGetPaymentInfoApiV1FundsPaymentInfoPaymentIdGetDataRaw,
				IGetPaymentInfoApiV1FundsPaymentInfoPaymentIdGetErrorRaw
			>({
				path: `/api/v1/funds/payment-info/${paymentId}`,
				method: "GET",
				secure: true,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags funds
		 * @name RefundPaymentApiV1FundsRefundPaymentPost
		 * @summary Refund Payment
		 * @request POST:/api/v1/funds/refund-transaction
		 * @secure
		 * @response `200` `IRefundPaymentApiV1FundsRefundPaymentPostDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		refundPaymentApiV1FundsRefundPaymentPost: (
			query: IRefundPaymentApiV1FundsRefundPaymentPostParamsRaw,
			params: RequestParams = {}
		) =>
			this.http.request<
				IRefundPaymentApiV1FundsRefundPaymentPostDataRaw,
				IRefundPaymentApiV1FundsRefundPaymentPostErrorRaw
			>({
				path: `/api/v1/funds/refund-payment`,
				method: "POST",
				query: query,
				secure: true,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags funds
		 * @name CreatePayoutApiV1FundsPayoutPost
		 * @summary Create Payout
		 * @request POST:/api/v1/funds/payout
		 * @secure
		 * @response `200` `ICreatePayoutApiV1FundsPayoutPostDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		createPayoutApiV1FundsPayoutPost: (data: IPayoutRequestRaw, params: RequestParams = {}) =>
			this.http.request<ICreatePayoutApiV1FundsPayoutPostDataRaw, ICreatePayoutApiV1FundsPayoutPostErrorRaw>({
				path: `/api/v1/funds/payout`,
				method: "POST",
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags funds
		 * @name GetPayoutInfoApiV1FundsPayoutsInfoPost
		 * @summary Get Payout Info
		 * @request POST:/api/v1/funds/payouts/info
		 * @secure
		 * @response `200` `IGetPayoutInfoApiV1FundsPayoutsInfoPostDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		getPayoutInfoApiV1FundsPayoutsInfoPost: (data: IPayoutInfoRequestRaw, params: RequestParams = {}) =>
			this.http.request<
				IGetPayoutInfoApiV1FundsPayoutsInfoPostDataRaw,
				IGetPayoutInfoApiV1FundsPayoutsInfoPostErrorRaw
			>({
				path: `/api/v1/funds/payouts/info`,
				method: "POST",
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * @description Create a new order.
		 *
		 * @tags order
		 * @name CreateOrderApiV1OrderPost
		 * @summary Create Order
		 * @request POST:/api/v1/order/
		 * @secure
		 * @response `200` `ICreateOrderApiV1OrderPostDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		createOrderApiV1OrderPost: (data: IOrderCreateRaw, params: RequestParams = {}) =>
			this.http.request<ICreateOrderApiV1OrderPostDataRaw, ICreateOrderApiV1OrderPostErrorRaw>({
				path: `/api/v1/order/`,
				method: "POST",
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * @description Get an order by ID.
		 *
		 * @tags order
		 * @name ReadOrderApiV1OrderOrderIdGet
		 * @summary Read Order
		 * @request GET:/api/v1/order/{order_id}
		 * @secure
		 * @response `200` `IReadOrderApiV1OrderOrderIdGetDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		readOrderApiV1OrderOrderIdGet: (orderId: string, params: RequestParams = {}) =>
			this.http.request<IReadOrderApiV1OrderOrderIdGetDataRaw, IReadOrderApiV1OrderOrderIdGetErrorRaw>({
				path: `/api/v1/order/${orderId}`,
				method: "GET",
				secure: true,
				...params,
			}),

		/**
		 * @description Update an order.
		 *
		 * @tags order
		 * @name UpdateOrderApiV1OrderOrderIdPut
		 * @summary Update Order
		 * @request PUT:/api/v1/order/{order_id}
		 * @secure
		 * @response `200` `IUpdateOrderApiV1OrderOrderIdPutDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		updateOrderApiV1OrderOrderIdPut: (orderId: string, data: IOrderBaseRaw, params: RequestParams = {}) =>
			this.http.request<IUpdateOrderApiV1OrderOrderIdPutDataRaw, IUpdateOrderApiV1OrderOrderIdPutErrorRaw>({
				path: `/api/v1/order/${orderId}`,
				method: "PUT",
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * @description Delete an order.
		 *
		 * @tags order
		 * @name DeleteOrderApiV1OrderOrderIdDelete
		 * @summary Delete Order
		 * @request DELETE:/api/v1/order/{order_id}
		 * @secure
		 * @response `200` `IDeleteOrderApiV1OrderOrderIdDeleteDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		deleteOrderApiV1OrderOrderIdDelete: (orderId: string, params: RequestParams = {}) =>
			this.http.request<IDeleteOrderApiV1OrderOrderIdDeleteDataRaw, IDeleteOrderApiV1OrderOrderIdDeleteErrorRaw>({
				path: `/api/v1/order/${orderId}`,
				method: "DELETE",
				secure: true,
				...params,
			}),

		/**
		 * @description Get all orders for a given user.
		 *
		 * @tags order
		 * @name ReadOrdersByOwnerApiV1OrderUserUserIdGet
		 * @summary Read Orders By Owner
		 * @request GET:/api/v1/order/user/{user_id}
		 * @secure
		 * @response `200` `IReadOrdersByOwnerApiV1OrderUserUserIdGetDataRaw` Successful Response
		 * @response `422` `IHTTPValidationErrorRaw` Validation Error
		 */
		readOrdersByOwnerApiV1OrderUserUserIdGet: (
			{ userId, ...query }: IReadOrdersByOwnerApiV1OrderUserUserIdGetParamsRaw,
			params: RequestParams = {}
		) =>
			this.http.request<
				IReadOrdersByOwnerApiV1OrderUserUserIdGetDataRaw,
				IReadOrdersByOwnerApiV1OrderUserUserIdGetErrorRaw
			>({
				path: `/api/v1/order/user/${userId}`,
				method: "GET",
				query: query,
				secure: true,
				...params,
			}),
	}
}
