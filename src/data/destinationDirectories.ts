export type DirectoryCountrySlug = "canada" | "usa" | "uk" | "australia" | "europe" | "malaysia";

export interface UniversityDirectoryEntry {
  slNo: number;
  universityName: string;
  program: string;
  tuitionFee: string;
  internationalScholarship: string;
}

export interface CountryDirectoryMeta {
  slug: DirectoryCountrySlug;
  label: string;
  currencyLabel: string;
}

export const DIRECTORY_COUNTRY_META: CountryDirectoryMeta[] = [
  { slug: "canada", label: "Canada", currencyLabel: "Tuition Fee" },
  { slug: "usa", label: "USA", currencyLabel: "Tuition Fee" },
  { slug: "uk", label: "UK", currencyLabel: "Tuition Fee" },
  { slug: "australia", label: "Australia", currencyLabel: "Tuition Fee" },
  { slug: "europe", label: "Europe", currencyLabel: "Tuition Fee" },
  { slug: "malaysia", label: "Malaysia", currencyLabel: "Tuition Fee" },
];

export const DESTINATION_DIRECTORIES: Record<DirectoryCountrySlug, UniversityDirectoryEntry[]> = {
  "canada": [
    {
      "slNo": 1,
      "universityName": "University of Windsor",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 2,
      "universityName": "University of Prince Edward Island",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 3,
      "universityName": "University of Winnipeg",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 4,
      "universityName": "University of Regina",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 5,
      "universityName": "St. Francis Xavier University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 6,
      "universityName": "Mount Saint Vincent University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 7,
      "universityName": "Concordia University of Edmonton",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 8,
      "universityName": "Crandall University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 9,
      "universityName": "University of Victoria",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 10,
      "universityName": "Thompson Rivers University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 11,
      "universityName": "University of North British Columbia",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 12,
      "universityName": "University of the Fraser Valley",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 13,
      "universityName": "Royal Roads University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 14,
      "universityName": "Trinity Western University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 15,
      "universityName": "Trent University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 16,
      "universityName": "OCAD University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 17,
      "universityName": "Nipissing University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 18,
      "universityName": "Laurentian University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 19,
      "universityName": "Lakehead University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 20,
      "universityName": "Brock University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 21,
      "universityName": "University of Windsor",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 22,
      "universityName": "University of Ottawa",
      "program": "Undergraduate & Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 23,
      "universityName": "University of Prince Edward Island",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 24,
      "universityName": "University of Winnipeg",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 25,
      "universityName": "University of Manitoba",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 26,
      "universityName": "Memorial University of Newfoundland",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 27,
      "universityName": "University of Regina",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 28,
      "universityName": "University of Saskatchewan",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 29,
      "universityName": "St. Francis Xavier University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 30,
      "universityName": "Cape Breton University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 31,
      "universityName": "Mount Saint Vincent University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 32,
      "universityName": "Acadia University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 33,
      "universityName": "Mount Royal University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 34,
      "universityName": "St. Mary's University - Calgary",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 35,
      "universityName": "MacEwan University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 36,
      "universityName": "Concordia University of Edmonton",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 37,
      "universityName": "University of Lethbridge",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 38,
      "universityName": "Mount Allison University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 39,
      "universityName": "University of New Brunswick",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 40,
      "universityName": "Crandall University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 41,
      "universityName": "St. Thomas University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 42,
      "universityName": "University of Victoria",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 43,
      "universityName": "Kwantlen Polytechnic University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 44,
      "universityName": "Capilano University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 45,
      "universityName": "Simon Fraser University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 46,
      "universityName": "Thompson Rivers University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 47,
      "universityName": "University of the Fraser Valley",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 48,
      "universityName": "Royal Roads University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 49,
      "universityName": "Trinity Western University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 50,
      "universityName": "Queen's University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 51,
      "universityName": "Laurentian University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 52,
      "universityName": "Algoma University - Brampton",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 53,
      "universityName": "Algoma University - Sault Ste. Marie",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 54,
      "universityName": "University of Guelph - Humber",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 55,
      "universityName": "Ontario Tech University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 56,
      "universityName": "King's University College",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 57,
      "universityName": "Western University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 58,
      "universityName": "Trent University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 59,
      "universityName": "OCAD University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 60,
      "universityName": "Nipissing University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 61,
      "universityName": "Lakehead University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 62,
      "universityName": "Wilfrid Laurier University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 63,
      "universityName": "Brock University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 64,
      "universityName": "Carleton University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 65,
      "universityName": "University of Guelph",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 66,
      "universityName": "University of Waterloo",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 67,
      "universityName": "University of Ottawa",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    }
  ],
  "usa": [
    {
      "slNo": 1,
      "universityName": "Johnson & Wales University - Providence",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 2,
      "universityName": "University of Nebraska Omaha",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 3,
      "universityName": "University of Nebraska - Kearney",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 4,
      "universityName": "Luoisiana Tech University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 5,
      "universityName": "University of Northern Iowa",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 6,
      "universityName": "Iowa State University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 7,
      "universityName": "University of Iowa (Public Ivy)",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 8,
      "universityName": "University of Delaware (Public Ivy)",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 9,
      "universityName": "University of Wyoming",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 10,
      "universityName": "University of South Dakota",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 11,
      "universityName": "Purdue University Northwest",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 12,
      "universityName": "University of Nevada - Las Vegas",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 13,
      "universityName": "University of Nevada - Reno",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 14,
      "universityName": "Arkansas State University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 15,
      "universityName": "John Hopkins University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 16,
      "universityName": "Towson University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 17,
      "universityName": "University of Maryland - Baltimore County",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 18,
      "universityName": "The University of Tulsa",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 19,
      "universityName": "University of Central Oklahoma",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 20,
      "universityName": "Oklahoma State University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 21,
      "universityName": "University of New Mexico - Albuquerque",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 22,
      "universityName": "Husson University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 23,
      "universityName": "The University of Maine",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 24,
      "universityName": "University of Idaho",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 25,
      "universityName": "University of Southern Mississippi",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 26,
      "universityName": "University of Mississippi",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 27,
      "universityName": "University of New Hampshire",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 28,
      "universityName": "Southern New Hampshire University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 29,
      "universityName": "University of Hartford",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 30,
      "universityName": "Montana State University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 31,
      "universityName": "University of South Carolina",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 32,
      "universityName": "Southern Utah University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 33,
      "universityName": "Weber State University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 34,
      "universityName": "Southeast Minnesota State University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 35,
      "universityName": "Saginaw Valley State University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 36,
      "universityName": "Minnesota State University - Mankato",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 37,
      "universityName": "University of Louisville",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 38,
      "universityName": "Western Kentucky University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 39,
      "universityName": "Campbellsville University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 40,
      "universityName": "Murray State University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 41,
      "universityName": "Wichita State University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 42,
      "universityName": "Colorado Mesa University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 43,
      "universityName": "University of Colorado - Colorado Springs",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 44,
      "universityName": "University of Colorado - Denver",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 45,
      "universityName": "University of Wisconsin - Stout",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 46,
      "universityName": "Marquette University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 47,
      "universityName": "University of Wisconsin - Whitewater",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 48,
      "universityName": "University of Wisconsin - Park Side",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 49,
      "universityName": "Youngstown State University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 50,
      "universityName": "Capital University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 51,
      "universityName": "University of Toledo",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 52,
      "universityName": "University of Cincinnati",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 53,
      "universityName": "Cleveland State University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 54,
      "universityName": "University of Dayton",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 55,
      "universityName": "Wright State University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 56,
      "universityName": "Kent State University - Kent",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 57,
      "universityName": "Case Western University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 58,
      "universityName": "Auburn University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 59,
      "universityName": "University of Alabama - Birmingham",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 60,
      "universityName": "University of South Alabama",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 61,
      "universityName": "University of North Alabama",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 62,
      "universityName": "The University of West Alabama",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 63,
      "universityName": "University of Alabama",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 64,
      "universityName": "University of Missouri - St. Louis",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 65,
      "universityName": "University of Central Missouri - Lee's Summit",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 66,
      "universityName": "University of Central Missouri - Warrensburg",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 67,
      "universityName": "Saint Louis University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 68,
      "universityName": "University of Memphis",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 69,
      "universityName": "Tennessee Technological University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 70,
      "universityName": "Middle Tennessee State University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 71,
      "universityName": "East Tennessee State University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 72,
      "universityName": "The University of Tennessee - Chattanooga",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 73,
      "universityName": "The University of Tennessee - Knoxville",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 74,
      "universityName": "Western Washington University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 75,
      "universityName": "Eastern Washington University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 76,
      "universityName": "City University of Seattle",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 77,
      "universityName": "Seattle University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 78,
      "universityName": "Central Washington University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 79,
      "universityName": "Washington State University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 80,
      "universityName": "University of Central Arkansas",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 81,
      "universityName": "Northern Arizona University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 82,
      "universityName": "Arizona State University - West",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 83,
      "universityName": "Arizona State University - Downtown Phoenix",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 84,
      "universityName": "Arizona State University - Polytechnic",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 85,
      "universityName": "Arizona State University - Tempe",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 86,
      "universityName": "University of Arizona (Public Ivy)",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 87,
      "universityName": "Southern Illinois University - Edwardsville",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 88,
      "universityName": "Illinois State University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 89,
      "universityName": "University of Illinois - Springfield",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 90,
      "universityName": "University of Illinois at Chicago",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 91,
      "universityName": "Texas Tech University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 92,
      "universityName": "Texas State University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 93,
      "universityName": "University of Houston Clear Lake",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 94,
      "universityName": "Midwestern State University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 95,
      "universityName": "University of North Texas",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 96,
      "universityName": "Texas A&M University - Corpus Christi",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 97,
      "universityName": "Millesville University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 98,
      "universityName": "La Salle University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 99,
      "universityName": "Chatham University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 100,
      "universityName": "Wilkes University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 101,
      "universityName": "Duquesne University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 102,
      "universityName": "Marshall University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 103,
      "universityName": "Radford University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 104,
      "universityName": "George Mason University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 105,
      "universityName": "James Madison University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 106,
      "universityName": "New Jersey Institute of Technology",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 107,
      "universityName": "Stevens Institute of Technology",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 108,
      "universityName": "Rowan University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 109,
      "universityName": "Drew University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 110,
      "universityName": "Fisher College",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 111,
      "universityName": "MCPHS University - Boston",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 112,
      "universityName": "Worcester Polytechnic Institute",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 113,
      "universityName": "Westfield State University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 114,
      "universityName": "Western New England University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 115,
      "universityName": "University of Massachusetts - Dartmouth",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 116,
      "universityName": "University of Massachusetts - Boston",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 117,
      "universityName": "Clark University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 118,
      "universityName": "Lasell University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 119,
      "universityName": "Northeastern University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 120,
      "universityName": "California State University - Northridge",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 121,
      "universityName": "California State University - Sacramento",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 122,
      "universityName": "Westcliff University - California",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 123,
      "universityName": "California State University - Bakersfield",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 124,
      "universityName": "California State University - San Bernadino",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 125,
      "universityName": "San Jose State University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 126,
      "universityName": "California State University Monterey Bay",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 127,
      "universityName": "San Francisco State University - Graduate",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 128,
      "universityName": "California State University - San Marcos",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 129,
      "universityName": "California State University - Channel Islands",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 130,
      "universityName": "California State University - Chico",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 131,
      "universityName": "California State University - Fresno",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 132,
      "universityName": "California State University - Long Beach",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 133,
      "universityName": "California State University - East Bay",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 134,
      "universityName": "Saginaw Valley State University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 135,
      "universityName": "Eastern Michigan University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 136,
      "universityName": "Western Michigan University - Kalamazoo",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 137,
      "universityName": "Central Michigan University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 138,
      "universityName": "Florida Atlantic University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 139,
      "universityName": "University of Tampa",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 140,
      "universityName": "Jacksonville University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 141,
      "universityName": "Embry-Riddle Aeronautical University - Florida",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 142,
      "universityName": "University of West Florida Emerald Coast",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 143,
      "universityName": "University of West Florida - Pensacola",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 144,
      "universityName": "University of Central Florida",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 145,
      "universityName": "University of South Florida",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 146,
      "universityName": "Saint Leo University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 147,
      "universityName": "Florida Agricultural & Mechanical University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 148,
      "universityName": "Rochester Institute of Technology",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 149,
      "universityName": "Long Island University -Post",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 150,
      "universityName": "Long Island University - Brooklyn",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 151,
      "universityName": "Pace University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 152,
      "universityName": "SUNY Polytechnic Institute - Utica",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 153,
      "universityName": "State University of New York (SUNY) - Plattsburgh",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 154,
      "universityName": "State University of New York (SUNY) - Buffalo State",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 155,
      "universityName": "SUNY Polytechnic Institute Albany",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 156,
      "universityName": "State University of New York (SUNY) at Oswego - MBA",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 157,
      "universityName": "State University of New York (SUNY) at Oswego - Graduate",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 158,
      "universityName": "University of Central Arkansas",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 159,
      "universityName": "Arkansas State University - Jonesboro",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 160,
      "universityName": "Bryant University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 161,
      "universityName": "New England Institute of Technology",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 162,
      "universityName": "South Dakota School of Mines & Technology",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 163,
      "universityName": "Dakota State University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 164,
      "universityName": "University of South Dakota",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 165,
      "universityName": "University of Nevada - Las Vegas",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 166,
      "universityName": "University of Nevada - Reno",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 167,
      "universityName": "Nebraska Wesleyan University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 168,
      "universityName": "University of Nebraska - Kearney",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 169,
      "universityName": "University of Nebraska - Lincoln",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 170,
      "universityName": "Towson University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 171,
      "universityName": "Mount St. Mary's University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 172,
      "universityName": "Hawaii Pacific University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 173,
      "universityName": "University of Oklahoma",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 174,
      "universityName": "Oklahoma City University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 175,
      "universityName": "University of Central Oklahoma",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 176,
      "universityName": "University of Tulsa",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 177,
      "universityName": "Oklahoma State University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 178,
      "universityName": "University of New Mexico - Albuquerque",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 179,
      "universityName": "Husson University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 180,
      "universityName": "The University of Maine",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 181,
      "universityName": "Boise State University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 182,
      "universityName": "University of Idaho",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 183,
      "universityName": "University of Southern Mississippi",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 184,
      "universityName": "University of Mississippi",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 185,
      "universityName": "Louisiana State University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 186,
      "universityName": "University of New Hampshire",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 187,
      "universityName": "Southern New Hampshire University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 188,
      "universityName": "Purdue University Northwest",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 189,
      "universityName": "University of Indianapolis",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 190,
      "universityName": "Rose-Hulman Institute of Technology",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 191,
      "universityName": "Wilmington University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 192,
      "universityName": "University of Delaware (Public Ivy)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 193,
      "universityName": "University of Hartford",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 194,
      "universityName": "University of Connecticut (Public Ivy)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 195,
      "universityName": "Montana State University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 196,
      "universityName": "University of Montana",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 197,
      "universityName": "University of South Carolina",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 198,
      "universityName": "Utah Tech University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 199,
      "universityName": "Weber State University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 200,
      "universityName": "Southern Utah University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 201,
      "universityName": "University of Utah",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 202,
      "universityName": "Western Oregon University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 203,
      "universityName": "University of Oregon",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 204,
      "universityName": "Portland State University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 205,
      "universityName": "Oregon State University - Corvallis",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 206,
      "universityName": "Oregon State University - Cascades",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 207,
      "universityName": "University of North Iowa",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 208,
      "universityName": "Iowa State University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 209,
      "universityName": "University of Iowa (Public Ivy)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 210,
      "universityName": "University of Minnesota Duluth",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 211,
      "universityName": "Minnesota State University - Mankato",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 212,
      "universityName": "Bellarmine University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 213,
      "universityName": "University of Louisville",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 214,
      "universityName": "Campbellsville University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 215,
      "universityName": "Murray State University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 216,
      "universityName": "Northern Kentucky University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 217,
      "universityName": "Western Kentucky University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 218,
      "universityName": "Kansas State University - Polytechnic",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 219,
      "universityName": "Wichita State University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 220,
      "universityName": "University of Colorado - Colorado Springs",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 221,
      "universityName": "Colorado State University - Pueblo",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 222,
      "universityName": "Colorado State University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 223,
      "universityName": "Colorado Mesa University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 224,
      "universityName": "University of Colorado - Denver",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 225,
      "universityName": "Lakeland University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 226,
      "universityName": "Caroll University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 227,
      "universityName": "Marquette University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 228,
      "universityName": "University of Wisconsin - Eau Claire",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 229,
      "universityName": "University of Wisconsin - Milwaukee",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 230,
      "universityName": "University of Wisconsin - La Crosse",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 231,
      "universityName": "University of Wisconsin - Whitewater",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 232,
      "universityName": "University of Wisconsin - Stout",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 233,
      "universityName": "University of Wisconsin - Superior",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 234,
      "universityName": "Walsh University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 235,
      "universityName": "Youngstown State University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 236,
      "universityName": "Ashland University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 237,
      "universityName": "University of Toledo",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 238,
      "universityName": "University of Cincinnati",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 239,
      "universityName": "Ohio University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 240,
      "universityName": "University of Mount Union",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 241,
      "universityName": "Ohio Wesleyan University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 242,
      "universityName": "Cleveland State University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 243,
      "universityName": "University of Dayton",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 244,
      "universityName": "Wright State University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 245,
      "universityName": "Kent State University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 246,
      "universityName": "Miami University (Public Ivy)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 247,
      "universityName": "Auburn University at Montgomery",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 248,
      "universityName": "Auburn University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 249,
      "universityName": "University of South Alabama",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 250,
      "universityName": "University of North Alabama",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 251,
      "universityName": "The University of West Alabama",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 252,
      "universityName": "University of Alabama - Birmingham",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 253,
      "universityName": "University of Alabama",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 254,
      "universityName": "Missouri University of Science & Technology",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 255,
      "universityName": "University of Missouri - St. Louis",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 256,
      "universityName": "Missouri State University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 257,
      "universityName": "University of Central Missouri",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 258,
      "universityName": "Saint Louis University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 259,
      "universityName": "Belmont University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 260,
      "universityName": "University of Memphis",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 261,
      "universityName": "Lipscomb University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 262,
      "universityName": "The University of Tennessee",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 263,
      "universityName": "Tennessee Technological University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 264,
      "universityName": "Middle Tennessee State University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 265,
      "universityName": "East Tennessee State University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 266,
      "universityName": "City University of Seattle",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 267,
      "universityName": "Seattle University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 268,
      "universityName": "Central Washington University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 269,
      "universityName": "Western Washington University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 270,
      "universityName": "Washington State University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 271,
      "universityName": "Eastern Washington University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 272,
      "universityName": "Northern Arizona University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 273,
      "universityName": "Arizona State University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 274,
      "universityName": "University of Arizona (Public Ivy)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 275,
      "universityName": "Elmhurst University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 276,
      "universityName": "Rockford University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 277,
      "universityName": "Southern Illinois University - Edwardsville",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 278,
      "universityName": "Illinois College",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 279,
      "universityName": "Illinois State University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 280,
      "universityName": "Illinois Institute of Technology",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 281,
      "universityName": "University of Illinois",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 282,
      "universityName": "Southwestern University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 283,
      "universityName": "Texas Tech University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 284,
      "universityName": "Midwestern State University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 285,
      "universityName": "University of Houston Clear Lake",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 286,
      "universityName": "Texas State University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 287,
      "universityName": "University of North Texas",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 288,
      "universityName": "Texas Wesleyan University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 289,
      "universityName": "Texas A&M University - Corpus Christi",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 290,
      "universityName": "Saint Francis University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 291,
      "universityName": "Lincoln University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 292,
      "universityName": "Seton Hill University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 293,
      "universityName": "Duquesne University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 294,
      "universityName": "Thomas Jefferson University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 295,
      "universityName": "Chatham University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 296,
      "universityName": "Wilkes University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 297,
      "universityName": "Marshall University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 298,
      "universityName": "University of Lynchburg",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 299,
      "universityName": "Virginia Wesleyan University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 300,
      "universityName": "Longwood University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 301,
      "universityName": "Radford University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 302,
      "universityName": "James Madison University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 303,
      "universityName": "Rutgers University - Camden",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 304,
      "universityName": "Rider University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 305,
      "universityName": "New Jersey Institute of Technology",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 306,
      "universityName": "Stevens Institute of Technology",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 307,
      "universityName": "Rowan University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 308,
      "universityName": "Drew University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 309,
      "universityName": "Westfield State University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 310,
      "universityName": "University of Massachusetts - Boston",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 311,
      "universityName": "University of Massachusetts - Amherst",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 312,
      "universityName": "University of Massachusetts - Lowell",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 313,
      "universityName": "University of Massachusetts - Dartmouth",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 314,
      "universityName": "Suffolk University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 315,
      "universityName": "Lasell University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 316,
      "universityName": "Western New England University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 317,
      "universityName": "Fisher College",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 318,
      "universityName": "Humboldt State University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 319,
      "universityName": "San Diego State University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 320,
      "universityName": "California State University - Bakersfield",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 321,
      "universityName": "California State University - Stanislaus",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 322,
      "universityName": "California State University - Dominguez Hills",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 323,
      "universityName": "San Jose State University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 324,
      "universityName": "San Francisco State University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 325,
      "universityName": "Calfifornia State University - Sacramento",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 326,
      "universityName": "California State University - San Bernadino",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 327,
      "universityName": "California State University - Northridge",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 328,
      "universityName": "California State University San Marcos",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 329,
      "universityName": "California State University Channel Islands",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 330,
      "universityName": "California State University Monterey Bay",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 331,
      "universityName": "California State University - Chico",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 332,
      "universityName": "California State University - Fresno",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 333,
      "universityName": "California State University - Long Beach",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 334,
      "universityName": "California State University - East Bay",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 335,
      "universityName": "Lawrence Technological University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 336,
      "universityName": "Saginaw Valley State University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 337,
      "universityName": "Cleary University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 338,
      "universityName": "Eastern Michigan University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 339,
      "universityName": "Western Michigan University - Kalamazoo",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 340,
      "universityName": "Hope College",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 341,
      "universityName": "Central Michigan University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 342,
      "universityName": "Broward College",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 343,
      "universityName": "University of Tampa",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 344,
      "universityName": "Florida Agricultural & Mechanical University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 345,
      "universityName": "Lynn University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 346,
      "universityName": "Florida Atlantic University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 347,
      "universityName": "Jacksonville University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 348,
      "universityName": "Embry-Riddle Aeronautical University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 349,
      "universityName": "University of West Florida",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 350,
      "universityName": "University of Central Florida",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 351,
      "universityName": "Florida International University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 352,
      "universityName": "Florida Polytechnic University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 353,
      "universityName": "University of South Florida",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 354,
      "universityName": "Yeshiva University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 355,
      "universityName": "Stoony Brook University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 356,
      "universityName": "SUNY Cobleskill",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 357,
      "universityName": "Hartwick College",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 358,
      "universityName": "Rochester Institute of Technology",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 359,
      "universityName": "Long Island University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 360,
      "universityName": "Pace University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 361,
      "universityName": "SUNY Old Westbury",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 362,
      "universityName": "SUNY Fredonia",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 363,
      "universityName": "SUNY New Paltz+B8:K8",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 364,
      "universityName": "SUNY Polytechnic Institute - Utica",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 365,
      "universityName": "State University of New York (SUNY) at Geneseo",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 366,
      "universityName": "State University of New York (SUNY) - Plattsburgh",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 367,
      "universityName": "State University of New York (SUNY) - Buffalo State",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 368,
      "universityName": "SUNY Polytechnic Institute - Albany",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 369,
      "universityName": "State University of New York (SUNY) at Oswego",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    }
  ],
  "uk": [
    {
      "slNo": 1,
      "universityName": "University of Plymouth",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 2,
      "universityName": "University of Cumbria",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 3,
      "universityName": "University of Derby",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 4,
      "universityName": "Keele University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 5,
      "universityName": "Falmouth University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 6,
      "universityName": "Bath Spa University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 7,
      "universityName": "University of Central Lancashire",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 8,
      "universityName": "University for the Creative Arts",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 9,
      "universityName": "University of Chester",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 10,
      "universityName": "University of Chichester",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 11,
      "universityName": "Edge Hill University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 12,
      "universityName": "University of East Anglia",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 13,
      "universityName": "University of Exeter (Russell Group)",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 14,
      "universityName": "University of Gloucestershire",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 15,
      "universityName": "University of Huddersfield",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 16,
      "universityName": "University of Hull",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 17,
      "universityName": "Canterbury Christ-Church University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 18,
      "universityName": "University of Kent",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 19,
      "universityName": "Leeds Trinity University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 20,
      "universityName": "Leeds Beckett University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 21,
      "universityName": "University of Leeds (Russell Group)",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 22,
      "universityName": "Lancaster University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 23,
      "universityName": "Bishop Grosseteste University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 24,
      "universityName": "University of Lincoln",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 25,
      "universityName": "University of Northampton",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 26,
      "universityName": "Oxford Brookes University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 27,
      "universityName": "University of Portsmouth",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 28,
      "universityName": "Newcastle University (Russell Group)",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 29,
      "universityName": "Northumbria University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 30,
      "universityName": "Sheffield Hallam University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 31,
      "universityName": "The University of Sheffield (Russell Group)",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 32,
      "universityName": "University of Southampton (Russell Group)",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 33,
      "universityName": "University of Sunderland",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 34,
      "universityName": "University of Winchester",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 35,
      "universityName": "York St John University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 36,
      "universityName": "University of York (Russell Group)",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 37,
      "universityName": "University of Brighton",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 38,
      "universityName": "University of Sussex",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 39,
      "universityName": "Anglia Ruskin University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 40,
      "universityName": "University of Bradford",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 41,
      "universityName": "Nottingham Trent University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 42,
      "universityName": "Coventry University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 43,
      "universityName": "University of Hertfordshire",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 44,
      "universityName": "De Monfort University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 45,
      "universityName": "Bournemouth University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 46,
      "universityName": "Loughborough University (Main Campus)",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 47,
      "universityName": "Durham University (Russell Group)",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 48,
      "universityName": "University of Essex",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 49,
      "universityName": "University of Surrey",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 50,
      "universityName": "Liverpool John Moores University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 51,
      "universityName": "University of Liverpool (Russell Group)",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 52,
      "universityName": "University of Reading",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 53,
      "universityName": "University of the West of England",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 54,
      "universityName": "University of Bristol (Russell Group)",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 55,
      "universityName": "Ulster University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 56,
      "universityName": "Queens University Belfast (Russell Group)",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 57,
      "universityName": "Wrexham Glyndwr University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 58,
      "universityName": "Swansea University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 59,
      "universityName": "Aberystwyth University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 60,
      "universityName": "Swansea University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 61,
      "universityName": "University of South Wales",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 62,
      "universityName": "Bangor University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 63,
      "universityName": "Cardiff Metropolitan University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 64,
      "universityName": "Cardiff University (Russell Group)",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 65,
      "universityName": "Edinburgh Napier University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 66,
      "universityName": "The University of Edinburgh (Russell Group)",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 67,
      "universityName": "Robert Gordon University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 68,
      "universityName": "University of Stirling",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 69,
      "universityName": "University of Dundee",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 70,
      "universityName": "Heriot Watt University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 71,
      "universityName": "University of Strathclyde",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 72,
      "universityName": "Glasgow Caledonian University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 73,
      "universityName": "University College Birmingham",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 74,
      "universityName": "Birmingham City University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 75,
      "universityName": "Aston University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 76,
      "universityName": "Manchester Metropolitan University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 77,
      "universityName": "University of Salford",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 78,
      "universityName": "University of West London",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 79,
      "universityName": "City (University of London)",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 80,
      "universityName": "London Metropolitan University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 81,
      "universityName": "Northumbira University - London",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 82,
      "universityName": "University of Greenwich",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 83,
      "universityName": "University of Roehampton",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 84,
      "universityName": "London South Bank University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 85,
      "universityName": "Ravensbourne University London",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 86,
      "universityName": "University of Westminster",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 87,
      "universityName": "Kingston University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 88,
      "universityName": "Middlesex University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 89,
      "universityName": "Brunel (University of London)",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 90,
      "universityName": "Goldsmiths, University of London",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 91,
      "universityName": "Royal Holloway, University of London",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 92,
      "universityName": "SOAS (University of London)",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 93,
      "universityName": "University of Bolton",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 94,
      "universityName": "University of Worcester",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 95,
      "universityName": "University of Wolverhampton",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 96,
      "universityName": "Royal Agricultural University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 97,
      "universityName": "Staffordshire University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 98,
      "universityName": "Keele University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 99,
      "universityName": "University of Derby",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 100,
      "universityName": "University of Plymouth",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 101,
      "universityName": "University of Suffolk",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 102,
      "universityName": "University of Cumbria",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 103,
      "universityName": "University of Buckingham",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 104,
      "universityName": "Falmouth University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 105,
      "universityName": "University of Lincoln",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 106,
      "universityName": "Bishop Grosseteste University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 107,
      "universityName": "Bath Spa University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 108,
      "universityName": "University of Central Lancashire",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 109,
      "universityName": "University for the Creative Arts",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 110,
      "universityName": "University of Chester",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 111,
      "universityName": "University of Chichester",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 112,
      "universityName": "Edge Hill University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 113,
      "universityName": "Norwich Univesity of the Arts",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 114,
      "universityName": "University of East Anglia",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 115,
      "universityName": "University of Exeter (Russell Group)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 116,
      "universityName": "University of Gloucestershire",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 117,
      "universityName": "University of Huddersfield",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 118,
      "universityName": "University of Hull",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 119,
      "universityName": "Canterbury Christ-Church University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 120,
      "universityName": "University of Kent",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 121,
      "universityName": "Leeds Trinity University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 122,
      "universityName": "Leeds Beckett University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 123,
      "universityName": "University of Leeds (Russell Group)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 124,
      "universityName": "Lancaster University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 125,
      "universityName": "University of Lincoln",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 126,
      "universityName": "University of Northampton",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 127,
      "universityName": "Oxford Brookes University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 128,
      "universityName": "University of Portsmouth",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 129,
      "universityName": "Newcastle University (Russell Group)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 130,
      "universityName": "Northumbira University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 131,
      "universityName": "Sheffield Hallam University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 132,
      "universityName": "The University of Sheffield (Russell Group)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 133,
      "universityName": "Solent University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 134,
      "universityName": "University of Southampton (Russell Group)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 135,
      "universityName": "University of Sunderland",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 136,
      "universityName": "Teesside University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 137,
      "universityName": "University of Winchester",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 138,
      "universityName": "York St John University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 139,
      "universityName": "University of York (Russell Group)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 140,
      "universityName": "University of Brighton",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 141,
      "universityName": "University of Sussex",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 142,
      "universityName": "Anglia Ruskin University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 143,
      "universityName": "University of Bradford",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 144,
      "universityName": "Nottingham Trent University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 145,
      "universityName": "The University of Nottingham (Russell Group)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 146,
      "universityName": "Coventry University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 147,
      "universityName": "University of Hertfordshire",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 148,
      "universityName": "De Monfort University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 149,
      "universityName": "University of Leicester",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 150,
      "universityName": "Bournemouth University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 151,
      "universityName": "Loughborough University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 152,
      "universityName": "Durham University (Russell Group)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 153,
      "universityName": "University of Essex",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 154,
      "universityName": "University of Bedfordshire",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 155,
      "universityName": "University of Surrey",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 156,
      "universityName": "Liverpool Hope University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 157,
      "universityName": "Liverpool John Moores University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 158,
      "universityName": "University of Liverpool (Russell Group)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 159,
      "universityName": "University of Reading",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 160,
      "universityName": "University of the West of England",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 161,
      "universityName": "University of Bristol (Russell Group)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 162,
      "universityName": "University of Warwick (Russell Group)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 163,
      "universityName": "Ulster University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 164,
      "universityName": "Queens University Belfast (Russell Group)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 165,
      "universityName": "University of Wales Trinity St. David",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 166,
      "universityName": "Wrexham Glyndwr University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 167,
      "universityName": "Aberystwyth University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 168,
      "universityName": "Swansea University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 169,
      "universityName": "University of South Wales",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 170,
      "universityName": "Bangor University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 171,
      "universityName": "Cardiff Metropolitan University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 172,
      "universityName": "Cardiff University (Russell Group)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 173,
      "universityName": "University of the Highlands and Islands",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 174,
      "universityName": "Queen Margaret University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 175,
      "universityName": "The University of Edinburgh (Russell Group)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 176,
      "universityName": "Edinburgh Napier University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 177,
      "universityName": "University of Aberdeen",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 178,
      "universityName": "Robert Gordon University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 179,
      "universityName": "University of Stirling",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 180,
      "universityName": "University of Dundee",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 181,
      "universityName": "Heriot Watt University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 182,
      "universityName": "University of Strathclyde",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 183,
      "universityName": "Glasgow Caledonian University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 184,
      "universityName": "University of Birmingham (Russell Group)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 185,
      "universityName": "University College Birmingham",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 186,
      "universityName": "Birmingham City University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 187,
      "universityName": "Aston University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 188,
      "universityName": "Manchester Metropolitan University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 189,
      "universityName": "University of Salford",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 190,
      "universityName": "The University of Manchester (Russell Group)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 191,
      "universityName": "University College London (Russell Group)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 192,
      "universityName": "King's College London (Russell Group)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 193,
      "universityName": "St. Mary's University, Twickenham",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 194,
      "universityName": "University of West London",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 195,
      "universityName": "Birbeck University of London",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 196,
      "universityName": "Northumbira University - London Campus",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 197,
      "universityName": "University of East London",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 198,
      "universityName": "City (University of London)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 199,
      "universityName": "London Metropolitan University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 200,
      "universityName": "University of Greenwich",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 201,
      "universityName": "University of Roehampton",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 202,
      "universityName": "London South Bank University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 203,
      "universityName": "Ravensbourne University London",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 204,
      "universityName": "University of Westminster",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 205,
      "universityName": "Kingston University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 206,
      "universityName": "Middlesex University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 207,
      "universityName": "Brunel (University of London)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 208,
      "universityName": "Goldsmiths, University of London",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 209,
      "universityName": "Royal Holloway, University of London",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 210,
      "universityName": "SOAS (University of London)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 211,
      "universityName": "Queen Mary, University of London (Russell Group)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    }
  ],
  "australia": [
    {
      "slNo": 1,
      "universityName": "Charles Darwin University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 2,
      "universityName": "Flinders University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 3,
      "universityName": "University of Southern Queensland",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 4,
      "universityName": "Bond University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 5,
      "universityName": "Griffith University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 6,
      "universityName": "University of Queensland (Group of Eight)",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 7,
      "universityName": "University of the Sunshine Coast",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 8,
      "universityName": "James Cook University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 9,
      "universityName": "University of Tasmania",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 10,
      "universityName": "The University of Notre Dame Australia",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 11,
      "universityName": "The University of West Australia (Group of Eight)",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 12,
      "universityName": "Murdoch University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 13,
      "universityName": "The University of West Australia (Group of Eight)",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 14,
      "universityName": "Edith Cowan University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 15,
      "universityName": "Deakin University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 16,
      "universityName": "Royal Melbourne Institute of Technology (RMIT)",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 17,
      "universityName": "Victoria University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 18,
      "universityName": "Federation University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 19,
      "universityName": "La Trobe University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 20,
      "universityName": "Swinburne University of Technology",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 21,
      "universityName": "University of New South Wales (UNSW) (Group of Eight)",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 22,
      "universityName": "Western Sydney University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 23,
      "universityName": "The University of Newcastle",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 24,
      "universityName": "Kaplan Business School",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 25,
      "universityName": "Southern Cross University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 26,
      "universityName": "Torrens University Australia",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 27,
      "universityName": "Central Queensland University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 28,
      "universityName": "University of Wollongong",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 29,
      "universityName": "University of New England",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 30,
      "universityName": "University of Canberra",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 31,
      "universityName": "The Australian National University (Group of Eight)",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 32,
      "universityName": "University of Adelaide (Group of Eight)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 33,
      "universityName": "Flinders University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 34,
      "universityName": "University of Adelaide (Group of Eight)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 35,
      "universityName": "Charles Darwin University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 36,
      "universityName": "Edith Cowan University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 37,
      "universityName": "Murdoch University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 38,
      "universityName": "University of West Australia (Group of Eight)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 39,
      "universityName": "University of Southern Queensland",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 40,
      "universityName": "University of the Sunshine Coast",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 41,
      "universityName": "Griffith University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 42,
      "universityName": "Bond University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 43,
      "universityName": "James Cook University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 44,
      "universityName": "University of Queensland (Group of Eight)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 45,
      "universityName": "University of Tasmania",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 46,
      "universityName": "Deakin University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 47,
      "universityName": "Royal Melbourne Institute of Technology (RMIT)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 48,
      "universityName": "Federation University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 49,
      "universityName": "Victoria University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 50,
      "universityName": "Charles Sturt University - Melbourne",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 51,
      "universityName": "La Trobe University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 52,
      "universityName": "Swinburne University of Technology",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 53,
      "universityName": "Kaplan Business School",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 54,
      "universityName": "University of Canberra - Sydney Hills",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 55,
      "universityName": "University of Wollongong",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 56,
      "universityName": "Torrens University Australia",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 57,
      "universityName": "Western Sydney University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 58,
      "universityName": "University of New South Wales (UNSW) (Group of Eight)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 59,
      "universityName": "Charles Sturt University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 60,
      "universityName": "The University of Newcastle",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 61,
      "universityName": "Southern Cross University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 62,
      "universityName": "Central Queensland University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 63,
      "universityName": "Charles Sturt University - Sydney",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 64,
      "universityName": "University of New England",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 65,
      "universityName": "University of Canberra",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 66,
      "universityName": "The Australian National University (Group of Eight)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    }
  ],
  "europe": [
    {
      "slNo": 1,
      "universityName": "Universidad Católica San Antonio de Murcia (UCAM)",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 2,
      "universityName": "PFH Private University of Applied Sciences",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 3,
      "universityName": "FOM University of Applied Sciences for Economics & Management",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 4,
      "universityName": "EBS University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 5,
      "universityName": "Eurasia Institute for International Education",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 6,
      "universityName": "CBS International Business School",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 7,
      "universityName": "International University SDI Munchen",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 8,
      "universityName": "Berlin School of Business & Innovation",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 9,
      "universityName": "EU Business School",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 10,
      "universityName": "International European University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 11,
      "universityName": "Vistula University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 12,
      "universityName": "Technology University of the Shannon",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 13,
      "universityName": "University of Limerick",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 14,
      "universityName": "University of Galway",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 15,
      "universityName": "Trinity College Dublin",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 16,
      "universityName": "Technology University Dublin",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 17,
      "universityName": "Southeast Technological University Carlow",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 18,
      "universityName": "Atlantic Technological University Sligo",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 19,
      "universityName": "University College Dublin",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 20,
      "universityName": "Maynooth University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 21,
      "universityName": "Dublin City University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 22,
      "universityName": "IBA International Business Academy",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 23,
      "universityName": "Arcada University of Applied Sciences",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 24,
      "universityName": "Metropolia University of Applied Sciences",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 25,
      "universityName": "Lappeenranta University (LUT)",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 26,
      "universityName": "Satakunta University of Applied Sciences",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 27,
      "universityName": "Kaajani University of Applied Sciences",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 28,
      "universityName": "Halmstad University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 29,
      "universityName": "University West",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 30,
      "universityName": "Uppsala University",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 31,
      "universityName": "Wittenborg University of Applied Sciences",
      "program": "Masters",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 32,
      "universityName": "European Institute of Education",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 33,
      "universityName": "Anglo American University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 34,
      "universityName": "University of Zagreb",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 35,
      "universityName": "Vern University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 36,
      "universityName": "ISAM - International School of Agri Management (Spain)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 37,
      "universityName": "European University - Barcelona (Spain)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 38,
      "universityName": "ESEI International Business School (Spain)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 39,
      "universityName": "Instituto Europeo di Design (IED)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 40,
      "universityName": "Universidad Europa (Spain)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 41,
      "universityName": "Ostelea Tourism Management School (Spain)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 42,
      "universityName": "EAE Business School (Spain)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 43,
      "universityName": "Universidad Católica San Antonio de Murcia (UCAM) (Spain)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 44,
      "universityName": "EU Business School",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 45,
      "universityName": "ICN Business School",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 46,
      "universityName": "College De Paris - Elfe (France)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 47,
      "universityName": "Skema Business School",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 48,
      "universityName": "Neoma Business School (France)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 49,
      "universityName": "Le Cordon Bleu",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 50,
      "universityName": "University of Europe for Applied Sciences",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 51,
      "universityName": "Berlin School of Business & Innovation",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 52,
      "universityName": "Sports Management School",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 53,
      "universityName": "University of Europe for Applied Sciences",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 54,
      "universityName": "Audencia Business School",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 55,
      "universityName": "Le Cordon Bleu",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 56,
      "universityName": "Institut Culinare de France",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 57,
      "universityName": "IEFT - Tourism & Hospitality Management",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 58,
      "universityName": "Neapolis University Pafos",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 59,
      "universityName": "University of Galway",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 60,
      "universityName": "South East Technological University Carlow",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 61,
      "universityName": "Atlantic Technological University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 62,
      "universityName": "University of Limerick",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 63,
      "universityName": "Trinity College Dublin",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 64,
      "universityName": "Technological University Dublin",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 65,
      "universityName": "Maynooth University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 66,
      "universityName": "Dublin City University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 67,
      "universityName": "Tampere University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 68,
      "universityName": "University of Szczecin",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 69,
      "universityName": "Vistula University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 70,
      "universityName": "University of Pecs",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 71,
      "universityName": "Corvinus University of Budapest",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 72,
      "universityName": "University of Sopron",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 73,
      "universityName": "University of Debrecen",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 74,
      "universityName": "University of Dunaujvaros",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 75,
      "universityName": "Obuda University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 76,
      "universityName": "John Von Neumann University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 77,
      "universityName": "Budapest Metropolitan University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 78,
      "universityName": "Kodolanyi Janos University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 79,
      "universityName": "United Business Institute (UBI)",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 80,
      "universityName": "Stienbies School of Management & Innovation",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 81,
      "universityName": "SRH Berlin University of Applied Sciences",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 82,
      "universityName": "GISMA Business School",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 83,
      "universityName": "FOM University of Applied Sciences",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 84,
      "universityName": "CBS International Business School",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 85,
      "universityName": "EU Business School",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 86,
      "universityName": "University of Europe for Applied Sciences",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 87,
      "universityName": "International University SDI München",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 88,
      "universityName": "EBS University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 89,
      "universityName": "Berlin School of Business & Innovation",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 90,
      "universityName": "International University of Applied Sciences",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 91,
      "universityName": "Universidade Europeia",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 92,
      "universityName": "University of Skovde",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 93,
      "universityName": "Linnaeus University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 94,
      "universityName": "Dalarna University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 95,
      "universityName": "Jonkoping University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 96,
      "universityName": "Kristianstad University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 97,
      "universityName": "Uppsala University",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 98,
      "universityName": "University West",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 99,
      "universityName": "Wittenborg University of Applied Sciences",
      "program": "Undergraduate",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    }
  ],
  "malaysia": [
    {
      "slNo": 1,
      "universityName": "Monash University Malaysia",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 2,
      "universityName": "University of Nottingham Malaysia",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 3,
      "universityName": "University of Southampton Malaysia",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 4,
      "universityName": "University of Wollongong Malaysia",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 5,
      "universityName": "Taylor's University",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 6,
      "universityName": "UCSI University",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 7,
      "universityName": "Heriot-Watt University Malaysia",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 8,
      "universityName": "Sunway University",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 9,
      "universityName": "INTI International University",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 10,
      "universityName": "Universiti Tenaga Nasional (UNITEN)",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 11,
      "universityName": "Asia Pacific University of Technology and Innovation (APU)",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 12,
      "universityName": "Lincoln University College",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 13,
      "universityName": "SEGi University",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 14,
      "universityName": "Multimedia University (MMU)",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 15,
      "universityName": "International Medical University (IMU)",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 16,
      "universityName": "University of Cyberjaya",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 17,
      "universityName": "Universiti Teknikal Malaysia Melaka (UTeM)",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 18,
      "universityName": "Universiti Kuala Lumpur (UniKL)",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 19,
      "universityName": "MAHSA University",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 20,
      "universityName": "Tunku Abdul Rahman University of Management and Technology (TAR UMT)",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 21,
      "universityName": "Asia Metropolitan University (AMU)",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 22,
      "universityName": "Australian National Institute of Business and Technology (ANIBT)",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 23,
      "universityName": "City University",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 24,
      "universityName": "International College of Management (ICMS)",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 25,
      "universityName": "MILA University",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 26,
      "universityName": "Nilai University",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 27,
      "universityName": "University College MAIWP International (UCMI)",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 28,
      "universityName": "University College of Aviation Malaysia (UNICAM)",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 29,
      "universityName": "University Malaysia of Computer Science & Engineering (UNIMY)",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 30,
      "universityName": "Universiti Tun Abdul Razak (UniRazak)",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 31,
      "universityName": "UNITAR International University",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 32,
      "universityName": "Universiti Poly-Tech Malaysia (UPTM)",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 33,
      "universityName": "University of Malaya-Wales (UM-Wales)",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 34,
      "universityName": "Veritas University College",
      "program": "ALL Levels",
      "tuitionFee": "Depend on Student Profile",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    }
  ]
};
