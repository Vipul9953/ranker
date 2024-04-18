import { IsInt, IsString, Length, Max, Min } from "class-validator";

export class CreatePollDto{
    @IsString()
    @Length(1,100)
    topic:string

    @IsInt()
    @Min(1)
    @Max(5)
    votesPerVoter:number

    @IsString()
    @Length(1,22)
    name:string
}

export class JoinPollsDto{
    @IsString()
    @Length(6,6)
    pollID:string

    @IsString()
    @Length(1,23)
    name:string
}