import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import PostList from "./Components/PostList";
import CreatePost from "./Components/CreatePost";
import Home from "./Components/Home";

export const App = () => {
  const [currentPage, setCurrentPage] = useState(<Home />);

  return (
    <div>
      <button
        onClick={() =>
          setCurrentPage(<PostList setCurrentPage={setCurrentPage} />)
        }
      >
        List
      </button>
      <button
        onClick={() =>
          setCurrentPage(<CreatePost setCurrentPage={setCurrentPage} />)
        }
      >
        Create Post
      </button>
      <br />
      {currentPage}
    </div>
  );

  function wait(duration: any) {
    return new Promise((resolve) => setTimeout(resolve, duration));
  }
};
