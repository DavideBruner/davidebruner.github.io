import { useState } from "react";

import { Post } from "../types";

const useFilteredPosts = ({ posts, search }: { posts: Post[], search: string }): [Post[], any] => {
  const [currentSearch, setCurrentSearch] = useState(search);

  const filteredPosts = posts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .filter(({ title, tags }) => {
      const searchString = `${title.toLowerCase()} ${tags?.join(' ')}`
      return searchString.includes(currentSearch.toLowerCase())
    })

  const handleInputChange = (e: any) => {
    const searchString = e.target.value
    // if (searchString !== '') {
    //   trackSearch(searchString) // Save what people are interested in reading
    // }
    return setCurrentSearch(searchString)
  }

  return [
    filteredPosts,
    handleInputChange,
  ]
}

export default useFilteredPosts;