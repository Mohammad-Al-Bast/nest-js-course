import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Body,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { createProductDto } from './dtos/createProduct.dto';
import { updateProductDto } from './dtos/updateProduct.dto';

@Controller('products') //path name
export class ProductsController {
  constructor(private productService: ProductsService) {}
  @Get()
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  getProductById() {
    return this.productService.getProductById(1);
  }

  @Post()
  create(@Body() dto: createProductDto) {
    return this.productService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: updateProductDto) {
    return this.productService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productService.delete(id);
  }
}
