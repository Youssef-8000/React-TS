import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPost } from "./API/data";

interface Props {
  id: number;
}
export default function Post({ id }: Props) {
  const postQuery = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
  });

  if (postQuery.isLoading) {
    return <h1>LOADING...</h1>;
  }
  if (postQuery.isError) {
    return <h1>{JSON.stringify(postQuery.error)}</h1>;
  }

  return (
    <>
      <h1>Data of ID: {postQuery.data.id}</h1>
      <div>Title: {postQuery.data.title}</div>
      <div>
        Status: {postQuery.data.completed ? "Completed" : "Not Completed"}
      </div>
    </>
  );
}
