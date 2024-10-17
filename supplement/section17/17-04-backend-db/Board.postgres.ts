import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Board {
  @PrimaryGeneratedColumn("increment")
  id!: number;

  @Column("text")
  writer! : string;

  @Column("text")
  title!: string;

  @Column("text")
  contents!: string;
}
