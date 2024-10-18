import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

console.log("백엔드 프로그램을 실행합니다.");

console.log("여기서 API를 만들거에요");
//? API-DOCS 만들기
const typeDefs = `#graphql
  input createBoardInput {
    writer: String
    title: String
    contents: String
  }

  type MyBoard { 
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [MyBoard]
  }

  type Mutation {
    # 연습용(main-example)
    # createBoard(writer: String, title: String, contents: String): String!

    # 실무용(main-practice)
    createBoard(createBoardInput: createBoardInput!): String!
  }
`;

//^ API 만들기
const resolvers = {
  Query: {
    fetchBoards: async () => {
      const result = await Board.find();
      return result;
    },
  },
  Mutation: {
    createBoard: async (parent: any, args: any, context: any, info: any) => {
      await Board.insert({
        ...args.createBoardInput,

        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });
      return "게시글 등록 성공";
    },

    updateBoard: async () => {
      // 3번 작성자 이름 junsoo로 바꾸기
      await Board.update({ id: 3 }, { writer: "juns00" });
    },

    deleteBoard: () => {
      Board.delete({ id: 3 });
      // Board.update({ id: 3 }, { isDeleted: true }); // softDelete, isDeleted false인 애들만 조회
      // Board.update({ id: 3 }, { deleteAt: new Date() }); // 삭제 됐으면 시간, 안됐으면 null
      // Board.softRemove(); // 내장 소프트딜리트
    },
  },
};

//! API-DOCS와 API를 그룹핑한 아폴로 서버 만들기
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

console.log("여기서 DB에 접속하고, 테이블을 만들거에요");

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.38.113",
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
    //& 최종 완성된 아폴로서버 실행시키기 (리스닝하기 => 대기하기))
    startStandaloneServer(server, {
      listen: { port: 4000 },
    }).then(() => {
      console.log("graphql server ON");
    });
  })
  .catch(() => {
    console.log("DB접속에 실패했습니다.");
  });
