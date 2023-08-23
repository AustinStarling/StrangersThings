const [posts, setPosts] = useState([])
const [searchParam, setSearchParam] = useState('')

const postsToDisplay = searchParam
    ? posts.filter((post) =>
        post.name.toLowerCase().includes(searchParam.toLowerCase())
      )
    : posts

  return (
    <div className='all-posts-container'>
      <h1>Strangers Things</h1>
      <div>
        <label className='search-bar'>
          Search
          <input
            type="text"
            placeholder=""
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
          />
        </label>
      </div>
        </div>
  )