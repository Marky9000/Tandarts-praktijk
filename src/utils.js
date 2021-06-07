
import { nanoid } from "nanoid"

const patients = [
  {id:nanoid(),name:"Woodie",surname:"Stook",email:"wstook0@histats.com",phone:"+62-607-711-1611",birthyear:1991,sick:false},
  {id:nanoid(),name:"Janine",surname:"Emlen",email:"jemlen1@4shared.com",phone:"+66-357-970-9476",birthyear:1955,sick:false},
  {id:nanoid(),name:"Katherina",surname:"Ensley",email:"kensley2@technorati.com",phone:"+33-747-321-2239",birthyear:2006,sick:false},
  {id:nanoid(),name:"Benedicto",surname:"MacLice",email:"bmaclice3@stumbleupon.com",phone:"+62-775-715-1294",birthyear:2006,sick:false},
  {id:nanoid(),name:"Alika",surname:"Vase",email:"avase4@people.com.cn",phone:"+51-497-799-2876",birthyear:2010,sick:false},
  {id:nanoid(),name:"Dominique",surname:"Klemz",email:"dklemz5@mashable.com",phone:"+374-392-570-0679",birthyear:1900,sick:false},
  {id:nanoid(),name:"Maxie",surname:"Hughes",email:"mhughes6@reuters.com",phone:"+86-622-976-1191",birthyear:1914,sick:false},
  {id:nanoid(),name:"Maura",surname:"Boustead",email:"mboustead7@google.nl",phone:"+55-392-738-3622",birthyear:2012,sick:false},
  {id:nanoid(),name:"Rivy",surname:"Grievson",email:"rgrievson8@reference.com",phone:"+55-739-524-2668",birthyear:1974,sick:false},
  {id:nanoid(),name:"Gilberto",surname:"Carrane",email:"gcarrane9@over-blog.com",phone:"+86-201-858-1239",birthyear:1954,sick:false},
  {id:nanoid(),name:"Delmor",surname:"Ingleton",email:"dingletona@aol.com",phone:"+351-147-725-5958",birthyear:1966,sick:false},
  {id:nanoid(),name:"Zechariah",surname:"Gull",email:"zgullb@desdev.cn",phone:"+351-675-796-1411",birthyear:2018,sick:false},
  {id:nanoid(),name:"Linus",surname:"Celler",email:"lcellerc@vinaora.com",phone:"+381-192-732-9575",birthyear:1983,sick:false},
  {id:nanoid(),name:"Jamey",surname:"Attwooll",email:"jattwoolld@simplemachines.org",phone:"+86-617-187-4921",birthyear:2008,sick:false},
  {id:nanoid(),name:"Klara",surname:"Powney",email:"kpowneye@nyu.edu",phone:"+86-995-834-9042",birthyear:1945,sick:false},
  {id:nanoid(),name:"Flore",surname:"Davidek",email:"fdavidekf@ox.ac.uk",phone:"+66-615-262-4277",birthyear:1901,sick:false},
  {id:nanoid(),name:"Ola",surname:"Cunniff",email:"ocunniffg@pagesperso-orange.fr",phone:"+380-769-370-8006",birthyear:1913,sick:false},
  {id:nanoid(),name:"Penny",surname:"Lawty",email:"plawtyh@wiley.com",phone:"+86-755-258-7668",birthyear:1962,sick:false},
  {id:nanoid(),name:"De witt",surname:"Trethowan",email:"dtrethowani@springer.com",phone:"+86-702-520-0717",birthyear:1965,sick:false},
  {id:nanoid(),name:"Devin", surname: "Paton", email: "dpatonj@unicef.org", phone: "+81-675-892-5566", birthyear: 2009, sick: false },
  {id:nanoid(),name:"Woodie",surname:"Stook",email:"wstook0@histats.com",phone:"+62-607-711-1611",birthyear:1991,sick:false},
  {id:nanoid(),name:"Janine",surname:"Emlen",email:"jemlen1@4shared.com",phone:"+66-357-970-9476",birthyear:1955,sick:false},
  {id:nanoid(),name:"Katherina",surname:"Ensley",email:"kensley2@technorati.com",phone:"+33-747-321-2239",birthyear:2006,sick:false},
  {id:nanoid(),name:"Benedicto",surname:"MacLice",email:"bmaclice3@stumbleupon.com",phone:"+62-775-715-1294",birthyear:2006,sick:false},
  {id:nanoid(),name:"Alika",surname:"Vase",email:"avase4@people.com.cn",phone:"+51-497-799-2876",birthyear:2010,sick:false},
  {id:nanoid(),name:"Dominique",surname:"Klemz",email:"dklemz5@mashable.com",phone:"+374-392-570-0679",birthyear:1900,sick:false},
  {id:nanoid(),name:"Maxie",surname:"Hughes",email:"mhughes6@reuters.com",phone:"+86-622-976-1191",birthyear:1914,sick:false},
  {id:nanoid(),name:"Maura",surname:"Boustead",email:"mboustead7@google.nl",phone:"+55-392-738-3622",birthyear:2012,sick:false},
  {id:nanoid(),name:"Rivy",surname:"Grievson",email:"rgrievson8@reference.com",phone:"+55-739-524-2668",birthyear:1974,sick:false},
  {id:nanoid(),name:"Gilberto",surname:"Carrane",email:"gcarrane9@over-blog.com",phone:"+86-201-858-1239",birthyear:1954,sick:false},
  {id:nanoid(),name:"Delmor",surname:"Ingleton",email:"dingletona@aol.com",phone:"+351-147-725-5958",birthyear:1966,sick:false},
  {id:nanoid(),name:"Zechariah",surname:"Gull",email:"zgullb@desdev.cn",phone:"+351-675-796-1411",birthyear:2018,sick:false},
  {id:nanoid(),name:"Linus",surname:"Celler",email:"lcellerc@vinaora.com",phone:"+381-192-732-9575",birthyear:1983,sick:false},
  {id:nanoid(),name:"Jamey",surname:"Attwooll",email:"jattwoolld@simplemachines.org",phone:"+86-617-187-4921",birthyear:2008,sick:false},
  {id:nanoid(),name:"Klara",surname:"Powney",email:"kpowneye@nyu.edu",phone:"+86-995-834-9042",birthyear:1945,sick:false},
  {id:nanoid(),name:"Flore",surname:"Davidek",email:"fdavidekf@ox.ac.uk",phone:"+66-615-262-4277",birthyear:1901,sick:false},
  {id:nanoid(),name:"Ola",surname:"Cunniff",email:"ocunniffg@pagesperso-orange.fr",phone:"+380-769-370-8006",birthyear:1913,sick:false},
  {id:nanoid(),name:"Penny",surname:"Lawty",email:"plawtyh@wiley.com",phone:"+86-755-258-7668",birthyear:1962,sick:false},
  {id:nanoid(),name:"De witt",surname:"Trethowan",email:"dtrethowani@springer.com",phone:"+86-702-520-0717",birthyear:1965,sick:false},
  {id:nanoid(),name:"Devin",surname:"Paton",email:"dpatonj@unicef.org",phone:"+81-675-892-5566",birthyear:2009,sick:false}
];

const dentists = [
  {id:nanoid(),name:"Paul",surname:"Thormwell",occupation: "dentist",phone:"602-899-8744",email:"pthormwell46@tandartspraktijkbvt.nl",birthyear:1972,sick:true},
  {id:nanoid(),name:"Philippe",surname:"McCroft",occupation: "dentist",phone:"819-421-0464",email:"pmccroft47@tandartspraktijkbvt.nl",birthyear:1996,sick:false},
  {id:nanoid(),name:"Francesco",surname:"Worpole",occupation: "dentist",phone:"627-716-4884",email:"fworpole48@tandartspraktijkbvt.nl",birthyear:1989,sick:false},
  {id:nanoid(),name:"Ede",surname:"Sackur",occupation: "dentist",phone:"324-221-5789",email:"esackur49@tandartspraktijkbvt.nl",birthyear:1978,sick:false},
]
const assistents = [
  {id:nanoid(),name:"Arturo",surname:"Atter",occupation: "assistent",phone:"894-351-2892",email:"aatter4a@tandartspraktijkbvt.nl",birthyear:1975,sick:false},
  {id:nanoid(),name:"Valerie",surname:"Birchall",occupation: "assistent",phone:"792-318-5201",email:"vbirchall4b@tandartspraktijkbvt.nl",birthyear:1979,sick:false},
]

const getRandomPatient = () => {
  const person = patients[Math.floor(Math.random() * 40)];
  return person;
}
const getRandomDentist = () => {
  const person = dentists[Math.floor(Math.random() * 4)];
  return person;
}
const getRandomAssistent = () => {
  const person = assistents[Math.floor(Math.random() * 2)];
  return person;
}

const getRandomTime = () => {
  let hour;
  while (true) {
    hour = Math.floor(Math.random() * 24);
    if (hour > 7 && hour < 19) {
      return hour;
    }
  }
}

const getRandomDay = () => Math.floor(Math.random() * 28) + 1;

const generateRandomAppointment = () => ({
  id: nanoid(),
  day: getRandomDay(),
  time: getRandomTime(),
  patient: getRandomPatient(),
  dentist: getRandomDentist(),
  assistent: getRandomAssistent(),
});

const generateRandomAppointments = num =>
  Array(num)
    .fill(0)
    .map(_ => generateRandomAppointment());

export default generateRandomAppointments;