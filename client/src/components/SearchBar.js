import _ from 'lodash'
import React from 'react'
import { Search, Grid } from 'semantic-ui-react'
import { useRecoilValue } from 'recoil'
import { blogsAtom } from './atoms'
import DropdownComponent from './Dropdown'
import { useNavigate } from 'react-router-dom';

const initialState = {
  loading: false,
  results: [],
  value: '',
}

function reducer(state, action) {
  switch (action.type) {
    case 'CLEAN_QUERY':
      return initialState
    case 'START_SEARCH':
      return { ...state, loading: true, value: action.query }
    case 'FINISH_SEARCH':
      return { ...state, loading: false, results: action.results }
    case 'UPDATE_SELECTION':
      return { ...state, value: action.selection }

    default:
      throw new Error()
  }
}

function SearchBar() {
  const navigate = useNavigate();
  const blogs = useRecoilValue(blogsAtom);
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const { loading, results, value } = state

  const timeoutRef = React.useRef();

  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current)
    dispatch({ type: 'START_SEARCH', query: data.value })

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' })
        return
      }

      const re = new RegExp(_.escapeRegExp(data.value), 'i')
      const isMatch = (blogs) => re.test(blogs.title)

      dispatch({
        type: 'FINISH_SEARCH',
        results: _.filter(blogs, isMatch),
      })
    }, 300)
  }, [blogs])
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <>
      <Grid>
          <Grid.Column width={12}>
            <Search
              input={{ fluid: true }}
              loading={loading}
              placeholder='Search...'
              onResultSelect={(e, data) => {
                dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title });
                navigate(`/${data.result.slug}`);
              }}
              onSearchChange={handleSearchChange}
              results={results}
              value={value}
              onClick={null}
            />
          </Grid.Column>
        <DropdownComponent />  
      </Grid>
      
    </>
  )
}

export default SearchBar
