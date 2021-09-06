import React, { useState, useEffect } from "react";
import databaseDb from "../firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import "./Screens.css";

function Users() {
  const [Users, setUsers] = useState(null);
  const getCollection = async (db) => {
    const collect = collection(db, "users");
    const docs = await getDocs(collect);
    const users = docs.docs.map((doc) => doc.data());
    return users;
  };

  useEffect(() => {
    getCollection(databaseDb)
      .then((response) => {
        setUsers(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const UserWidget = ({ user }) => {
    const [show, setshow] = useState(false)
    return (
      <div className="userWidget" onMouseEnter={()=>setshow(true)} onMouseLeave={()=>setshow(false)}>
        <div
          className="equalDiv"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>{user.first_name + " " + user.last_name}</div>
          <div>{user.email}</div>
          <div>{user.phone}</div>
          {user.account_details ? (
            <>
              <div>{user.account_details.beneficiary_name}</div>
              <div>{user.account_details.account_number}</div>
              <div>{user.account_details.ifsc}</div>
            </>
          ) : null}
          <div>{user.pending?user.pending : 'No Data'}</div>
          <div>{user.total?user.total : 'No Data'}</div>
          <div><button>Payment Released</button></div>
        </div>
        <div style={{display : show?'flex':'none'}}>
          <button>View details</button>
          <button>Edit Earning</button>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <div
        className="equalDiv"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: ".5rem",
          padding: ".5rem",
        }}
      >
        <div>Name</div>
        <div>Email</div>
        <div>Phone</div>
        <div>Beneficiary Name</div>
        <div>Account Number</div>
        <div>IFSC Code</div>
        <div>Pending</div>
        <div>Total</div>
        <div>Paid Action</div>
      </div>
      {Users
        ? Users.map((user) => {
            return <UserWidget user={user} />;
          })
        : null}
    </div>
  );
}

export default Users;
