/* Purpose: Display all bills in (TODO: grid? diff types of displays?) formation(s?)
 * Params: None
 * Errors: TODO
 */
import { useQuery } from "@tanstack/react-query";
import HomeBill from "./HomeBill"
import { BillI } from "../interfaces/BillInterfaces";

const AllBills = () => {

const getBills = async (): Promise<BillI[]> => {
  const res = await fetch("http://localhost:4000/api/bills/");
  const json = await res.json();
  return json.bills;
};

const bills = useQuery({
  queryKey: ['bills'],
  queryFn: getBills
})

// Error and Loading states
if (bills.error) return <div>Request Failed</div>;
if (bills.isLoading) return <div>Loading...</div>;

// const bills = {
//   data: [
//     {
//       _id: "3",
//       buyers: [ {_id: "110234", name: "jeff van gundy"}, {_id: "1", name: "stan"}, {_id: "2", name: "jeff"}, {_id: "110234", name: "jeff van gundy"}, {_id: "1", name: "stan"}, {_id: "2", name: "jeff"}, {_id: "110234", name: "jeff van gundy"}, {_id: "1", name: "stan"}, {_id: "2", name: "jeff"}, {_id: "110234", name: "jeff van gundy"}, {_id: "1", name: "stan"}, {_id: "2", name: "jeff"}, {_id: "110234", name: "jeff van gundy"}, {_id: "1", name: "stan"}, {_id: "2", name: "jeff"}, {_id: "110234", name: "jeff van gundy"}, {_id: "1", name: "stan"}, {_id: "2", name: "jeff"}],
//       createdAt: "jan 2",
//       items: [
//         {
//           _id: "1",
//           buyers: [ {_id: "3", name: "jeff van gundy"}, {_id: "4", name: "jeff"}],
//           name: "burger",
//           price: 12.2,
//           quantity: 3,
//         },
//         {
//           _id: "2",
//           buyers: [ {_id: "12", name: "jeff van gundy"} ],
//           name: "fries",
//           price: 5.2,
//           quantity: 1,
//         }
//       ],
//       store: "mcdonalds",
//     },
//     {
//       _id: "4",
//       buyers: [ {_id: "13", name: "bobdylan"}, {_id: "14", name: "crabman"}],
//       createdAt: "jan 4",
//       items: [
//         {
//           _id: "1",
//           buyers: [ {_id: "23", name: "bobdylan"}, {_id: "24", name: "crabman"}],
//           name: "t-bone",
//           price: 40.20,
//           quantity: 1,
//         }
//       ],
//       store: "Red Lobster",
//     },
//     {
//       _id: "1",
//       buyers: [ {_id: "34", name: "john"}, {_id: "123", name: "stan"}, {_id: "124", name: "jeff"}],
//       createdAt: "jan 2",
//       items: [
//         {
//           _id: "1",
//           buyers: [ {_id: "134", name: "john"}, {_id: "1235", name: "jeff"}],
//           name: "burger",
//           price: 12.2,
//           quantity: 3,
//         }
//       ],
//       store: "mcdonalds",
//     },
//     {
//       _id: "2",
//       buyers: [ {_id: "2834", name: "bobdylan"}, {_id: "19234", name: "crabman"}, {_id: "2894", name: "santa"}, {_id: "19234", name: "crabman"}],
//       createdAt: "jan 4",
//       items: [
//         {
//           _id: "1",
//           buyers: [ {_id: "156234", name: "bobdylan"}, {_id: "11908234", name: "crabman"}],
//           name: "surf n' turf",
//           price: 32.20,
//           quantity: 1,
//         }
//       ],
//       store: "Red Lobster",
//     }
//   ]
// }

return (
  <div className="all-bills">
    { bills.data?.map(bill => <HomeBill key={bill._id} {...bill} />) }
  </div>
);
}

export default AllBills;