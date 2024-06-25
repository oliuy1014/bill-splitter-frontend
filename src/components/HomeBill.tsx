/* Purpose: Display name, date, and buyers of a bill for homepage display.
 * Params: 
 * - _id: string (bill's id from DB)
 * - buyers: string[] (names of buyers)
 * - createdAt: string (date bill was created in DB, TODO: write form of string)
 * - store: string (name of store where bill was paid TODO: change to bill name? like a device nickname?)
 * Errors: TODO
 */

import { useQueryClient, useMutation } from '@tanstack/react-query';
import { BillI } from '../interfaces/BillInterfaces'
import ClearIcon from '@mui/icons-material/Clear';

const HomeBill: React.FC<BillI> = ({ _id, buyers, createdAt, store } ) => {
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

const options: Intl.DateTimeFormatOptions = {
  year: '2-digit',
  month: 'short',
  day: 'numeric'
};

const formatDate = (date: Date) : string => date.toLocaleDateString(undefined, options);

const createdDate = formatDate(new Date(createdAt))

  return (
    <div key={_id} className="bill bg-3">
      <div className="bill-header">
        <h4 className="bill-date">{createdDate}:</h4>
        <h4 className="bill-store">{store}</h4>
      </div>
      { buyers && (
      <div className="buyers">
        {buyers.slice(0, 3).map((buyer) =>
          <div key={buyer._id} className="buyer-icon">
            {buyer.name.split(" ").map((name, idx, names) =>
              (idx === 0 || idx === names.length - 1) &&
                <p className="buyer-init" key={`${buyer._id}${idx}`}>{name[0]}</p>)}
          </div>
        )}
        {buyers.length > 4 &&
          <div className='buyer-icon'> <p>+{buyers.length - 3}</p> </div>
        }
        {buyers.length === 4 &&
          <div className='buyer-icon'>
            <p>{buyers[3].name.split(" ").map((name) => name[0])}</p>
          </div>
        }
      </div>
      )}
    </div>
  )
}

export default HomeBill