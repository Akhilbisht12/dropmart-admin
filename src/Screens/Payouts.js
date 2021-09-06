import { collection, getDocs } from "@firebase/firestore/lite";
import React, { useEffect, useState } from "react";
import firebaseDb from "../firebase";

function Payouts() {
  const [earnings, setEarnings] = useState();
  const getCollection = async (db) => {
    const collect = collection(db, "earnings");
    const docs = await getDocs(collect);
    const users = docs.docs.map((doc) => doc.data());
    return users;
  };

  useEffect(() => {
    getCollection(firebaseDb)
      .then((response) => {
        setEarnings(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      {earnings
        ? earnings.map((item) => {
            return <div>{item.pending}</div>;
          })
        : null}
    </div>
  );
}

export default Payouts;
