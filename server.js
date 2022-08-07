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
    },
  },

  {
    _id: 2,
    content: "Occasionally, I’ll hit somebody with my car. So sue me.",
    character: {
      _id: 1,
      firstname: "Michael",
      lastname: "Scott",
      gif: "https://media.giphy.com/media/tlGD7PDy1w8fK/giphy.gif",
    },
  },
  {
    _id: 3,
    content: "I feel God in this Chili’s tonight.",
    character: {
      _id: 4,
      firstname: "Pam",
      lastname: "Beesly",
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
      gif: "https://media.giphy.com/media/tlGD7PDy1w8fK/giphy.gif",
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
    },
  },

  {
    _id: 8,
    content: "Well, Happy Birthday Jesus. Sorry your party’s so lame.",
    character: {
      _id: 1,
      firstname: "Michael",
      lastname: "Scott",
      gif: "https://media.giphy.com/media/tlGD7PDy1w8fK/giphy.gif",
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
    },
  },

  {
    _id: 10,
    content: "It has to be official, and it has to be urine.",
    character: {
      _id: 3,
      firstname: "Dwight",
      lastname: "Schrute",
    },
  },

  {
    _id: 11,
    content: "Did I stutter?",
    character: {
      _id: 11,
      firstname: "Stanley",
      lastname: "Hudson",
    },
  },
  {
    _id: 12,
    content: "I have a lot of questions. Number one, how dare you?",
    character: {
      _id: 6,
      firstname: "Kelly",
      lastname: "Kapoor",
    },
  },

  {
    _id: 13,
    content: "Everybody stay calm! Stay f*&#!#% calm!",
    character: {
      _id: 1,
      firstname: "Michael",
      lastname: "Scott",
      gif: "https://media.giphy.com/media/tlGD7PDy1w8fK/giphy.gif",
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
    },
  },
  {
    _id: 16,
    content: "I am immensely proud of what I did for that turtle!",
    character: {
      _id: 8,
      firstname: "Kevin",
      lastname: "Malone",
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
      gif: "https://media.giphy.com/media/tlGD7PDy1w8fK/giphy.gif",
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
    },
  },
  {
    _id: 23,
    content: "If you pray enough, you can change yourself into a cat person.",
    character: {
      _id: 7,
      firstname: "Angela",
      lastname: "Martin",
    },
  },

  {
    _id: 24,
    content: "I. Declare. Bankruptcy!",
    character: {
      _id: 1,
      firstname: "Michael",
      lastname: "Scott",
      gif: "https://media.giphy.com/media/tlGD7PDy1w8fK/giphy.gif",
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
    },
  },
  {
    _id: 27,
    content: "Dwight, you ignorant slut!",
    character: {
      _id: 1,
      firstname: "Michael",
      lastname: "Scott",
      gif: "https://media.giphy.com/media/tlGD7PDy1w8fK/giphy.gif",
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
      gif: "https://media.giphy.com/media/tlGD7PDy1w8fK/giphy.gif",
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
    },
  },
  {
    _id: 33,
    content: "Bears, Beets, Battlestar Galactica.",
    character: {
      _id: 2,
      firstname: "Jim",
      lastname: "Halpert",
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
    },
  },
  {
    _id: 35,
    content: "Sorry I annoyed you with my friendship.",
    character: {
      _id: 10,
      firstname: "Andy",
      lastname: "Bernard",
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
      gif: "https://media.giphy.com/media/tlGD7PDy1w8fK/giphy.gif",
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
    },
  },
  {
    _id: 39,
    content: "Shut up about the sun. SHUT UP ABOUT THE SUN!",
    character: {
      _id: 15,
      firstname: "Gabe",
      lastname: "Lewis",
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
