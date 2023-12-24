import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useRef } from "react";
import Post from "./Post";
import { createPost } from "./API/data";

interface Props {
  setCurrentPage: any;
}
export default function CreatePost({ setCurrentPage }: Props) {
  const titleRef: any = useRef(null);
  const userIdRef: any = useRef(null);
  const queryClient = useQueryClient();

  const mutatePosts = useMutation({
    mutationFn: (variables) =>
      createPost(variables).then(() => console.log(variables)),
    onSuccess: (data) => {
      setCurrentPage(<Post id={1} />);
    },
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    // mutatePosts.mutate({
    //   userId: userIdRef.current!.value,
    //   title: titleRef.current!.value,
    // });
    // console.log(userIdRef.current!.value),
    // console.log(titleRef.current!.value),
    //   mutatePosts.mutate({userId, title, completed})
  }

  if (mutatePosts.isError) {
    console.log(JSON.stringify(mutatePosts.error));
  }

  return (
    <div>
      <h1>Create Post</h1>
      <div>Currently NOT functioning!</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userId">UserId</label>
          <input id="userId" ref={userIdRef} />
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" ref={titleRef} />
        </div>
        <button onSubmit={handleSubmit}>{"btn"}</button>
      </form>
    </div>
  );
}
