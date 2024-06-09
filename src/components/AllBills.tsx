import { useQuery } from "@tanstack/react-query";
import Bill from "./Bill"
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
//       _id: "1",
//       buyers: [ {name: "john"}, {name: "stan"}, {name: "jeff"}],
//       createdAt: "jan 2",
//       items: [
//         {
//           _id: "1",
//           buyers: [ {name: "john"}, {name: "jeff"}],
//           name: "burger",
//           price: 12.2,
//           quantity: 3,
//         }
//       ],
//       store: "mcdonalds",
//     }
//   ]
// }

return (
  <div className="all-bills">
    { bills.data?.map(bill => <Bill key={bill._id} {...bill} />) }
  </div>
);
}

export default AllBills;