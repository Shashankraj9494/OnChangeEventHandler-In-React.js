import React,{useState} from 'react'

export default function Mycomponent() {
    const [name,setname]=useState("");
    const [quantity,setquantity]=useState(1);
    const [comment,setcomment]=useState("");
    const [payment,setpayment]=useState("Visa");
    const [shipping,setshipping]=useState("Delivery");

    function Handlenamechange(event){
    setname(event.target.value);
    }
    function HandleQuantitychange(event){
        setquantity(event.target.value);
    }
    function HandleCommentchange(event){
        setcomment(event.target.value);
    }
    function HandlePaymentchange(event){
        setpayment(event.target.value);
    }
    function HandleShippingchange(event){
        setshipping(event.target.value);
    }
  return (
    <div>
      <input value={name} onChange={Handlenamechange} placeholder='Enter Your Name'/>
      <p>Name : {name}</p>

      <input value={quantity} onChange={HandleQuantitychange} type='number'/>
      <p>Quantity: {quantity}</p>

      <textarea value={comment} onChange={HandleCommentchange} placeholder='Enter Your Delivery Instructions'/>
      <p>Comment: {comment}</p>

      <select value={payment} onChange={HandlePaymentchange}>
      <option value="">Select Your Option</option> 
      <option value="Visa">Visa</option>
      <option value="Master Card">Master Card</option>
      <option value="Gift Card">Gift Card</option>
    </select>
    <p>Payment : {payment}</p>

  <label>
    <input type="radio" value="Pickup"
           checked={shipping === "Pickup"} 
           onChange={HandleShippingchange}/>
    Pickup
    </label>
    <br/>
    <label>
    <input type="radio" value="Delivery"
           checked={shipping === "Delivery"} 
           onChange={HandleShippingchange}/>
     Delivery
    </label>
    <p>Delivery Type: {shipping}</p>
    </div>
  )
}
