// apiKey: 'AIzaSyCIFKC20rq6kAglerGHVLQDDqFBrzjmx0M',
// 		authDomain: 'tinax-app.firebaseapp.com',
// 		projectId: 'tinax-app',
// 		storageBucket: 'tinax-app.appspot.com',
// 		messagingSenderId: '805466482801',
// 		appId: '1:805466482801:web:300c73d99d314ed3ce53d0',
// 		measurementId: 'G-5W0FE8VQQJ'

interface ImportMetaEnv {
	// safe to share
	readonly VITE_FIREBASE_PROJECT_ID: string
	readonly VITE_FIREBASE_AUTH_DOMAIN: string
	readonly VITE_FIREBASE_API_KEY: string
	// NEVER EXPOSE
	readonly FIREBASE_ADMIN_CLIENT_EMAIL: string
	readonly FIREBASE_ADMIN_PRIVATE_KEY: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
