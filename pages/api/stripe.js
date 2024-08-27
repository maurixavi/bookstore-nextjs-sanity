import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
		console.log("PRUEBA", req.body);  // Debería mostrar el JSON de cartItems completo
    const cartItems = req.body; // O desestructurar si envías algo más

    try {
			const params = {
				submit_type: 'pay',
				mode: 'payment',
				payment_method_types: ['card'],
				billing_address_collection: 'auto',
        line_items: req.body.map((item) => {
          const img = item.image[0].asset._ref;
          return {
            price_data: {
              currency: 'usd',
              product_data: {
                name: item.name,
                images: [img]
              },
              unit_amount: (item.price * 100) / 40,
            },
            adjustable_quantity: {
              enabled:true,
              minimum: 1,
            },
            quantity: item.quantity
          }
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      }
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      //res.redirect(303, session.url);
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}