import { FunctionComponent } from "react";
type Props = {
  amount: number | string;
};

const Currency: FunctionComponent<Props> = ({ amount }) => {
  return <span>$&nbsp;{amount}</span>;
};


export default Currency
