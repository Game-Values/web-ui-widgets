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
	ICreateItemApiV1ItemsItemPostData,
	ICreateOrderApiV1OrderPostData,
	ICreatePaymentApiV1FundsCreatePaymentPostData,
	ICreatePayoutApiV1FundsPayoutPostData,
	ICreateUserApiV1UsersCreatePostData,
	ICreateUserProfileApiV1UsersPostData,
	IDeleteItemApiV1ItemsItemItemIdDeleteData,
	IDeleteOrderApiV1OrderOrderIdDeleteData,
	IDisableTotpAuthenticationApiV1LoginTotpDeleteData,
	IDislikeGameEndpointApiV1UsersDislikeGamePostData,
	IDislikeGameEndpointApiV1UsersDislikeGamePostPayload,
	IEnableTOTP,
	IEnableTotpAuthenticationApiV1LoginTotpPutData,
	IFacetedSearchApiV1ItemsSearchGameIdPostData,
	IFacetedSearchApiV1ItemsSearchGameIdPostPayload,
	IGameUpdate,
	IGetAvailableFacetsApiV1ItemsFacetsGameIdGetData,
	IGetPaymentInfoApiV1FundsPaymentInfoPaymentIdGetData,
	IGetPayoutInfoApiV1FundsPayoutsInfoPostData,
	IItemCreate,
	IItemUpdate,
	ILikeGameEndpointApiV1UsersLikeGamePostData,
	ILikeGameEndpointApiV1UsersLikeGamePostPayload,
	ILoginWithMagicLinkApiV1LoginMagicEmailPostData,
	ILoginWithOauth2ApiV1LoginOauthPostData,
	ILoginWithTotpApiV1LoginTotpPostData,
	IOrderBase,
	IOrderCreate,
	IPaymentNew,
	IPayoutInfoRequest,
	IPayoutRequest,
	IProxyGetRequestApiV1ProxyPathGetData,
	IProxyPostRequestApiV1ProxyPathPostData,
	IReadAllGamesApiV1GamesGetData,
	IReadAllItemsApiV1ItemsAllGetData,
	IReadAllUsersApiV1UsersAllGetData,
	IReadGameApiV1GamesGameIdGetData,
	IReadItemApiV1ItemsItemsItemIdGetData,
	IReadOrderApiV1OrderOrderIdGetData,
	IReadOrdersByOwnerApiV1OrderUserUserIdGetData,
	IReadUserApiV1UsersGetData,
	IReadUserApiV1UsersUsersUserIdGetData,
	IRecoverPasswordApiV1LoginRecoverEmailPostData,
	IRefreshTokenApiV1LoginRefreshPostData,
	IRefundPaymentApiV1FundsRefundPaymentPostData,
	IRequestNewTotpApiV1UsersNewTotpPostData,
	IResetPasswordApiV1LoginResetPostData,
	IRevokeTokenApiV1LoginRevokePostData,
	ITestEndpointApiV1UsersTesterGetData,
	IToggleStateApiV1UsersToggleStatePostData,
	IUpdateGameApiV1GamesGameIdPutData,
	IUpdateItemApiV1ItemsItemItemIdPutData,
	IUpdateOrderApiV1OrderOrderIdPutData,
	IUpdateUserApiV1UsersPutData,
	IUserCreate,
	IUserUpdate,
	IValidateMagicLinkApiV1LoginClaimPostData,
	IWebToken,
} from "./data-contracts"

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
	 * @tags signin
	 * @name DisableTotpAuthenticationApiV1LoginTotpDelete
	 * @summary Disable Totp Authentication
	 * @request DELETE:/api/v1/signin/totp
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
	 * @tags signin
	 * @name EnableTotpAuthenticationApiV1LoginTotpPut
	 * @summary Enable Totp Authentication
	 * @request PUT:/api/v1/signin/totp
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
	 * @description First step of a 'magic link' signin. Check if the user exists and generate a magic link. Generates two short-duration jwt tokens, one for validation, one for email.
	 * @tags signin
	 * @name LoginWithMagicLinkApiV1LoginMagicEmailPost
	 * @summary Login With Magic Link
	 * @request POST:/api/v1/signin/magic/{email}
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
	 * @description First step with OAuth2 compatible token signin, get an access token for future requests. The chat_token is used to authenticate with the chat server. In case if the chat server is not available, the user can still signin, but will not be able to use the chat and chat_token will be empty.
	 * @tags signin
	 * @name LoginWithOauth2ApiV1LoginOauthPost
	 * @summary Login With Oauth2
	 * @request POST:/api/v1/signin/oauth
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
	 * @tags signin
	 * @name LoginWithTotpApiV1LoginTotpPost
	 * @summary Login With Totp
	 * @request POST:/api/v1/signin/totp
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
	 * @tags signin
	 * @name RecoverPasswordApiV1LoginRecoverEmailPost
	 * @summary Recover Password
	 * @request POST:/api/v1/signin/recover/{email}
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
	 * @tags signin
	 * @name RefreshTokenApiV1LoginRefreshPost
	 * @summary Refresh Token
	 * @request POST:/api/v1/signin/refresh
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
	 * @tags signin
	 * @name ResetPasswordApiV1LoginResetPost
	 * @summary Reset Password
	 * @request POST:/api/v1/signin/reset
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
	 * @tags signin
	 * @name RevokeTokenApiV1LoginRevokePost
	 * @summary Revoke Token
	 * @request POST:/api/v1/signin/revoke
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
	 * @description Second step of a 'magic link' signin.
	 * @tags signin
	 * @name ValidateMagicLinkApiV1LoginClaimPost
	 * @summary Validate Magic Link
	 * @request POST:/api/v1/signin/claim
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
