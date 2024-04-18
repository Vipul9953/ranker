import { Body, Controller, Post } from "@nestjs/common";
import { CreatePollDto, JoinPollsDto } from "./dtos";

@Controller('polls')
export class PollsController {
    @Post()
    async create(@Body() data:CreatePollDto) {
        return data
    }

    @Post('/join')
    async join(@Body() data:JoinPollsDto) {
        return data
    }

    @Post('/rejoin')
    async rejoin() {
        console.log('in rejoin');
    }
}
