const students = [
  {
    firstname: 'Andy',
    lastName: 'Schunke',
    descr:
      'My name is Andy and I was a former programmer and team leader in the CNC field. Now, I put all my passion and love into web and application technologies',
    frontEndPosition: true,
    backEndPosition: true,
    fullstackPosition: false,
    remote: true,
    local: false,
    links: [
      { label: 'Github', url: 'https://github.com/D-Nayte' },
      { label: 'Linkedin', url: 'https://www.linkedin.com/in/andy-schunke/' },
      { label: 'MMM Online Game', url: 'https://manmakesmonster.com/' },
    ],
    email: 'schunke.andy@gmail.com',
    image: '/studentImages/andySchunke.jpg', // or "null" if you dont want to use a picture
    country: 'Germany',
    countryCode: 'DE',
  },
  {
    firstname: 'Noam',
    lastName: 'Rivlin',
    descr:
      'My name is Noam, I was working in technical support and there I learned about web development. Now I’m eager to create and contribute to new and interesting projects.',
    frontEndPosition: true,
    backEndPosition: true,
    fullstackPosition: true,
    remote: true,
    local: true,
    links: [
      { label: 'Github', url: 'https://github.com/NoamRivlin' },
      { label: 'Linkedin', url: 'https://www.linkedin.com/in/noam-rivlin/' },
    ],
    email: 'Noam.rivlin15@gmail.com',
    image: '/studentImages/noamRivlin.jpg', // or "null" if you dont want to use a picture
    country: 'Israel',
    countryCode: 'IL',
  },
  {
    firstname: 'Ronnen',
    lastName: 'Podolsky',
    descr:
      "Former Senior Product manager at a SaaS Startup, now a Full Stack Developer! I love React and I'm looking for a team where I can contribute to a web product.",
    frontEndPosition: true,
    backEndPosition: false,
    fullstackPosition: true,
    remote: true,
    local: true,
    links: [
      { label: 'Github', url: 'https://github.com/RonnenPodolsky' },
      {
        label: 'Linkedin',
        url: 'https://www.linkedin.com/in/ronnen-podolsky-806905172/',
      },
    ],
    email: 'podolsky.ronnen@gmail.com',
    image: '/studentImages/ronnenPodolsky.png', // or "null" if you dont want to use a picture
    country: 'Israel',
    countryCode: 'IL',
  },
  {
    firstname: 'Nicholas',
    lastName: 'Otieno',
    descr:
      "I'm Nicholas, a web developer with a passion for excellence and a believer of team-work. I am also an avid learner, constantly exploring new technologies in web development.",
    frontEndPosition: true,
    backEndPosition: false,
    fullstackPosition: true,
    remote: true,
    local: true,
    links: [
      { label: 'Github', url: 'https://github.com/Niklus' },
      { label: 'Linkedin', url: 'https://www.linkedin.com/in/nicholas-otieno' },
    ],
    email: 'niklasoti@gmail.com',
    image: '/studentImages/nicholasOtieno.png',
    country: 'Sweden',
    countryCode: 'SE',
  },
  {
    firstname: 'Joseph',
    lastName: 'Ugiagbe',
    descr:
      'I was a wordpress web designer, I have upskilled as a JavaScript fullstack developer. I am opened to contribute to interesting projects, also to learn and upgrade my skill with new web technologies.',
    frontEndPosition: true,
    backEndPosition: true,
    fullstackPosition: true,
    remote: true,
    local: true,
    links: [
      { label: 'Github', url: 'https://github.com/blessedjoe2000' },
      {
        label: 'Linkedin',
        url: 'https://www.linkedin.com/in/joseph-ugiagbe-7b99b093/',
      },
    ],
    email: 'blessedjoe2000@gmail.com',
    image: '/studentImages/josephU.jpg',
    country: 'United Kingdom',
    countryCode: 'GB',
  },
  {
    firstname: 'Iuliia',
    lastName: 'Sutygina',
    descr:
      "Hi, my background is in sales and hospitality. A small hobby of beta testing Coursera courses led to my career change into web development and, recently, curiosity in cyber security.",
    frontEndPosition: true,
    backEndPosition: true,
    fullstackPosition: true,
    remote: true,
    local: false,
    links: [
      { label: 'Github', url: 'https://github.com/juliasut' },
      { label: 'Linkedin', url: 'https://www.linkedin.com/in/juliasut/' },
      { label: 'Website', url: 'https://juliasut.github.io/portfolio/' },
    ],
    email: 'iuliiasutygina@gmail.com',
    image: '/studentImages/iuliiaSutygina.jpg', // or "null" if you dont want to use a picture
    country: 'Canada',
    countryCode: 'CA',
  },
];

export function searchStudent(query) {
  if (!students) return;
  if (query === '') return students;

  const result = students.filter((student) => {
    const lowerCaseQuery = query.toLowerCase();
    return Object.entries(student).some(([entrie, value]) => {
      if (entrie === 'remote') {
        return value && lowerCaseQuery.includes('remot');
      }
      if (entrie === 'local') {
        return value && lowerCaseQuery.includes('loca');
      }
      if (typeof value === 'string') {
        const lowerCaseValue = value.toLowerCase();
        if (lowerCaseValue.includes(lowerCaseQuery)) {
          return true;
        }
      }
      if (entrie.toLocaleLowerCase().includes('position')) {
        return value && entrie.toLocaleLowerCase().includes(lowerCaseQuery);
      }
      return false;
    });
  });
  if (result.length === 0) return students;
  return result;
}

export default searchStudent;
