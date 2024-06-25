import Checkbox from "./Checkbox";
import { Item } from "./ManualEntry";
type ReceiptListProps = {
  items: Item[];
  form: boolean;
}
export default function ReceiptList({items, form}: ReceiptListProps) {
  if (form)
    return (
  <>
    <div className="items-table">
      <form className="buyers">
        {items.map((item, index) => {
          const formatting_options = {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
          }
          const dollarString = new Intl.NumberFormat("en-US", formatting_options);
          const priceString = dollarString.format(item.price)
          return (
            <Checkbox
              key={index}
              handleToggle={() => console.log("toggling!")}
              priceString={priceString}
              name={item.name}
              quantity={item.quantity}
            />
          )}
        )}
      </form>
      </div>
      <div className="items-table">
        {items.map((item, index) => {
          const formatting_options = {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
          }
          const dollarString = new Intl.NumberFormat("en-US", formatting_options);
          const priceString = dollarString.format(item.price)
          return (
            <div key={index} className="item-row">
              <p className="item-name-qty">{item.name} ({item.quantity})</p>
              <div className="item-row-dots"></div>
              <p className="item-price">{priceString}</p>
            </div>
          )}
        )}
      </div>
      </>
    )
    else
      return (
      <div className="items-table">
        {items.map((item, index) => {
          const formatting_options = {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
          }
          const dollarString = new Intl.NumberFormat("en-US", formatting_options);
          const priceString = dollarString.format(item.price)
          return (
            <div key={index} className="item-row">
              <p className="item-name-qty">{item.name} ({item.quantity})</p>
              <div className="item-row-dots"></div>
              <p className="item-price">{priceString}</p>
            </div>
          )}
        )}
      </div>
      )
}