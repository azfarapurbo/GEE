export type DirectoryCountrySlug = "canada" | "usa" | "uk" | "australia" | "europe" | "malaysia";

export interface UniversityDirectoryEntry {
  slNo: number;
  universityName: string;
  program: string;
  universityLocation: string;
  internationalScholarship: string;
}

export interface CountryDirectoryMeta {
  slug: DirectoryCountrySlug;
  label: string;
  locationLabel: string;
}

export const DIRECTORY_COUNTRY_META: CountryDirectoryMeta[] = [
  { slug: "canada", label: "Canada", locationLabel: "University Location" },
  { slug: "usa", label: "USA", locationLabel: "University Location" },
  { slug: "uk", label: "UK", locationLabel: "University Location" },
  { slug: "australia", label: "Australia", locationLabel: "University Location" },
  { slug: "europe", label: "Europe", locationLabel: "University Location" },
  { slug: "malaysia", label: "Malaysia", locationLabel: "University Location" },
];

export const DESTINATION_DIRECTORIES: Record<DirectoryCountrySlug, UniversityDirectoryEntry[]> = {
  "canada": [
    {
      "slNo": 1,
      "universityName": "University of Waterloo",
      "program": "ALL Levels",
      "universityLocation": "Waterloo, Ontario, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 2,
      "universityName": "Western University",
      "program": "ALL Levels",
      "universityLocation": "London, Ontario, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 3,
      "universityName": "University of Ottawa",
      "program": "ALL Levels",
      "universityLocation": "Ottawa, Ontario, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 4,
      "universityName": "Queen's University",
      "program": "ALL Levels",
      "universityLocation": "Kingston, Ontario, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 5,
      "universityName": "Simon Fraser University",
      "program": "ALL Levels",
      "universityLocation": "Burnaby, British Columbia, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 6,
      "universityName": "University of Saskatchewan",
      "program": "ALL Levels",
      "universityLocation": "Saskatoon, Saskatchewan, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 7,
      "universityName": "University of Victoria",
      "program": "ALL Levels",
      "universityLocation": "Victoria, British Columbia, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 8,
      "universityName": "University of Guelph",
      "program": "ALL Levels",
      "universityLocation": "Guelph, Ontario, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 9,
      "universityName": "University of Guelph - Humber",
      "program": "ALL Levels",
      "universityLocation": "Toronto, Ontario, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 10,
      "universityName": "University of Windsor",
      "program": "ALL Levels",
      "universityLocation": "Windsor, Ontario, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 11,
      "universityName": "Memorial University of Newfoundland",
      "program": "ALL Levels",
      "universityLocation": "St. John's, Newfoundland and Labrador, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 12,
      "universityName": "University of Manitoba",
      "program": "ALL Levels",
      "universityLocation": "Winnipeg, Manitoba, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 13,
      "universityName": "University of New Brunswick",
      "program": "ALL Levels",
      "universityLocation": "Fredericton, New Brunswick, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 14,
      "universityName": "Carleton University",
      "program": "ALL Levels",
      "universityLocation": "Ottawa, Ontario, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 15,
      "universityName": "Ontario Tech University",
      "program": "ALL Levels",
      "universityLocation": "Oshawa, Ontario, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 16,
      "universityName": "Wilfrid Laurier University",
      "program": "ALL Levels",
      "universityLocation": "Waterloo, Ontario, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 17,
      "universityName": "Lakehead University",
      "program": "ALL Levels",
      "universityLocation": "Thunder Bay, Ontario, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 18,
      "universityName": "University of North British Columbia",
      "program": "ALL Levels",
      "universityLocation": "Prince George, British Columbia, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 19,
      "universityName": "University of Regina",
      "program": "ALL Levels",
      "universityLocation": "Regina, Saskatchewan, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 20,
      "universityName": "Brock University",
      "program": "ALL Levels",
      "universityLocation": "St. Catharines, Ontario, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 21,
      "universityName": "Trent University",
      "program": "ALL Levels",
      "universityLocation": "Peterborough, Ontario, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 22,
      "universityName": "University of Lethbridge",
      "program": "ALL Levels",
      "universityLocation": "Lethbridge, Alberta, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 23,
      "universityName": "University of Winnipeg",
      "program": "ALL Levels",
      "universityLocation": "Winnipeg, Manitoba, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 24,
      "universityName": "Thompson Rivers University",
      "program": "ALL Levels",
      "universityLocation": "Kamloops, British Columbia, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 25,
      "universityName": "University of Prince Edward Island",
      "program": "ALL Levels",
      "universityLocation": "Charlottetown, Prince Edward Island, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 26,
      "universityName": "Laurentian University",
      "program": "ALL Levels",
      "universityLocation": "Sudbury, Ontario, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 27,
      "universityName": "Acadia University",
      "program": "ALL Levels",
      "universityLocation": "Wolfville, Nova Scotia, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 28,
      "universityName": "St. Francis Xavier University",
      "program": "ALL Levels",
      "universityLocation": "Antigonish, Nova Scotia, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 29,
      "universityName": "Mount Allison University",
      "program": "ALL Levels",
      "universityLocation": "Sackville, New Brunswick, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 30,
      "universityName": "Mount Royal University",
      "program": "ALL Levels",
      "universityLocation": "Calgary, Alberta, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 31,
      "universityName": "MacEwan University",
      "program": "ALL Levels",
      "universityLocation": "Edmonton, Alberta, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 32,
      "universityName": "OCAD University",
      "program": "ALL Levels",
      "universityLocation": "Toronto, Ontario, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 33,
      "universityName": "Royal Roads University",
      "program": "ALL Levels",
      "universityLocation": "Victoria, British Columbia, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 34,
      "universityName": "University of the Fraser Valley",
      "program": "ALL Levels",
      "universityLocation": "Abbotsford, British Columbia, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 35,
      "universityName": "Kwantlen Polytechnic University",
      "program": "ALL Levels",
      "universityLocation": "Surrey, British Columbia, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 36,
      "universityName": "Capilano University",
      "program": "ALL Levels",
      "universityLocation": "North Vancouver, British Columbia, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 37,
      "universityName": "Mount Saint Vincent University",
      "program": "ALL Levels",
      "universityLocation": "Halifax, Nova Scotia, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 38,
      "universityName": "Nipissing University",
      "program": "ALL Levels",
      "universityLocation": "North Bay, Ontario, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 39,
      "universityName": "Cape Breton University",
      "program": "ALL Levels",
      "universityLocation": "Sydney, Nova Scotia, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 40,
      "universityName": "Trinity Western University",
      "program": "ALL Levels",
      "universityLocation": "Langley, British Columbia, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 41,
      "universityName": "St. Thomas University",
      "program": "ALL Levels",
      "universityLocation": "Fredericton, New Brunswick, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 42,
      "universityName": "King's University College",
      "program": "ALL Levels",
      "universityLocation": "London, Ontario, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 43,
      "universityName": "Algoma University - Sault Ste. Marie",
      "program": "ALL Levels",
      "universityLocation": "Sault Ste. Marie, Ontario, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 44,
      "universityName": "Algoma University - Brampton",
      "program": "ALL Levels",
      "universityLocation": "Brampton, Ontario, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 45,
      "universityName": "Concordia University of Edmonton",
      "program": "ALL Levels",
      "universityLocation": "Edmonton, Alberta, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 46,
      "universityName": "St. Mary's University - Calgary",
      "program": "ALL Levels",
      "universityLocation": "Calgary, Alberta, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 47,
      "universityName": "Crandall University",
      "program": "ALL Levels",
      "universityLocation": "Moncton, New Brunswick, Canada",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    }
  ],
  "usa": [
    {
      "slNo": 1,
      "universityName": "John Hopkins University",
      "program": "ALL Levels",
      "universityLocation": "Baltimore, Maryland, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 2,
      "universityName": "University of Illinois",
      "program": "ALL Levels",
      "universityLocation": "Urbana-Champaign, Illinois, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 3,
      "universityName": "Arizona State University",
      "program": "ALL Levels",
      "universityLocation": "Tempe, Arizona, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 4,
      "universityName": "Arizona State University - Tempe",
      "program": "ALL Levels",
      "universityLocation": "Tempe, Arizona, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 5,
      "universityName": "Arizona State University - West",
      "program": "ALL Levels",
      "universityLocation": "Glendale, Arizona, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 6,
      "universityName": "Arizona State University - Downtown Phoenix",
      "program": "ALL Levels",
      "universityLocation": "Phoenix, Arizona, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 7,
      "universityName": "Arizona State University - Polytechnic",
      "program": "ALL Levels",
      "universityLocation": "Mesa, Arizona, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 8,
      "universityName": "Case Western University",
      "program": "ALL Levels",
      "universityLocation": "Cleveland, Ohio, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 9,
      "universityName": "University of Massachusetts - Amherst",
      "program": "ALL Levels",
      "universityLocation": "Amherst, Massachusetts, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 10,
      "universityName": "University of Arizona (Public Ivy)",
      "program": "ALL Levels",
      "universityLocation": "Tucson, Arizona, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 11,
      "universityName": "University of Illinois at Chicago",
      "program": "ALL Levels",
      "universityLocation": "Chicago, Illinois, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 12,
      "universityName": "Stoony Brook University",
      "program": "ALL Levels",
      "universityLocation": "Stony Brook, New York, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 13,
      "universityName": "Northeastern University",
      "program": "ALL Levels",
      "universityLocation": "Boston, Massachusetts, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 14,
      "universityName": "Colorado State University",
      "program": "ALL Levels",
      "universityLocation": "Fort Collins, Colorado, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 15,
      "universityName": "Colorado State University - Pueblo",
      "program": "ALL Levels",
      "universityLocation": "Pueblo, Colorado, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 16,
      "universityName": "Illinois Institute of Technology",
      "program": "ALL Levels",
      "universityLocation": "Chicago, Illinois, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 17,
      "universityName": "University of Utah",
      "program": "ALL Levels",
      "universityLocation": "Salt Lake City, Utah, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 18,
      "universityName": "University of Connecticut (Public Ivy)",
      "program": "ALL Levels",
      "universityLocation": "Storrs, Connecticut, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 19,
      "universityName": "Washington State University",
      "program": "ALL Levels",
      "universityLocation": "Pullman, Washington, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 20,
      "universityName": "Iowa State University",
      "program": "ALL Levels",
      "universityLocation": "Ames, Iowa, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 21,
      "universityName": "The University of Tennessee",
      "program": "ALL Levels",
      "universityLocation": "Knoxville, Tennessee, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 22,
      "universityName": "The University of Tennessee - Knoxville",
      "program": "ALL Levels",
      "universityLocation": "Knoxville, Tennessee, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 23,
      "universityName": "The University of Tennessee - Chattanooga",
      "program": "ALL Levels",
      "universityLocation": "Chattanooga, Tennessee, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 24,
      "universityName": "University of Iowa (Public Ivy)",
      "program": "ALL Levels",
      "universityLocation": "Iowa City, Iowa, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 25,
      "universityName": "Oregon State University - Corvallis",
      "program": "ALL Levels",
      "universityLocation": "Corvallis, Oregon, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 26,
      "universityName": "Oregon State University - Cascades",
      "program": "ALL Levels",
      "universityLocation": "Bend, Oregon, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 27,
      "universityName": "University of South Florida",
      "program": "ALL Levels",
      "universityLocation": "Tampa, Florida, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 28,
      "universityName": "University of Delaware (Public Ivy)",
      "program": "ALL Levels",
      "universityLocation": "Newark, Delaware, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 29,
      "universityName": "University of Alabama - Birmingham",
      "program": "ALL Levels",
      "universityLocation": "Birmingham, Alabama, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 30,
      "universityName": "University of Cincinnati",
      "program": "ALL Levels",
      "universityLocation": "Cincinnati, Ohio, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 31,
      "universityName": "Louisiana State University",
      "program": "ALL Levels",
      "universityLocation": "Baton Rouge, Louisiana, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 32,
      "universityName": "University of Oklahoma",
      "program": "ALL Levels",
      "universityLocation": "Norman, Oklahoma, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 33,
      "universityName": "University of Oregon",
      "program": "ALL Levels",
      "universityLocation": "Eugene, Oregon, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 34,
      "universityName": "University of Nebraska - Lincoln",
      "program": "ALL Levels",
      "universityLocation": "Lincoln, Nebraska, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 35,
      "universityName": "New Jersey Institute of Technology",
      "program": "ALL Levels",
      "universityLocation": "Newark, New Jersey, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 36,
      "universityName": "Yeshiva University",
      "program": "ALL Levels",
      "universityLocation": "New York, New York, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 37,
      "universityName": "Worcester Polytechnic Institute",
      "program": "ALL Levels",
      "universityLocation": "Worcester, Massachusetts, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 38,
      "universityName": "Stevens Institute of Technology",
      "program": "ALL Levels",
      "universityLocation": "Hoboken, New Jersey, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 39,
      "universityName": "Auburn University",
      "program": "ALL Levels",
      "universityLocation": "Auburn, Alabama, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 40,
      "universityName": "Auburn University at Montgomery",
      "program": "ALL Levels",
      "universityLocation": "Montgomery, Alabama, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 41,
      "universityName": "Texas Tech University",
      "program": "ALL Levels",
      "universityLocation": "Lubbock, Texas, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 42,
      "universityName": "George Mason University",
      "program": "ALL Levels",
      "universityLocation": "Fairfax, Virginia, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 43,
      "universityName": "Florida International University",
      "program": "ALL Levels",
      "universityLocation": "Miami, Florida, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 44,
      "universityName": "University of South Carolina",
      "program": "ALL Levels",
      "universityLocation": "Columbia, South Carolina, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 45,
      "universityName": "University of Central Florida",
      "program": "ALL Levels",
      "universityLocation": "Orlando, Florida, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 46,
      "universityName": "University of New Mexico - Albuquerque",
      "program": "ALL Levels",
      "universityLocation": "Albuquerque, New Mexico, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 47,
      "universityName": "Oklahoma State University",
      "program": "ALL Levels",
      "universityLocation": "Stillwater, Oklahoma, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 48,
      "universityName": "Rochester Institute of Technology",
      "program": "ALL Levels",
      "universityLocation": "Rochester, New York, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 49,
      "universityName": "University of Alabama",
      "program": "ALL Levels",
      "universityLocation": "Tuscaloosa, Alabama, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 50,
      "universityName": "Missouri University of Science & Technology",
      "program": "ALL Levels",
      "universityLocation": "Rolla, Missouri, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 51,
      "universityName": "San Diego State University",
      "program": "ALL Levels",
      "universityLocation": "San Diego, California, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 52,
      "universityName": "Saint Louis University",
      "program": "ALL Levels",
      "universityLocation": "St. Louis, Missouri, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 53,
      "universityName": "Kent State University",
      "program": "ALL Levels",
      "universityLocation": "Kent, Ohio, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 54,
      "universityName": "Kent State University - Kent",
      "program": "ALL Levels",
      "universityLocation": "Kent, Ohio, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 55,
      "universityName": "University of Louisville",
      "program": "ALL Levels",
      "universityLocation": "Louisville, Kentucky, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 56,
      "universityName": "University of Massachusetts - Lowell",
      "program": "ALL Levels",
      "universityLocation": "Lowell, Massachusetts, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 57,
      "universityName": "University of Massachusetts - Boston",
      "program": "ALL Levels",
      "universityLocation": "Boston, Massachusetts, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 58,
      "universityName": "University of Massachusetts - Dartmouth",
      "program": "ALL Levels",
      "universityLocation": "North Dartmouth, Massachusetts, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 59,
      "universityName": "Miami University (Public Ivy)",
      "program": "ALL Levels",
      "universityLocation": "Oxford, Ohio, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 60,
      "universityName": "University of Idaho",
      "program": "ALL Levels",
      "universityLocation": "Moscow, Idaho, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 61,
      "universityName": "University of New Hampshire",
      "program": "ALL Levels",
      "universityLocation": "Durham, New Hampshire, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 62,
      "universityName": "University of Nebraska Omaha",
      "program": "ALL Levels",
      "universityLocation": "Omaha, Nebraska, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 63,
      "universityName": "University of Nevada - Reno",
      "program": "ALL Levels",
      "universityLocation": "Reno, Nevada, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 64,
      "universityName": "University of Nevada - Las Vegas",
      "program": "ALL Levels",
      "universityLocation": "Las Vegas, Nevada, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 65,
      "universityName": "Clark University",
      "program": "ALL Levels",
      "universityLocation": "Worcester, Massachusetts, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 66,
      "universityName": "Rutgers University - Camden",
      "program": "ALL Levels",
      "universityLocation": "Camden, New Jersey, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 67,
      "universityName": "University of Wyoming",
      "program": "ALL Levels",
      "universityLocation": "Laramie, Wyoming, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 68,
      "universityName": "University of Mississippi",
      "program": "ALL Levels",
      "universityLocation": "Oxford, Mississippi, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 69,
      "universityName": "The University of Maine",
      "program": "ALL Levels",
      "universityLocation": "Orono, Maine, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 70,
      "universityName": "Marquette University",
      "program": "ALL Levels",
      "universityLocation": "Milwaukee, Wisconsin, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 71,
      "universityName": "Duquesne University",
      "program": "ALL Levels",
      "universityLocation": "Pittsburgh, Pennsylvania, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 72,
      "universityName": "University of Dayton",
      "program": "ALL Levels",
      "universityLocation": "Dayton, Ohio, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 73,
      "universityName": "University of Tulsa",
      "program": "ALL Levels",
      "universityLocation": "Tulsa, Oklahoma, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 74,
      "universityName": "The University of Tulsa",
      "program": "ALL Levels",
      "universityLocation": "Tulsa, Oklahoma, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 75,
      "universityName": "University of Wisconsin - Milwaukee",
      "program": "ALL Levels",
      "universityLocation": "Milwaukee, Wisconsin, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 76,
      "universityName": "Illinois State University",
      "program": "ALL Levels",
      "universityLocation": "Normal, Illinois, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 77,
      "universityName": "Texas State University",
      "program": "ALL Levels",
      "universityLocation": "San Marcos, Texas, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 78,
      "universityName": "Florida Atlantic University",
      "program": "ALL Levels",
      "universityLocation": "Boca Raton, Florida, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 79,
      "universityName": "Portland State University",
      "program": "ALL Levels",
      "universityLocation": "Portland, Oregon, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 80,
      "universityName": "San Jose State University",
      "program": "ALL Levels",
      "universityLocation": "San Jose, California, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 81,
      "universityName": "San Francisco State University",
      "program": "ALL Levels",
      "universityLocation": "San Francisco, California, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 82,
      "universityName": "San Francisco State University - Graduate",
      "program": "ALL Levels",
      "universityLocation": "San Francisco, California, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 83,
      "universityName": "California State University - Long Beach",
      "program": "ALL Levels",
      "universityLocation": "Long Beach, California, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 84,
      "universityName": "California State University - Northridge",
      "program": "ALL Levels",
      "universityLocation": "Northridge, California, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 85,
      "universityName": "California State University - Sacramento",
      "program": "ALL Levels",
      "universityLocation": "Sacramento, California, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 86,
      "universityName": "Calfifornia State University - Sacramento",
      "program": "ALL Levels",
      "universityLocation": "Sacramento, California, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 87,
      "universityName": "California State University - Fresno",
      "program": "ALL Levels",
      "universityLocation": "Fresno, California, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 88,
      "universityName": "California State University - Chico",
      "program": "ALL Levels",
      "universityLocation": "Chico, California, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 89,
      "universityName": "California State University - East Bay",
      "program": "ALL Levels",
      "universityLocation": "Hayward, California, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 90,
      "universityName": "California State University - San Marcos",
      "program": "ALL Levels",
      "universityLocation": "San Marcos, California, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 91,
      "universityName": "California State University San Marcos",
      "program": "ALL Levels",
      "universityLocation": "San Marcos, California, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 92,
      "universityName": "California State University - San Bernadino",
      "program": "ALL Levels",
      "universityLocation": "San Bernardino, California, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 93,
      "universityName": "California State University - Bakersfield",
      "program": "ALL Levels",
      "universityLocation": "Bakersfield, California, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 94,
      "universityName": "California State University - Dominguez Hills",
      "program": "ALL Levels",
      "universityLocation": "Carson, California, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 95,
      "universityName": "California State University - Stanislaus",
      "program": "ALL Levels",
      "universityLocation": "Turlock, California, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 96,
      "universityName": "California State University Monterey Bay",
      "program": "ALL Levels",
      "universityLocation": "Seaside, California, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 97,
      "universityName": "California State University - Channel Islands",
      "program": "ALL Levels",
      "universityLocation": "Camarillo, California, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 98,
      "universityName": "California State University Channel Islands",
      "program": "ALL Levels",
      "universityLocation": "Camarillo, California, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 99,
      "universityName": "Western Michigan University - Kalamazoo",
      "program": "ALL Levels",
      "universityLocation": "Kalamazoo, Michigan, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 100,
      "universityName": "Central Michigan University",
      "program": "ALL Levels",
      "universityLocation": "Mount Pleasant, Michigan, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 101,
      "universityName": "Eastern Michigan University",
      "program": "ALL Levels",
      "universityLocation": "Ypsilanti, Michigan, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 102,
      "universityName": "University of Memphis",
      "program": "ALL Levels",
      "universityLocation": "Memphis, Tennessee, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 103,
      "universityName": "University of North Texas",
      "program": "ALL Levels",
      "universityLocation": "Denton, Texas, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 104,
      "universityName": "James Madison University",
      "program": "ALL Levels",
      "universityLocation": "Harrisonburg, Virginia, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 105,
      "universityName": "Ohio University",
      "program": "ALL Levels",
      "universityLocation": "Athens, Ohio, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 106,
      "universityName": "Boise State University",
      "program": "ALL Levels",
      "universityLocation": "Boise, Idaho, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 107,
      "universityName": "Montana State University",
      "program": "ALL Levels",
      "universityLocation": "Bozeman, Montana, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 108,
      "universityName": "University of Montana",
      "program": "ALL Levels",
      "universityLocation": "Missoula, Montana, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 109,
      "universityName": "University of Colorado - Denver",
      "program": "ALL Levels",
      "universityLocation": "Denver, Colorado, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 110,
      "universityName": "University of Colorado - Colorado Springs",
      "program": "ALL Levels",
      "universityLocation": "Colorado Springs, Colorado, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 111,
      "universityName": "University of Missouri - St. Louis",
      "program": "ALL Levels",
      "universityLocation": "St. Louis, Missouri, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 112,
      "universityName": "University of South Dakota",
      "program": "ALL Levels",
      "universityLocation": "Vermillion, South Dakota, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 113,
      "universityName": "Wichita State University",
      "program": "ALL Levels",
      "universityLocation": "Wichita, Kansas, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 114,
      "universityName": "University of Toledo",
      "program": "ALL Levels",
      "universityLocation": "Toledo, Ohio, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 115,
      "universityName": "Cleveland State University",
      "program": "ALL Levels",
      "universityLocation": "Cleveland, Ohio, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 116,
      "universityName": "Wright State University",
      "program": "ALL Levels",
      "universityLocation": "Dayton, Ohio, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 117,
      "universityName": "Middle Tennessee State University",
      "program": "ALL Levels",
      "universityLocation": "Murfreesboro, Tennessee, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 118,
      "universityName": "East Tennessee State University",
      "program": "ALL Levels",
      "universityLocation": "Johnson City, Tennessee, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 119,
      "universityName": "Tennessee Technological University",
      "program": "ALL Levels",
      "universityLocation": "Cookeville, Tennessee, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 120,
      "universityName": "University of Southern Mississippi",
      "program": "ALL Levels",
      "universityLocation": "Hattiesburg, Mississippi, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 121,
      "universityName": "University of Illinois - Springfield",
      "program": "ALL Levels",
      "universityLocation": "Springfield, Illinois, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 122,
      "universityName": "Southern Illinois University - Edwardsville",
      "program": "ALL Levels",
      "universityLocation": "Edwardsville, Illinois, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 123,
      "universityName": "Rowan University",
      "program": "ALL Levels",
      "universityLocation": "Glassboro, New Jersey, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 124,
      "universityName": "Northern Arizona University",
      "program": "ALL Levels",
      "universityLocation": "Flagstaff, Arizona, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 125,
      "universityName": "Seattle University",
      "program": "ALL Levels",
      "universityLocation": "Seattle, Washington, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 126,
      "universityName": "Western Washington University",
      "program": "ALL Levels",
      "universityLocation": "Bellingham, Washington, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 127,
      "universityName": "Central Washington University",
      "program": "ALL Levels",
      "universityLocation": "Ellensburg, Washington, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 128,
      "universityName": "Eastern Washington University",
      "program": "ALL Levels",
      "universityLocation": "Cheney, Washington, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 129,
      "universityName": "Arkansas State University",
      "program": "ALL Levels",
      "universityLocation": "Jonesboro, Arkansas, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 130,
      "universityName": "Arkansas State University - Jonesboro",
      "program": "ALL Levels",
      "universityLocation": "Jonesboro, Arkansas, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 131,
      "universityName": "Towson University",
      "program": "ALL Levels",
      "universityLocation": "Towson, Maryland, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 132,
      "universityName": "University of Maryland - Baltimore County",
      "program": "ALL Levels",
      "universityLocation": "Baltimore, Maryland, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 133,
      "universityName": "Embry-Riddle Aeronautical University",
      "program": "ALL Levels",
      "universityLocation": "Daytona Beach, Florida, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 134,
      "universityName": "Embry-Riddle Aeronautical University - Florida",
      "program": "ALL Levels",
      "universityLocation": "Daytona Beach, Florida, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 135,
      "universityName": "Thomas Jefferson University",
      "program": "ALL Levels",
      "universityLocation": "Philadelphia, Pennsylvania, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 136,
      "universityName": "MCPHS University - Boston",
      "program": "ALL Levels",
      "universityLocation": "Boston, Massachusetts, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 137,
      "universityName": "Suffolk University",
      "program": "ALL Levels",
      "universityLocation": "Boston, Massachusetts, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 138,
      "universityName": "Pace University",
      "program": "ALL Levels",
      "universityLocation": "New York, New York, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 139,
      "universityName": "Drew University",
      "program": "ALL Levels",
      "universityLocation": "Madison, New Jersey, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 140,
      "universityName": "South Dakota School of Mines & Technology",
      "program": "ALL Levels",
      "universityLocation": "Rapid City, South Dakota, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 141,
      "universityName": "Rose-Hulman Institute of Technology",
      "program": "ALL Levels",
      "universityLocation": "Terre Haute, Indiana, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 142,
      "universityName": "Lawrence Technological University",
      "program": "ALL Levels",
      "universityLocation": "Southfield, Michigan, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 143,
      "universityName": "Purdue University Northwest",
      "program": "ALL Levels",
      "universityLocation": "Hammond, Indiana, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 144,
      "universityName": "Texas A&M University - Corpus Christi",
      "program": "ALL Levels",
      "universityLocation": "Corpus Christi, Texas, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 145,
      "universityName": "University of Houston Clear Lake",
      "program": "ALL Levels",
      "universityLocation": "Houston, Texas, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 146,
      "universityName": "Long Island University",
      "program": "ALL Levels",
      "universityLocation": "Brookville, New York, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 147,
      "universityName": "Long Island University - Brooklyn",
      "program": "ALL Levels",
      "universityLocation": "Brooklyn, New York, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 148,
      "universityName": "Long Island University -Post",
      "program": "ALL Levels",
      "universityLocation": "Brookville, New York, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 149,
      "universityName": "State University of New York (SUNY) at Geneseo",
      "program": "ALL Levels",
      "universityLocation": "Geneseo, New York, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 150,
      "universityName": "SUNY New Paltz+B8:K8",
      "program": "ALL Levels",
      "universityLocation": "New Paltz, New York, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 151,
      "universityName": "SUNY Polytechnic Institute - Albany",
      "program": "ALL Levels",
      "universityLocation": "Albany, New York, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 152,
      "universityName": "SUNY Polytechnic Institute Albany",
      "program": "ALL Levels",
      "universityLocation": "Albany, New York, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 153,
      "universityName": "SUNY Polytechnic Institute - Utica",
      "program": "ALL Levels",
      "universityLocation": "Utica, New York, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 154,
      "universityName": "State University of New York (SUNY) - Buffalo State",
      "program": "ALL Levels",
      "universityLocation": "Buffalo, New York, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 155,
      "universityName": "State University of New York (SUNY) at Oswego",
      "program": "ALL Levels",
      "universityLocation": "Oswego, New York, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 156,
      "universityName": "State University of New York (SUNY) at Oswego - Graduate",
      "program": "ALL Levels",
      "universityLocation": "Oswego, New York, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 157,
      "universityName": "State University of New York (SUNY) at Oswego - MBA",
      "program": "ALL Levels",
      "universityLocation": "Oswego, New York, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 158,
      "universityName": "State University of New York (SUNY) - Plattsburgh",
      "program": "ALL Levels",
      "universityLocation": "Plattsburgh, New York, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 159,
      "universityName": "SUNY Fredonia",
      "program": "ALL Levels",
      "universityLocation": "Fredonia, New York, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 160,
      "universityName": "SUNY Old Westbury",
      "program": "ALL Levels",
      "universityLocation": "Old Westbury, New York, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 161,
      "universityName": "SUNY Cobleskill",
      "program": "ALL Levels",
      "universityLocation": "Cobleskill, New York, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 162,
      "universityName": "Ohio Wesleyan University",
      "program": "ALL Levels",
      "universityLocation": "Delaware, Ohio, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 163,
      "universityName": "Hope College",
      "program": "ALL Levels",
      "universityLocation": "Holland, Michigan, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 164,
      "universityName": "Belmont University",
      "program": "ALL Levels",
      "universityLocation": "Nashville, Tennessee, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 165,
      "universityName": "Bellarmine University",
      "program": "ALL Levels",
      "universityLocation": "Louisville, Kentucky, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 166,
      "universityName": "University of Tampa",
      "program": "ALL Levels",
      "universityLocation": "Tampa, Florida, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 167,
      "universityName": "Jacksonville University",
      "program": "ALL Levels",
      "universityLocation": "Jacksonville, Florida, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 168,
      "universityName": "Bryant University",
      "program": "ALL Levels",
      "universityLocation": "Smithfield, Rhode Island, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 169,
      "universityName": "Rider University",
      "program": "ALL Levels",
      "universityLocation": "Lawrenceville, New Jersey, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 170,
      "universityName": "La Salle University",
      "program": "ALL Levels",
      "universityLocation": "Philadelphia, Pennsylvania, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 171,
      "universityName": "Wilkes University",
      "program": "ALL Levels",
      "universityLocation": "Wilkes-Barre, Pennsylvania, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 172,
      "universityName": "University of Hartford",
      "program": "ALL Levels",
      "universityLocation": "West Hartford, Connecticut, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 173,
      "universityName": "Southern New Hampshire University",
      "program": "ALL Levels",
      "universityLocation": "Manchester, New Hampshire, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 174,
      "universityName": "Western New England University",
      "program": "ALL Levels",
      "universityLocation": "Springfield, Massachusetts, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 175,
      "universityName": "Westfield State University",
      "program": "ALL Levels",
      "universityLocation": "Westfield, Massachusetts, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 176,
      "universityName": "Lasell University",
      "program": "ALL Levels",
      "universityLocation": "Newton, Massachusetts, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 177,
      "universityName": "Fisher College",
      "program": "ALL Levels",
      "universityLocation": "Boston, Massachusetts, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 178,
      "universityName": "Hartwick College",
      "program": "ALL Levels",
      "universityLocation": "Oneonta, New York, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 179,
      "universityName": "Illinois College",
      "program": "ALL Levels",
      "universityLocation": "Jacksonville, Illinois, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 180,
      "universityName": "Elmhurst University",
      "program": "ALL Levels",
      "universityLocation": "Elmhurst, Illinois, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 181,
      "universityName": "Rockford University",
      "program": "ALL Levels",
      "universityLocation": "Rockford, Illinois, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 182,
      "universityName": "Southwestern University",
      "program": "ALL Levels",
      "universityLocation": "Georgetown, Texas, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 183,
      "universityName": "Texas Wesleyan University",
      "program": "ALL Levels",
      "universityLocation": "Fort Worth, Texas, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 184,
      "universityName": "Lynn University",
      "program": "ALL Levels",
      "universityLocation": "Boca Raton, Florida, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 185,
      "universityName": "Saint Leo University",
      "program": "ALL Levels",
      "universityLocation": "St. Leo, Florida, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 186,
      "universityName": "University of West Florida",
      "program": "ALL Levels",
      "universityLocation": "Pensacola, Florida, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 187,
      "universityName": "University of West Florida - Pensacola",
      "program": "ALL Levels",
      "universityLocation": "Pensacola, Florida, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 188,
      "universityName": "University of West Florida Emerald Coast",
      "program": "ALL Levels",
      "universityLocation": "Fort Walton Beach, Florida, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 189,
      "universityName": "Florida Polytechnic University",
      "program": "ALL Levels",
      "universityLocation": "Lakeland, Florida, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 190,
      "universityName": "Florida Agricultural & Mechanical University",
      "program": "ALL Levels",
      "universityLocation": "Tallahassee, Florida, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 191,
      "universityName": "Humboldt State University",
      "program": "ALL Levels",
      "universityLocation": "Arcata, California, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 192,
      "universityName": "Minnesota State University - Mankato",
      "program": "ALL Levels",
      "universityLocation": "Mankato, Minnesota, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 193,
      "universityName": "Southeast Minnesota State University",
      "program": "ALL Levels",
      "universityLocation": "Winona, Minnesota, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 194,
      "universityName": "University of Northern Iowa",
      "program": "ALL Levels",
      "universityLocation": "Cedar Falls, Iowa, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 195,
      "universityName": "University of North Iowa",
      "program": "ALL Levels",
      "universityLocation": "Cedar Falls, Iowa, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 196,
      "universityName": "University of Minnesota Duluth",
      "program": "ALL Levels",
      "universityLocation": "Duluth, Minnesota, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 197,
      "universityName": "University of Wisconsin - Eau Claire",
      "program": "ALL Levels",
      "universityLocation": "Eau Claire, Wisconsin, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 198,
      "universityName": "University of Wisconsin - La Crosse",
      "program": "ALL Levels",
      "universityLocation": "La Crosse, Wisconsin, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 199,
      "universityName": "University of Wisconsin - Stout",
      "program": "ALL Levels",
      "universityLocation": "Menomonie, Wisconsin, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 200,
      "universityName": "University of Wisconsin - Whitewater",
      "program": "ALL Levels",
      "universityLocation": "Whitewater, Wisconsin, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 201,
      "universityName": "University of Wisconsin - Park Side",
      "program": "ALL Levels",
      "universityLocation": "Kenosha, Wisconsin, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 202,
      "universityName": "University of Wisconsin - Superior",
      "program": "ALL Levels",
      "universityLocation": "Superior, Wisconsin, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 203,
      "universityName": "City University of Seattle",
      "program": "ALL Levels",
      "universityLocation": "Seattle, Washington, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 204,
      "universityName": "The University of West Alabama",
      "program": "ALL Levels",
      "universityLocation": "Livingston, Alabama, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 205,
      "universityName": "University of Central Arkansas",
      "program": "ALL Levels",
      "universityLocation": "Conway, Arkansas, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 206,
      "universityName": "University of Central Missouri",
      "program": "ALL Levels",
      "universityLocation": "Warrensburg, Missouri, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 207,
      "universityName": "University of Central Missouri - Lee's Summit",
      "program": "ALL Levels",
      "universityLocation": "Lee's Summit, Missouri, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 208,
      "universityName": "University of Central Missouri - Warrensburg",
      "program": "ALL Levels",
      "universityLocation": "Warrensburg, Missouri, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 209,
      "universityName": "University of Central Oklahoma",
      "program": "ALL Levels",
      "universityLocation": "Edmond, Oklahoma, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 210,
      "universityName": "University of Indianapolis",
      "program": "ALL Levels",
      "universityLocation": "Indianapolis, Indiana, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 211,
      "universityName": "University of Lynchburg",
      "program": "ALL Levels",
      "universityLocation": "Lynchburg, Virginia, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 212,
      "universityName": "University of Mount Union",
      "program": "ALL Levels",
      "universityLocation": "Alliance, Ohio, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 213,
      "universityName": "University of Nebraska - Kearney",
      "program": "ALL Levels",
      "universityLocation": "Kearney, Nebraska, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 214,
      "universityName": "University of North Alabama",
      "program": "ALL Levels",
      "universityLocation": "Florence, Alabama, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 215,
      "universityName": "University of South Alabama",
      "program": "ALL Levels",
      "universityLocation": "Mobile, Alabama, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 216,
      "universityName": "Dakota State University",
      "program": "ALL Levels",
      "universityLocation": "Madison, South Dakota, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 217,
      "universityName": "Kansas State University - Polytechnic",
      "program": "ALL Levels",
      "universityLocation": "Salina, Kansas, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 218,
      "universityName": "Midwestern State University",
      "program": "ALL Levels",
      "universityLocation": "Wichita Falls, Texas, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 219,
      "universityName": "Missouri State University",
      "program": "ALL Levels",
      "universityLocation": "Springfield, Missouri, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 220,
      "universityName": "Murray State University",
      "program": "ALL Levels",
      "universityLocation": "Murray, Kentucky, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 221,
      "universityName": "Saginaw Valley State University",
      "program": "ALL Levels",
      "universityLocation": "University Center, Michigan, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 222,
      "universityName": "Weber State University",
      "program": "ALL Levels",
      "universityLocation": "Ogden, Utah, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 223,
      "universityName": "Youngstown State University",
      "program": "ALL Levels",
      "universityLocation": "Youngstown, Ohio, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 224,
      "universityName": "Ashland University",
      "program": "ALL Levels",
      "universityLocation": "Ashland, Ohio, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 225,
      "universityName": "Campbellsville University",
      "program": "ALL Levels",
      "universityLocation": "Campbellsville, Kentucky, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 226,
      "universityName": "Capital University",
      "program": "ALL Levels",
      "universityLocation": "Columbus, Ohio, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 227,
      "universityName": "Caroll University",
      "program": "ALL Levels",
      "universityLocation": "Waukesha, Wisconsin, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 228,
      "universityName": "Chatham University",
      "program": "ALL Levels",
      "universityLocation": "Pittsburgh, Pennsylvania, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 229,
      "universityName": "Cleary University",
      "program": "ALL Levels",
      "universityLocation": "Howell, Michigan, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 230,
      "universityName": "Colorado Mesa University",
      "program": "ALL Levels",
      "universityLocation": "Grand Junction, Colorado, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 231,
      "universityName": "Hawaii Pacific University",
      "program": "ALL Levels",
      "universityLocation": "Honolulu, Hawaii, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 232,
      "universityName": "Husson University",
      "program": "ALL Levels",
      "universityLocation": "Bangor, Maine, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 233,
      "universityName": "Johnson & Wales University - Providence",
      "program": "ALL Levels",
      "universityLocation": "Providence, Rhode Island, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 234,
      "universityName": "Lakeland University",
      "program": "ALL Levels",
      "universityLocation": "Plymouth, Wisconsin, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 235,
      "universityName": "Lincoln University",
      "program": "ALL Levels",
      "universityLocation": "Jefferson City, Missouri, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 236,
      "universityName": "Lipscomb University",
      "program": "ALL Levels",
      "universityLocation": "Nashville, Tennessee, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 237,
      "universityName": "Longwood University",
      "program": "ALL Levels",
      "universityLocation": "Farmville, Virginia, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 238,
      "universityName": "Luoisiana Tech University",
      "program": "ALL Levels",
      "universityLocation": "Ruston, Louisiana, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 239,
      "universityName": "Marshall University",
      "program": "ALL Levels",
      "universityLocation": "Huntington, West Virginia, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 240,
      "universityName": "Millesville University",
      "program": "ALL Levels",
      "universityLocation": "Millersville, Pennsylvania, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 241,
      "universityName": "Mount St. Mary's University",
      "program": "ALL Levels",
      "universityLocation": "Emmitsburg, Maryland, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 242,
      "universityName": "Nebraska Wesleyan University",
      "program": "ALL Levels",
      "universityLocation": "Lincoln, Nebraska, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 243,
      "universityName": "Northern Kentucky University",
      "program": "ALL Levels",
      "universityLocation": "Highland Heights, Kentucky, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 244,
      "universityName": "Oklahoma City University",
      "program": "ALL Levels",
      "universityLocation": "Oklahoma City, Oklahoma, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 245,
      "universityName": "Radford University",
      "program": "ALL Levels",
      "universityLocation": "Radford, Virginia, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 246,
      "universityName": "Saint Francis University",
      "program": "ALL Levels",
      "universityLocation": "Loretto, Pennsylvania, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 247,
      "universityName": "Seton Hill University",
      "program": "ALL Levels",
      "universityLocation": "Greensburg, Pennsylvania, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 248,
      "universityName": "Southern Utah University",
      "program": "ALL Levels",
      "universityLocation": "Cedar City, Utah, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 249,
      "universityName": "Utah Tech University",
      "program": "ALL Levels",
      "universityLocation": "St. George, Utah, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 250,
      "universityName": "Virginia Wesleyan University",
      "program": "ALL Levels",
      "universityLocation": "Virginia Beach, Virginia, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 251,
      "universityName": "Walsh University",
      "program": "ALL Levels",
      "universityLocation": "North Canton, Ohio, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 252,
      "universityName": "Westcliff University - California",
      "program": "ALL Levels",
      "universityLocation": "Irvine, California, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 253,
      "universityName": "Western Kentucky University",
      "program": "ALL Levels",
      "universityLocation": "Bowling Green, Kentucky, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 254,
      "universityName": "Western Oregon University",
      "program": "ALL Levels",
      "universityLocation": "Monmouth, Oregon, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 255,
      "universityName": "Wilmington University",
      "program": "ALL Levels",
      "universityLocation": "New Castle, Delaware, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 256,
      "universityName": "Broward College",
      "program": "ALL Levels",
      "universityLocation": "Fort Lauderdale, Florida, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 257,
      "universityName": "New England Institute of Technology",
      "program": "ALL Levels",
      "universityLocation": "East Greenwich, Rhode Island, USA",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    }
  ],
  "uk": [
    {
      "slNo": 1,
      "universityName": "University College London (Russell Group)",
      "program": "ALL Levels",
      "universityLocation": "London, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 2,
      "universityName": "The University of Edinburgh (Russell Group)",
      "program": "ALL Levels",
      "universityLocation": "Edinburgh, Scotland, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 3,
      "universityName": "The University of Manchester (Russell Group)",
      "program": "ALL Levels",
      "universityLocation": "Manchester, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 4,
      "universityName": "King's College London (Russell Group)",
      "program": "ALL Levels",
      "universityLocation": "London, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 5,
      "universityName": "University of Bristol (Russell Group)",
      "program": "ALL Levels",
      "universityLocation": "Bristol, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 6,
      "universityName": "University of Warwick (Russell Group)",
      "program": "ALL Levels",
      "universityLocation": "Coventry, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 7,
      "universityName": "University of Birmingham (Russell Group)",
      "program": "ALL Levels",
      "universityLocation": "Birmingham, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 8,
      "universityName": "University of Leeds (Russell Group)",
      "program": "ALL Levels",
      "universityLocation": "Leeds, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 9,
      "universityName": "University of Southampton (Russell Group)",
      "program": "ALL Levels",
      "universityLocation": "Southampton, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 10,
      "universityName": "Durham University (Russell Group)",
      "program": "ALL Levels",
      "universityLocation": "Durham, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 11,
      "universityName": "The University of Sheffield (Russell Group)",
      "program": "ALL Levels",
      "universityLocation": "Sheffield, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 12,
      "universityName": "The University of Nottingham (Russell Group)",
      "program": "ALL Levels",
      "universityLocation": "Nottingham, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 13,
      "universityName": "Queen Mary, University of London (Russell Group)",
      "program": "ALL Levels",
      "universityLocation": "London, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 14,
      "universityName": "Newcastle University (Russell Group)",
      "program": "ALL Levels",
      "universityLocation": "Newcastle upon Tyne, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 15,
      "universityName": "Lancaster University",
      "program": "ALL Levels",
      "universityLocation": "Lancaster, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 16,
      "universityName": "University of Liverpool (Russell Group)",
      "program": "ALL Levels",
      "universityLocation": "Liverpool, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 17,
      "universityName": "University of Exeter (Russell Group)",
      "program": "ALL Levels",
      "universityLocation": "Exeter, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 18,
      "universityName": "University of Reading",
      "program": "ALL Levels",
      "universityLocation": "Reading, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 19,
      "universityName": "University of York (Russell Group)",
      "program": "ALL Levels",
      "universityLocation": "York, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 20,
      "universityName": "Cardiff University (Russell Group)",
      "program": "ALL Levels",
      "universityLocation": "Cardiff, Wales, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 21,
      "universityName": "Queens University Belfast (Russell Group)",
      "program": "ALL Levels",
      "universityLocation": "Belfast, Northern Ireland, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 22,
      "universityName": "Loughborough University (Main Campus)",
      "program": "ALL Levels",
      "universityLocation": "Loughborough, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 23,
      "universityName": "Loughborough University",
      "program": "ALL Levels",
      "universityLocation": "Loughborough, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 24,
      "universityName": "University of Aberdeen",
      "program": "ALL Levels",
      "universityLocation": "Aberdeen, Scotland, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 25,
      "universityName": "University of Sussex",
      "program": "ALL Levels",
      "universityLocation": "Brighton, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 26,
      "universityName": "Heriot Watt University",
      "program": "ALL Levels",
      "universityLocation": "Edinburgh, Scotland, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 27,
      "universityName": "University of Strathclyde",
      "program": "ALL Levels",
      "universityLocation": "Glasgow, Scotland, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 28,
      "universityName": "University of Surrey",
      "program": "ALL Levels",
      "universityLocation": "Guildford, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 29,
      "universityName": "University of Leicester",
      "program": "ALL Levels",
      "universityLocation": "Leicester, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 30,
      "universityName": "Swansea University",
      "program": "ALL Levels",
      "universityLocation": "Swansea, Wales, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 31,
      "universityName": "University of East Anglia",
      "program": "ALL Levels",
      "universityLocation": "Norwich, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 32,
      "universityName": "Brunel (University of London)",
      "program": "ALL Levels",
      "universityLocation": "Uxbridge, London, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 33,
      "universityName": "City (University of London)",
      "program": "ALL Levels",
      "universityLocation": "London, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 34,
      "universityName": "University of Kent",
      "program": "ALL Levels",
      "universityLocation": "Canterbury, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 35,
      "universityName": "Birbeck University of London",
      "program": "ALL Levels",
      "universityLocation": "London, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 36,
      "universityName": "University of Dundee",
      "program": "ALL Levels",
      "universityLocation": "Dundee, Scotland, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 37,
      "universityName": "Oxford Brookes University",
      "program": "ALL Levels",
      "universityLocation": "Oxford, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 38,
      "universityName": "Aston University",
      "program": "ALL Levels",
      "universityLocation": "Birmingham, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 39,
      "universityName": "University of Essex",
      "program": "ALL Levels",
      "universityLocation": "Colchester, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 40,
      "universityName": "Royal Holloway, University of London",
      "program": "ALL Levels",
      "universityLocation": "Egham, Surrey, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 41,
      "universityName": "University of Stirling",
      "program": "ALL Levels",
      "universityLocation": "Stirling, Scotland, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 42,
      "universityName": "University of Huddersfield",
      "program": "ALL Levels",
      "universityLocation": "Huddersfield, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 43,
      "universityName": "SOAS (University of London)",
      "program": "ALL Levels",
      "universityLocation": "London, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 44,
      "universityName": "Ulster University",
      "program": "ALL Levels",
      "universityLocation": "Belfast / Coleraine, Northern Ireland, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 45,
      "universityName": "Coventry University",
      "program": "ALL Levels",
      "universityLocation": "Coventry, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 46,
      "universityName": "Northumbria University",
      "program": "ALL Levels",
      "universityLocation": "Newcastle upon Tyne, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 47,
      "universityName": "Northumbira University",
      "program": "ALL Levels",
      "universityLocation": "Newcastle upon Tyne, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 48,
      "universityName": "Northumbira University - London",
      "program": "ALL Levels",
      "universityLocation": "London, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 49,
      "universityName": "Northumbira University - London Campus",
      "program": "ALL Levels",
      "universityLocation": "London, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 50,
      "universityName": "University of Plymouth",
      "program": "ALL Levels",
      "universityLocation": "Plymouth, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 51,
      "universityName": "University of Portsmouth",
      "program": "ALL Levels",
      "universityLocation": "Portsmouth, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 52,
      "universityName": "Goldsmiths, University of London",
      "program": "ALL Levels",
      "universityLocation": "London, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 53,
      "universityName": "Nottingham Trent University",
      "program": "ALL Levels",
      "universityLocation": "Nottingham, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 54,
      "universityName": "University of Bradford",
      "program": "ALL Levels",
      "universityLocation": "Bradford, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 55,
      "universityName": "Manchester Metropolitan University",
      "program": "ALL Levels",
      "universityLocation": "Manchester, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 56,
      "universityName": "Middlesex University",
      "program": "ALL Levels",
      "universityLocation": "London, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 57,
      "universityName": "Anglia Ruskin University",
      "program": "ALL Levels",
      "universityLocation": "Cambridge / Chelmsford, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 58,
      "universityName": "Bournemouth University",
      "program": "ALL Levels",
      "universityLocation": "Bournemouth, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 59,
      "universityName": "University of Greenwich",
      "program": "ALL Levels",
      "universityLocation": "London, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 60,
      "universityName": "University of Hull",
      "program": "ALL Levels",
      "universityLocation": "Hull, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 61,
      "universityName": "Liverpool John Moores University",
      "program": "ALL Levels",
      "universityLocation": "Liverpool, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 62,
      "universityName": "University of Brighton",
      "program": "ALL Levels",
      "universityLocation": "Brighton, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 63,
      "universityName": "University of the West of England",
      "program": "ALL Levels",
      "universityLocation": "Bristol, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 64,
      "universityName": "University of Hertfordshire",
      "program": "ALL Levels",
      "universityLocation": "Hatfield, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 65,
      "universityName": "De Monfort University",
      "program": "ALL Levels",
      "universityLocation": "Leicester, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 66,
      "universityName": "University of Salford",
      "program": "ALL Levels",
      "universityLocation": "Salford, Greater Manchester, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 67,
      "universityName": "Keele University",
      "program": "ALL Levels",
      "universityLocation": "Keele, Staffordshire, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 68,
      "universityName": "Sheffield Hallam University",
      "program": "ALL Levels",
      "universityLocation": "Sheffield, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 69,
      "universityName": "University of East London",
      "program": "ALL Levels",
      "universityLocation": "London, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 70,
      "universityName": "University of Central Lancashire",
      "program": "ALL Levels",
      "universityLocation": "Preston, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 71,
      "universityName": "London South Bank University",
      "program": "ALL Levels",
      "universityLocation": "London, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 72,
      "universityName": "Kingston University",
      "program": "ALL Levels",
      "universityLocation": "Kingston upon Thames, London, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 73,
      "universityName": "University of Westminster",
      "program": "ALL Levels",
      "universityLocation": "London, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 74,
      "universityName": "University of Derby",
      "program": "ALL Levels",
      "universityLocation": "Derby, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 75,
      "universityName": "Edinburgh Napier University",
      "program": "ALL Levels",
      "universityLocation": "Edinburgh, Scotland, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 76,
      "universityName": "Glasgow Caledonian University",
      "program": "ALL Levels",
      "universityLocation": "Glasgow, Scotland, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 77,
      "universityName": "Robert Gordon University",
      "program": "ALL Levels",
      "universityLocation": "Aberdeen, Scotland, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 78,
      "universityName": "Birmingham City University",
      "program": "ALL Levels",
      "universityLocation": "Birmingham, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 79,
      "universityName": "London Metropolitan University",
      "program": "ALL Levels",
      "universityLocation": "London, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 80,
      "universityName": "University of West London",
      "program": "ALL Levels",
      "universityLocation": "London, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 81,
      "universityName": "Teesside University",
      "program": "ALL Levels",
      "universityLocation": "Middlesbrough, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 82,
      "universityName": "Leeds Beckett University",
      "program": "ALL Levels",
      "universityLocation": "Leeds, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 83,
      "universityName": "Aberystwyth University",
      "program": "ALL Levels",
      "universityLocation": "Aberystwyth, Wales, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 84,
      "universityName": "Bangor University",
      "program": "ALL Levels",
      "universityLocation": "Bangor, Wales, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 85,
      "universityName": "University of Lincoln",
      "program": "ALL Levels",
      "universityLocation": "Lincoln, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 86,
      "universityName": "University of Roehampton",
      "program": "ALL Levels",
      "universityLocation": "London, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 87,
      "universityName": "University of Chester",
      "program": "ALL Levels",
      "universityLocation": "Chester, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 88,
      "universityName": "University of Sunderland",
      "program": "ALL Levels",
      "universityLocation": "Sunderland, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 89,
      "universityName": "Canterbury Christ-Church University",
      "program": "ALL Levels",
      "universityLocation": "Canterbury, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 90,
      "universityName": "University of Bedfordshire",
      "program": "ALL Levels",
      "universityLocation": "Luton / Bedford, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 91,
      "universityName": "University of Northampton",
      "program": "ALL Levels",
      "universityLocation": "Northampton, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 92,
      "universityName": "Cardiff Metropolitan University",
      "program": "ALL Levels",
      "universityLocation": "Cardiff, Wales, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 93,
      "universityName": "University of South Wales",
      "program": "ALL Levels",
      "universityLocation": "Pontypridd / Cardiff, Wales, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 94,
      "universityName": "University of Wolverhampton",
      "program": "ALL Levels",
      "universityLocation": "Wolverhampton, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 95,
      "universityName": "Staffordshire University",
      "program": "ALL Levels",
      "universityLocation": "Stoke-on-Trent, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 96,
      "universityName": "University of Worcester",
      "program": "ALL Levels",
      "universityLocation": "Worcester, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 97,
      "universityName": "University of Gloucestershire",
      "program": "ALL Levels",
      "universityLocation": "Cheltenham / Gloucester, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 98,
      "universityName": "University of Winchester",
      "program": "ALL Levels",
      "universityLocation": "Winchester, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 99,
      "universityName": "York St John University",
      "program": "ALL Levels",
      "universityLocation": "York, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 100,
      "universityName": "Edge Hill University",
      "program": "ALL Levels",
      "universityLocation": "Ormskirk, Lancashire, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 101,
      "universityName": "University of Chichester",
      "program": "ALL Levels",
      "universityLocation": "Chichester, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 102,
      "universityName": "University of Bolton",
      "program": "ALL Levels",
      "universityLocation": "Bolton, Greater Manchester, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 103,
      "universityName": "University of Cumbria",
      "program": "ALL Levels",
      "universityLocation": "Carlisle / Lancaster, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 104,
      "universityName": "Bath Spa University",
      "program": "ALL Levels",
      "universityLocation": "Bath, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 105,
      "universityName": "Falmouth University",
      "program": "ALL Levels",
      "universityLocation": "Falmouth, Cornwall, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 106,
      "universityName": "University for the Creative Arts",
      "program": "ALL Levels",
      "universityLocation": "Farnham / Canterbury, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 107,
      "universityName": "Norwich Univesity of the Arts",
      "program": "ALL Levels",
      "universityLocation": "Norwich, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 108,
      "universityName": "Ravensbourne University London",
      "program": "ALL Levels",
      "universityLocation": "London, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 109,
      "universityName": "Solent University",
      "program": "ALL Levels",
      "universityLocation": "Southampton, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 110,
      "universityName": "University of Suffolk",
      "program": "ALL Levels",
      "universityLocation": "Ipswich, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 111,
      "universityName": "University of Buckingham",
      "program": "ALL Levels",
      "universityLocation": "Buckingham, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 112,
      "universityName": "Royal Agricultural University",
      "program": "ALL Levels",
      "universityLocation": "Cirencester, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 113,
      "universityName": "Liverpool Hope University",
      "program": "ALL Levels",
      "universityLocation": "Liverpool, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 114,
      "universityName": "St. Mary's University, Twickenham",
      "program": "ALL Levels",
      "universityLocation": "Twickenham, London, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 115,
      "universityName": "Queen Margaret University",
      "program": "ALL Levels",
      "universityLocation": "Edinburgh, Scotland, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 116,
      "universityName": "University of the Highlands and Islands",
      "program": "ALL Levels",
      "universityLocation": "Inverness, Scotland, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 117,
      "universityName": "University of Wales Trinity St. David",
      "program": "ALL Levels",
      "universityLocation": "Carmarthen / Swansea, Wales, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 118,
      "universityName": "Wrexham Glyndwr University",
      "program": "ALL Levels",
      "universityLocation": "Wrexham, Wales, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 119,
      "universityName": "Leeds Trinity University",
      "program": "ALL Levels",
      "universityLocation": "Leeds, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 120,
      "universityName": "Bishop Grosseteste University",
      "program": "ALL Levels",
      "universityLocation": "Lincoln, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 121,
      "universityName": "University College Birmingham",
      "program": "ALL Levels",
      "universityLocation": "Birmingham, England, UK",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    }
  ],
  "australia": [
    {
      "slNo": 1,
      "universityName": "University of New South Wales (UNSW) (Group of Eight)",
      "program": "ALL Levels",
      "universityLocation": "Sydney, New South Wales, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 2,
      "universityName": "The Australian National University (Group of Eight)",
      "program": "ALL Levels",
      "universityLocation": "Canberra, ACT, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 3,
      "universityName": "University of Queensland (Group of Eight)",
      "program": "ALL Levels",
      "universityLocation": "Brisbane, Queensland, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 4,
      "universityName": "The University of West Australia (Group of Eight)",
      "program": "ALL Levels",
      "universityLocation": "Perth, Western Australia, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 5,
      "universityName": "University of West Australia (Group of Eight)",
      "program": "ALL Levels",
      "universityLocation": "Perth, Western Australia, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 6,
      "universityName": "University of Adelaide (Group of Eight)",
      "program": "ALL Levels",
      "universityLocation": "Adelaide, South Australia, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 7,
      "universityName": "Royal Melbourne Institute of Technology (RMIT)",
      "program": "ALL Levels",
      "universityLocation": "Melbourne, Victoria, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 8,
      "universityName": "University of Wollongong",
      "program": "ALL Levels",
      "universityLocation": "Wollongong, New South Wales, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 9,
      "universityName": "The University of Newcastle",
      "program": "ALL Levels",
      "universityLocation": "Newcastle, New South Wales, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 10,
      "universityName": "Deakin University",
      "program": "ALL Levels",
      "universityLocation": "Melbourne / Geelong, Victoria, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 11,
      "universityName": "La Trobe University",
      "program": "ALL Levels",
      "universityLocation": "Melbourne, Victoria, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 12,
      "universityName": "Griffith University",
      "program": "ALL Levels",
      "universityLocation": "Brisbane / Gold Coast, Queensland, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 13,
      "universityName": "Swinburne University of Technology",
      "program": "ALL Levels",
      "universityLocation": "Melbourne, Victoria, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 14,
      "universityName": "University of Tasmania",
      "program": "ALL Levels",
      "universityLocation": "Hobart / Launceston, Tasmania, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 15,
      "universityName": "Flinders University",
      "program": "ALL Levels",
      "universityLocation": "Adelaide, South Australia, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 16,
      "universityName": "Western Sydney University",
      "program": "ALL Levels",
      "universityLocation": "Sydney, New South Wales, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 17,
      "universityName": "University of Southern Queensland",
      "program": "ALL Levels",
      "universityLocation": "Toowoomba, Queensland, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 18,
      "universityName": "University of Canberra",
      "program": "ALL Levels",
      "universityLocation": "Canberra, ACT, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 19,
      "universityName": "University of Canberra - Sydney Hills",
      "program": "ALL Levels",
      "universityLocation": "Sydney, New South Wales, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 20,
      "universityName": "Murdoch University",
      "program": "ALL Levels",
      "universityLocation": "Perth, Western Australia, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 21,
      "universityName": "James Cook University",
      "program": "ALL Levels",
      "universityLocation": "Townsville / Cairns, Queensland, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 22,
      "universityName": "Central Queensland University",
      "program": "ALL Levels",
      "universityLocation": "Rockhampton, Queensland, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 23,
      "universityName": "Edith Cowan University",
      "program": "ALL Levels",
      "universityLocation": "Perth, Western Australia, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 24,
      "universityName": "Bond University",
      "program": "ALL Levels",
      "universityLocation": "Gold Coast, Queensland, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 25,
      "universityName": "Charles Darwin University",
      "program": "ALL Levels",
      "universityLocation": "Darwin, Northern Territory, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 26,
      "universityName": "Southern Cross University",
      "program": "ALL Levels",
      "universityLocation": "Lismore / Gold Coast, NSW & QLD, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 27,
      "universityName": "Victoria University",
      "program": "ALL Levels",
      "universityLocation": "Melbourne, Victoria, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 28,
      "universityName": "Federation University",
      "program": "ALL Levels",
      "universityLocation": "Ballarat, Victoria, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 29,
      "universityName": "Charles Sturt University",
      "program": "ALL Levels",
      "universityLocation": "Bathurst / Wagga Wagga, NSW, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 30,
      "universityName": "Charles Sturt University - Melbourne",
      "program": "ALL Levels",
      "universityLocation": "Melbourne, Victoria, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 31,
      "universityName": "Charles Sturt University - Sydney",
      "program": "ALL Levels",
      "universityLocation": "Sydney, New South Wales, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 32,
      "universityName": "University of New England",
      "program": "ALL Levels",
      "universityLocation": "Armidale, New South Wales, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 33,
      "universityName": "University of the Sunshine Coast",
      "program": "ALL Levels",
      "universityLocation": "Sunshine Coast, Queensland, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 34,
      "universityName": "The University of Notre Dame Australia",
      "program": "ALL Levels",
      "universityLocation": "Fremantle / Sydney, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 35,
      "universityName": "Torrens University Australia",
      "program": "ALL Levels",
      "universityLocation": "Adelaide / Sydney / Melbourne, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 36,
      "universityName": "Kaplan Business School",
      "program": "ALL Levels",
      "universityLocation": "Sydney / Melbourne / Brisbane, Australia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    }
  ],
  "europe": [
    {
      "slNo": 1,
      "universityName": "Trinity College Dublin",
      "program": "ALL Levels",
      "universityLocation": "Dublin, Ireland",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 2,
      "universityName": "Uppsala University",
      "program": "ALL Levels",
      "universityLocation": "Uppsala, Sweden",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 3,
      "universityName": "University College Dublin",
      "program": "ALL Levels",
      "universityLocation": "Dublin, Ireland",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 4,
      "universityName": "University of Galway",
      "program": "ALL Levels",
      "universityLocation": "Galway, Ireland",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 5,
      "universityName": "Lappeenranta University (LUT)",
      "program": "ALL Levels",
      "universityLocation": "Lappeenranta, Finland",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 6,
      "universityName": "University of Limerick",
      "program": "ALL Levels",
      "universityLocation": "Limerick, Ireland",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 7,
      "universityName": "Tampere University",
      "program": "ALL Levels",
      "universityLocation": "Tampere, Finland",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 8,
      "universityName": "Dublin City University",
      "program": "ALL Levels",
      "universityLocation": "Dublin, Ireland",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 9,
      "universityName": "University of Debrecen",
      "program": "ALL Levels",
      "universityLocation": "Debrecen, Hungary",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 10,
      "universityName": "University of Zagreb",
      "program": "ALL Levels",
      "universityLocation": "Zagreb, Croatia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 11,
      "universityName": "University of Pecs",
      "program": "ALL Levels",
      "universityLocation": "Pécs, Hungary",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 12,
      "universityName": "Maynooth University",
      "program": "ALL Levels",
      "universityLocation": "Maynooth, Ireland",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 13,
      "universityName": "Technological University Dublin",
      "program": "ALL Levels",
      "universityLocation": "Dublin, Ireland",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 14,
      "universityName": "Technology University Dublin",
      "program": "ALL Levels",
      "universityLocation": "Dublin, Ireland",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 15,
      "universityName": "Linnaeus University",
      "program": "ALL Levels",
      "universityLocation": "Växjö / Kalmar, Sweden",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 16,
      "universityName": "Corvinus University of Budapest",
      "program": "ALL Levels",
      "universityLocation": "Budapest, Hungary",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 17,
      "universityName": "Obuda University",
      "program": "ALL Levels",
      "universityLocation": "Budapest, Hungary",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 18,
      "universityName": "Skema Business School",
      "program": "ALL Levels",
      "universityLocation": "Paris / Lille / Sophia Antipolis, France",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 19,
      "universityName": "Audencia Business School",
      "program": "ALL Levels",
      "universityLocation": "Nantes, France",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 20,
      "universityName": "Neoma Business School (France)",
      "program": "ALL Levels",
      "universityLocation": "Reims / Rouen / Paris, France",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 21,
      "universityName": "Halmstad University",
      "program": "ALL Levels",
      "universityLocation": "Halmstad, Sweden",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 22,
      "universityName": "Jonkoping University",
      "program": "ALL Levels",
      "universityLocation": "Jönköping, Sweden",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 23,
      "universityName": "University of Szczecin",
      "program": "ALL Levels",
      "universityLocation": "Szczecin, Poland",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 24,
      "universityName": "University of Sopron",
      "program": "ALL Levels",
      "universityLocation": "Sopron, Hungary",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 25,
      "universityName": "International University of Applied Sciences",
      "program": "ALL Levels",
      "universityLocation": "Berlin / Bad Honnef, Germany",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 26,
      "universityName": "University of Skovde",
      "program": "ALL Levels",
      "universityLocation": "Skövde, Sweden",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 27,
      "universityName": "Dalarna University",
      "program": "ALL Levels",
      "universityLocation": "Falun / Borlänge, Sweden",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 28,
      "universityName": "Kristianstad University",
      "program": "ALL Levels",
      "universityLocation": "Kristianstad, Sweden",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 29,
      "universityName": "Atlantic Technological University",
      "program": "ALL Levels",
      "universityLocation": "Galway / Sligo / Letterkenny, Ireland",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 30,
      "universityName": "Atlantic Technological University Sligo",
      "program": "ALL Levels",
      "universityLocation": "Sligo, Ireland",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 31,
      "universityName": "South East Technological University Carlow",
      "program": "ALL Levels",
      "universityLocation": "Carlow, Ireland",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 32,
      "universityName": "Southeast Technological University Carlow",
      "program": "ALL Levels",
      "universityLocation": "Carlow, Ireland",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 33,
      "universityName": "Technology University of the Shannon",
      "program": "ALL Levels",
      "universityLocation": "Athlone / Limerick, Ireland",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 34,
      "universityName": "Metropolia University of Applied Sciences",
      "program": "ALL Levels",
      "universityLocation": "Helsinki, Finland",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 35,
      "universityName": "Arcada University of Applied Sciences",
      "program": "ALL Levels",
      "universityLocation": "Helsinki, Finland",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 36,
      "universityName": "Satakunta University of Applied Sciences",
      "program": "ALL Levels",
      "universityLocation": "Pori, Finland",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 37,
      "universityName": "Kaajani University of Applied Sciences",
      "program": "ALL Levels",
      "universityLocation": "Kajaani, Finland",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 38,
      "universityName": "Universidad Europa (Spain)",
      "program": "ALL Levels",
      "universityLocation": "Madrid / Valencia, Spain",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 39,
      "universityName": "Universidad Católica San Antonio de Murcia (UCAM)",
      "program": "ALL Levels",
      "universityLocation": "Murcia, Spain",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 40,
      "universityName": "Universidad Católica San Antonio de Murcia (UCAM) (Spain)",
      "program": "ALL Levels",
      "universityLocation": "Murcia, Spain",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 41,
      "universityName": "Universidade Europeia",
      "program": "ALL Levels",
      "universityLocation": "Lisbon, Portugal",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 42,
      "universityName": "EBS University",
      "program": "ALL Levels",
      "universityLocation": "Oestrich-Winkel / Wiesbaden, Germany",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 43,
      "universityName": "SRH Berlin University of Applied Sciences",
      "program": "ALL Levels",
      "universityLocation": "Berlin, Germany",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 44,
      "universityName": "University of Europe for Applied Sciences",
      "program": "ALL Levels",
      "universityLocation": "Berlin / Potsdam / Hamburg, Germany",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 45,
      "universityName": "FOM University of Applied Sciences",
      "program": "ALL Levels",
      "universityLocation": "Essen / Berlin / Munich, Germany",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 46,
      "universityName": "FOM University of Applied Sciences for Economics & Management",
      "program": "ALL Levels",
      "universityLocation": "Essen / Berlin / Munich, Germany",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 47,
      "universityName": "PFH Private University of Applied Sciences",
      "program": "ALL Levels",
      "universityLocation": "Göttingen / Stade, Germany",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 48,
      "universityName": "CBS International Business School",
      "program": "ALL Levels",
      "universityLocation": "Cologne, Germany",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 49,
      "universityName": "EU Business School",
      "program": "ALL Levels",
      "universityLocation": "Munich / Barcelona / Geneva, Germany & Spain",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 50,
      "universityName": "European University - Barcelona (Spain)",
      "program": "ALL Levels",
      "universityLocation": "Barcelona, Spain",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 51,
      "universityName": "EAE Business School (Spain)",
      "program": "ALL Levels",
      "universityLocation": "Madrid / Barcelona, Spain",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 52,
      "universityName": "ICN Business School",
      "program": "ALL Levels",
      "universityLocation": "Nancy / Paris / Berlin, France",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 53,
      "universityName": "GISMA Business School",
      "program": "ALL Levels",
      "universityLocation": "Potsdam / Berlin, Germany",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 54,
      "universityName": "Berlin School of Business & Innovation",
      "program": "ALL Levels",
      "universityLocation": "Berlin, Germany",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 55,
      "universityName": "Wittenborg University of Applied Sciences",
      "program": "ALL Levels",
      "universityLocation": "Apeldoorn, Netherlands",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 56,
      "universityName": "University West",
      "program": "ALL Levels",
      "universityLocation": "Trollhättan, Sweden",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 57,
      "universityName": "Vistula University",
      "program": "ALL Levels",
      "universityLocation": "Warsaw, Poland",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 58,
      "universityName": "John Von Neumann University",
      "program": "ALL Levels",
      "universityLocation": "Kecskemét, Hungary",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 59,
      "universityName": "Budapest Metropolitan University",
      "program": "ALL Levels",
      "universityLocation": "Budapest, Hungary",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 60,
      "universityName": "Kodolanyi Janos University",
      "program": "ALL Levels",
      "universityLocation": "Budapest / Székesfehérvár, Hungary",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 61,
      "universityName": "University of Dunaujvaros",
      "program": "ALL Levels",
      "universityLocation": "Dunaújváros, Hungary",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 62,
      "universityName": "Anglo American University",
      "program": "ALL Levels",
      "universityLocation": "Prague, Czech Republic",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 63,
      "universityName": "Neapolis University Pafos",
      "program": "ALL Levels",
      "universityLocation": "Paphos, Cyprus",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 64,
      "universityName": "Le Cordon Bleu",
      "program": "ALL Levels",
      "universityLocation": "Paris, France",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 65,
      "universityName": "Instituto Europeo di Design (IED)",
      "program": "ALL Levels",
      "universityLocation": "Madrid / Barcelona / Milan, Spain & Italy",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 66,
      "universityName": "ESEI International Business School (Spain)",
      "program": "ALL Levels",
      "universityLocation": "Barcelona, Spain",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 67,
      "universityName": "Ostelea Tourism Management School (Spain)",
      "program": "ALL Levels",
      "universityLocation": "Madrid / Barcelona, Spain",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 68,
      "universityName": "International University SDI München",
      "program": "ALL Levels",
      "universityLocation": "Munich, Germany",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 69,
      "universityName": "International University SDI Munchen",
      "program": "ALL Levels",
      "universityLocation": "Munich, Germany",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 70,
      "universityName": "Stienbies School of Management & Innovation",
      "program": "ALL Levels",
      "universityLocation": "Berlin / Stuttgart, Germany",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 71,
      "universityName": "United Business Institute (UBI)",
      "program": "ALL Levels",
      "universityLocation": "Brussels, Belgium",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 72,
      "universityName": "College De Paris - Elfe (France)",
      "program": "ALL Levels",
      "universityLocation": "Paris, France",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 73,
      "universityName": "ISAM - International School of Agri Management (Spain)",
      "program": "ALL Levels",
      "universityLocation": "Almería, Spain",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 74,
      "universityName": "Vern University",
      "program": "ALL Levels",
      "universityLocation": "Zagreb, Croatia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 75,
      "universityName": "International European University",
      "program": "ALL Levels",
      "universityLocation": "Gzira, Malta",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 76,
      "universityName": "European Institute of Education",
      "program": "ALL Levels",
      "universityLocation": "Msida, Malta",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 77,
      "universityName": "IBA International Business Academy",
      "program": "ALL Levels",
      "universityLocation": "Kolding, Denmark",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 78,
      "universityName": "Eurasia Institute for International Education",
      "program": "ALL Levels",
      "universityLocation": "Berlin, Germany",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 79,
      "universityName": "Sports Management School",
      "program": "ALL Levels",
      "universityLocation": "Paris, France",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 80,
      "universityName": "Institut Culinare de France",
      "program": "ALL Levels",
      "universityLocation": "Bordeaux, France",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 81,
      "universityName": "IEFT - Tourism & Hospitality Management",
      "program": "ALL Levels",
      "universityLocation": "Paris, France",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    }
  ],
  "malaysia": [
    {
      "slNo": 1,
      "universityName": "Monash University Malaysia",
      "program": "ALL Levels",
      "universityLocation": "Bandar Sunway, Subang Jaya, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 2,
      "universityName": "University of Nottingham Malaysia",
      "program": "ALL Levels",
      "universityLocation": "Semenyih, Selangor, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 3,
      "universityName": "University of Southampton Malaysia",
      "program": "ALL Levels",
      "universityLocation": "Iskandar Puteri, Johor, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 4,
      "universityName": "University of Wollongong Malaysia",
      "program": "ALL Levels",
      "universityLocation": "Shah Alam / George Town, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 5,
      "universityName": "Taylor's University",
      "program": "ALL Levels",
      "universityLocation": "Subang Jaya, Selangor, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 6,
      "universityName": "UCSI University",
      "program": "ALL Levels",
      "universityLocation": "Cheras, Kuala Lumpur, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 7,
      "universityName": "Heriot-Watt University Malaysia",
      "program": "ALL Levels",
      "universityLocation": "Putrajaya, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 8,
      "universityName": "Sunway University",
      "program": "ALL Levels",
      "universityLocation": "Bandar Sunway, Selangor, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 9,
      "universityName": "INTI International University",
      "program": "ALL Levels",
      "universityLocation": "Nilai, Negeri Sembilan, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 10,
      "universityName": "Universiti Tenaga Nasional (UNITEN)",
      "program": "ALL Levels",
      "universityLocation": "Kajang / Putrajaya, Selangor, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 11,
      "universityName": "Asia Pacific University of Technology and Innovation (APU)",
      "program": "ALL Levels",
      "universityLocation": "Bukit Jalil, Kuala Lumpur, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 12,
      "universityName": "Lincoln University College",
      "program": "ALL Levels",
      "universityLocation": "Petaling Jaya, Selangor, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 13,
      "universityName": "SEGi University",
      "program": "ALL Levels",
      "universityLocation": "Kota Damansara, Petaling Jaya, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 14,
      "universityName": "Multimedia University (MMU)",
      "program": "ALL Levels",
      "universityLocation": "Cyberjaya / Melaka, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 15,
      "universityName": "International Medical University (IMU)",
      "program": "ALL Levels",
      "universityLocation": "Bukit Jalil, Kuala Lumpur, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 16,
      "universityName": "University of Cyberjaya",
      "program": "ALL Levels",
      "universityLocation": "Cyberjaya, Selangor, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 17,
      "universityName": "Universiti Teknikal Malaysia Melaka (UTeM)",
      "program": "ALL Levels",
      "universityLocation": "Durian Tunggal, Melaka, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 18,
      "universityName": "Universiti Kuala Lumpur (UniKL)",
      "program": "ALL Levels",
      "universityLocation": "Kuala Lumpur, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 19,
      "universityName": "MAHSA University",
      "program": "ALL Levels",
      "universityLocation": "Bandar Saujana Putra, Selangor, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 20,
      "universityName": "Tunku Abdul Rahman University of Management and Technology (TAR UMT)",
      "program": "ALL Levels",
      "universityLocation": "Setapak, Kuala Lumpur, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 21,
      "universityName": "Asia Metropolitan University (AMU)",
      "program": "ALL Levels",
      "universityLocation": "Johor Bahru / Cheras, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 22,
      "universityName": "Australian National Institute of Business and Technology (ANIBT)",
      "program": "ALL Levels",
      "universityLocation": "Kuala Lumpur, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 23,
      "universityName": "City University",
      "program": "ALL Levels",
      "universityLocation": "Petaling Jaya, Selangor, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 24,
      "universityName": "International College of Management (ICMS)",
      "program": "ALL Levels",
      "universityLocation": "Petaling Jaya, Selangor, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 25,
      "universityName": "MILA University",
      "program": "ALL Levels",
      "universityLocation": "Nilai, Negeri Sembilan, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 26,
      "universityName": "Nilai University",
      "program": "ALL Levels",
      "universityLocation": "Nilai, Negeri Sembilan, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 27,
      "universityName": "University College MAIWP International (UCMI)",
      "program": "ALL Levels",
      "universityLocation": "Batu Muda, Kuala Lumpur, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 28,
      "universityName": "University College of Aviation Malaysia (UNICAM)",
      "program": "ALL Levels",
      "universityLocation": "Dengkil, Selangor, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 29,
      "universityName": "University Malaysia of Computer Science & Engineering (UNIMY)",
      "program": "ALL Levels",
      "universityLocation": "Petaling Jaya, Selangor, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 30,
      "universityName": "Universiti Tun Abdul Razak (UniRazak)",
      "program": "ALL Levels",
      "universityLocation": "Kuala Lumpur, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 31,
      "universityName": "UNITAR International University",
      "program": "ALL Levels",
      "universityLocation": "Kelana Jaya, Petaling Jaya, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 32,
      "universityName": "Universiti Poly-Tech Malaysia (UPTM)",
      "program": "ALL Levels",
      "universityLocation": "Cheras, Kuala Lumpur, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 33,
      "universityName": "University of Malaya-Wales (UM-Wales)",
      "program": "ALL Levels",
      "universityLocation": "Kuala Lumpur, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    },
    {
      "slNo": 34,
      "universityName": "Veritas University College",
      "program": "ALL Levels",
      "universityLocation": "Petaling Jaya, Selangor, Malaysia",
      "internationalScholarship": "Varies by student eligibility and current semester university scholarship offers."
    }
  ]
};
