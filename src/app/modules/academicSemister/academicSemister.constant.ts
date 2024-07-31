import { 
    TAcademicSemesterCode, 
    TAcademicSemesterName, 
    TAcademicSemesterNameCodeMapper, 
    TMonth 
} from "./academicSemister.interface";

export const academicSemisterMonths:TMonth[] =[ 
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
export const academicSemisterNameSchema:TAcademicSemesterName[]=[
    'Autumn',
    'Summar',
    'Fall',
    'Wenter'
];
export const academicSemisterCodeSchema:TAcademicSemesterCode[]=[
    '01',
    '02',
    '03',
    '04'
]
export const academicSemisterNameCodeMapper :TAcademicSemesterNameCodeMapper={
    Autumn:'01',
    Summar:'02',
    Fall:'03',
    Wenter:'04'
}