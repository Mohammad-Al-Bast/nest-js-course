import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/products.entity';
import { Repository } from 'typeorm';
import { createProductDto } from './dtos/createProduct.dto';
import { updateProductDto } from './dtos/updateProduct.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private repo: Repository<Product>,
  ) {}
  public getAllProducts() {
    return this.repo.find();
  }

  async getProductById(id: number) {
    const product = await this.repo.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }

  async create(dto: createProductDto) {
    const product = this.repo.create(dto);
    await this.repo.save(product);
    return product;
  }

  async update(id: number, dto: updateProductDto) {
    const product = await this.getProductById(id);
    product.name = dto.name ?? product.name;
    product.description = dto.description ?? product.description;
    product.price = dto.price ?? product.price;
    await this.repo.save(product);
    return product;
  }

  async delete(id: number) {
    await this.getProductById(id);
    await this.repo.softDelete({ id });
  }
}
