import bcrypt from 'bcrypt'
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import app from "./init"
const firestore = getFirestore(app)

export async function retrieveData(collectionName: string) {
    const snapshot = await getDocs(collection(firestore, collectionName))
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))
    return data
}

export async function retrieveDataById(collectionName: string, id: string) {
    const snapshot = await getDoc(doc(firestore, collectionName, id))
    const data = snapshot.data()
    return data
}

export async function register(
    data: {
        length: number
        name: string,
        email: string
        password: string,
        NoHp: number,
        role: string
    },
) {
    const q = query(collection(firestore, 'users'), where('email', '==', data.email))
    const snapshot = await getDocs(q)
    const users = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))
    if (users.length > 0) {
        return ({ status: false, statusCode: 400, message: "Email already exists" })
    } else {
        data.password = await bcrypt.hash(data.password, 10)
        data.role = data.role
        try {

            await addDoc(collection(firestore, 'users'), data)
            return { status: true, statusCode: 200, message: "Register Success" }
        } catch (error) {
            return { status: false, statusCode: 400, message: 'Something went wrong' }
        }
    }
}

export async function createProfileRecruiters(data: {
    namePerusahaan: string;
    bidang: string;
    kota: string;
    deskripsiSingkat: string;
    email: string;
    noTelepon: string;
    linkedin: string;
    instagram: string;
  }) {
    try {
      const userId = '5auBtoVP11btM9OibRFd';
  
      // Use 'collection' for the 'experience' subcollection
      const experienceCollectionRef = collection(doc(firestore, 'users', userId), 'experience');
  
      // Add data to the 'experience' subcollection under the specified user ID
      await addDoc(experienceCollectionRef, data);
  
      return { status: true, statusCode: 200, message: 'Register Success' };
    } catch (error) {
      console.error('Error adding document: ', error);
      return { status: false, statusCode: 400, message: 'Something went wrong', error: error.message };
    }
}
export async function createPortofolio(data: {
    skill: string,
  }) {
    try {
      const userId = '5auBtoVP11btM9OibRFd';
  
      // Use 'collection' for the 'experience' subcollection
      const experienceCollectionRef = collection(doc(firestore, 'users', userId), 'portofolio');
  
      // Add data to the 'experience' subcollection under the specified user ID
      await addDoc(experienceCollectionRef, data);
  
      return { status: true, statusCode: 200, message: 'Create Portofolio Success' };
    } catch (error) {
      console.error('Error adding document: ', error);
      return { status: false, statusCode: 400, message: 'Something went wrong', error: error.message };
    }
}
export async function createExperience(data: {
    posisi: string,
    namaPerusahaan: string,
    mulai: string,
    deskripsi: string
  }) {
    try {
      const userId = '5auBtoVP11btM9OibRFd';
  
      // Use 'collection' for the 'experience' subcollection
      const experienceCollectionRef = collection(doc(firestore, 'users', userId), 'experience');
  
      // Add data to the 'experience' subcollection under the specified user ID
      await addDoc(experienceCollectionRef, data);
  
      return { status: true, statusCode: 200, message: 'Create Skill Success' };
    } catch (error) {
      console.error('Error adding document: ', error);
      return { status: false, statusCode: 400, message: 'Something went wrong', error: error.message };
    }
}
export async function createBiodata(data: {
    skill: string,
  }) {
    try {
      const userId = '5auBtoVP11btM9OibRFd';
  
      // Use 'collection' for the 'experience' subcollection
      const experienceCollectionRef = collection(doc(firestore, 'users', userId), 'data_diri');
  
      // Add data to the 'experience' subcollection under the specified user ID
      await addDoc(experienceCollectionRef, data);
  
      return { status: true, statusCode: 200, message: 'Create Skill Success' };
    } catch (error) {
      console.error('Error adding document: ', error);
      return { status: false, statusCode: 400, message: 'Something went wrong', error: error.message };
    }
}
export async function createSkill(data: {
    skill: string,
  }) {
    try {
      const userId = '5auBtoVP11btM9OibRFd';
  
      // Use 'collection' for the 'experience' subcollection
      const experienceCollectionRef = collection(doc(firestore, 'users', userId), 'skill');
  
      // Add data to the 'experience' subcollection under the specified user ID
      await addDoc(experienceCollectionRef, data);
  
      return { status: true, statusCode: 200, message: 'Create Skill Success' };
    } catch (error) {
      console.error('Error adding document: ', error);
      return { status: false, statusCode: 400, message: 'Something went wrong', error: error.message };
    }
}

export async function login(data: { email: string }) {
    const q = query(
        collection(firestore, 'users'),
        where('email', '==', data.email),
    );
    const snapshot = await getDocs(q)
    const users = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))
    if (users) {
        return users[0]
    } else {
        return null
    }
}