/* Purpose: Display input form to create new bill ,
 * Params: 
 * - _id: string (bill's id from DB)
 * - buyers: string[] (names of buyers)
 * - createdAt: string (date bill was created in DB, TODO: write form of string)
 * - store: string (name of store where bill was paid TODO: change to bill name? like a device nickname?)
 * Errors: TODO
 */
import NewBillEntry from '../components/NewBillEntry';
import PageLayout from '../components/PageLayout';


const NewBill = () => {


  return (
    <PageLayout>
      <NewBillEntry />
    </PageLayout>
  )
}

export default NewBill