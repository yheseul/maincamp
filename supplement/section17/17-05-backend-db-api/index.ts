import { DataSource } from 'typeorm';
import { Board } from './Board.postgres';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

console.log('백엔드 프로그램을 실행합니다.');

console.log('여기서 API를 만들거에요');
//? API-DOCS 만들기
const typeDefs = `#graphql
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
    createBoard(writer: String, title: String, contents: String): String!
  }
`;

//^ API 만들기
const resolvers = {
  Query: {
    fetchBoards: () => {
      return [
        {
          number: 1,
          writer: '준수',
          title: '안녕하세요',
          contents: '반갑습니다.',
        },
        // ... 더 많은 게시글 아래에 추가 가능
      ];
    },
  },
  Mutation: {
    createBoard: (parent: any, args: any, context: any, info: any) => {
      console.log('받은 작성자:', args.writer);
      console.log('받은 제목:', args.title);
      console.log('받은 내용:', args.contents);
      return '게시글 등록이 성공했어요!!';
    },
  },
};

//! API-DOCS와 API를 그룹핑한 아폴로 서버 만들기
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

console.log('여기서 DB에 접속하고, 테이블을 만들거에요');

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: '34.64.38.113',
  port: 5032,
  username: 'postgres',
  password: 'postgres2022',
  database: 'postgres',
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
      console.log('graphql server ON');
    });
  })
  .catch(() => {
    console.log('DB접속에 실패했습니다.');
  });
