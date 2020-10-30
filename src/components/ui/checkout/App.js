import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./App.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe("pk_test_51HhikYBD1bC00o8JhqIxicVQ7dRdOCgPMTKtD4yRNjPUxno2Kwe8xZGXY48X0F5C6222WPo9QC2gpB26ktIQzKWb00T9WKVxyl");

const checkout = () => {
  return (
    <div className="App">
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default checkout;