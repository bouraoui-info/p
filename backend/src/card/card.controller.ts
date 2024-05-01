import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CardService } from '../card/card.service';
import { Item, SupplimentComposition, card, categories, shoplist } from '../card/card.interface';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Card')
@Controller('card')
export class CardController {
    constructor(
        private cardServices: CardService
    ) { }

    @Post('AddCard')
    @ApiBody({
        type: Object,
        schema: {
            properties: {
                title: { type: 'string' },
                items: { type: 'array', items: { type: 'object' } },
                SupplimentComposition: { type: 'array', items: { type: 'object' } },
                shoplist: { type: 'array', items: { type: 'object' } },
                categories: { type: 'array', items: { type: 'object' } },
            },
           
        }
    })
    async AddCard(
        @Body('title') title: string,
        @Body('items') items: Item[],
        @Body('SupplimentComposition') SupplimentComposition: SupplimentComposition[],
        @Body('shoplist') shoplist: shoplist[],
        @Body('categories') categories: categories[],
    ) {
        const card = await this.cardServices.createCard({ title, items, SupplimentComposition, shoplist, categories })
        return card
    }

    @Get("card")
    async card() {
        try {
            const card = await this.cardServices.findOne({ where: { id: 1 } });
            return card
        } catch (e) {
            return { message: 'Get card error:', e }
        }
    }

    @Get()
    findAll(): Promise<card[]> {
        return this.cardServices.findAllCard()
    }
}