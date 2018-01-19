import axios from 'axios'

const initialState = {
  profileData: [],
}

const GET_PROFILE_DATA = 'GET_PROFILE_DATA'

export const getProfileData = (profileData) => {
  console.log('axios', this.props)
  console.log(profileData)
  let results = profileData
  if (profileData.length === 0) {
    results = axios.get('/api/profiles').then(res => res.data).catch(console.log)
  }
  return {
    type: GET_PROFILE_DATA,
    payload: results,
  }
}

export default function reducer(state = initialState, action) {
  console.log('reducer')
  const { payload, type } = action
  switch (type) {
    case `${GET_PROFILE_DATA}_FULFILLED`:
      console.log('reducer get user data')
      return { ...state, profileData: payload }
    default:
      console.log('reducer default')
      console.log('state after default', state)
      console.log('props after default', this.props)
      return state
  }
}