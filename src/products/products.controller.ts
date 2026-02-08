import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products') //path name
export class ProductsController {
  constructor(private productService: ProductsService) {}
  @Get()
  getAllProducts() {
    return this.productService.getAllProducts();
  }
}
