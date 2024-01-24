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

import {
	IBodyCreateGameApiV1GamesPost,
	IBodyCreateUserProfileApiV1UsersPost,
	IBodyLoginWithOauth2ApiV1LoginOauthPost,
	IBodyResetPasswordApiV1LoginResetPost,
	ICreateGameApiV1GamesPostData,
	ICreateGameApiV1GamesPostError,
	ICreateItemApiV1ItemsItemPostData,
	ICreateItemApiV1ItemsItemPostError,
	ICreateOrderApiV1OrderPostData,
	ICreateOrderApiV1OrderPostError,
	ICreatePaymentApiV1FundsCreatePaymentPostData,
	ICreatePaymentApiV1FundsCreatePaymentPostError,
	ICreatePayoutApiV1FundsPayoutPostData,
	ICreatePayoutApiV1FundsPayoutPostError,
	ICreateUserApiV1UsersCreatePostData,
	ICreateUserApiV1UsersCreatePostError,
	ICreateUserProfileApiV1UsersPostData,
	ICreateUserProfileApiV1UsersPostError,
	IDeleteItemApiV1ItemsItemItemIdDeleteData,
	IDeleteItemApiV1ItemsItemItemIdDeleteError,
	IDeleteOrderApiV1OrderOrderIdDeleteData,
	IDeleteOrderApiV1OrderOrderIdDeleteError,
	IDisableTotpAuthenticationApiV1LoginTotpDeleteData,
	IDisableTotpAuthenticationApiV1LoginTotpDeleteError,
	IDislikeGameEndpointApiV1UsersDislikeGamePostData,
	IDislikeGameEndpointApiV1UsersDislikeGamePostError,
	IDislikeGameEndpointApiV1UsersDislikeGamePostPayload,
	IEnableTOTP,
	IEnableTotpAuthenticationApiV1LoginTotpPutData,
	IEnableTotpAuthenticationApiV1LoginTotpPutError,
	IFacetedSearchApiV1ItemsSearchGameIdPostData,
	IFacetedSearchApiV1ItemsSearchGameIdPostError,
	IFacetedSearchApiV1ItemsSearchGameIdPostPayload,
	IGameUpdate,
	IGetAvailableFacetsApiV1ItemsFacetsGameIdGetData,
	IGetAvailableFacetsApiV1ItemsFacetsGameIdGetError,
	IGetPaymentInfoApiV1FundsPaymentInfoPaymentIdGetData,
	IGetPaymentInfoApiV1FundsPaymentInfoPaymentIdGetError,
	IGetPayoutInfoApiV1FundsPayoutsInfoPostData,
	IGetPayoutInfoApiV1FundsPayoutsInfoPostError,
	IItemCreate,
	IItemUpdate,
	ILikeGameEndpointApiV1UsersLikeGamePostData,
	ILikeGameEndpointApiV1UsersLikeGamePostError,
	ILikeGameEndpointApiV1UsersLikeGamePostPayload,
	ILoginWithMagicLinkApiV1LoginMagicEmailPostData,
	ILoginWithMagicLinkApiV1LoginMagicEmailPostError,
	ILoginWithOauth2ApiV1LoginOauthPostData,
	ILoginWithOauth2ApiV1LoginOauthPostError,
	ILoginWithTotpApiV1LoginTotpPostData,
	ILoginWithTotpApiV1LoginTotpPostError,
	IOrderBase,
	IOrderCreate,
	IPaymentNew,
	IPayoutInfoRequest,
	IPayoutRequest,
	IProxyGetRequestApiV1ProxyPathGetData,
	IProxyGetRequestApiV1ProxyPathGetError,
	IProxyPostRequestApiV1ProxyPathPostData,
	IProxyPostRequestApiV1ProxyPathPostError,
	IReadAllGamesApiV1GamesGetData,
	IReadAllGamesApiV1GamesGetError,
	IReadAllGamesApiV1GamesGetParams,
	IReadAllItemsApiV1ItemsAllGetData,
	IReadAllItemsApiV1ItemsAllGetError,
	IReadAllItemsApiV1ItemsAllGetParams,
	IReadAllUsersApiV1UsersAllGetData,
	IReadAllUsersApiV1UsersAllGetError,
	IReadAllUsersApiV1UsersAllGetParams,
	IReadGameApiV1GamesGameIdGetData,
	IReadGameApiV1GamesGameIdGetError,
	IReadItemApiV1ItemsItemsItemIdGetData,
	IReadItemApiV1ItemsItemsItemIdGetError,
	IReadOrderApiV1OrderOrderIdGetData,
	IReadOrderApiV1OrderOrderIdGetError,
	IReadOrdersByOwnerApiV1OrderUserUserIdGetData,
	IReadOrdersByOwnerApiV1OrderUserUserIdGetError,
	IReadOrdersByOwnerApiV1OrderUserUserIdGetParams,
	IReadUserApiV1UsersGetData,
	IReadUserApiV1UsersUsersUserIdGetData,
	IReadUserApiV1UsersUsersUserIdGetError,
	IRecoverPasswordApiV1LoginRecoverEmailPostData,
	IRecoverPasswordApiV1LoginRecoverEmailPostError,
	IRefreshTokenApiV1LoginRefreshPostData,
	IRefundPaymentApiV1FundsRefundPaymentPostData,
	IRefundPaymentApiV1FundsRefundPaymentPostError,
	IRefundPaymentApiV1FundsRefundPaymentPostParams,
	IRequestNewTotpApiV1UsersNewTotpPostData,
	IResetPasswordApiV1LoginResetPostData,
	IResetPasswordApiV1LoginResetPostError,
	IRevokeTokenApiV1LoginRevokePostData,
	ITestEndpointApiV1UsersTesterGetData,
	IToggleStateApiV1UsersToggleStatePostData,
	IToggleStateApiV1UsersToggleStatePostError,
	IUpdateGameApiV1GamesGameIdPutData,
	IUpdateGameApiV1GamesGameIdPutError,
	IUpdateItemApiV1ItemsItemItemIdPutData,
	IUpdateItemApiV1ItemsItemItemIdPutError,
	IUpdateOrderApiV1OrderOrderIdPutData,
	IUpdateOrderApiV1OrderOrderIdPutError,
	IUpdateUserApiV1UsersPutData,
	IUpdateUserApiV1UsersPutError,
	IUserCreate,
	IUserUpdate,
	IValidateMagicLinkApiV1LoginClaimPostData,
	IValidateMagicLinkApiV1LoginClaimPostError,
	IWebToken,
} from "./data-contracts"
import { ContentType, HttpClient, RequestParams } from "./http-client"

export class Api<SecurityDataType = unknown> {
	http: HttpClient<SecurityDataType>

	constructor(http: HttpClient<SecurityDataType>) {
		this.http = http
	}

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
	createGameApiV1GamesPost = (data: IBodyCreateGameApiV1GamesPost, params: RequestParams = {}) =>
		this.http.request<ICreateGameApiV1GamesPostData, ICreateGameApiV1GamesPostError>({
			path: `/api/v1/games/`,
			method: "POST",
			body: data,
			secure: true,
			type: ContentType.Json,
			...params,
		})
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
	createItemApiV1ItemsItemPost = (data: IItemCreate, params: RequestParams = {}) =>
		this.http.request<ICreateItemApiV1ItemsItemPostData, ICreateItemApiV1ItemsItemPostError>({
			path: `/api/v1/items/item/`,
			method: "POST",
			body: data,
			secure: true,
			type: ContentType.Json,
			...params,
		})
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
	createOrderApiV1OrderPost = (data: IOrderCreate, params: RequestParams = {}) =>
		this.http.request<ICreateOrderApiV1OrderPostData, ICreateOrderApiV1OrderPostError>({
			path: `/api/v1/order/`,
			method: "POST",
			body: data,
			secure: true,
			type: ContentType.Json,
			...params,
		})
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
	createPaymentApiV1FundsCreatePaymentPost = (data: IPaymentNew, params: RequestParams = {}) =>
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
		})
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
	createPayoutApiV1FundsPayoutPost = (data: IPayoutRequest, params: RequestParams = {}) =>
		this.http.request<ICreatePayoutApiV1FundsPayoutPostData, ICreatePayoutApiV1FundsPayoutPostError>({
			path: `/api/v1/funds/payout`,
			method: "POST",
			body: data,
			secure: true,
			type: ContentType.Json,
			...params,
		})
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
	createUserApiV1UsersCreatePost = (data: IUserCreate, params: RequestParams = {}) =>
		this.http.request<ICreateUserApiV1UsersCreatePostData, ICreateUserApiV1UsersCreatePostError>({
			path: `/api/v1/users/create`,
			method: "POST",
			body: data,
			secure: true,
			type: ContentType.Json,
			...params,
		})
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
	createUserProfileApiV1UsersPost = (data: IBodyCreateUserProfileApiV1UsersPost, params: RequestParams = {}) =>
		this.http.request<ICreateUserProfileApiV1UsersPostData, ICreateUserProfileApiV1UsersPostError>({
			path: `/api/v1/users/`,
			method: "POST",
			body: data,
			type: ContentType.Json,
			...params,
		})
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
	deleteItemApiV1ItemsItemItemIdDelete = (itemId: string, params: RequestParams = {}) =>
		this.http.request<IDeleteItemApiV1ItemsItemItemIdDeleteData, IDeleteItemApiV1ItemsItemItemIdDeleteError>({
			path: `/api/v1/items/item/${itemId}`,
			method: "DELETE",
			secure: true,
			...params,
		})
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
	deleteOrderApiV1OrderOrderIdDelete = (orderId: string, params: RequestParams = {}) =>
		this.http.request<IDeleteOrderApiV1OrderOrderIdDeleteData, IDeleteOrderApiV1OrderOrderIdDeleteError>({
			path: `/api/v1/order/${orderId}`,
			method: "DELETE",
			secure: true,
			...params,
		})
	/**
	 * @description Disable TOTP.
	 *
	 * @tags signin
	 * @name DisableTotpAuthenticationApiV1LoginTotpDelete
	 * @summary Disable Totp Authentication
	 * @request DELETE:/api/v1/signin/totp
	 * @secure
	 * @response `200` `IDisableTotpAuthenticationApiV1LoginTotpDeleteData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
	 */
	disableTotpAuthenticationApiV1LoginTotpDelete = (data: IUserUpdate, params: RequestParams = {}) =>
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
		})
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
	dislikeGameEndpointApiV1UsersDislikeGamePost = (
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
		})
	/**
	 * @description For validation of token before enabling TOTP.
	 *
	 * @tags signin
	 * @name EnableTotpAuthenticationApiV1LoginTotpPut
	 * @summary Enable Totp Authentication
	 * @request PUT:/api/v1/signin/totp
	 * @secure
	 * @response `200` `IEnableTotpAuthenticationApiV1LoginTotpPutData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
	 */
	enableTotpAuthenticationApiV1LoginTotpPut = (data: IEnableTOTP, params: RequestParams = {}) =>
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
		})
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
	facetedSearchApiV1ItemsSearchGameIdPost = (
		gameId: string,
		data: IFacetedSearchApiV1ItemsSearchGameIdPostPayload,
		params: RequestParams = {}
	) =>
		this.http.request<IFacetedSearchApiV1ItemsSearchGameIdPostData, IFacetedSearchApiV1ItemsSearchGameIdPostError>({
			path: `/api/v1/items/search/${gameId}`,
			method: "POST",
			body: data,
			type: ContentType.Json,
			...params,
		})
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
	getAvailableFacetsApiV1ItemsFacetsGameIdGet = (gameId: string, params: RequestParams = {}) =>
		this.http.request<
			IGetAvailableFacetsApiV1ItemsFacetsGameIdGetData,
			IGetAvailableFacetsApiV1ItemsFacetsGameIdGetError
		>({
			path: `/api/v1/items/facets/${gameId}`,
			method: "GET",
			...params,
		})
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
	getPaymentInfoApiV1FundsPaymentInfoPaymentIdGet = (paymentId: number, params: RequestParams = {}) =>
		this.http.request<
			IGetPaymentInfoApiV1FundsPaymentInfoPaymentIdGetData,
			IGetPaymentInfoApiV1FundsPaymentInfoPaymentIdGetError
		>({
			path: `/api/v1/funds/payment-info/${paymentId}`,
			method: "GET",
			secure: true,
			...params,
		})
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
	getPayoutInfoApiV1FundsPayoutsInfoPost = (data: IPayoutInfoRequest, params: RequestParams = {}) =>
		this.http.request<IGetPayoutInfoApiV1FundsPayoutsInfoPostData, IGetPayoutInfoApiV1FundsPayoutsInfoPostError>({
			path: `/api/v1/funds/payouts/info`,
			method: "POST",
			body: data,
			secure: true,
			type: ContentType.Json,
			...params,
		})
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
	likeGameEndpointApiV1UsersLikeGamePost = (
		data: ILikeGameEndpointApiV1UsersLikeGamePostPayload,
		params: RequestParams = {}
	) =>
		this.http.request<ILikeGameEndpointApiV1UsersLikeGamePostData, ILikeGameEndpointApiV1UsersLikeGamePostError>({
			path: `/api/v1/users/like-game`,
			method: "POST",
			body: data,
			secure: true,
			type: ContentType.Json,
			...params,
		})
	/**
	 * @description First step of a 'magic link' signin. Check if the user exists and generate a magic link. Generates two short-duration jwt tokens, one for validation, one for email.
	 *
	 * @tags signin
	 * @name LoginWithMagicLinkApiV1LoginMagicEmailPost
	 * @summary Login With Magic Link
	 * @request POST:/api/v1/signin/magic/{email}
	 * @response `200` `ILoginWithMagicLinkApiV1LoginMagicEmailPostData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
	 */
	loginWithMagicLinkApiV1LoginMagicEmailPost = (email: string, params: RequestParams = {}) =>
		this.http.request<
			ILoginWithMagicLinkApiV1LoginMagicEmailPostData,
			ILoginWithMagicLinkApiV1LoginMagicEmailPostError
		>({
			path: `/api/v1/login/magic/${email}`,
			method: "POST",
			...params,
		})
	/**
	 * @description First step with OAuth2 compatible token signin, get an access token for future requests. The chat_token is used to authenticate with the chat server. In case if the chat server is not available, the user can still signin, but will not be able to use the chat and chat_token will be empty.
	 *
	 * @tags signin
	 * @name LoginWithOauth2ApiV1LoginOauthPost
	 * @summary Login With Oauth2
	 * @request POST:/api/v1/signin/oauth
	 * @response `200` `ILoginWithOauth2ApiV1LoginOauthPostData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
	 */
	loginWithOauth2ApiV1LoginOauthPost = (data: IBodyLoginWithOauth2ApiV1LoginOauthPost, params: RequestParams = {}) =>
		this.http.request<ILoginWithOauth2ApiV1LoginOauthPostData, ILoginWithOauth2ApiV1LoginOauthPostError>({
			path: `/api/v1/login/oauth`,
			method: "POST",
			body: data,
			type: ContentType.UrlEncoded,
			...params,
		})
	/**
	 * @description Final validation step, using TOTP.
	 *
	 * @tags signin
	 * @name LoginWithTotpApiV1LoginTotpPost
	 * @summary Login With Totp
	 * @request POST:/api/v1/signin/totp
	 * @secure
	 * @response `200` `ILoginWithTotpApiV1LoginTotpPostData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
	 */
	loginWithTotpApiV1LoginTotpPost = (data: IWebToken, params: RequestParams = {}) =>
		this.http.request<ILoginWithTotpApiV1LoginTotpPostData, ILoginWithTotpApiV1LoginTotpPostError>({
			path: `/api/v1/login/totp`,
			method: "POST",
			body: data,
			secure: true,
			type: ContentType.Json,
			...params,
		})
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
	proxyGetRequestApiV1ProxyPathGet = (path: string, params: RequestParams = {}) =>
		this.http.request<IProxyGetRequestApiV1ProxyPathGetData, IProxyGetRequestApiV1ProxyPathGetError>({
			path: `/api/v1/proxy/${path}`,
			method: "GET",
			secure: true,
			...params,
		})
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
	proxyPostRequestApiV1ProxyPathPost = (path: string, params: RequestParams = {}) =>
		this.http.request<IProxyPostRequestApiV1ProxyPathPostData, IProxyPostRequestApiV1ProxyPathPostError>({
			path: `/api/v1/proxy/${path}`,
			method: "POST",
			secure: true,
			...params,
		})
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
	readAllGamesApiV1GamesGet = (query: IReadAllGamesApiV1GamesGetParams, params: RequestParams = {}) =>
		this.http.request<IReadAllGamesApiV1GamesGetData, IReadAllGamesApiV1GamesGetError>({
			path: `/api/v1/games/`,
			method: "GET",
			query: query,
			...params,
		})
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
	readAllItemsApiV1ItemsAllGet = (query: IReadAllItemsApiV1ItemsAllGetParams, params: RequestParams = {}) =>
		this.http.request<IReadAllItemsApiV1ItemsAllGetData, IReadAllItemsApiV1ItemsAllGetError>({
			path: `/api/v1/items/all`,
			method: "GET",
			query: query,
			...params,
		})
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
	readAllUsersApiV1UsersAllGet = (query: IReadAllUsersApiV1UsersAllGetParams, params: RequestParams = {}) =>
		this.http.request<IReadAllUsersApiV1UsersAllGetData, IReadAllUsersApiV1UsersAllGetError>({
			path: `/api/v1/users/all`,
			method: "GET",
			query: query,
			secure: true,
			...params,
		})
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
	readGameApiV1GamesGameIdGet = (gameId: string, params: RequestParams = {}) =>
		this.http.request<IReadGameApiV1GamesGameIdGetData, IReadGameApiV1GamesGameIdGetError>({
			path: `/api/v1/games/${gameId}`,
			method: "GET",
			...params,
		})
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
	readItemApiV1ItemsItemsItemIdGet = (itemId: string, params: RequestParams = {}) =>
		this.http.request<IReadItemApiV1ItemsItemsItemIdGetData, IReadItemApiV1ItemsItemsItemIdGetError>({
			path: `/api/v1/items/items/${itemId}`,
			method: "GET",
			...params,
		})
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
	readOrderApiV1OrderOrderIdGet = (orderId: string, params: RequestParams = {}) =>
		this.http.request<IReadOrderApiV1OrderOrderIdGetData, IReadOrderApiV1OrderOrderIdGetError>({
			path: `/api/v1/order/${orderId}`,
			method: "GET",
			secure: true,
			...params,
		})
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
	readOrdersByOwnerApiV1OrderUserUserIdGet = (
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
		})
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
	readUserApiV1UsersGet = (params: RequestParams = {}) =>
		this.http.request<IReadUserApiV1UsersGetData, any>({
			path: `/api/v1/users/`,
			method: "GET",
			secure: true,
			...params,
		})
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
	readUserApiV1UsersUsersUserIdGet = (userId: string, params: RequestParams = {}) =>
		this.http.request<IReadUserApiV1UsersUsersUserIdGetData, IReadUserApiV1UsersUsersUserIdGetError>({
			path: `/api/v1/users/users/${userId}`,
			method: "GET",
			...params,
		})
	/**
	 * @description Password Recovery
	 *
	 * @tags signin
	 * @name RecoverPasswordApiV1LoginRecoverEmailPost
	 * @summary Recover Password
	 * @request POST:/api/v1/signin/recover/{email}
	 * @response `200` `IRecoverPasswordApiV1LoginRecoverEmailPostData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
	 */
	recoverPasswordApiV1LoginRecoverEmailPost = (email: string, params: RequestParams = {}) =>
		this.http.request<
			IRecoverPasswordApiV1LoginRecoverEmailPostData,
			IRecoverPasswordApiV1LoginRecoverEmailPostError
		>({
			path: `/api/v1/login/recover/${email}`,
			method: "POST",
			...params,
		})
	/**
	 * @description Refresh tokens for future requests
	 *
	 * @tags signin
	 * @name RefreshTokenApiV1LoginRefreshPost
	 * @summary Refresh Token
	 * @request POST:/api/v1/signin/refresh
	 * @secure
	 * @response `200` `IRefreshTokenApiV1LoginRefreshPostData` Successful Response
	 */
	refreshTokenApiV1LoginRefreshPost = (params: RequestParams = {}) =>
		this.http.request<IRefreshTokenApiV1LoginRefreshPostData, any>({
			path: `/api/v1/login/refresh`,
			method: "POST",
			secure: true,
			...params,
		})
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
	refundPaymentApiV1FundsRefundPaymentPost = (
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
		})
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
	requestNewTotpApiV1UsersNewTotpPost = (params: RequestParams = {}) =>
		this.http.request<IRequestNewTotpApiV1UsersNewTotpPostData, any>({
			path: `/api/v1/users/new-totp`,
			method: "POST",
			secure: true,
			...params,
		})
	/**
	 * @description Reset password
	 *
	 * @tags signin
	 * @name ResetPasswordApiV1LoginResetPost
	 * @summary Reset Password
	 * @request POST:/api/v1/signin/reset
	 * @secure
	 * @response `200` `IResetPasswordApiV1LoginResetPostData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
	 */
	resetPasswordApiV1LoginResetPost = (data: IBodyResetPasswordApiV1LoginResetPost, params: RequestParams = {}) =>
		this.http.request<IResetPasswordApiV1LoginResetPostData, IResetPasswordApiV1LoginResetPostError>({
			path: `/api/v1/login/reset`,
			method: "POST",
			body: data,
			secure: true,
			type: ContentType.Json,
			...params,
		})
	/**
	 * @description Revoke a refresh token
	 *
	 * @tags signin
	 * @name RevokeTokenApiV1LoginRevokePost
	 * @summary Revoke Token
	 * @request POST:/api/v1/signin/revoke
	 * @secure
	 * @response `200` `IRevokeTokenApiV1LoginRevokePostData` Successful Response
	 */
	revokeTokenApiV1LoginRevokePost = (params: RequestParams = {}) =>
		this.http.request<IRevokeTokenApiV1LoginRevokePostData, any>({
			path: `/api/v1/login/revoke`,
			method: "POST",
			secure: true,
			...params,
		})
	/**
	 * @description Test current endpoint.
	 *
	 * @tags users
	 * @name TestEndpointApiV1UsersTesterGet
	 * @summary Test Endpoint
	 * @request GET:/api/v1/users/tester
	 * @response `200` `ITestEndpointApiV1UsersTesterGetData` Successful Response
	 */
	testEndpointApiV1UsersTesterGet = (params: RequestParams = {}) =>
		this.http.request<ITestEndpointApiV1UsersTesterGetData, any>({
			path: `/api/v1/users/tester`,
			method: "GET",
			...params,
		})
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
	toggleStateApiV1UsersToggleStatePost = (data: IUserUpdate, params: RequestParams = {}) =>
		this.http.request<IToggleStateApiV1UsersToggleStatePostData, IToggleStateApiV1UsersToggleStatePostError>({
			path: `/api/v1/users/toggle-state`,
			method: "POST",
			body: data,
			secure: true,
			type: ContentType.Json,
			...params,
		})
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
	updateGameApiV1GamesGameIdPut = (gameId: string, data: IGameUpdate, params: RequestParams = {}) =>
		this.http.request<IUpdateGameApiV1GamesGameIdPutData, IUpdateGameApiV1GamesGameIdPutError>({
			path: `/api/v1/games/${gameId}`,
			method: "PUT",
			body: data,
			secure: true,
			type: ContentType.Json,
			...params,
		})
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
	updateItemApiV1ItemsItemItemIdPut = (itemId: string, data: IItemUpdate, params: RequestParams = {}) =>
		this.http.request<IUpdateItemApiV1ItemsItemItemIdPutData, IUpdateItemApiV1ItemsItemItemIdPutError>({
			path: `/api/v1/items/item/${itemId}`,
			method: "PUT",
			body: data,
			secure: true,
			type: ContentType.Json,
			...params,
		})
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
	updateOrderApiV1OrderOrderIdPut = (orderId: string, data: IOrderBase, params: RequestParams = {}) =>
		this.http.request<IUpdateOrderApiV1OrderOrderIdPutData, IUpdateOrderApiV1OrderOrderIdPutError>({
			path: `/api/v1/order/${orderId}`,
			method: "PUT",
			body: data,
			secure: true,
			type: ContentType.Json,
			...params,
		})
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
	updateUserApiV1UsersPut = (data: IUserUpdate, params: RequestParams = {}) =>
		this.http.request<IUpdateUserApiV1UsersPutData, IUpdateUserApiV1UsersPutError>({
			path: `/api/v1/users/`,
			method: "PUT",
			body: data,
			secure: true,
			type: ContentType.Json,
			...params,
		})
	/**
	 * @description Second step of a 'magic link' signin.
	 *
	 * @tags signin
	 * @name ValidateMagicLinkApiV1LoginClaimPost
	 * @summary Validate Magic Link
	 * @request POST:/api/v1/signin/claim
	 * @secure
	 * @response `200` `IValidateMagicLinkApiV1LoginClaimPostData` Successful Response
	 * @response `422` `IHTTPValidationError` Validation Error
	 */
	validateMagicLinkApiV1LoginClaimPost = (data: IWebToken, params: RequestParams = {}) =>
		this.http.request<IValidateMagicLinkApiV1LoginClaimPostData, IValidateMagicLinkApiV1LoginClaimPostError>({
			path: `/api/v1/login/claim`,
			method: "POST",
			body: data,
			secure: true,
			type: ContentType.Json,
			...params,
		})
}
