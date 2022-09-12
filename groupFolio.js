

let details = [
    {
        name: "Olanrewaju Olalekan Sanni",
        firstParagraph: "",
        secondParagraph: "",
        thirdParagraph: "",
        profileImage: "./images/omotara.jpg",
        gitHub: "https:github.com/laaryleeky",
        twitter: "https://twitter.com/the_regular_1",
        phoneNum: "+2348087857498",
        emailAddress: "Olanrewajusanni1000@gmail.com"
    },
    {
        name: "Marvelous",
        firstParagraph: "",
        secondParagraph: "",
        thirdParagraph: "",
        profileImage: "./images/",
        gitHub: "https://github.com/meetmarvelous",
        twitter: "https://twitter.com/MeetMarvelous",
        phoneNum: "+2348154755551",
        emailAddress: "meetmarvelous@gmail.com"
    },
    {
        name: "Elizabeth",
        firstParagraph: "",
        secondParagraph: "",
        thirdParagraph: "",
        profileImage: "./images/elizabeth.jpg",
        gitHub: "https://github.com/elizabethola",
        twitter: "https://twitter.com/crosseyedsisi",
        phoneNum: "+2348056986301",
        emailAddress: "emoladeji@gmail.com"
    },
    {
        name: "William Anaza",
        firstParagraph: "A Frontend Web. Developer, a WordPress Website Designer, a curious Tech and Web. 3.0 Enthusiast and Canva Freak with more than 4 months of learning and building groundbreaking Websites across variety of industries.",
        secondParagraph: "At the heart of coding for me, is problem solving. Nothing more!",
        thirdParagraph: "I have a good grasp of: HTML5, CSS3, JavaScript and WordPress. And would love to work with any Team / Startup as Frontend Dev. Intern in building the next big thing.",
        profileImage: "./images/wiiampicture.jpg",
        gitHub: "https://github.com/williamwebs",
        twitter: "https://twitter.com/th_ejouRney",
        phoneNum: "+2349124295757",
        emailAddress: "anazawilliam1@gmail.com"
    },
    {
        name: "Quadri Faruk Adeniyi",
        firstParagraph: "",
        secondParagraph: "",
        thirdParagraph: "",
        profileImage: "./images/niquad.jpg",
        gitHub: "https://github.com/niquad",
        twitter: "https://twitter.com/niquad_jr",
        phoneNum: "+348066227052",
        emailAddress: "adeniyiquadri18@gmail.com"
    }
]


let profileName, firstParagraph, secondParagraph, thirdParagraph, profileImage, gitHub, downloadbtn,phoneNum, emailAdd, socialSec;



profileName = document.querySelector('.name')
firstParagraph = document.querySelector('.p1')
secondParagraph = document.querySelector('.p2')
thirdParagraph = document.querySelector('.p3')
profileImage = document.querySelector('.profile-img')
// gitHub = document.querySelector('.github')
downloadbtn = document.querySelector('.download')
phoneNum = document.querySelector('.phone')
emailAdd = document.querySelector('.mail')
socialSec = document.querySelector('.socials')


document.querySelector('.profile').style.display = "none"



const show = (el)=>{

    if (el || el === 0) {
        details.map(()=>{
            console.log(details[el].name);
            profileName.textContent = details[el].name
            firstParagraph.textContent = details[el].firstParagraph
            secondParagraph.textContent = details[el].secondParagraph
            thirdParagraph.textContent = details[el].thirdParagraph
            profileImage.src = details[el].profileImage
            socialSec.style.display = "flex" 
            // document.querySelector('.profile-img-frame').src = "./images/rectangle-frame.png"
            document.querySelector('.hero').style.display = "none"
            document.querySelector('.profile').style.display = "block"
            // emailAdd.href = details[el].emailAddress
            // console.log(emailAdd.href = details[el].emailAddress);

            emailAdd.addEventListener('click', ()=>{
                emailAdd.href = `mailto: ${details[el].emailAddress}`
                console.log(emailAdd.href = details[el].emailAddress);
            })

            phoneNum.addEventListener('click', ()=>{
                phoneNum.href = `ter: ${details[el].phoneNum}`
                console.log(phoneNum.href = details[el].phoneNum);
            })

            document.querySelector('.github').addEventListener('click', ()=>{
                document.querySelector('.github').href = `${details[el].gitHub}`
                console.log(document.querySelector('.github').href = details[el].gitHub);
            })
        })
    }
}

show()



