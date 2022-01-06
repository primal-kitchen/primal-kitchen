// CORS when consuming Medusa from admin
const ADMIN_CORS = process.env.ADMIN_CORS;

// CORS to avoid issues when consuming Medusa from a client
const STORE_CORS = process.env.STORE_CORS;

// Database URL (here we use a local database called medusa-development)
const DATABASE_URL = process.env.DATABASE_URL;
const DATABASE_TYPE = process.env.DATABASE_TYPE;

// Medusa uses Redis, so this needs configuration as well
const REDIS_URL = process.env.REDIS_URL;

// Stripe keys
const STRIPE_API_KEY = process.env.STRIPE_API_KEY;
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;

// This is the place to include plugins. See API documentation for a thorough guide on plugins.
const plugins = [
	`medusa-fulfillment-manual`,
	`medusa-payment-manual`,
	{
		"resolve": `medusa-plugin-strapi`,
		"options": {
			"strapi_medusa_user": process.env.STRAPI_USERNAME,
			"strapi_medusa_password": process.env.STRAPI_PASSWORD,
			"strapi_url": process.env.STRAPI_URL,
			"strapi_port": process.env.STRAPI_PORT,
		},
	},
	{
		resolve: `medusa-file-minio`,
		options: {
			endpoint: process.env.MINIO_ENDPOINT,
			bucket: process.env.MINIO_BUCKET,
			access_key_id: process.env.MINIO_ROOT_USER,
			secret_access_key: process.env.MINIO_ROOT_PASSWORD,
		},
	}
	// Uncomment to add Stripe support.
	// You can create a Stripe account via: https://stripe.com
	// {
	//   resolve: `medusa-payment-stripe`,
	//   options: {
	//     api_key: STRIPE_API_KEY,
	//     webhook_secret: STRIPE_WEBHOOK_SECRET,
	//   },
	// },
];

module.exports = {
	projectConfig: {
		// TODO: activate redis ma boi
		// redis_url: REDIS_URL,
		// For more production-like environment install PostgresQL
		database_url: DATABASE_URL,
		// TODO: change to POSTGRES_HOST env variable
		database_type: DATABASE_TYPE,
		store_cors: STORE_CORS,
		admin_cors: ADMIN_CORS,
	},
	plugins,
};
