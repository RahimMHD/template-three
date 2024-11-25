


const lendingContainer = document.querySelector(".lending .container");
const containerImage = document.getElementById("container-image");

const containerImageOne = document.querySelector(".lending .container .image .one");
const containerImageTwo = document.querySelector(".lending .container .image .two");
const containerImageThree = document.querySelector(".lending .container .image .three");
const containerImageFour = document.querySelector(".lending .container .image .four");
const containerImageFive = document.querySelector(".lending .container .image .five");
const containerImageSex = document.querySelector(".lending .container .image .sex");
const containerImageSeven = document.querySelector(".lending .container .image .seven");


const containerH = document.querySelector(".lending .container .info h1");
const containerP = document.querySelector(".lending .container .info p");

const gamesFirst = document.querySelectorAll("#gamesFirst")
const gamesSecond = document.querySelectorAll("#gamesSecond")

const boxesOne = document.querySelectorAll(".first")
const boxesTwo = document.querySelectorAll(".second")

const features = document.querySelectorAll(".features .container .box");

const testimonials = document.querySelectorAll(".testimonials .container .box");

const team = document.querySelectorAll(".team .container .box");

const services = document.querySelectorAll(".services .container .box");

const skillsimage = document.querySelector(".skills .container .image");
const skills = document.querySelectorAll(".skills .container .info .lang");

const worklmage = document.querySelector(".work .container .image");
const work = document.querySelectorAll(".work .container .info");

const eventsImage = document.querySelector(".event .container img");
const events = document.querySelector(".event .container .info");
const eventsD = document.querySelector(".event .container .info #days");
const eventsH = document.querySelector(".event .container .info #hours");
const eventsM = document.querySelector(".event .container .info #minutes");
const eventsS = document.querySelector(".event .container .info #second");
const eventsForm = document.querySelector(".event .container form");

const price = document.querySelectorAll(".price .container .box");

const video = document.querySelector(".video");

const stats = document.querySelectorAll(".stats .container .box");
const statsValue = document.querySelectorAll(".stats .container .box h3");

const discountColH = document.querySelector(".discount .box .pay .col h2");
const discountColP = document.querySelector(".discount .box .pay .col p");
const discountimage = document.querySelector(".discount .box .pay .col img");
const discountInput = document.querySelectorAll(".discount .box .request .input");
const discountLink = document.querySelector(".discount .box .request .link");

setTimeout(() => {
    containerH.classList.add("move-up");
}, 400)
setTimeout(() => {
    containerP.classList.add("move-up");
}, 700)


const option = {
    threshold: 0.7,
};

const sectionObserve = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("move-up")
            sectionObserve.unobserve(entry.target)
        }
    });
}, option);

sectionObserve.observe(containerImage);

setTimeout(() => {
    sectionObserve.observe(containerImageOne);
    setTimeout(() => {
        sectionObserve.observe(containerImageTwo);
        setTimeout(() => {
            sectionObserve.observe(containerImageThree);
            setTimeout(() => {
                sectionObserve.observe(containerImageFour);
                setTimeout(() => {
                    sectionObserve.observe(containerImageFive);
                    setTimeout(() => {
                        sectionObserve.observe(containerImageSex);
                        setTimeout(() => {
                            sectionObserve.observe(containerImageSeven);
                        }, 200);
                    }, 200);
                }, 200);
            }, 200);
        }, 200);
    }, 200);
}, 500)


gamesFirst.forEach(item => sectionObserve.observe(item));
gamesSecond.forEach(item => sectionObserve.observe(item));

boxesOne.forEach(item => sectionObserve.observe(item));
boxesTwo.forEach(item => sectionObserve.observe(item));

features.forEach(item => sectionObserve.observe(item));

testimonials.forEach(item => sectionObserve.observe(item));

team.forEach(item => sectionObserve.observe(item));

services.forEach(item => sectionObserve.observe(item));

skills.forEach(item => sectionObserve.observe(item));
sectionObserve.observe(skillsimage);

work.forEach(item => sectionObserve.observe(item));
sectionObserve.observe(worklmage);

sectionObserve.observe(events);
sectionObserve.observe(eventsImage);
sectionObserve.observe(eventsForm);

price.forEach(item => sectionObserve.observe(item));

sectionObserve.observe(video);

stats.forEach(item => sectionObserve.observe(item));

sectionObserve.observe(discountColH);
sectionObserve.observe(discountColP);
sectionObserve.observe(discountimage);
discountInput.forEach(item => sectionObserve.observe(item));

sectionObserve.observe(discountLink);


const myUpdatTime = setInterval(myTime, 1000);

const minutetest = 1000 * 60;
const hourtest = minutetest * 60;
const daytest = hourtest * 24;
const mounthtest = daytest * 30;

function myTime() {
    const time = new Date();
    eventsD.innerHTML = Math.trunc(time.getTime() / daytest - 19170);
    eventsH.innerHTML = time.getHours();
    eventsM.innerHTML = time.getMinutes();
    eventsS.innerHTML = time.getSeconds();
}

let updateStateObserv = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            const updateCount = () => {
                const dataTarget = entry.target.getAttribute("data-target");
                const text = +entry.target.innerHTML;

                const increment = Math.floor((dataTarget - text) / speed);

                if (text < dataTarget && increment > 0) {
                    entry.target.innerHTML = text + increment;
                    setTimeout(updateCount, 30);
                } else {
                    entry.target.innerHTML = dataTarget;
                }
            }
            updateCount();
            updateStateObserv.unobserve(entry.target);
        }
    });
}, option);

const speed = 10;

statsValue.forEach(item => updateStateObserv.observe(item));
    
    
window.addEventListener('scroll', function() {
	var value = window.scrollY * 0.09;
	lendingContainer.style.transform = `perspective(2000px) rotateX(-${value}deg)`; 
});
