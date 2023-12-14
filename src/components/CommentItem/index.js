import './index.css'
const Commentitem = props => {
  const {each, like, del, color} = props
  const {id, date, name, commentname, isFavorite} = each
  const ondel = () => {
    del(id)
  }
  const onlike = () => {
    like(id)
  }
  return (
    <li className="bgg1">
      <div className="bg22">
        <h1>{name[0]}</h1>

        {isFavorite ? (
          <img
            alt="like"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
          />
        ) : (
          <img
            alt="like"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
          />
        )}
      </div>
      <div className="bgg2">
        <h1>{name}</h1>
        <p>a minute ago</p>
        <p>{commentname}</p>
        <button onClick={onlike} className={isFavorite ? 'yes' : 'no'}>
          Like
        </button>
      </div>
      <button data-testid="delete" onClick={ondel} className="bgg2">
        <img
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
        />
      </button>
    </li>
  )
}
export default Commentitem
