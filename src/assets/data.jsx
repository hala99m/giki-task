// ** Import images
import educationImg from '../assets/images/education.png'
import pharmtechImg from '../assets/images/pharmtech.png'
import sportImg from '../assets/images/sport.png'
import medicationImg from '../assets/images/medication.png'
import biologyImg from '../assets/images/biology.jpg'
import phisicsImg from '../assets/images/phisics.jpg'

// ** NOTE - Dummy data 
const languages = [
    { value: null, label: 'Select' },
    { value: 'en', label: 'English (US)' },
    { value: 'ar', label: 'Arabic (SYR)' },
    { value: 'fr', label: 'French (FR)' },
    { value: 'tr', label: 'Turkish (TR)' },
];

const regions = [
    { value: null, label: 'Select' },
    { value: 'usa', label: 'United States (USA)' },
    { value: 'uk', label: 'United Kingdom (UK)' },
    { value: 'germany', label: 'Germany (Deutschland)' },
    { value: 'spain', label: 'Spain (España)' },
];

const interestList = [
    { value: 1, image: pharmtechImg },
    { value: 2, image: educationImg },
    { value: 3, image: medicationImg },
    { value: 4, image: sportImg },
    { value: 5, image: phisicsImg },
    { value: 6, image: biologyImg },
];

export { languages, regions, interestList };