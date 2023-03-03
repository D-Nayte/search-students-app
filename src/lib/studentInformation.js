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
    ],
    email: 'schunke.andy@gmail.com',
    image: '/studentImages/andySchunke.jpg', // or "null" if you dont want to use a picture
    country: 'Germany',
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
