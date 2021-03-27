
import {COURSES, findLessonsForCourse} from './db-data';
import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAyMakbMoMa6xxfFMo3Hkhn3PCZEzHs8rM",
  authDomain: "johan-9cedc.firebaseapp.com",
  projectId: "johan-9cedc",
  storageBucket: "johan-9cedc.appspot.com",
  messagingSenderId: "726616254248",
  appId: "1:726616254248:web:b44b5e2f38b500ed0e921d",
  measurementId: "G-T20EPDWDHH"
};

console.log("Uploading data to the database with the following config:\n");

console.log(JSON.stringify(firebaseConfig));

console.log("\n\n\n\nMake sure that this is your own database, so that you have write access to it.\n\n\n");

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

main().then(r => console.log('Done.'));

async function uploadData() {
  const courses = await db.collection('courses');
  for (let course of Object.values(COURSES)) {
    const newCourse = removeId(course);
    const courseRef = await courses.add(newCourse);
    const lessons = await courseRef.collection('lessons');
    const courseLessons = findLessonsForCourse(course['id']);
    console.log(`Uploading course ${course['titles']["description"]}`);
    for (const lesson of courseLessons) {
      const newLesson = removeId(lesson);
      await lessons.add(newLesson);
    }
  }
}

function removeId(data: any) {
  const newData: any = {...data};
  delete newData.id;
  return newData;
}

async function main(){
  try {
    console.log('Start main...\n\n');
    await uploadData();
    console.log('\n\nClosing Application...');
    await app.delete();
  }catch (e) {
    console.log('Data upload failed, reason:', e, '\n\n');
  }
}

