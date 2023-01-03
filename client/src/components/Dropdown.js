import { dropdownValueAtom } from './atoms';
import { useRecoilState } from 'recoil';

const DropdownComponent = () => {
    // eslint-disable-next-line
    const [value, setValue] = useRecoilState(dropdownValueAtom)

    return (
    <>
    <label>
        <strong>Filter by tags:</strong>
        <select onChange={e => setValue(e.target.value)} >
          <option value="All">All</option>
          <option value="Fashion">Fashion</option>
          <option value="Travel">Travel</option>
          <option value="Music">Music</option>
          <option value="DIY">DIY</option>
          <option value="Sports">Sports</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Finance">Finance</option>
          <option value="Politics">Politics</option>
          <option value="Parenting">Parenting</option>
          <option value="Movies">Movies</option>
          <option value="Tech">Tech</option>
          <option value="Development">Development</option>
          <option value="Gaming">Gaming</option>
          <option value="Auto">Auto</option>
        </select>
      </label>
    </>
    )
}

export default DropdownComponent
