import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyA8RFb7xb5_nKJxNxIYesYbr86wMPb4Tac",
    authDomain: "mycollection-65a6f.firebaseapp.com",
    projectId: "mycollection-65a6f",
    storageBucket: "mycollection-65a6f.appspot.com",
    messagingSenderId: "982355779947",
    appId: "1:982355779947:web:b5ef1309050dab5b022c2e",
    measurementId: "G-W74G2PG7KG"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


const uploadImageToFirebaseStorage = async (file) => {
    try {
        const storageRef = ref(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
            (snapshot) => {
                // Progress updates can be logged here if needed
            },
            (error) => {
                console.error("Error uploading image:", error);
            },
            async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                console.log("Image uploaded successfully. Download URL:", downloadURL);
                return downloadURL;
            }
        );
    } catch (error) {
        console.error("Error uploading image:", error);
        return null;
    }
};

export default uploadImageToFirebaseStorage;





















