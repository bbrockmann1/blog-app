import React, { useEffect, useState } from 'react'
import { Dropdown, Grid } from 'semantic-ui-react'

const DropdownComponent = () => {
    const [value, setValue] = useState('')
    const [tags, setTags] = useState([])

    useEffect(() => {
    fetch('/tags')
    .then(resp => resp.json())
    .then(tagsArray => {
        setTags(tagsArray)
    })
    }, [])

    const options = tags.map(tag => ({
        key: tag.id,
        text: tag.category,
        value: tag.id,
    }))


    return (
    <Grid columns={2}>
        <Grid.Column>
            <Dropdown
                options={options}
                placeholder='Search by tag'
                selection
                value={value}
                onChange={e => setValue(e.target.text)}
            />
        </Grid.Column>
    </Grid>
    )
}

export default DropdownComponent
