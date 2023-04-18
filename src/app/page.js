"use client";
import React, { useState, useEffect, useRef } from "react";
import StellarSdk from "stellar-sdk";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");

  const myAccount = () => {
    const accountId =
      "GA6LYXDP35G3UZZP6DTLMLOXCSWITAIKWDJ6IQKHMGEXPDCPRBL3GMMG";
    server
      .loadAccount(accountId)
      .then((account) => {
        account.balances.forEach((balance) => {
          alert(`Your Balance- ${balance.balance}`);
        });
      })
      .catch((error) => {
        console.error("Error retrieving account details:", error);
      });
  };

  const sourceSecretKey =
    "SCKENVHMAQKFHTJFO6S2HWHPFSTKMS767IXWQD7AHBIAPAVSFPNTIVTE";
  const destinationPublicKey = receiver;
  const placePayment = () => {
    const sourceKeypair = StellarSdk.Keypair.fromSecret(sourceSecretKey);
    server
      .loadAccount(destinationPublicKey)
      .then((destinationAccount) => {
        const transaction = new StellarSdk.TransactionBuilder(
          destinationAccount,
          {
            fee: StellarSdk.BASE_FEE,
            networkPassphrase: StellarSdk.Networks.TESTNET,
          }
        )
          .addOperation(
            StellarSdk.Operation.payment({
              destination: destinationPublicKey,
              asset: StellarSdk.Asset.native(),
              amount: amount,
            })
          )
          .setTimeout(1000)
          .build();

        transaction.sign(sourceKeypair);

        return server.submitTransaction(transaction);
      })
      .then((result) => {
        alert("Payment successful");
        myAccount();
      })
      .catch((error) => {
        alert("Error making payment: " + error);
      });
  };

  const handlePayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (!amount) {
        alert("Please enter an amount");
        setIsLoading(false);
      } else if (
        !receiver ||
        !StellarSdk.StrKey.isValidEd25519PublicKey(receiver)
      ) {
        alert("Please enter a valid receiver public key");
        setIsLoading(false);
      } else {
        placePayment();
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="container">
      <h2>Send Payment</h2>
      <div className="inputFields">
        <input
          type="text"
          placeholder="Receiver id"
          ref={inputRef}
          onChange={(e) => setReceiver(e.target.value)}
        />
        <input
          type="text"
          placeholder="Payment amount"
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      {isLoading && (
        <p className="transactionLoader">Transaction is being processed...</p>
      )}

      <button onClick={handlePayment}>Send</button>
    </div>
  );
}
