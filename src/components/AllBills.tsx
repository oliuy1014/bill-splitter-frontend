import { useEffect, useState } from "react"
import Bill from "./Bill"
import { BillI } from "../interfaces/BillInterfaces";

const AllBills = () => {

  const [bills, setBills] = useState<BillI[]>([])

  useEffect(() => {
    const fetchBills = async () => {
      const response = await fetch('http://localhost:4000/api/bills/');
      if (response.ok) {
        const json = await response.json()
        setBills(json.bills);
      }
    }
    fetchBills();
  }, [])

  return (
    <div className="all-bills">
      {bills && bills.map((bill) => {
        return (
          <Bill {...bill}/>
        ) })}
    </div>
  )
};

export default AllBills;