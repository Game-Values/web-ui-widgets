import type { IBodyCreateUserProfileApiV1UsersPost } from "~/shared/model"

export interface IAuthSignupForm extends IBodyCreateUserProfileApiV1UsersPost {
    agreeWithPolicies: boolean
    repeatPassword: string
    sendNotifications: boolean
}
