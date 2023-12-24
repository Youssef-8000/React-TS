import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import { getPost, getPosts } from "./API/data";
import Post from "./Post";

interface Props {
  setCurrentPage: any;
}
export default function PostList1({ setCurrentPage }: Props) {
  const searchRef: any = useRef(null);

  const [filter, setFilter] = useState("");

  const postsQuery = useQuery({
    queryKey: ["posts", searchRef],
    queryFn: getPosts,
  });

  if (postsQuery.isLoading) {
    return <h1>Loading...</h1>;
  }
  if (postsQuery.isError) {
    return <h1>ERROR {JSON.stringify(postsQuery.error)}</h1>;
  }

  const listPosts = postsQuery.data.map((post: any) => (
    <li
      style={{ cursor: "Pointer" }}
      onClick={() => handleClick(post.id)}
      key={post.id}
    >
      {post.title}
    </li>
  ));

  const filteredPosts = postsQuery.data.filter(
    (post: any) => post.id == filter
  );

  const handleClick = (id: number) => {
    setCurrentPage(<Post id={id} />);
  };

  const listFilteredPosts = filteredPosts.map((post: any) => (
    <div
      style={{ cursor: "Pointer" }}
      onClick={() => handleClick(post.id)}
      key={post.id}
    >
      {"ID: " + post.id + " Title: " + post.title}
    </div>
  ));

  return (
    <>
      <h1>PostList</h1>
      <div>Click on Posts for more info!</div>
      <div>
        <label htmlFor="Search">Search by ID For:</label>
        <input
          placeholder="filter by id"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <ol>{filter ? listFilteredPosts : listPosts}</ol>
    </>
  );
}
