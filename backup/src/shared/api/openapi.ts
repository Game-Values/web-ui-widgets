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

export namespace Api {
	/**
	 * @description Create new game.
	 * @tags games
	 * @name CreateGameApiV1GamesPost
	 * @summary Create Game
	 * @request POST:/api/v1/games/
	 * @secure
	 * @response `200` `ICreateGameApiV1GamesPostData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
	 */
	export namespace CreateGameApiV1GamesPost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IBodyCreateGameApiV1GamesPost
		export type RequestHeaders = {}
		export type ResponseBody = ICreateGameApiV1GamesPostData
	}
	/**
	 * @description Create a new item.
	 * @tags items
	 * @name CreateItemApiV1ItemsItemPost
	 * @summary Create Item
	 * @request POST:/api/v1/items/item/
	 * @secure
	 * @response `200` `ICreateItemApiV1ItemsItemPostData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
	 */
	export namespace CreateItemApiV1ItemsItemPost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IItemCreate
		export type RequestHeaders = {}
		export type ResponseBody = ICreateItemApiV1ItemsItemPostData
	}
	/**
	 * @description Create a new order.
	 * @tags order
	 * @name CreateOrderApiV1OrderPost
	 * @summary Create Order
	 * @request POST:/api/v1/order/
	 * @secure
	 * @response `200` `ICreateOrderApiV1OrderPostData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
	 */
	export namespace CreateOrderApiV1OrderPost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IOrderCreate
		export type RequestHeaders = {}
		export type ResponseBody = ICreateOrderApiV1OrderPostData
	}
	/**
	 * @description Logic to send data to Payment API and handle the response paymentTypes: https://help.unitpay.money:8443/book-of-reference/payment-system-codes
	 * @tags funds
	 * @name CreatePaymentApiV1FundsCreatePaymentPost
	 * @summary Create Payment
	 * @request POST:/api/v1/funds/create-payment
	 * @secure
	 * @response `200` `ICreatePaymentApiV1FundsCreatePaymentPostData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
	 */
	export namespace CreatePaymentApiV1FundsCreatePaymentPost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IPaymentNew
		export type RequestHeaders = {}
		export type ResponseBody = ICreatePaymentApiV1FundsCreatePaymentPostData
	}
	/**
	 * No description
	 * @tags funds
	 * @name CreatePayoutApiV1FundsPayoutPost
	 * @summary Create Payout
	 * @request POST:/api/v1/funds/payout
	 * @secure
	 * @response `200` `ICreatePayoutApiV1FundsPayoutPostData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
	 */
	export namespace CreatePayoutApiV1FundsPayoutPost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IPayoutRequest
		export type RequestHeaders = {}
		export type ResponseBody = ICreatePayoutApiV1FundsPayoutPostData
	}
	/**
	 * @description Create new user (moderator function).
	 * @tags users
	 * @name CreateUserApiV1UsersCreatePost
	 * @summary Create User
	 * @request POST:/api/v1/users/create
	 * @secure
	 * @response `200` `ICreateUserApiV1UsersCreatePostData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
	 */
	export namespace CreateUserApiV1UsersCreatePost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IUserCreate
		export type RequestHeaders = {}
		export type ResponseBody = ICreateUserApiV1UsersCreatePostData
	}
	/**
	 * @description Create new user without the need to be logged in.
	 * @tags users
	 * @name CreateUserProfileApiV1UsersPost
	 * @summary Create User Profile
	 * @request POST:/api/v1/users/
	 * @response `200` `ICreateUserProfileApiV1UsersPostData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
	 */
	export namespace CreateUserProfileApiV1UsersPost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IBodyCreateUserProfileApiV1UsersPost
		export type RequestHeaders = {}
		export type ResponseBody = ICreateUserProfileApiV1UsersPostData
	}
	/**
	 * @description Delete an item.
	 * @tags items
	 * @name DeleteItemApiV1ItemsItemItemIdDelete
	 * @summary Delete Item
	 * @request DELETE:/api/v1/items/item/{item_id}
	 * @secure
	 * @response `200` `IDeleteItemApiV1ItemsItemItemIdDeleteData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
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
		export type ResponseBody = IDeleteItemApiV1ItemsItemItemIdDeleteData
	}
	/**
	 * @description Delete an order.
	 * @tags order
	 * @name DeleteOrderApiV1OrderOrderIdDelete
	 * @summary Delete Order
	 * @request DELETE:/api/v1/order/{order_id}
	 * @secure
	 * @response `200` `IDeleteOrderApiV1OrderOrderIdDeleteData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
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
		export type ResponseBody = IDeleteOrderApiV1OrderOrderIdDeleteData
	}
	/**
	 * @description Disable TOTP.
	 * @tags login
	 * @name DisableTotpAuthenticationApiV1LoginTotpDelete
	 * @summary Disable Totp Authentication
	 * @request DELETE:/api/v1/login/totp
	 * @secure
	 * @response `200` `IDisableTotpAuthenticationApiV1LoginTotpDeleteData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
	 */
	export namespace DisableTotpAuthenticationApiV1LoginTotpDelete {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IUserUpdate
		export type RequestHeaders = {}
		export type ResponseBody = IDisableTotpAuthenticationApiV1LoginTotpDeleteData
	}
	/**
	 * @description Endpoint to dislike (unlike) a game.
	 * @tags users
	 * @name DislikeGameEndpointApiV1UsersDislikeGamePost
	 * @summary Dislike Game Endpoint
	 * @request POST:/api/v1/users/dislike-game
	 * @secure
	 * @response `200` `IDislikeGameEndpointApiV1UsersDislikeGamePostData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
	 */
	export namespace DislikeGameEndpointApiV1UsersDislikeGamePost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IDislikeGameEndpointApiV1UsersDislikeGamePostPayload
		export type RequestHeaders = {}
		export type ResponseBody = IDislikeGameEndpointApiV1UsersDislikeGamePostData
	}
	/**
	 * @description For validation of token before enabling TOTP.
	 * @tags login
	 * @name EnableTotpAuthenticationApiV1LoginTotpPut
	 * @summary Enable Totp Authentication
	 * @request PUT:/api/v1/login/totp
	 * @secure
	 * @response `200` `IEnableTotpAuthenticationApiV1LoginTotpPutData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
	 */
	export namespace EnableTotpAuthenticationApiV1LoginTotpPut {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IEnableTOTP
		export type RequestHeaders = {}
		export type ResponseBody = IEnableTotpAuthenticationApiV1LoginTotpPutData
	}
	/**
	 * @description Faceted search for items. Allowed filter criteria are: - count - price - price_from - price_till - server - description - type
	 * @tags items
	 * @name FacetedSearchApiV1ItemsSearchGameIdPost
	 * @summary Faceted Search
	 * @request POST:/api/v1/items/search/{game_id}
	 * @response `200` `IFacetedSearchApiV1ItemsSearchGameIdPostData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
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
		export type RequestBody = IFacetedSearchApiV1ItemsSearchGameIdPostPayload
		export type RequestHeaders = {}
		export type ResponseBody = IFacetedSearchApiV1ItemsSearchGameIdPostData
	}
	/**
	 * @description Get a list of all available facet keys in the Item.attributes field.
	 * @tags items
	 * @name GetAvailableFacetsApiV1ItemsFacetsGameIdGet
	 * @summary Get Available Facets
	 * @request GET:/api/v1/items/facets/{game_id}
	 * @response `200` `IGetAvailableFacetsApiV1ItemsFacetsGameIdGetData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
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
		export type ResponseBody = IGetAvailableFacetsApiV1ItemsFacetsGameIdGetData
	}
	/**
	 * @description Retrieve information about a specific payment.
	 * @tags funds
	 * @name GetPaymentInfoApiV1FundsPaymentInfoPaymentIdGet
	 * @summary Get Payment Info
	 * @request GET:/api/v1/funds/payment-info/{payment_id}
	 * @secure
	 * @response `200` `IGetPaymentInfoApiV1FundsPaymentInfoPaymentIdGetData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
	 */
	export namespace GetPaymentInfoApiV1FundsPaymentInfoPaymentIdGet {
		export type RequestParams = {
			/** Payment Id */
			paymentId: number
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = IGetPaymentInfoApiV1FundsPaymentInfoPaymentIdGetData
	}
	/**
	 * No description
	 * @tags funds
	 * @name GetPayoutInfoApiV1FundsPayoutsInfoPost
	 * @summary Get Payout Info
	 * @request POST:/api/v1/funds/payouts/info
	 * @secure
	 * @response `200` `IGetPayoutInfoApiV1FundsPayoutsInfoPostData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
	 */
	export namespace GetPayoutInfoApiV1FundsPayoutsInfoPost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IPayoutInfoRequest
		export type RequestHeaders = {}
		export type ResponseBody = IGetPayoutInfoApiV1FundsPayoutsInfoPostData
	}
	/**
	 * @description Endpoint to like a game.
	 * @tags users
	 * @name LikeGameEndpointApiV1UsersLikeGamePost
	 * @summary Like Game Endpoint
	 * @request POST:/api/v1/users/like-game
	 * @secure
	 * @response `200` `ILikeGameEndpointApiV1UsersLikeGamePostData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
	 */
	export namespace LikeGameEndpointApiV1UsersLikeGamePost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = ILikeGameEndpointApiV1UsersLikeGamePostPayload
		export type RequestHeaders = {}
		export type ResponseBody = ILikeGameEndpointApiV1UsersLikeGamePostData
	}
	/**
	 * @description First step of a 'magic link' login. Check if the user exists and generate a magic link. Generates two short-duration jwt tokens, one for validation, one for email.
	 * @tags login
	 * @name LoginWithMagicLinkApiV1LoginMagicEmailPost
	 * @summary Login With Magic Link
	 * @request POST:/api/v1/login/magic/{email}
	 * @response `200` `ILoginWithMagicLinkApiV1LoginMagicEmailPostData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
	 */
	export namespace LoginWithMagicLinkApiV1LoginMagicEmailPost {
		export type RequestParams = {
			/** Email */
			email: string
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = ILoginWithMagicLinkApiV1LoginMagicEmailPostData
	}
	/**
	 * @description First step with OAuth2 compatible token login, get an access token for future requests. The chat_token is used to authenticate with the chat server. In case if the chat server is not available, the user can still login, but will not be able to user the chat and chat_token will be empty.
	 * @tags login
	 * @name LoginWithOauth2ApiV1LoginOauthPost
	 * @summary Login With Oauth2
	 * @request POST:/api/v1/login/oauth
	 * @response `200` `ILoginWithOauth2ApiV1LoginOauthPostData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
	 */
	export namespace LoginWithOauth2ApiV1LoginOauthPost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IBodyLoginWithOauth2ApiV1LoginOauthPost
		export type RequestHeaders = {}
		export type ResponseBody = ILoginWithOauth2ApiV1LoginOauthPostData
	}
	/**
	 * @description Final validation step, using TOTP.
	 * @tags login
	 * @name LoginWithTotpApiV1LoginTotpPost
	 * @summary Login With Totp
	 * @request POST:/api/v1/login/totp
	 * @secure
	 * @response `200` `ILoginWithTotpApiV1LoginTotpPostData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
	 */
	export namespace LoginWithTotpApiV1LoginTotpPost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IWebToken
		export type RequestHeaders = {}
		export type ResponseBody = ILoginWithTotpApiV1LoginTotpPostData
	}
	/**
	 * No description
	 * @tags proxy
	 * @name ProxyGetRequestApiV1ProxyPathGet
	 * @summary Proxy Get Request
	 * @request GET:/api/v1/proxy/{path}
	 * @secure
	 * @response `200` `IProxyGetRequestApiV1ProxyPathGetData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
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
		export type ResponseBody = IProxyGetRequestApiV1ProxyPathGetData
	}
	/**
	 * No description
	 * @tags proxy
	 * @name ProxyPostRequestApiV1ProxyPathPost
	 * @summary Proxy Post Request
	 * @request POST:/api/v1/proxy/{path}
	 * @secure
	 * @response `200` `IProxyPostRequestApiV1ProxyPathPostData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
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
		export type ResponseBody = IProxyPostRequestApiV1ProxyPathPostData
	}
	/**
	 * @description Retrieve games.
	 * @tags games
	 * @name ReadAllGamesApiV1GamesGet
	 * @summary Read All Games
	 * @request GET:/api/v1/games/
	 * @response `200` `IReadAllGamesApiV1GamesGetData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
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
		export type ResponseBody = IReadAllGamesApiV1GamesGetData
	}
	/**
	 * @description Retrieve all current users.
	 * @tags items
	 * @name ReadAllItemsApiV1ItemsAllGet
	 * @summary Read All Items
	 * @request GET:/api/v1/items/all
	 * @response `200` `IReadAllItemsApiV1ItemsAllGetData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
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
		export type ResponseBody = IReadAllItemsApiV1ItemsAllGetData
	}
	/**
	 * @description Retrieve all current users.
	 * @tags users
	 * @name ReadAllUsersApiV1UsersAllGet
	 * @summary Read All Users
	 * @request GET:/api/v1/users/all
	 * @secure
	 * @response `200` `IReadAllUsersApiV1UsersAllGetData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
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
		export type ResponseBody = IReadAllUsersApiV1UsersAllGetData
	}
	/**
	 * @description Get a specific game by ID.
	 * @tags games
	 * @name ReadGameApiV1GamesGameIdGet
	 * @summary Read Game
	 * @request GET:/api/v1/games/{game_id}
	 * @response `200` `IReadGameApiV1GamesGameIdGetData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
	 */
	export namespace ReadGameApiV1GamesGameIdGet {
		export type RequestParams = {
			/** Game Id */
			gameId: string
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = IReadGameApiV1GamesGameIdGetData
	}
	/**
	 * @description Retrieve a single item by its ID.
	 * @tags items
	 * @name ReadItemApiV1ItemsItemsItemIdGet
	 * @summary Read Item
	 * @request GET:/api/v1/items/items/{item_id}
	 * @response `200` `IReadItemApiV1ItemsItemsItemIdGetData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
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
		export type ResponseBody = IReadItemApiV1ItemsItemsItemIdGetData
	}
	/**
	 * @description Get an order by ID.
	 * @tags order
	 * @name ReadOrderApiV1OrderOrderIdGet
	 * @summary Read Order
	 * @request GET:/api/v1/order/{order_id}
	 * @secure
	 * @response `200` `IReadOrderApiV1OrderOrderIdGetData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
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
		export type ResponseBody = IReadOrderApiV1OrderOrderIdGetData
	}
	/**
	 * @description Get all orders for a given user.
	 * @tags order
	 * @name ReadOrdersByOwnerApiV1OrderUserUserIdGet
	 * @summary Read Orders By Owner
	 * @request GET:/api/v1/order/user/{user_id}
	 * @secure
	 * @response `200` `IReadOrdersByOwnerApiV1OrderUserUserIdGetData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
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
		export type ResponseBody = IReadOrdersByOwnerApiV1OrderUserUserIdGetData
	}
	/**
	 * @description Get current user.
	 * @tags users
	 * @name ReadUserApiV1UsersGet
	 * @summary Read User
	 * @request GET:/api/v1/users/
	 * @secure
	 * @response `200` `IReadUserApiV1UsersGetData` Successful Response
	 */
	export namespace ReadUserApiV1UsersGet {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = IReadUserApiV1UsersGetData
	}
	/**
	 * @description Retrieve a single item by its ID.
	 * @tags users
	 * @name ReadUserApiV1UsersUsersUserIdGet
	 * @summary Read User
	 * @request GET:/api/v1/users/users/{user_id}
	 * @response `200` `IReadUserApiV1UsersUsersUserIdGetData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
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
		export type ResponseBody = IReadUserApiV1UsersUsersUserIdGetData
	}
	/**
	 * @description Password Recovery
	 * @tags login
	 * @name RecoverPasswordApiV1LoginRecoverEmailPost
	 * @summary Recover Password
	 * @request POST:/api/v1/login/recover/{email}
	 * @response `200` `IRecoverPasswordApiV1LoginRecoverEmailPostData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
	 */
	export namespace RecoverPasswordApiV1LoginRecoverEmailPost {
		export type RequestParams = {
			/** Email */
			email: string
		}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = IRecoverPasswordApiV1LoginRecoverEmailPostData
	}
	/**
	 * @description Refresh tokens for future requests
	 * @tags login
	 * @name RefreshTokenApiV1LoginRefreshPost
	 * @summary Refresh Token
	 * @request POST:/api/v1/login/refresh
	 * @secure
	 * @response `200` `IRefreshTokenApiV1LoginRefreshPostData` Successful Response
	 */
	export namespace RefreshTokenApiV1LoginRefreshPost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = IRefreshTokenApiV1LoginRefreshPostData
	}
	/**
	 * No description
	 * @tags funds
	 * @name RefundPaymentApiV1FundsRefundPaymentPost
	 * @summary Refund Payment
	 * @request POST:/api/v1/funds/refund-payment
	 * @secure
	 * @response `200` `IRefundPaymentApiV1FundsRefundPaymentPostData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
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
		export type ResponseBody = IRefundPaymentApiV1FundsRefundPaymentPostData
	}
	/**
	 * @description Request new keys to enable TOTP on the user account.
	 * @tags users
	 * @name RequestNewTotpApiV1UsersNewTotpPost
	 * @summary Request New Totp
	 * @request POST:/api/v1/users/new-totp
	 * @secure
	 * @response `200` `IRequestNewTotpApiV1UsersNewTotpPostData` Successful Response
	 */
	export namespace RequestNewTotpApiV1UsersNewTotpPost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = IRequestNewTotpApiV1UsersNewTotpPostData
	}
	/**
	 * @description Reset password
	 * @tags login
	 * @name ResetPasswordApiV1LoginResetPost
	 * @summary Reset Password
	 * @request POST:/api/v1/login/reset
	 * @secure
	 * @response `200` `IResetPasswordApiV1LoginResetPostData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
	 */
	export namespace ResetPasswordApiV1LoginResetPost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IBodyResetPasswordApiV1LoginResetPost
		export type RequestHeaders = {}
		export type ResponseBody = IResetPasswordApiV1LoginResetPostData
	}
	/**
	 * @description Revoke a refresh token
	 * @tags login
	 * @name RevokeTokenApiV1LoginRevokePost
	 * @summary Revoke Token
	 * @request POST:/api/v1/login/revoke
	 * @secure
	 * @response `200` `IRevokeTokenApiV1LoginRevokePostData` Successful Response
	 */
	export namespace RevokeTokenApiV1LoginRevokePost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = IRevokeTokenApiV1LoginRevokePostData
	}
	/**
	 * @description Test current endpoint.
	 * @tags users
	 * @name TestEndpointApiV1UsersTesterGet
	 * @summary Test Endpoint
	 * @request GET:/api/v1/users/tester
	 * @response `200` `ITestEndpointApiV1UsersTesterGetData` Successful Response
	 */
	export namespace TestEndpointApiV1UsersTesterGet {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = never
		export type RequestHeaders = {}
		export type ResponseBody = ITestEndpointApiV1UsersTesterGetData
	}
	/**
	 * @description Toggle user state (moderator function)
	 * @tags users
	 * @name ToggleStateApiV1UsersToggleStatePost
	 * @summary Toggle State
	 * @request POST:/api/v1/users/toggle-state
	 * @secure
	 * @response `200` `IToggleStateApiV1UsersToggleStatePostData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
	 */
	export namespace ToggleStateApiV1UsersToggleStatePost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IUserUpdate
		export type RequestHeaders = {}
		export type ResponseBody = IToggleStateApiV1UsersToggleStatePostData
	}
	/**
	 * @description Update a game.
	 * @tags games
	 * @name UpdateGameApiV1GamesGameIdPut
	 * @summary Update Game
	 * @request PUT:/api/v1/games/{game_id}
	 * @secure
	 * @response `200` `IUpdateGameApiV1GamesGameIdPutData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
	 */
	export namespace UpdateGameApiV1GamesGameIdPut {
		export type RequestParams = {
			/** Game Id */
			gameId: string
		}
		export type RequestQuery = {}
		export type RequestBody = IGameUpdate
		export type RequestHeaders = {}
		export type ResponseBody = IUpdateGameApiV1GamesGameIdPutData
	}
	/**
	 * @description Update an item.
	 * @tags items
	 * @name UpdateItemApiV1ItemsItemItemIdPut
	 * @summary Update Item
	 * @request PUT:/api/v1/items/item/{item_id}
	 * @secure
	 * @response `200` `IUpdateItemApiV1ItemsItemItemIdPutData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
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
		export type RequestBody = IItemUpdate
		export type RequestHeaders = {}
		export type ResponseBody = IUpdateItemApiV1ItemsItemItemIdPutData
	}
	/**
	 * @description Update an order.
	 * @tags order
	 * @name UpdateOrderApiV1OrderOrderIdPut
	 * @summary Update Order
	 * @request PUT:/api/v1/order/{order_id}
	 * @secure
	 * @response `200` `IUpdateOrderApiV1OrderOrderIdPutData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
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
		export type RequestBody = IOrderBase
		export type RequestHeaders = {}
		export type ResponseBody = IUpdateOrderApiV1OrderOrderIdPutData
	}
	/**
	 * @description Update user.
	 * @tags users
	 * @name UpdateUserApiV1UsersPut
	 * @summary Update User
	 * @request PUT:/api/v1/users/
	 * @secure
	 * @response `200` `IUpdateUserApiV1UsersPutData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
	 */
	export namespace UpdateUserApiV1UsersPut {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IUserUpdate
		export type RequestHeaders = {}
		export type ResponseBody = IUpdateUserApiV1UsersPutData
	}
	/**
	 * @description Second step of a 'magic link' login.
	 * @tags login
	 * @name ValidateMagicLinkApiV1LoginClaimPost
	 * @summary Validate Magic Link
	 * @request POST:/api/v1/login/claim
	 * @secure
	 * @response `200` `IValidateMagicLinkApiV1LoginClaimPostData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
	 */
	export namespace ValidateMagicLinkApiV1LoginClaimPost {
		export type RequestParams = {}
		export type RequestQuery = {}
		export type RequestBody = IWebToken
		export type RequestHeaders = {}
		export type ResponseBody = IValidateMagicLinkApiV1LoginClaimPostData
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
	/** base url */
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
		 * @description Create new game.
		 *
		 * @tags games
		 * @name CreateGameApiV1GamesPost
		 * @summary Create Game
		 * @request POST:/api/v1/games/
		 * @secure
		 * @response `200` `ICreateGameApiV1GamesPostData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		createGameApiV1GamesPost: (data: IBodyCreateGameApiV1GamesPost, params: RequestParams = {}) =>
			this.http.request<ICreateGameApiV1GamesPostData, ICreateGameApiV1GamesPostError>({
				path: `/api/v1/games/`,
				method: "POST",
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
		 * @response `200` `ICreateItemApiV1ItemsItemPostData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		createItemApiV1ItemsItemPost: (data: IItemCreate, params: RequestParams = {}) =>
			this.http.request<ICreateItemApiV1ItemsItemPostData, ICreateItemApiV1ItemsItemPostError>({
				path: `/api/v1/items/item/`,
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
		 * @response `200` `ICreateOrderApiV1OrderPostData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		createOrderApiV1OrderPost: (data: IOrderCreate, params: RequestParams = {}) =>
			this.http.request<ICreateOrderApiV1OrderPostData, ICreateOrderApiV1OrderPostError>({
				path: `/api/v1/order/`,
				method: "POST",
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * @description Logic to send data to Payment API and handle the response paymentTypes: https://help.unitpay.money:8443/book-of-reference/payment-system-codes
		 *
		 * @tags funds
		 * @name CreatePaymentApiV1FundsCreatePaymentPost
		 * @summary Create Payment
		 * @request POST:/api/v1/funds/create-payment
		 * @secure
		 * @response `200` `ICreatePaymentApiV1FundsCreatePaymentPostData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		createPaymentApiV1FundsCreatePaymentPost: (data: IPaymentNew, params: RequestParams = {}) =>
			this.http.request<
				ICreatePaymentApiV1FundsCreatePaymentPostData,
				ICreatePaymentApiV1FundsCreatePaymentPostError
			>({
				path: `/api/v1/funds/create-payment`,
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
		 * @name CreatePayoutApiV1FundsPayoutPost
		 * @summary Create Payout
		 * @request POST:/api/v1/funds/payout
		 * @secure
		 * @response `200` `ICreatePayoutApiV1FundsPayoutPostData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		createPayoutApiV1FundsPayoutPost: (data: IPayoutRequest, params: RequestParams = {}) =>
			this.http.request<ICreatePayoutApiV1FundsPayoutPostData, ICreatePayoutApiV1FundsPayoutPostError>({
				path: `/api/v1/funds/payout`,
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
		 * @response `200` `ICreateUserApiV1UsersCreatePostData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		createUserApiV1UsersCreatePost: (data: IUserCreate, params: RequestParams = {}) =>
			this.http.request<ICreateUserApiV1UsersCreatePostData, ICreateUserApiV1UsersCreatePostError>({
				path: `/api/v1/users/create`,
				method: "POST",
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
		 * @response `200` `ICreateUserProfileApiV1UsersPostData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		createUserProfileApiV1UsersPost: (data: IBodyCreateUserProfileApiV1UsersPost, params: RequestParams = {}) =>
			this.http.request<ICreateUserProfileApiV1UsersPostData, ICreateUserProfileApiV1UsersPostError>({
				path: `/api/v1/users/`,
				method: "POST",
				body: data,
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
		 * @response `200` `IDeleteItemApiV1ItemsItemItemIdDeleteData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		deleteItemApiV1ItemsItemItemIdDelete: (itemId: string, params: RequestParams = {}) =>
			this.http.request<IDeleteItemApiV1ItemsItemItemIdDeleteData, IDeleteItemApiV1ItemsItemItemIdDeleteError>({
				path: `/api/v1/items/item/${itemId}`,
				method: "DELETE",
				secure: true,
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
		 * @response `200` `IDeleteOrderApiV1OrderOrderIdDeleteData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		deleteOrderApiV1OrderOrderIdDelete: (orderId: string, params: RequestParams = {}) =>
			this.http.request<IDeleteOrderApiV1OrderOrderIdDeleteData, IDeleteOrderApiV1OrderOrderIdDeleteError>({
				path: `/api/v1/order/${orderId}`,
				method: "DELETE",
				secure: true,
				...params,
			}),

		/**
		 * @description Disable TOTP.
		 *
		 * @tags login
		 * @name DisableTotpAuthenticationApiV1LoginTotpDelete
		 * @summary Disable Totp Authentication
		 * @request DELETE:/api/v1/login/totp
		 * @secure
		 * @response `200` `IDisableTotpAuthenticationApiV1LoginTotpDeleteData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		disableTotpAuthenticationApiV1LoginTotpDelete: (data: IUserUpdate, params: RequestParams = {}) =>
			this.http.request<
				IDisableTotpAuthenticationApiV1LoginTotpDeleteData,
				IDisableTotpAuthenticationApiV1LoginTotpDeleteError
			>({
				path: `/api/v1/login/totp`,
				method: "DELETE",
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
		 * @response `200` `IDislikeGameEndpointApiV1UsersDislikeGamePostData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		dislikeGameEndpointApiV1UsersDislikeGamePost: (
			data: IDislikeGameEndpointApiV1UsersDislikeGamePostPayload,
			params: RequestParams = {}
		) =>
			this.http.request<
				IDislikeGameEndpointApiV1UsersDislikeGamePostData,
				IDislikeGameEndpointApiV1UsersDislikeGamePostError
			>({
				path: `/api/v1/users/dislike-game`,
				method: "POST",
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * @description For validation of token before enabling TOTP.
		 *
		 * @tags login
		 * @name EnableTotpAuthenticationApiV1LoginTotpPut
		 * @summary Enable Totp Authentication
		 * @request PUT:/api/v1/login/totp
		 * @secure
		 * @response `200` `IEnableTotpAuthenticationApiV1LoginTotpPutData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		enableTotpAuthenticationApiV1LoginTotpPut: (data: IEnableTOTP, params: RequestParams = {}) =>
			this.http.request<
				IEnableTotpAuthenticationApiV1LoginTotpPutData,
				IEnableTotpAuthenticationApiV1LoginTotpPutError
			>({
				path: `/api/v1/login/totp`,
				method: "PUT",
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * @description Faceted search for items. Allowed filter criteria are: - count - price - price_from - price_till - server - description - type
		 *
		 * @tags items
		 * @name FacetedSearchApiV1ItemsSearchGameIdPost
		 * @summary Faceted Search
		 * @request POST:/api/v1/items/search/{game_id}
		 * @response `200` `IFacetedSearchApiV1ItemsSearchGameIdPostData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		facetedSearchApiV1ItemsSearchGameIdPost: (
			gameId: string,
			data: IFacetedSearchApiV1ItemsSearchGameIdPostPayload,
			params: RequestParams = {}
		) =>
			this.http.request<
				IFacetedSearchApiV1ItemsSearchGameIdPostData,
				IFacetedSearchApiV1ItemsSearchGameIdPostError
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
		 * @response `200` `IGetAvailableFacetsApiV1ItemsFacetsGameIdGetData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		getAvailableFacetsApiV1ItemsFacetsGameIdGet: (gameId: string, params: RequestParams = {}) =>
			this.http.request<
				IGetAvailableFacetsApiV1ItemsFacetsGameIdGetData,
				IGetAvailableFacetsApiV1ItemsFacetsGameIdGetError
			>({
				path: `/api/v1/items/facets/${gameId}`,
				method: "GET",
				...params,
			}),

		/**
		 * @description Retrieve information about a specific payment.
		 *
		 * @tags funds
		 * @name GetPaymentInfoApiV1FundsPaymentInfoPaymentIdGet
		 * @summary Get Payment Info
		 * @request GET:/api/v1/funds/payment-info/{payment_id}
		 * @secure
		 * @response `200` `IGetPaymentInfoApiV1FundsPaymentInfoPaymentIdGetData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		getPaymentInfoApiV1FundsPaymentInfoPaymentIdGet: (paymentId: number, params: RequestParams = {}) =>
			this.http.request<
				IGetPaymentInfoApiV1FundsPaymentInfoPaymentIdGetData,
				IGetPaymentInfoApiV1FundsPaymentInfoPaymentIdGetError
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
		 * @name GetPayoutInfoApiV1FundsPayoutsInfoPost
		 * @summary Get Payout Info
		 * @request POST:/api/v1/funds/payouts/info
		 * @secure
		 * @response `200` `IGetPayoutInfoApiV1FundsPayoutsInfoPostData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		getPayoutInfoApiV1FundsPayoutsInfoPost: (data: IPayoutInfoRequest, params: RequestParams = {}) =>
			this.http.request<
				IGetPayoutInfoApiV1FundsPayoutsInfoPostData,
				IGetPayoutInfoApiV1FundsPayoutsInfoPostError
			>({
				path: `/api/v1/funds/payouts/info`,
				method: "POST",
				body: data,
				secure: true,
				type: ContentType.Json,
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
		 * @response `200` `ILikeGameEndpointApiV1UsersLikeGamePostData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		likeGameEndpointApiV1UsersLikeGamePost: (
			data: ILikeGameEndpointApiV1UsersLikeGamePostPayload,
			params: RequestParams = {}
		) =>
			this.http.request<
				ILikeGameEndpointApiV1UsersLikeGamePostData,
				ILikeGameEndpointApiV1UsersLikeGamePostError
			>({
				path: `/api/v1/users/like-game`,
				method: "POST",
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * @description First step of a 'magic link' login. Check if the user exists and generate a magic link. Generates two short-duration jwt tokens, one for validation, one for email.
		 *
		 * @tags login
		 * @name LoginWithMagicLinkApiV1LoginMagicEmailPost
		 * @summary Login With Magic Link
		 * @request POST:/api/v1/login/magic/{email}
		 * @response `200` `ILoginWithMagicLinkApiV1LoginMagicEmailPostData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		loginWithMagicLinkApiV1LoginMagicEmailPost: (email: string, params: RequestParams = {}) =>
			this.http.request<
				ILoginWithMagicLinkApiV1LoginMagicEmailPostData,
				ILoginWithMagicLinkApiV1LoginMagicEmailPostError
			>({
				path: `/api/v1/login/magic/${email}`,
				method: "POST",
				...params,
			}),

		/**
		 * @description First step with OAuth2 compatible token login, get an access token for future requests. The chat_token is used to authenticate with the chat server. In case if the chat server is not available, the user can still login, but will not be able to user the chat and chat_token will be empty.
		 *
		 * @tags login
		 * @name LoginWithOauth2ApiV1LoginOauthPost
		 * @summary Login With Oauth2
		 * @request POST:/api/v1/login/oauth
		 * @response `200` `ILoginWithOauth2ApiV1LoginOauthPostData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		loginWithOauth2ApiV1LoginOauthPost: (
			data: IBodyLoginWithOauth2ApiV1LoginOauthPost,
			params: RequestParams = {}
		) =>
			this.http.request<ILoginWithOauth2ApiV1LoginOauthPostData, ILoginWithOauth2ApiV1LoginOauthPostError>({
				path: `/api/v1/login/oauth`,
				method: "POST",
				body: data,
				type: ContentType.UrlEncoded,
				...params,
			}),

		/**
		 * @description Final validation step, using TOTP.
		 *
		 * @tags login
		 * @name LoginWithTotpApiV1LoginTotpPost
		 * @summary Login With Totp
		 * @request POST:/api/v1/login/totp
		 * @secure
		 * @response `200` `ILoginWithTotpApiV1LoginTotpPostData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		loginWithTotpApiV1LoginTotpPost: (data: IWebToken, params: RequestParams = {}) =>
			this.http.request<ILoginWithTotpApiV1LoginTotpPostData, ILoginWithTotpApiV1LoginTotpPostError>({
				path: `/api/v1/login/totp`,
				method: "POST",
				body: data,
				secure: true,
				type: ContentType.Json,
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
		 * @response `200` `IProxyGetRequestApiV1ProxyPathGetData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		proxyGetRequestApiV1ProxyPathGet: (path: string, params: RequestParams = {}) =>
			this.http.request<IProxyGetRequestApiV1ProxyPathGetData, IProxyGetRequestApiV1ProxyPathGetError>({
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
		 * @response `200` `IProxyPostRequestApiV1ProxyPathPostData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		proxyPostRequestApiV1ProxyPathPost: (path: string, params: RequestParams = {}) =>
			this.http.request<IProxyPostRequestApiV1ProxyPathPostData, IProxyPostRequestApiV1ProxyPathPostError>({
				path: `/api/v1/proxy/${path}`,
				method: "POST",
				secure: true,
				...params,
			}),

		/**
		 * @description Retrieve games.
		 *
		 * @tags games
		 * @name ReadAllGamesApiV1GamesGet
		 * @summary Read All Games
		 * @request GET:/api/v1/games/
		 * @response `200` `IReadAllGamesApiV1GamesGetData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		readAllGamesApiV1GamesGet: (query: IReadAllGamesApiV1GamesGetParams, params: RequestParams = {}) =>
			this.http.request<IReadAllGamesApiV1GamesGetData, IReadAllGamesApiV1GamesGetError>({
				path: `/api/v1/games/`,
				method: "GET",
				query: query,
				...params,
			}),

		/**
		 * @description Retrieve all current users.
		 *
		 * @tags items
		 * @name ReadAllItemsApiV1ItemsAllGet
		 * @summary Read All Items
		 * @request GET:/api/v1/items/all
		 * @response `200` `IReadAllItemsApiV1ItemsAllGetData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		readAllItemsApiV1ItemsAllGet: (query: IReadAllItemsApiV1ItemsAllGetParams, params: RequestParams = {}) =>
			this.http.request<IReadAllItemsApiV1ItemsAllGetData, IReadAllItemsApiV1ItemsAllGetError>({
				path: `/api/v1/items/all`,
				method: "GET",
				query: query,
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
		 * @response `200` `IReadAllUsersApiV1UsersAllGetData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		readAllUsersApiV1UsersAllGet: (query: IReadAllUsersApiV1UsersAllGetParams, params: RequestParams = {}) =>
			this.http.request<IReadAllUsersApiV1UsersAllGetData, IReadAllUsersApiV1UsersAllGetError>({
				path: `/api/v1/users/all`,
				method: "GET",
				query: query,
				secure: true,
				...params,
			}),

		/**
		 * @description Get a specific game by ID.
		 *
		 * @tags games
		 * @name ReadGameApiV1GamesGameIdGet
		 * @summary Read Game
		 * @request GET:/api/v1/games/{game_id}
		 * @response `200` `IReadGameApiV1GamesGameIdGetData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		readGameApiV1GamesGameIdGet: (gameId: string, params: RequestParams = {}) =>
			this.http.request<IReadGameApiV1GamesGameIdGetData, IReadGameApiV1GamesGameIdGetError>({
				path: `/api/v1/games/${gameId}`,
				method: "GET",
				...params,
			}),

		/**
		 * @description Retrieve a single item by its ID.
		 *
		 * @tags items
		 * @name ReadItemApiV1ItemsItemsItemIdGet
		 * @summary Read Item
		 * @request GET:/api/v1/items/items/{item_id}
		 * @response `200` `IReadItemApiV1ItemsItemsItemIdGetData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		readItemApiV1ItemsItemsItemIdGet: (itemId: string, params: RequestParams = {}) =>
			this.http.request<IReadItemApiV1ItemsItemsItemIdGetData, IReadItemApiV1ItemsItemsItemIdGetError>({
				path: `/api/v1/items/items/${itemId}`,
				method: "GET",
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
		 * @response `200` `IReadOrderApiV1OrderOrderIdGetData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		readOrderApiV1OrderOrderIdGet: (orderId: string, params: RequestParams = {}) =>
			this.http.request<IReadOrderApiV1OrderOrderIdGetData, IReadOrderApiV1OrderOrderIdGetError>({
				path: `/api/v1/order/${orderId}`,
				method: "GET",
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
		 * @response `200` `IReadOrdersByOwnerApiV1OrderUserUserIdGetData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		readOrdersByOwnerApiV1OrderUserUserIdGet: (
			{ userId, ...query }: IReadOrdersByOwnerApiV1OrderUserUserIdGetParams,
			params: RequestParams = {}
		) =>
			this.http.request<
				IReadOrdersByOwnerApiV1OrderUserUserIdGetData,
				IReadOrdersByOwnerApiV1OrderUserUserIdGetError
			>({
				path: `/api/v1/order/user/${userId}`,
				method: "GET",
				query: query,
				secure: true,
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
		 * @response `200` `IReadUserApiV1UsersGetData` Successful Response
		 */
		readUserApiV1UsersGet: (params: RequestParams = {}) =>
			this.http.request<IReadUserApiV1UsersGetData, any>({
				path: `/api/v1/users/`,
				method: "GET",
				secure: true,
				...params,
			}),

		/**
		 * @description Retrieve a single item by its ID.
		 *
		 * @tags users
		 * @name ReadUserApiV1UsersUsersUserIdGet
		 * @summary Read User
		 * @request GET:/api/v1/users/users/{user_id}
		 * @response `200` `IReadUserApiV1UsersUsersUserIdGetData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		readUserApiV1UsersUsersUserIdGet: (userId: string, params: RequestParams = {}) =>
			this.http.request<IReadUserApiV1UsersUsersUserIdGetData, IReadUserApiV1UsersUsersUserIdGetError>({
				path: `/api/v1/users/users/${userId}`,
				method: "GET",
				...params,
			}),

		/**
		 * @description Password Recovery
		 *
		 * @tags login
		 * @name RecoverPasswordApiV1LoginRecoverEmailPost
		 * @summary Recover Password
		 * @request POST:/api/v1/login/recover/{email}
		 * @response `200` `IRecoverPasswordApiV1LoginRecoverEmailPostData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		recoverPasswordApiV1LoginRecoverEmailPost: (email: string, params: RequestParams = {}) =>
			this.http.request<
				IRecoverPasswordApiV1LoginRecoverEmailPostData,
				IRecoverPasswordApiV1LoginRecoverEmailPostError
			>({
				path: `/api/v1/login/recover/${email}`,
				method: "POST",
				...params,
			}),

		/**
		 * @description Refresh tokens for future requests
		 *
		 * @tags login
		 * @name RefreshTokenApiV1LoginRefreshPost
		 * @summary Refresh Token
		 * @request POST:/api/v1/login/refresh
		 * @secure
		 * @response `200` `IRefreshTokenApiV1LoginRefreshPostData` Successful Response
		 */
		refreshTokenApiV1LoginRefreshPost: (params: RequestParams = {}) =>
			this.http.request<IRefreshTokenApiV1LoginRefreshPostData, any>({
				path: `/api/v1/login/refresh`,
				method: "POST",
				secure: true,
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags funds
		 * @name RefundPaymentApiV1FundsRefundPaymentPost
		 * @summary Refund Payment
		 * @request POST:/api/v1/funds/refund-payment
		 * @secure
		 * @response `200` `IRefundPaymentApiV1FundsRefundPaymentPostData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		refundPaymentApiV1FundsRefundPaymentPost: (
			query: IRefundPaymentApiV1FundsRefundPaymentPostParams,
			params: RequestParams = {}
		) =>
			this.http.request<
				IRefundPaymentApiV1FundsRefundPaymentPostData,
				IRefundPaymentApiV1FundsRefundPaymentPostError
			>({
				path: `/api/v1/funds/refund-payment`,
				method: "POST",
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
		 * @response `200` `IRequestNewTotpApiV1UsersNewTotpPostData` Successful Response
		 */
		requestNewTotpApiV1UsersNewTotpPost: (params: RequestParams = {}) =>
			this.http.request<IRequestNewTotpApiV1UsersNewTotpPostData, any>({
				path: `/api/v1/users/new-totp`,
				method: "POST",
				secure: true,
				...params,
			}),

		/**
		 * @description Reset password
		 *
		 * @tags login
		 * @name ResetPasswordApiV1LoginResetPost
		 * @summary Reset Password
		 * @request POST:/api/v1/login/reset
		 * @secure
		 * @response `200` `IResetPasswordApiV1LoginResetPostData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		resetPasswordApiV1LoginResetPost: (data: IBodyResetPasswordApiV1LoginResetPost, params: RequestParams = {}) =>
			this.http.request<IResetPasswordApiV1LoginResetPostData, IResetPasswordApiV1LoginResetPostError>({
				path: `/api/v1/login/reset`,
				method: "POST",
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * @description Revoke a refresh token
		 *
		 * @tags login
		 * @name RevokeTokenApiV1LoginRevokePost
		 * @summary Revoke Token
		 * @request POST:/api/v1/login/revoke
		 * @secure
		 * @response `200` `IRevokeTokenApiV1LoginRevokePostData` Successful Response
		 */
		revokeTokenApiV1LoginRevokePost: (params: RequestParams = {}) =>
			this.http.request<IRevokeTokenApiV1LoginRevokePostData, any>({
				path: `/api/v1/login/revoke`,
				method: "POST",
				secure: true,
				...params,
			}),

		/**
		 * @description Test current endpoint.
		 *
		 * @tags users
		 * @name TestEndpointApiV1UsersTesterGet
		 * @summary Test Endpoint
		 * @request GET:/api/v1/users/tester
		 * @response `200` `ITestEndpointApiV1UsersTesterGetData` Successful Response
		 */
		testEndpointApiV1UsersTesterGet: (params: RequestParams = {}) =>
			this.http.request<ITestEndpointApiV1UsersTesterGetData, any>({
				path: `/api/v1/users/tester`,
				method: "GET",
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
		 * @response `200` `IToggleStateApiV1UsersToggleStatePostData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		toggleStateApiV1UsersToggleStatePost: (data: IUserUpdate, params: RequestParams = {}) =>
			this.http.request<IToggleStateApiV1UsersToggleStatePostData, IToggleStateApiV1UsersToggleStatePostError>({
				path: `/api/v1/users/toggle-state`,
				method: "POST",
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * @description Update a game.
		 *
		 * @tags games
		 * @name UpdateGameApiV1GamesGameIdPut
		 * @summary Update Game
		 * @request PUT:/api/v1/games/{game_id}
		 * @secure
		 * @response `200` `IUpdateGameApiV1GamesGameIdPutData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		updateGameApiV1GamesGameIdPut: (gameId: string, data: IGameUpdate, params: RequestParams = {}) =>
			this.http.request<IUpdateGameApiV1GamesGameIdPutData, IUpdateGameApiV1GamesGameIdPutError>({
				path: `/api/v1/games/${gameId}`,
				method: "PUT",
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
		 * @response `200` `IUpdateItemApiV1ItemsItemItemIdPutData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		updateItemApiV1ItemsItemItemIdPut: (itemId: string, data: IItemUpdate, params: RequestParams = {}) =>
			this.http.request<IUpdateItemApiV1ItemsItemItemIdPutData, IUpdateItemApiV1ItemsItemItemIdPutError>({
				path: `/api/v1/items/item/${itemId}`,
				method: "PUT",
				body: data,
				secure: true,
				type: ContentType.Json,
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
		 * @response `200` `IUpdateOrderApiV1OrderOrderIdPutData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		updateOrderApiV1OrderOrderIdPut: (orderId: string, data: IOrderBase, params: RequestParams = {}) =>
			this.http.request<IUpdateOrderApiV1OrderOrderIdPutData, IUpdateOrderApiV1OrderOrderIdPutError>({
				path: `/api/v1/order/${orderId}`,
				method: "PUT",
				body: data,
				secure: true,
				type: ContentType.Json,
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
		 * @response `200` `IUpdateUserApiV1UsersPutData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		updateUserApiV1UsersPut: (data: IUserUpdate, params: RequestParams = {}) =>
			this.http.request<IUpdateUserApiV1UsersPutData, IUpdateUserApiV1UsersPutError>({
				path: `/api/v1/users/`,
				method: "PUT",
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),

		/**
		 * @description Second step of a 'magic link' login.
		 *
		 * @tags login
		 * @name ValidateMagicLinkApiV1LoginClaimPost
		 * @summary Validate Magic Link
		 * @request POST:/api/v1/login/claim
		 * @secure
		 * @response `200` `IValidateMagicLinkApiV1LoginClaimPostData` Successful Response
		 * @response `422` `IHTTPValidationError` Validation Error
		 */
		validateMagicLinkApiV1LoginClaimPost: (data: IWebToken, params: RequestParams = {}) =>
			this.http.request<IValidateMagicLinkApiV1LoginClaimPostData, IValidateMagicLinkApiV1LoginClaimPostError>({
				path: `/api/v1/login/claim`,
				method: "POST",
				body: data,
				secure: true,
				type: ContentType.Json,
				...params,
			}),
	}
}
