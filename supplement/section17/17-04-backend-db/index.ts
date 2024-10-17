import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

console.log("run backend program");
console.log("api");
console.log("db, table");

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.244.122",
  port: 5003,
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [Board],
});

AppDataSource.initialize()
  .then(() => {
    console.log("completed");
  })
  .catch((error) => console.log(error));
