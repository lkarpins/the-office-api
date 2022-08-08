const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.locals.title = "The Office";
app.locals.quotes = [
  {
    _id: 1,
    content:
      "In a gang world, we use something called fluffy fingers. That's when someone really gets in your face, you know you just, start ticklin' 'em. And he starts tickling you. And pretty soon you laughing and hugging. Before you know it, you've forgotten the whole thing. Y'all just go to church together, and get an ice cream cone.",
    character: {
      _id: 16,
      firstname: "Darryl",
      lastname: "Philbin",
      gif: "https://media.giphy.com/media/OtSERKyJriAzUZoF53/giphy.gif",
    },
  },

  {
    _id: 2,
    content: "Occasionally, I’ll hit somebody with my car. So sue me.",
    character: {
      _id: 1,
      firstname: "Michael",
      lastname: "Scott",
      gif: `https://media.giphy.com/media/gQmyUokrbbSpy/giphy.gif`,
    },
  },
  {
    _id: 3,
    content: "I feel God in this Chili’s tonight.",
    character: {
      _id: 4,
      firstname: "Pam",
      lastname: "Beesly",
      gif: "https://media.giphy.com/media/2whD01k0675Q4F7vs2/giphy.gif",
    },
  },
  {
    _id: 4,
    content:
      "It's true. I'm having a party. I've got three cases of imported beer, a karaoke machine, and I didn't invite Michael. So three ingredients for a great party. And it's nothing personal, I just think that if he were there, people wouldn't be able to relax, and you know, have fun, and my roommate wants to meet everybody. Because I'm pretty sure he thinks that I'm making Dwight up. [sighs] He is very real.",
    character: {
      _id: 2,
      firstname: "Jim",
      lastname: "Halpert",
      gif: "https://media.giphy.com/media/9o59Pga7BWlDrzWhhh/giphy.gif",
    },
  },
  {
    _id: 5,
    content:
      "And I knew exactly what to do. But in a much more real sense, I had no idea what to do.",
    character: {
      _id: 1,
      firstname: "Michael",
      lastname: "Scott",
      gif: "https://media.giphy.com/media/36xoN4Pl4MVy/giphy.gif",
    },
  },
  {
    _id: 6,
    content:
      "I'm glad Michael's getting help. He has a lot of issues, and he's stupid.",
    character: {
      _id: 12,
      firstname: "Phyllis",
      lastname: "Lapin",
      gif: "https://media.giphy.com/media/6rvh1enyaBISOojJMa/giphy.gif",
    },
  },
  {
    _id: 7,
    content:
      "I'll be the Number Two guy here in Scranton in six weeks. How? Name repetition, personality mirroring, and never breaking off a handshake. I'm always thinking one step ahead. Like a carpenter that makes stairs.",
    character: {
      _id: 10,
      firstname: "Andy",
      lastname: "Bernard",
      gif: "https://media.giphy.com/media/E2Twyi9GYrNIFxCMrT/giphy.gif",
    },
  },

  {
    _id: 8,
    content: "Well, Happy Birthday Jesus. Sorry your party’s so lame.",
    character: {
      _id: 1,
      firstname: "Michael",
      lastname: "Scott",
      gif: "https://media.giphy.com/media/KekmZmcqbbC49WD3P2/giphy.gif",
    },
  },
  {
    _id: 9,
    content:
      "Last year, Creed asked me how to set up a blog. Wanting to protect the world from being exposed to Creed's brain, I opened up a Word document on his computer and put an address at the top. I've read some of it. Even for the Internet, it's... pretty shocking.",
    character: {
      _id: 5,
      firstname: "Ryan",
      lastname: "Howard",
      gif: "https://media.giphy.com/media/ugdr3PvDHY0VzBpQAE/giphy.gif",
    },
  },

  {
    _id: 10,
    content: "It has to be official, and it has to be urine.",
    character: {
      _id: 3,
      firstname: "Dwight",
      lastname: "Schrute",
      gif: "https://media.giphy.com/media/134DVXcD94sOWI/giphy.gif",
    },
  },

  {
    _id: 11,
    content: "Did I stutter?",
    character: {
      _id: 11,
      firstname: "Stanley",
      lastname: "Hudson",
      gif: "https://media.giphy.com/media/y41Txh2pbwqLNNubOo/giphy.gif",
    },
  },
  {
    _id: 12,
    content: "I have a lot of questions. Number one, how dare you?",
    character: {
      _id: 6,
      firstname: "Kelly",
      lastname: "Kapoor",
      gif: "https://media.giphy.com/media/SbN0WomN4S7Z7tpKOC/giphy.gif",
    },
  },

  {
    _id: 13,
    content: "Everybody stay calm! Stay f*&#!#% calm!",
    character: {
      _id: 1,
      firstname: "Michael",
      lastname: "Scott",
      gif: "https://media.giphy.com/media/1luXLMeNxsaNFMUuOe/giphy.gif",
    },
  },

  {
    _id: 14,
    content:
      "There’s a lot of beauty in ordinary things. Isn’t that kind of the point?",
    character: {
      _id: 4,
      firstname: "Pam",
      lastname: "Beesly",
      gif: "https://media.giphy.com/media/8Qpxs1yXhoS5KtFqJJ/giphy.gif",
    },
  },
  {
    _id: 15,
    content:
      "Two eyes. Two ears. A chin. A mouth. Ten fingers. Two nipples. A butt, two kneecaps, a penis. I've just described to you the Loch Ness monster. And the reward for his capture? All the riches in Scotland. So I have one question: Why are you here?",
    character: {
      _id: 17,
      firstname: "Creed",
      lastname: "Bratton",
      gif: "https://media.giphy.com/media/yBwcx562kZ2FWlYb2A/giphy.gif",
    },
  },
  {
    _id: 16,
    content: "I am immensely proud of what I did for that turtle!",
    character: {
      _id: 8,
      firstname: "Kevin",
      lastname: "Malone",
      gif: "https://media.giphy.com/media/bC9czlgCMtw4cj8RgH/giphy.gif",
    },
  },
  {
    _id: 17,
    content:
      "I wake up every morning in a bed that's too small, drive my daughter to a school that's too expensive, and then I go to work to a job for which I get paid too little. But on pretzel day? Well, I like pretzel day.",
    character: {
      _id: 11,
      firstname: "Stanley",
      lastname: "Hudson",
      gif: "https://media.giphy.com/media/wqbAfFwjU8laXMWZ09/giphy.gif",
    },
  },

  {
    _id: 18,
    content:
      "Once every hour, someone is involved in an internet scam. That man is Michael Scott.",
    character: {
      _id: 4,
      firstname: "Pam",
      lastname: "Beesly",
      gif: "https://media.giphy.com/media/K5Tj81mL76xbZNwtbU/giphy.gif",
    },
  },

  {
    _id: 19,
    content:
      "Sometimes I’ll start a sentence, and I don’t even know where it’s going. I just hope I find it along the way.",
    character: {
      _id: 1,
      firstname: "Michael",
      lastname: "Scott",
      gif: "https://media.giphy.com/media/ui1hpJSyBDWlG/giphy.gif",
    },
  },

  {
    _id: 20,
    content:
      "I don't talk trash, I talk smack. They're totally different. Trash talk is hypothetical, like: Your mom is so fat she can eat the internet. But smack talk is happening like right now. Like: You're ugly and I know it for a fact 'cause I got the evidence right there.",
    character: {
      _id: 6,
      firstname: "Kelly",
      lastname: "Kapoor",
      gif: "https://media.giphy.com/media/JvEMPOQubkyQx9YLQ5/giphy.gif",
    },
  },
  {
    _id: 21,
    content:
      "It's performance review day, company-wide. Last year, my performance review started with Michael asking me what my hopes and dreams were, and it ended with him telling me he could bench-press 190 pounds. So, I don't really know what to expect.",
    character: {
      _id: 4,
      firstname: "Pam",
      lastname: "Beesly",
      gif: "https://media.giphy.com/media/NnCUbcWeiEt8oddc6K/giphy.gif",
    },
  },

  {
    _id: 22,
    content:
      "I had feelings today for a coworker that I haven't had in years... In my defense he was grabbing my crotch fairly aggressively at the time.",
    character: {
      _id: 2,
      firstname: "Jim",
      lastname: "Halpert",
      gif: "https://media.giphy.com/media/UKrREdiStQVry/giphy.gif",
    },
  },
  {
    _id: 23,
    content: "If you pray enough, you can change yourself into a cat person.",
    character: {
      _id: 7,
      firstname: "Angela",
      lastname: "Martin",
      gif: "https://media.giphy.com/media/BDc39OeNgqCXiig9TV/giphy.gif",
    },
  },

  {
    _id: 24,
    content: "I. Declare. Bankruptcy!",
    character: {
      _id: 1,
      firstname: "Michael",
      lastname: "Scott",
      gif: "https://media.giphy.com/media/8nM6YNtvjuezzD7DNh/giphy.gif",
    },
  },

  {
    _id: 25,
    content:
      "I wish there was a way to know you’re in the good old days, before you’ve actually left them.",
    character: {
      _id: 10,
      firstname: "Andy",
      lastname: "Bernard",
      gif: "https://media.giphy.com/media/ui4VjMUBGXhwgdwUnK/giphy.gif",
    },
  },
  {
    _id: 26,
    content:
      "You can't let a girl feel good about herself. It will backfire on you. Every compliment has to be backhanded. 'Oh I like your dress, but I'd like it more if you had prettier hair.'",
    character: {
      _id: 10,
      firstname: "Andy",
      lastname: "Bernard",
      gif: "https://media.giphy.com/media/2KIo8o5o6HOXUF8lwh/giphy.gif",
    },
  },
  {
    _id: 27,
    content: "Dwight, you ignorant slut!",
    character: {
      _id: 1,
      firstname: "Michael",
      lastname: "Scott",
      gif: "https://media.giphy.com/media/XBCJIv6xAyDfrajXoe/giphy.gif",
    },
  },
  {
    _id: 28,
    content:
      "I didn't realize how many of Angela's opinions I agreed with...until she tried to have my knee caps shattered for sleeping with her husband.",
    character: {
      _id: 9,
      firstname: "Oscar",
      lastname: "Martinez",
      gif: "https://media.giphy.com/media/fP1cA793NCpWzlEE96/giphy.gif",
    },
  },

  {
    _id: 29,
    content:
      "Whenever I'm about to do something, I think, 'Would an idiot do that?' And if they would, I do not do that thing.",
    character: {
      _id: 3,
      firstname: "Dwight",
      lastname: "Schrute",
      gif: "https://media.giphy.com/media/txir5y39RpFC0/giphy.gif",
    },
  },
  {
    _id: 30,
    content:
      "There are certain things a boss does not share with his employees. His salary, that would depress them. His bed, it--- And I am not going to tell them that I'll be reading their e-mails.",
    character: {
      _id: 1,
      firstname: "Michael",
      lastname: "Scott",
      gif: "https://media.giphy.com/media/l0amJzVHIAfl7jMDos/giphy.gif",
    },
  },

  {
    _id: 31,
    content:
      "I have been Michael's #2 guy for about 5 years. And we make a great team. We're like one of those classic famous teams. He's like Mozart, and I'm like Mozart's friend. No. I'm like Butch Cassidy, and Michael is like Mozart. You try and hurt Mozart; you're going to get a bullet in your head courtesy of Butch Cassidy.",
    character: {
      _id: 3,
      firstname: "Dwight",
      lastname: "Schrute",
      gif: "https://media.giphy.com/media/GUq5eAguOTefGS9H6J/giphy.gif",
    },
  },
  {
    _id: 32,
    content:
      "I.D. badges are long overdue. Security in this office park is a joke. Last year, I came to work with my spud gun in a duffel bag. I sat at my desk all day, with a rifle that shoots potatoes at 60 pounds per square inch. Can you imagine if I was deranged?",
    character: {
      _id: 3,
      firstname: "Dwight",
      lastname: "Schrute",
      gif: "https://media.giphy.com/media/vrPSA3e7ZaM2A/giphy.gif",
    },
  },
  {
    _id: 33,
    content: "Bears, Beets, Battlestar Galactica.",
    character: {
      _id: 2,
      firstname: "Jim",
      lastname: "Halpert",
      gif: "https://media.giphy.com/media/Viboroyy6r2py/giphy.gif",
    },
  },

  {
    _id: 34,
    content:
      "I know that patience and loyalty are good, and virtuous traits. But sometimes I just think you need to grow a pair.",
    character: {
      _id: 7,
      firstname: "Angela",
      lastname: "Martin",
      gif: "https://media.giphy.com/media/kGafOToTvXIAU8m9U5/giphy.gif",
    },
  },
  {
    _id: 35,
    content: "Sorry I annoyed you with my friendship.",
    character: {
      _id: 10,
      firstname: "Andy",
      lastname: "Bernard",
      gif: "https://media.giphy.com/media/CbOJUVPfOUGiMQRieq/giphy.gif",
    },
  },

  {
    _id: 36,
    content:
      "I feel like all my kids grew up, and then they married each other. It’s every parent’s dream.",
    character: {
      _id: 1,
      firstname: "Michael",
      lastname: "Scott",
      gif: "https://media.giphy.com/media/JoePLWxLD7cGc/giphy.gif",
    },
  },

  {
    _id: 37,
    content:
      "Chad Flenderman. Just an easy-going black guy who knows the streets--yet he also went to Oxford. So. Just as comfortable on a motorcycle as he is on Air Force One. Oh and he's also the world's leading Egyptologist.",
    character: {
      _id: 13,
      firstname: "Toby",
      lastname: "Flenderson",
      gif: "https://media.giphy.com/media/eDkvbWAWY9uZni7GB1/giphy.gif",
    },
  },
  {
    _id: 38,
    content:
      "Disposable cameras are fun, but it seems a little wasteful. You never get to see your pictures. If it's an important event that you want to remember, I recommend using a real camera.",
    character: {
      _id: 14,
      firstname: "Erin",
      lastname: "Hannon",
      gif: "https://media.giphy.com/media/KX3F7yATgDsF3BogY2/giphy.gif",
    },
  },
  {
    _id: 39,
    content: "Shut up about the sun. SHUT UP ABOUT THE SUN!",
    character: {
      _id: 15,
      firstname: "Gabe",
      lastname: "Lewis",
      gif: "https://media.giphy.com/media/V9nK2vKHC2BzjrcPlM/giphy.gif",
    },
  },

  {
    _id: 40,
    content:
      "If I had a gun with two bullets and I was in a room with Hitler, Bin Laden, and Toby, I would shoot Toby twice.",
    character: {
      _id: 1,
      firstname: "Michael",
      lastname: "Scott",
      gif: "https://media.giphy.com/media/tlGD7PDy1w8fK/giphy.gif",
    },
  },

  {
    _id: 41,
    content: "Me think, why waste time say lot word, when few word do trick.",
    character: {
      _id: 8,
      firstname: "Kevin",
      lastname: "Malone",
      gif: "https://media.giphy.com/media/DMNPDvtGTD9WLK2Xxa/giphy.gif",
    },
  },
  {
    _id: 42,
    content: "I talk a lot, so I've learned to just tune myself out...",
    character: {
      _id: 6,
      firstname: "Kelly",
      lastname: "Kapoor",
      gif: "https://media.giphy.com/media/P25xL2wKRtvEeYqik1/giphy.gif",
    },
  },
  {
    _id: 43,
    content:
      "I just feel lucky that I got a chance to share my crummy story with anyone out there who thinks they're the only one to take a dump in a paper shredder. You're not alone sister. Let's get a beer sometime.",
    character: {
      _id: 18,
      firstname: "Meredith",
      lastname: "Palmer",
      gif: "https://media.giphy.com/media/F4b6mV6Xedr6yf3UNm/giphy.gif",
    },
  },
  {
    _id: 44,
    content: "The Taliban is the worst. Great heroin, though.",
    character: {
      _id: 17,
      firstname: "Creed",
      lastname: "Bratton",
      gif: "https://media.giphy.com/media/18cBOvpCIUGcIUgWQN/giphy.gif",
    },
  },
  {
    _id: 45,
    content: "The worst thing about prison was the Dementors",
    character: {
      _id: 1,
      firstname: "Michael",
      lastname: "Scott",
      gif: "https://media.giphy.com/media/HHN2RWwBDxzI4/giphy.gif",
    },
  },
];

app.locals.characters = [
  {
    _id: 1,
    firstname: "Michael",
    lastname: "Scott",
  },
  {
    _id: 2,
    firstname: "Jim",
    lastname: "Halpert",
  },
  {
    _id: 3,
    firstname: "Dwight",
    lastname: "Schrute",
  },
  {
    _id: 4,
    firstname: "Pam",
    lastname: "Beesly",
  },
  {
    _id: 5,
    firstname: "Ryan",
    lastname: "Howard",
  },
  {
    _id: 6,
    firstname: "Kelly",
    lastname: "Kapoor",
  },
  {
    _id: 7,
    firstname: "Angela",
    lastname: "Martin",
  },
  {
    _id: 8,
    firstname: "Kevin",
    lastname: "Malone",
  },
  {
    _id: 9,
    firstname: "Oscar",
    lastname: "Martinez",
  },
  {
    _id: 10,
    firstname: "Andy",
    lastname: "Bernard",
  },
  {
    _id: 11,
    firstname: "Stanley",
    lastname: "Hudson",
  },
  {
    _id: 12,
    firstname: "Phyllis",
    lastname: "Lapin",
  },
  {
    _id: 13,
    firstname: "Toby",
    lastname: "Flenderson",
  },
  {
    _id: 14,
    firstname: "Erin",
    lastname: "Hannon",
  },
  {
    _id: 15,
    firstname: "Gabe",
    lastname: "Lewis",
  },
  {
    _id: 16,
    firstname: "Darryl",
    lastname: "Philbin",
  },
  {
    _id: 17,
    firstname: "Creed",
    lastname: "Bratton",
  },
  {
    _id: 18,
    firstname: "Meredith",
    lastname: "Palmer",
  },
];

app.set("port", process.env.PORT || 3001);

app.get("/", (request, response) => {
  const quotes = app.locals.quotes;
  const characters = app.locals.characters;
  response.json({ quotes, characters });
});

app.listen(app.get("port"), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get("port")}.`
  );
});
