import { Controller, Post } from "@nestjs/common";

@Controller('')
export class App{
    @Post()
    async post(){
        return "works"
    }
}