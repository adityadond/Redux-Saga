import React from "react";
import "./AccountList.css";

function AccountList() {
  const accountSettings = [
    { id: 1, title: "Your Orders", link: "Track, return, or buy things again" },
    {
      id: 2,
      title: "Login & security",
      link: "Edit login, name, and mobile number",
    },
    { id: 3, title: "Prime", link: "View benefits and payment settings" },
    {
      id: 4,
      title: "Your Addresses",
      link: "Edit addresses for orders and gifts",
    },
    { id: 5, title: "Payment options", link: "Edit or add payment methods" },
    { id: 6, title: "Amazon Pay balance", link: "Add money to your balance" },
    { id: 7, title: "Contact Us", link: "" },
    {
      id: 8,
      title: "Your business account",
      link: "Sign up for free to save up to 28% with GST invoice and bulk discounts and purchase on credit.",
    },
  ];

  return (
    <div>
      <h1 className="your_account">Your Account</h1>
      <div className="lists">
        {accountSettings.map((arg) => (
          <div key={arg.id} className="list_border">
            <ul>
              <li>{arg.title}</li>
              <li>{arg.link}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccountList;
