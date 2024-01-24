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
export interface IBodyCreateGameApiV1GamesPost {
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
export interface IBodyCreateUserProfileApiV1UsersPost {
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
export interface IBodyLoginWithOauth2ApiV1LoginOauthPost {
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
export interface IBodyResetPasswordApiV1LoginResetPost {
	/** Claim */
	claim: string
	/** New Password */
	new_password: string
}

export type ICreateGameApiV1GamesPostData = IGame

export type ICreateGameApiV1GamesPostError = IHTTPValidationError

export type ICreateItemApiV1ItemsItemPostData = IItem

export type ICreateItemApiV1ItemsItemPostError = IHTTPValidationError

export type ICreateOrderApiV1OrderPostData = IOrderInDB

export type ICreateOrderApiV1OrderPostError = IHTTPValidationError

/** Response Create Payment Api V1 Funds Create Payment Post */
export type ICreatePaymentApiV1FundsCreatePaymentPostData = IPaymentResponse | IPaymentError

export type ICreatePaymentApiV1FundsCreatePaymentPostError = IHTTPValidationError

export type ICreatePayoutApiV1FundsPayoutPostData = IPayoutResponse

export type ICreatePayoutApiV1FundsPayoutPostError = IHTTPValidationError

export type ICreateUserApiV1UsersCreatePostData = IUser

export type ICreateUserApiV1UsersCreatePostError = IHTTPValidationError

export type ICreateUserProfileApiV1UsersPostData = IUser

export type ICreateUserProfileApiV1UsersPostError = IHTTPValidationError

export type IDeleteItemApiV1ItemsItemItemIdDeleteData = IMsg

export type IDeleteItemApiV1ItemsItemItemIdDeleteError = IHTTPValidationError

export type IDeleteOrderApiV1OrderOrderIdDeleteData = IOrderInDB

export type IDeleteOrderApiV1OrderOrderIdDeleteError = IHTTPValidationError

export type IDisableTotpAuthenticationApiV1LoginTotpDeleteData = IMsg

export type IDisableTotpAuthenticationApiV1LoginTotpDeleteError = IHTTPValidationError

export type IDislikeGameEndpointApiV1UsersDislikeGamePostData = IUserLike

export type IDislikeGameEndpointApiV1UsersDislikeGamePostError = IHTTPValidationError

/** Liked Game */
export type IDislikeGameEndpointApiV1UsersDislikeGamePostPayload = string

/** EnableTOTP */
export interface IEnableTOTP {
	/** Claim */
	claim: string
	/** Password */
	password?: string
	/** Uri */
	uri: string
}

export type IEnableTotpAuthenticationApiV1LoginTotpPutData = IMsg

export type IEnableTotpAuthenticationApiV1LoginTotpPutError = IHTTPValidationError

/** Response Faceted Search Api V1 Items Search  Game Id  Post */
export type IFacetedSearchApiV1ItemsSearchGameIdPostData = object

export type IFacetedSearchApiV1ItemsSearchGameIdPostError = IHTTPValidationError

/** Filter Criteria */
export type IFacetedSearchApiV1ItemsSearchGameIdPostPayload = Record<string, string | string[]>

/** Game */
export interface IGame {
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
export interface IGameUpdate {
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
export type IGetAvailableFacetsApiV1ItemsFacetsGameIdGetData = Record<string, number>

export type IGetAvailableFacetsApiV1ItemsFacetsGameIdGetError = IHTTPValidationError

/** Response Get Payment Info Api V1 Funds Payment Info  Payment Id  Get */
export type IGetPaymentInfoApiV1FundsPaymentInfoPaymentIdGetData = object

export type IGetPaymentInfoApiV1FundsPaymentInfoPaymentIdGetError = IHTTPValidationError

export type IGetPayoutInfoApiV1FundsPayoutsInfoPostData = any

export type IGetPayoutInfoApiV1FundsPayoutsInfoPostError = IHTTPValidationError

/** HTTPValidationError */
export interface IHTTPValidationError {
	/** Detail */
	detail?: IValidationError[]
}

/** Item */
export interface IItem {
	attributes: IItemAttributes
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

/** ItemAttributes */
export interface IItemAttributes {
	/**
	 * Amount
	 * @default 0
	 */
	amount?: number
	/** @default "EUR" */
	currency?: IItemCurrency
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
export interface IItemCreate {
	attributes: IItemAttributes
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
export type IItemCurrency = "EUR"

/** ItemUpdate */
export interface IItemUpdate {
	attributes: IItemAttributes
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

export type ILikeGameEndpointApiV1UsersLikeGamePostData = IUserLike

export type ILikeGameEndpointApiV1UsersLikeGamePostError = IHTTPValidationError

/** Liked Game */
export type ILikeGameEndpointApiV1UsersLikeGamePostPayload = string

export type ILoginWithMagicLinkApiV1LoginMagicEmailPostData = IWebToken

export type ILoginWithMagicLinkApiV1LoginMagicEmailPostError = IHTTPValidationError

export type ILoginWithOauth2ApiV1LoginOauthPostData = IToken

export type ILoginWithOauth2ApiV1LoginOauthPostError = IHTTPValidationError

export type ILoginWithTotpApiV1LoginTotpPostData = IToken

export type ILoginWithTotpApiV1LoginTotpPostError = IHTTPValidationError

/** Msg */
export interface IMsg {
	/** Msg */
	msg: string
}

/** NewTOTP */
export interface INewTOTP {
	/** Key */
	key: string
	/** Secret */
	secret?: string
	/** Uri */
	uri: string
}

/** OrderAttributes */
export interface IOrderAttributes {
	/**
	 * Amount
	 * @default 1
	 */
	amount?: number
	/** @default "EUR" */
	currency?: IOrderCurrency
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
export interface IOrderBase {
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
export interface IOrderCreate {
	attributes?: IOrderAttributes
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
export type IOrderCurrency = "EUR"

/** OrderInDB */
export interface IOrderInDB {
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
export interface IPaymentError {
	/** Message */
	message: string
}

/** PaymentNew */
export interface IPaymentNew {
	/** Desc */
	desc: string
	/** Paymenttype */
	paymentType: string
	/** Sum */
	sum: number
}

/** PaymentResponse */
export interface IPaymentResponse {
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
export interface IPayoutInfoRequest {
	/** Login */
	login: string
	/** Secretkey */
	secretKey: string
	/** Transactionid */
	transactionId: string
}

/** PayoutRequest */
export interface IPayoutRequest {
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
export interface IPayoutResponse {
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
export type IProxyGetRequestApiV1ProxyPathGetData = any

export type IProxyGetRequestApiV1ProxyPathGetError = IHTTPValidationError

/** Response Proxy Post Request Api V1 Proxy  Path  Post */
export type IProxyPostRequestApiV1ProxyPathPostData = any

export type IProxyPostRequestApiV1ProxyPathPostError = IHTTPValidationError

/** Response Read All Games Api V1 Games  Get */
export type IReadAllGamesApiV1GamesGetData = IGame[]

export type IReadAllGamesApiV1GamesGetError = IHTTPValidationError

export interface IReadAllGamesApiV1GamesGetParams {
	/**
	 * Page
	 * @default 0
	 */
	page?: number
}

/** Response Read All Items Api V1 Items All Get */
export type IReadAllItemsApiV1ItemsAllGetData = IItem[]

export type IReadAllItemsApiV1ItemsAllGetError = IHTTPValidationError

export interface IReadAllItemsApiV1ItemsAllGetParams {
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
export type IReadAllUsersApiV1UsersAllGetData = IUser[]

export type IReadAllUsersApiV1UsersAllGetError = IHTTPValidationError

export interface IReadAllUsersApiV1UsersAllGetParams {
	/**
	 * Page
	 * @default 0
	 */
	page?: number
}

export type IReadGameApiV1GamesGameIdGetData = IGame

export type IReadGameApiV1GamesGameIdGetError = IHTTPValidationError

export type IReadItemApiV1ItemsItemsItemIdGetData = IItem

export type IReadItemApiV1ItemsItemsItemIdGetError = IHTTPValidationError

export type IReadOrderApiV1OrderOrderIdGetData = IOrderInDB

export type IReadOrderApiV1OrderOrderIdGetError = IHTTPValidationError

/** Response Read Orders By Owner Api V1 Order User  User Id  Get */
export type IReadOrdersByOwnerApiV1OrderUserUserIdGetData = IOrderInDB[]

export type IReadOrdersByOwnerApiV1OrderUserUserIdGetError = IHTTPValidationError

export interface IReadOrdersByOwnerApiV1OrderUserUserIdGetParams {
	/**
	 * Owner Id
	 * @format uuid
	 */
	owner_id: string
	userId: string
}

export type IReadUserApiV1UsersGetData = IUser

export type IReadUserApiV1UsersUsersUserIdGetData = IUser

export type IReadUserApiV1UsersUsersUserIdGetError = IHTTPValidationError

/** Response Recover Password Api V1 Login Recover  Email  Post */
export type IRecoverPasswordApiV1LoginRecoverEmailPostData = IWebToken | IMsg

export type IRecoverPasswordApiV1LoginRecoverEmailPostError = IHTTPValidationError

export type IRefreshTokenApiV1LoginRefreshPostData = IToken

export type IRefundPaymentApiV1FundsRefundPaymentPostData = any

export type IRefundPaymentApiV1FundsRefundPaymentPostError = IHTTPValidationError

export interface IRefundPaymentApiV1FundsRefundPaymentPostParams {
	/** Payment Id */
	payment_id: number
	/** Sum */
	sum?: number
}

export type IRequestNewTotpApiV1UsersNewTotpPostData = INewTOTP

export type IResetPasswordApiV1LoginResetPostData = IMsg

export type IResetPasswordApiV1LoginResetPostError = IHTTPValidationError

export type IRevokeTokenApiV1LoginRevokePostData = IMsg

export type ITestEndpointApiV1UsersTesterGetData = IMsg

export type IToggleStateApiV1UsersToggleStatePostData = IMsg

export type IToggleStateApiV1UsersToggleStatePostError = IHTTPValidationError

/** Token */
export interface IToken {
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

export type IUpdateGameApiV1GamesGameIdPutData = IGame

export type IUpdateGameApiV1GamesGameIdPutError = IHTTPValidationError

export type IUpdateItemApiV1ItemsItemItemIdPutData = IItem

export type IUpdateItemApiV1ItemsItemItemIdPutError = IHTTPValidationError

export type IUpdateOrderApiV1OrderOrderIdPutData = IOrderInDB

export type IUpdateOrderApiV1OrderOrderIdPutError = IHTTPValidationError

export type IUpdateUserApiV1UsersPutData = IUser

export type IUpdateUserApiV1UsersPutError = IHTTPValidationError

/** User */
export interface IUser {
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
	 * List of UUIDs of liked games
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

/** UserCreate */
export interface IUserCreate {
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
export interface IUserLike {
	/**
	 * Liked Game
	 * @format uuid
	 */
	liked_game?: string
}

/** UserUpdate */
export interface IUserUpdate {
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

export type IValidateMagicLinkApiV1LoginClaimPostData = IToken

export type IValidateMagicLinkApiV1LoginClaimPostError = IHTTPValidationError

/** ValidationError */
export interface IValidationError {
	/** Location */
	loc: (string | number)[]
	/** Message */
	msg: string
	/** Error Type */
	type: string
}

/** WebToken */
export interface IWebToken {
	/** Claim */
	claim: string
}
