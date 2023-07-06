const mobileMenu = document.getElementById("mobileMenu");
const mobileNavigation = document.getElementById("mobileNavigation");


mobileNavigation.style.display = "none";


mobileMenu.addEventListener("click", () => {

  mobileNavigation.style.display = (mobileNavigation.style.display === "none") ? "block" : "none";
});



// dynamic js
  

const speakers = [
  {
    name: 'Mark Williams',
    qualification: 'Masters in Instructional Design',
    background: 'Seasoned instructional designer with expertise in developing innovative learning solutions.',
    imageSrc: 'https://mershark.github.io/images/human1.svg',
  },
  {
    name: 'Dr. Sophia Lee',
    qualification: 'PhD in Education Technology',
    background: 'Experienced researcher and educator specializing in the intersection of technology and learning.',
    imageSrc: 'https://mershark.github.io/images/human2.svg',
  },
  {
    name: 'Dr. Robert Chen',
    qualification: 'Doctorate in Artificial Intelligence',
    background: 'Renowned AI researcher and advocate for leveraging technology to enhance educational access and equity.',
    imageSrc: 'https://mershark.github.io/images/human3.svg',
  },
  {
    name: 'Sarah Johnson',
    qualification: 'Masters in Educational Psychology',
    background: 'Accomplished educational psychologist with a deep understanding of learner engagement and motivation.',
    imageSrc: 'https://mershark.github.io/images/human1.svg',
  },
  {
    name: 'Michael Thompson',
    qualification: 'PhD in Education Technology',
    background: 'Extensive experience in developing AI-powered tutoring systems',
    imageSrc: 'https://mershark.github.io/images/human4.svg',
  },
  {
    name: 'David Mitchell',
    qualification: 'Masters in Computer Science',
    background: 'Specializes in educational game development and immersive learning experiences',
    imageSrc: 'https://mershark.github.io/images/human3.svg',
  },
];

const speakersContainer = document.getElementById('speakersContainer');
let currentRow;
let numSpeakersPerLoad = 2;

function renderSpeakers(loadMore = false) {
  if (!loadMore) {
    speakersContainer.innerHTML = '';
  }

  const isMobileMode = window.innerWidth <= 768;
  const numSpeakersToShow = isMobileMode ? numSpeakersPerLoad : speakers.length;

  const startingIndex = loadMore ? speakersContainer.children.length : 0;

  // loop through speakers in array
  for (let i = startingIndex; i < startingIndex + numSpeakersToShow; i++) {
    const speaker = speakers[i];

   
    if (isMobileMode && i % 2 === 0) {
      currentRow = document.createElement('div');
      currentRow.className = 'row';
      speakersContainer.appendChild(currentRow);
    }

   
    const speakerCard = document.createElement('div');
    speakerCard.className = 'row-md-6';

  
    const cardContent = `
      <div class="speaker-card">
        <img src="${speaker.imageSrc}" alt="${speaker.name}" class="image-fluid">
        <h3>${speaker.name}</h3>  
        <p class="speakerQual">${speaker.qualification}</p> 
        <p class="speakerBg">${speaker.background}</p>
      </div>
    `;

 
    speakerCard.innerHTML = cardContent;

    
    if (isMobileMode && currentRow) {
      currentRow.appendChild(speakerCard);
    } else {
      speakersContainer.appendChild(speakerCard);
    }

   
    if (isMobileMode) {
      speakerCard.style.width = '100%';
    }
  }
}

renderSpeakers();

// Mobile btn
const button = document.getElementById('mobileScreenButton');
button.addEventListener('click', () => {
  numSpeakersPerLoad += 2; 
  renderSpeakers(true);
});