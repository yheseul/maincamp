"use client";

import { gql, useMutation } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

interface IBoardsWrite {
  isEdit: boolean;
  data: any;
}

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

const UPDATE_BOARD = gql`
  mutation updateBoard(
    $number: Int
    $writer: String
    $title: String
    $contents: String
  ) {
    updateBoard(
      number: $number
      writer: $writer
      title: $title
      contents: $contents
    ) {
      _id
      number
      message
    }
  }
`;

export default function BoardsWrite(props: IBoardsWrite) {
  
  return (
    <>

    </>
  );
}
