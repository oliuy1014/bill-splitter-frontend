import { useQueryClient, useMutation } from '@tanstack/react-query';
import { BillI } from '../interfaces/BillInterfaces'
import ClearIcon from '@mui/icons-material/Clear';

const Bill: React.FC<BillI> = ({ _id, buyers, createdAt, items, store, updatedAt } ) => {
  const queryClient = useQueryClient();

  const deleteBillFn = async (id:string):Promise<void> => {
  const response = await fetch(`http://localhost:4000/api/bills/${id}`, {
    method: "DELETE"
  });
  return await response.json();
}

const {mutate: deleteBill} = useMutation({
  mutationFn: deleteBillFn,
  onSuccess: () => {
    queryClient.invalidateQueries({queryKey: ['bills']})
  }
})

  return (
    <div key={_id} className="bill">
      <div className="bill-icons">
        <button onClick={() => deleteBill(_id)}>
          <ClearIcon />
        </button>
      </div>
      <button className="bill-body" onClick={() => console.log("edit bill?")}>
        <h3 className="bill-name">{store}</h3>
        <div className="items">
          {items.map((item) => 
            <div key={item._id} className="item-row">
              <p>{item.name} ({item.quantity.toString()}) </p>
              <p> {item.price.toString()}</p>
            </div>
          )}
        </div>
      </button>
    </div>
  )
}

export default Bill