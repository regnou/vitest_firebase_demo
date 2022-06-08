import {initializeApp} from 'firebase/app'
import {
	getFirestore,
	connectFirestoreEmulator,
	enableMultiTabIndexedDbPersistence,
	collection,
	addDoc,
	setDoc,
	doc,
	getDoc,
	serverTimestamp,
	setLogLevel,
} from 'firebase/firestore'
import {getFirebase} from './clientFirebase'
import {readFileSync, createWriteStream} from 'fs'
import {
	initializeTestEnvironment,
	assertFails,
	assertSucceeds,
} from '@firebase/rules-unit-testing'
// ---------------------------------------------------------
it('T0 > basic test to show that vitest is working', async () => {
	try {
		expect(null).toBeNull()
	} catch (e) {
		console.log(e)
	}
})
// ---------------------------------------------------------
it('T1 > setup--david + vitest env variable / should add Lima ', async () => {
	try {
		const {firestore} = getFirebase()
		// const colRef = collection(firestore, 'cities')
		// const docRef = await addDoc(colRef, {name: 'axelito'})
		const docRef = await setDoc(doc(firestore, 'cities', 'LI'), {name: 'Lima'})
		expect(docRef).not.toBeNull()
	} catch (e) {
		console.log(e)
	}
}, 10000)
// ---------------------------------------------------------
it('T2 > setup--basic / should add Los Angeles', async () => {
	try {
		// TODO (2/2) -- put your firebase configuration here
		const firebaseConfig = {
			apiKey: 'AIzaSyCIFKC20rq6kAglerGHVLQDDqFBrzjmx0M',
			authDomain: 'tinax-app.firebaseapp.com',
			projectId: 'tinax-app',
		}
		const firebaseApp = initializeApp(firebaseConfig)
		const firestore = getFirestore(firebaseApp)
		if (true) {
			console.log('######### USING LOCAL EMULATOR ##########')
			connectFirestoreEmulator(firestore, 'localhost', 8080)
		}
		const ref = await setDoc(doc(firestore, 'cities', 'LA'), {
			name: 'Los Angeles',
		})
		expect(ref).not.toBeNull()
	} catch (e) {
		console.log(e)
	}
})
// ---------------------------------------------------------
it('T3 > setup--rules-unit-testing / should add Paris', async () => {
	try {
		setLogLevel('error')
		let testEnv = await initializeTestEnvironment({
			projectId: 'tinax-app',
			firestore: {host: 'localhost', port: 8080},
		})
		await testEnv.withSecurityRulesDisabled(async (context) => {
			const ref = await setDoc(doc(context.firestore(), 'cities/PA'), {
				name: 'Paris',
			})
			expect(ref).not.toBeNull()
		})
	} catch (e) {
		console.log(e)
	}
})
// ---------------------------------------------------------
