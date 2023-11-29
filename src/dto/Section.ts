export class Section {
    @Expose()
    @IsDefined()
    @IsNumber()
    declare public count: number

    @Expose()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    declare public name: string
}
