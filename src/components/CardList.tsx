
interface CardListProps<T> {
  items:T[];
  itemRenderel: (item:T)=>JSX.Element;

  
}

export function CardList <T> (props: CardListProps<T>)  {
  const { items, itemRenderel } = props;
  return (
    <div className='grid-container'>

      {items.map(item=>itemRenderel(item))}


    </div>

  );

}

