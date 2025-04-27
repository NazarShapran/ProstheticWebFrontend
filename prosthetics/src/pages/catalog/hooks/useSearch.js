import { useState } from 'react'

const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (query) => {
    setSearchQuery(query)
  }

  return {
    searchQuery,
    handleSearchChange,
  }
}

export default useSearch