import { useState } from "react"

type CheckboxProps = {
  handleToggle: () => void;
  name: string;
  quantity: number;
  priceString: string;
}

export default function Checkbox({handleToggle, name, quantity, priceString}: CheckboxProps) {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    handleToggle();
    setChecked(!checked)
  }
  return (
    <div className="item-row">
      <div className="left-side-wrapper">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        <p className="item-name-qty">{name} ({quantity})</p>
      </div>
      <div className="item-row-dots"></div>
      <p className="item-price">{priceString}</p>
    </div>
)
}