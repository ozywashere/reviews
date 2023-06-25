const reviews = [
  {
    id: '1',
    author: 'Susan Smith',
    job: 'Web Developer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: '2',
    author: 'Anna Johnson',
    job: 'Web Designer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell',
  },
  {
    id: '3',
    author: 'Peter Jones',
    job: 'Intern',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: "Squid tumblr pop-up waistcoat godard, live-edge blue bottle 90's beard. Poutine iceland helvetica mlkshk brooklyn",
  },
  {
    id: '4',
    author: 'Bill Anderson',
    job: 'The Boss',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.',
  },
]

const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')

let currentItem = 3

//load initial item
window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem)
})

//show person based on item
function showPerson(person) {
  const item = reviews[person]
  console.log(item)
  img.src = item.img
  author.textContent = item.author
  job.textContent = item.job
  info.textContent = item.text
}

//show next person
nextBtn.addEventListener('click', function () {
  currentItem++
  if (currentItem > reviews.length - 1) {
    currentItem = 0
  }
  showPerson(currentItem)
})

//show prev person
prevBtn.addEventListener('click', function () {
  currentItem--
  if (currentItem < 0) {
    currentItem = reviews.length - 1
  }
  showPerson(currentItem)
})
