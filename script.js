let testimonials = [
    {
        name: "Joseph P",
        image: "test2.jpg",
        country: "Canada",
        text: "I've tried numerous cleaning services over the years, but none have come close to the professionalism and attention to detail of Sparkle Cleaners. From the moment they walked in, I knew my home was in good hands. Their team not only cleaned every nook and cranny but also left behind a fresh, invigorating scent that lasted for days.",
    },

        {
            name: "Sarah W",
            image: "test1.jpg",
            country: "USA",
            text: "As a busy professional, I often struggle to find the time to keep my house in order. That's where Clean Sweep Cleaning Services comes in. Their efficient and thorough cleaning left my home looking immaculate, giving me the peace of mind to focus on my work without worrying about household chores. Their friendly staff and exceptional service make them my go-to cleaning company!",
        },
            {
                name: "Emily L",
                image: "test4.jpg",
                country: "Canada",
                text: "I was hesitant to hire a cleaning service at first, but after trying out Fresh Start Cleaners, I'm kicking myself for not doing it sooner! From their prompt arrival to their meticulous cleaning techniques, every aspect of their service exceeded my expectations. My house has never looked or felt cleaner. Thank you, Fresh Start Cleaners, for making my home a haven!",
            },

                {
                    name: "David H",
                    image: "test3.jpg",
                    country: "Canada",
                    text: "I've had the pleasure of using Shine Bright Cleaning Services for both my home and office, and I couldn't be happier with the results. Their dedication to customer satisfaction is evident in every interaction, and their commitment to using eco-friendly products aligns perfectly with my values. With Shine Bright, I not only get a sparkling clean space but also the peace of mind knowing I'm contributing to a healthier planet. Highly recommended!" ,
                },


];

//Current Slide

let i = 0;

//Total Slides 

let j = testimonials.length;

let input = document.getElementById('input');
let next = document.getElementById('next');
let previous = document.getElementById('previous');

let displayTestimonial = () => {
    input.innerHTML = `<p>${testimonials[i].text}</p>
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].country}</h6>`
};
window.onload = displayTestimonial;

next.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
});

previous.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
});