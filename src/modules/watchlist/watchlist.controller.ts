import { Body, Controller, Delete, Get, Patch, Post, Query, Req, UseGuards } from '@nestjs/common';
import { WatchlistService } from './watchlist.service';
import { WatchListDTO } from './dto';
import { JwtAuthGuard } from 'src/guards/jwt_guard';

@Controller('watchlist')
export class WatchlistController {
    constructor(private readonly watchListService: WatchlistService){}

    @UseGuards(JwtAuthGuard)
    @Post('create')
    createAsset(@Body() assetDTO:WatchListDTO, @Req() request){
        const user = request.user
        return this.watchListService.createAsset(user, assetDTO)
    }

    @Get('get-all')
    getAllAssets(){
        return
    }

    @Patch('update')
    updateAsset(){
        return
    }
    @Delete()
    deleteAsset(@Query('id') id:string){
        return
    }

}
