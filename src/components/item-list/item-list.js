import SwapiService from '../../services/swapi-service';
import { withData } from '../hoc-helpers';
import './item-list.css';

const ItemList = (props) => {
  const { data, onItemSelected, children: renderItems } = props;

  const items = data.map(item => {
    const { id } = item;
    const label = renderItems(item);
    return (
      <li
        className='list-group-item'
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });

  return <ul className='item-list list-group'>{items}</ul>;
};

const {getAllPersons} = new SwapiService();

export default withData(ItemList, getAllPersons);