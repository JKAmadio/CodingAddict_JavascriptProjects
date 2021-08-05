const people = [
{
	id: 1,
	name: "susan smith",
	job: "web developer",
	img:
	"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
	text:
	"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
},
{
	id: 2,
	name: "anna johnson",
	job: "web designer",
	img:
	"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
	text:
	"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
},
{
	id: 3,
	name: "peter jones",
	job: "intern",
	img:
	"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
	text:
	"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
},
{
	id: 4,
	name: "bill anderson",
	job: "the boss",
	img:
	"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
	text:
	"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
},
];

const personImage = document.getElementById('person__image')
const personName = document.getElementById('person__name')
const personJob = document.getElementById('person__job')
const personText = document.getElementById('person__text')

const buttonLeft = document.getElementById('button__left')
const buttonRight = document.getElementById('button__right')
const buttonRandom = document.getElementById('button__random')

let counter = 0

buttonLeft.addEventListener("click", () => {
	counter = (counter - 1) % people.length;
	if (counter < 0)
	{
		counter = people.length - 1
		changePerson(people[counter])
	}
	else
		changePerson(people[counter])
})

buttonRight.addEventListener("click", () => {
	counter = (counter + 1) % people.length;
	changePerson(people[counter])
})

buttonRandom.addEventListener("click", () => {
	let randomCounter = Math.floor(Math.random() * people.length)
	counter = randomCounter
	changePerson(people[counter])
})

function changePerson(person) {
	personImage.src = person.img
	personName.textContent = person.name
	personJob.textContent = person.job
	personText.textContent = person.text
}