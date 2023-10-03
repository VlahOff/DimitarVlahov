import emailjs from '@emailjs/nodejs';

const SERVICE_ID = process.env.EMAIL_JS_SERVICE_ID;
const TEMPLATE_ID = process.env.EMAIL_JS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.EMAIL_JS_PUBLIC_KEY;
const PRIVATE_KEY = process.env.EMAIL_JS_PRIVATE_KEY;

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function POST(req) {
	try {
		if (BASE_URL != req.headers.get('origin')) {
			throw new Error('Invalid');
		}

		const data = await req.json();

		const templateParams = {
			name: data.name,
			email: data.email,
			message: data.message,
		};

		await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
			publicKey: PUBLIC_KEY,
			privateKey: PRIVATE_KEY,
		});

		return Response.json(
			{ status: 'Message has been sent.' },
			{
				status: 200,
				headers: {
					'Access-Control-Allow-Origin': BASE_URL,
					'Access-Control-Allow-Methods': 'POST',
					'Access-Control-Allow-Headers': 'Content-Type, application/json',
				},
			}
		);
	} catch (err) {
		return Response.json(
			{ status: 'An error has occurred' },
			{
				status: 403,
				headers: {
					'Access-Control-Allow-Origin': BASE_URL,
					'Access-Control-Allow-Methods': 'POST',
					'Access-Control-Allow-Headers': 'Content-Type, application/json',
				},
			}
		);
	}
}
