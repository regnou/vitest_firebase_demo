import {initializeApp, getApps} from 'firebase/app'
import {
	getFirestore,
	connectFirestoreEmulator,
	enableMultiTabIndexedDbPersistence
} from 'firebase/firestore'
import {getAuth, connectAuthEmulator, setPersistence, inMemoryPersistence} from 'firebase/auth'

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID
}

function initializeServices() {
	const isConfigured = getApps().length > 0
	const firebaseApp = initializeApp(firebaseConfig)
	const firestore = getFirestore(firebaseApp)
	const auth = getAuth(firebaseApp)
	// setPersistence(auth, inMemoryPersistence) // --?
	return {firebaseApp, firestore, auth, isConfigured}
}

function connectToEmulators({auth, firestore}) {
	if (location.hostname === 'localhost') {
		console.log('######### USING LOCAL EMULATOR ##########')
		connectFirestoreEmulator(firestore, 'localhost', 8080)
	} else {
		console.log('######### USING PRODUCTION ##########')
	}
}

export function getFirebase() {
	const services = initializeServices()
	if (!services.isConfigured) {
		connectToEmulators(services)
		// enableMultiTabIndexedDbPersistence(services.firestore)
	}
	return services
}
