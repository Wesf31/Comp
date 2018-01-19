import request from 'superagent'
import store from './../../store'

const initialState = {
  profileName: '',
  profilePic: '',
}

const SET_PROFILE = 'SET_PROFILE',
  SET_PIC = 'SET_PIC',
  PIC_URL = 'PIC_URL'

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROFILE:
      return Object.assign({}, state, { [action.state]: action.payload })
    case SET_PIC:
      return Object.assign({}, state, { profilePic: action.payload })
    case PIC_URL:
      return Object.assign({}, state, { profilePicUrl: action.payload })
    default:
      return state
  }
}

export const setProfile = (e) => {
  const { value } = e.target

  return {
    type: SET_PROFILE,
    payload: value,
  }
}

export const setProfilePic = (file) => {
  handleUpload(file)

  return {
    type: SET_PIC,
    payload: file.preview,
    data: file.name,
  }
}


const handleUpload = (file) => {
  let upload = request.post(process.env.REACT_APP_CLOUDINARY_UPLOAD_URL).field('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET).field('file', file)

  upload.end((err, response) => {
    if (err) {
      console.log(err)
    }

    if (response.body.secure_url !== '') {
      console.log(response.body.secure_url)
      store.dispatch({
        type: PIC_URL,
        payload: response.body.secure_url,
      })
    }
  })
}