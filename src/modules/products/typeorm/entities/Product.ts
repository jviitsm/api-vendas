import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column('int')
  quantity: number;

  @Column('timestamp with time zone', { default: 'now()' })
  created_at: Date;

  @Column('timestamp with time zone', { default: 'now()' })
  updated_at: Date;
}

export default Product;
