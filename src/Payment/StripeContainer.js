import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51Kvx6cKU1Xzf6mhr97C1brUWCR8AVRYiN0VSeHcjsKOBbKcGzmM8W1jtuwzkSNkd3ro1rKnP8CCP8GehVEiDT4kA00dddks55O"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}
