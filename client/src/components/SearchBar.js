import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { Search, Grid, Form, Dropdown } from 'semantic-ui-react'

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

  const [state, dispatch] = React.useReducer(reducer, initialState)
  const { loading, results, value } = state
  const [tags, setTags] = useState([])

  const timeoutRef = React.useRef()
  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current)
    dispatch({ type: 'START_SEARCH', query: data.value })

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' })
        return
      }

      const re = new RegExp(_.escapeRegExp(data.value), 'i')
      const isMatch = (result) => re.test(result.title)

      dispatch({
        type: 'FINISH_SEARCH',
        results: _.filter(isMatch),
      })
    }, 300)
  }, [])
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  useEffect(() => {
    fetch('/tags')
    .then(resp => resp.json())
    .then(tagsArray => {
      setTags(tagsArray)
    })
  }, [])

  const dropdownOptions = tags.map(tag => ({
    value: tag.id, key: tag.id, text: tag.category
  }))

  return (
    <>
      <Grid>
          <Grid.Column width={14}>
            <Search
              input={{ fluid: true }}
              loading={loading}
              placeholder='Search...'
              onResultSelect={(e, data) =>
                dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
              }
              onSearchChange={handleSearchChange}
              results={results}
              value={value}
            />
          </Grid.Column>
          <Form>
            <Dropdown 
              floating
              selection
              fluid
              multiple={true}
              placeholder='Select a Category'
              value={tags}
              options={dropdownOptions}
              onChange={null}
            />
        </Form>
      </Grid>
 
    </>
  )
}

export default SearchBar