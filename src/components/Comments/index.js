import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import './index.css'
import Commentitem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
class Comments extends Component {
  state = {name: '', commentname: '', list: []}
  del = id => {
    const {list} = this.state
    const delfilter = list.filter(each => {
      if (each.id !== id) {
        return each
      }
    })
    this.setState({list: [...delfilter]})
  }
  like = id => {
    const {list} = this.state
    const likefilter = list.map(each => {
      if (each.id === id) {
        return {...each, isFavorite: !each.isFavorite}
      } else {
        return each
      }
    })
    this.setState(prevState => ({
      list: [...likefilter],
    }))
  }

  onAddComment = event => {
    event.preventDefault()

    const {name, commentname} = this.state
    if (name !== '' && commentname !== '') {
      const newContact = {
        id: uuidv4(),
        name,
        commentname,
        date: new Date(),
        isFavorite: false,
      }
      this.setState(prevState => ({
        list: [...prevState.list, newContact],
        name: '',
        commentname: '',
      }))
    }
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangecomment = event => {
    this.setState({commentname: event.target.value})
  }

  render() {
    const {name, commentname, list} = this.state
    console.log(this.state.list)
    return (
      <div className="bg1">
        <diV className="bg2">
          <div>
            <h1>Comments</h1>
            <p>Say Something anot 4.0 technologies</p>
            <form onSubmit={this.onAddComment}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={this.onChangeName}
              />
              <br />
              <br />
              <textarea
                value={commentname}
                onChange={this.onChangecomment}
                rows="4"
                cols="50"
                placeholder="Your Comment"
              ></textarea>
              <br />
              <button type="submit">Add Comment</button>
              <br />
            </form>
          </div>
          <div>
            <img
              alt="comments"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            />
          </div>
        </diV>
        <hr />
        <div>
          <p>{list.length}Comments</p>
          <ul>
            {list.map(each => {
              return (
                <Commentitem
                  each={each}
                  key={each.id}
                  like={this.like}
                  del={this.del}
                  color={initialContainerBackgroundClassNames}
                />
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
