import { BillI } from '../interfaces/BillInterfaces'

const Bill: React.FC<BillI> = ({ _id, buyers, createdAt, items, store, updatedAt, }) => {
  return (
    <div key={_id} className="bill">
      <h3 className="bill-name">{store}</h3>
      <div className="items">
        {items.map((item) => {
          return (
            <p>{item.name} ({item.quantity.toString()})</p>
          )
        })}
      </div>
    </div>
  )
}

export default Bill