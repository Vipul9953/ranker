import { Body, Controller, Post } from "@nestjs/common";
import { CreatePollDto, JoinPollsDto } from "./dtos";
import { PollsService } from "./polls.service";

@Controller('polls')
export class PollsController {
    constructor(private pollsService:PollsService){}
    @Post()
    async create(@Body() createPollDto:CreatePollDto) {
        const result = await this.pollsService.createPoll(createPollDto)
        return result;
    }

    @Post('/join')
    async join(@Body() joinPollsDto:JoinPollsDto) {
        const result = await this.pollsService.joinPoll(joinPollsDto)
        return result
    }

    @Post('/rejoin')
    async rejoin() {
      const result = await this.pollsService.rejoinPoll({
        name:"from token",
        pollID:"also from token",
        userID:"vipul"
      })
       return result; 
    }
}
