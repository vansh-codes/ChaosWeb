// Array of random jokes
const jokes = [
    "I don’t trip; I do random gravity checks.",
    "I’d agree with you, but then we’d both be wrong.",
    "I was going to clean my room, but then I remembered: dust is a form of historical preservation.",
    "I walk around like everything is fine, but in my head, I’ve punched you in the face twice.",
    "People say nothing is impossible, but I do nothing every day.",
    "I’m not clumsy. The floor just hates me, the tables and chairs are bullies, and the walls get in my way.",
    "Why do we need sleep when we can just live in a state of perpetual chaos?",
    "Sometimes I pretend to be normal, but it gets boring, so I go back to being me.",
    "I put my GPS on for a route I know by heart just so I can feel important.",
    "If you see me eating a salad, know that I was kidnapped, and I’m signaling for help.",
    "I don’t have a bad attitude; I have a personality you can’t handle.",
    "If at first, you don’t succeed, destroy all evidence that you tried.",
    "I’m not arguing; I’m just explaining why I’m right.",
    "Why do they say “it’s a piece of cake” when nothing about life comes with frosting?",
    "I thought I wanted a career, turns out I just wanted a paycheck and a nap.",
    "I’m on a seafood diet. I see food, and I eat it.",
    "I told myself I should stop drinking, but I’m not about to listen to a drunk who talks to himself.",
    "I smile because I have no idea what’s going on.",
    "If you think I’m crazy, you should meet my friends.",
    "My bed is a magical place where I remember everything I forgot to do.",
    "If I was meant to be controlled, I would’ve come with a remote.",
    "They say money talks, but mine just waves goodbye.",
    "I’m on the 24-hour diet. So far, I’ve lost 8 hours of sleep.",
    "I would lose weight, but I don’t like losing.",
    "I don’t run from my problems; I sit down and cry until they go away.",
    "My brain has too many tabs open, and one is playing music on a loop.",
    "I’m not lazy, I’m on energy-saving mode.",
    "I told myself I’d stop procrastinating, but tomorrow sounds better.",
    "I’m not late; everyone else is just early.",
    "I live in my own little world, but it’s okay—they know me here.",
    "I tried to be normal once. Worst two minutes of my life.",
    "I don’t have road rage; I have a driver evaluation service.",
    "Life is short—smile while you still have teeth.",
    "I don’t care what people think of me. Mosquitoes find me attractive, and that’s all that matters.",
    "I think my guardian angel drinks.",
    "Why chase dreams when I can chase snacks?",
    "I wish everything was as easy as getting fat.",
    "If life gives you melons, you might be dyslexic.",
    "If I say, “First of all,” run. I have prepared notes.",
    "If my life were a movie, it would be called “Oops.”",
    "My hobby? Collecting weird looks from strangers.",
    "I don’t get drunk—I get awesome.",
    "My house isn’t messy; it’s just creatively organized.",
    "“I’ll try to be nicer if you try to be smarter.”",
    "I’m not weird. I’m limited edition.",
    "They said “dress for the job you want,” so I wore pajamas.",
    "I tried to make a joke about umbrellas, but it fell flat.",
    "I have a lot of potential; I just have a habit of procrastinating it.",
    "Why is it called beauty sleep when I wake up looking like a troll?",
    "Exercise? I thought you said extra fries.",
    "My life needs a rewind button.",
    "I’m one sandwich short of a picnic.",
    "I would lose weight, but then I’d have to find it again.",
    "I don’t go crazy; I am crazy. I just go normal sometimes.",
    "If the universe is expanding, why can’t I find space?",
    "I’m not bossy—I just have better ideas.",
    "I have enough makeup to open my own Sephora and yet not a clue how to apply it.",
    "There’s no “we” in pizza.",
    "The worst time to have a heart attack is during a game of charades.",
    "If I were a vegetable, I’d be a lazy potato.",
    "I don’t have mood swings; I have emotional theme parks.",
    "Chocolate is my spirit animal.",
    "I’m in shape. Unfortunately, that shape is a potato.",
    "My life goal is to pet all the dogs.",
    "You say crazy like it’s a bad thing.",
    "A balanced diet is chocolate in both hands.",
    "I was normal, three days ago.",
    "I didn’t fall; the floor just needed a hug.",
    "I don’t need a therapist—I need a new wallet.",
    "Some people are like clouds: when they disappear, it’s a beautiful day.",
    "If I had a dollar for every smart decision, I’d be broke.",
    "If I agreed with you, we’d both be wrong.",
    "I’m not lazy. I’m just on my energy-saving mode.",
    "I eat cake because it’s somebody’s birthday somewhere.",
    "I don’t sweat; I sparkle.",
    "If I can’t wear my pajamas, I’m not going.",
    "The best part of waking up is… going back to bed.",
    "I put the “pro” in procrastination.",
    "I’m not arguing. I’m explaining why I’m right.",
    "I’d give you a piece of my mind, but I’m on a strict budget.",
    "I can’t adult today. Please don’t make me adult.",
    "If I don’t answer, it’s because I’m ignoring you.",
    "I’m silently judging you.",
    "Who needs a boyfriend when you have Netflix?",
    "I’d walk through fire for you. Not really—I’d avoid it.",
    "I came. I saw. I left.",
    "I don’t know how to act my age—I’ve never been this age before.",
    "I may be wrong… but I doubt it.",
    "There’s a good chance this mess is here to stay.",
    "All my life, I thought air was free. Until I bought a bag of chips.",
    "It’s not me; it’s you.",
    "I didn’t mean to push all your buttons. I was just looking for the mute button.",
    "If I go missing, please follow my last known thought.",
    "Some days, I amaze myself. Other days, I lose my keys in the fridge.",
    "Dear stress, let’s break up.",
    "I run on caffeine, chaos, and cuss words.",
    "It’s all shenanigans and tomfoolery from here.",
    "I don’t like mornings, or people, or mornings with people.",
    "There’s a chance I left my sanity on a bus somewhere.",
    "I put the “fun” in dysfunctional.",
    "I have the patience of a squirrel on espresso.",
    "If life was fair, my middle name would be “rich.”",
    "I’m not insane; my reality is just different from yours.",
    "I’m like a public library—quiet on the outside, pure chaos on the inside.",
    "I have selective hearing.",
    "They call it “takeout” because it’s too classy to say “food rescue.”",
    "I was told to bring my energy level down… so I fell asleep.",
    "I’m not single; I’m just romantically challenged.",
    "“I’m sorry” and “My bad” mean the same thing… unless you’re at a funeral.",
    "My favorite exercise is a cross between a lunge and a crunch. It’s called “lunch.”",
    "If sarcasm were a sport, I’d be an Olympic champion.",
    "If I had a dollar for every time I said “what?” I’d be a millionaire.",
    "If I could have any job, I’d be a nap supervisor.",
    "I was going to conquer the world, but I hit snooze.",
    "The only thing I’m sure of is that I’m confused.",
    "I can resist anything except temptation.",
    "Why fit in when you were born to stand out… awkwardly.",
    "I have a resting sarcastic face.",
    "If I don’t laugh, I’ll cry.",
    "Too many cooks spoil the soup. I’m the soup.",
    "If only my bank account could grow as quickly as my to-do list.",
    "I’m bilingual—fluent in sarcasm and laughter.",
    "I’m not good at advice. Can I offer you a sarcastic comment?",
    "I’m just here for the snacks.",
    "When in doubt, nap it out.",
    "Why does Monday exist? Who asked for this?",
    "I didn’t trip; I simply tested gravity… extensively.",
    "If laughter is the best medicine, I’m overdosing.",
    "I put my plants in charge of my life. They told me to just chill.",
    "My current life status? Letting autocorrect decide.",
    "You call it laziness; I call it being highly selective with my energy.",
    "The awkward moment when you realize that “no one asked” is your autobiography.",
    "My plan for today? Making questionable decisions and hoping for the best.",
    "I’m not ignoring you; I’m just plotting your comeback.",
    "Why have common sense when you can have drama?",
    "The only cardio I get is running my mouth.",
    "Can’t think straight? Perfect! Time for a life decision.",
    "If sarcasm was a job, I’d be a billionaire.",
    "My hobbies include avoiding social interactions and regretting it later.",
    "Sometimes I sit and think… other times I just sit.",
    "Who needs a life when you’ve got Wi-Fi?",
    "I believe in free speech… but only for myself.",
    "Common sense left the chat.",
    "When I’m on my phone, I’m either plotting or buying snacks.",
    "Why take the road less traveled when you can just not go anywhere?",
    "I keep pressing snooze, hoping life will snooze along with me.",
    "If I was a vegetable, I’d be a couch potato.",
    "I’m a simple human—give me food, and I’ll think about liking you.",
    "The older I get, the more I understand “back in my day.”",
    "I don’t mean to interrupt, but I did it anyway.",
    "Is anyone else stuck between “I should be productive” and “I need a nap”?",
    "Brain: Let’s be responsible. Me: Let’s buy plants.",
    "Why bother adulting when there are snacks?",
    "If there’s no coffee, there’s no conversation.",
    "Reality called—I hung up.",
    "At this point, “winging it” is my life motto.",
    "I’m not sleeping, I’m just horizontally productive.",
    "Why start something when you can just overthink about it?",
    "Half of me wants to be productive; the other half is me.",
    "I don’t sleep; I just recharge my sarcasm.",
    "You know life is rough when you open your email with a sigh.",
    "When life gives you lemons, squirt them in someone’s eyes.",
    "I’m basically a kid with bills.",
    "Why rush? Procrastination is a life skill.",
    "Is my brain a committee? Because it disagrees with itself daily.",
    "Living my life on airplane mode.",
    "Dear Karma, let’s speed this up.",
    "Why be normal when you can be “uniquely complicated”?",
    "If naps were a sport, I’d be an MVP.",
    "I believe in unicorns, sarcasm, and carbs.",
    "Why be moody when you can be a “mood”?",
    "Some people have resting happy face; I have resting “no thanks” face.",
    "Why daydream when you can night-nap?",
    "Sometimes I just let my facial expressions do the talking.",
    "My new plan? Organize my thoughts… tomorrow.",
    "I didn’t lose my marbles; they just went on vacation.",
    "You think I’m weird? My imaginary friends agree.",
    "Half of me is “go-getter,” the other half is “napper.”",
    "Why save money when you can buy snacks?",
    "I have resting “tell me later” face.",
    "I would apologize, but sarcasm is my only language.",
    "Why have regrets when you can have snacks?",
    "I’m not lost; I’m on a snack break.",
    "Why drink water when coffee exists?",
    "If life gives you lemons, hope they’re organic.",
    "I’m so chill I make the refrigerator jealous.",
    "If “talk less” was an option, I didn’t get the memo.",
    "I didn’t choose the nap life; it chose me.",
    "I prefer not to put labels on my snacks… or my emotions.",
    "If I’m late, it’s because I needed an emotional rehearsal.",
    "I’m not bossy; I’m directionally assertive.",
    "Why multitask when you can just “multi-avoid”?",
    "I’d run, but I don’t want to.",
    "I didn’t choose the chaos life; it found me.",
    "I’d argue, but then you’d know I care.",
    "I’m on a 24-hour sarcasm cycle.",
    "I’d be unstoppable if I just started moving.",
    "Why focus when you can panic?",
    "I’m not a control freak; I’m just “suggestively intense.”",
    "I’m ready for the weekend… since last Monday.",
    "If I’m talking to myself, it’s a conference call.",
    "I’d lose weight, but that would require action.",
    "I’m not lazy; I’m on sleep mode.",
    "I’m 90% coffee, 10% chaos.",
    "If there’s food, I’m interested.",
    "I don’t have problems; I have “adventures.”",
    "I believe in sarcasm, especially on Mondays.",
    "I’ve mastered the art of side-eye.",
    "I’m not antisocial; I’m just “selectively people-averse.”",
    "Life is too short to pretend I care.",
    "If my life was a movie, it’d be called “Oops, Wrong Door.”",
    "eality is a nice place, but I wouldn’t want to live there.",
    "Why think logically when you can think chaotically?",
    "If sleep is for the weak, I must be invincible.",
    "I’m not indecisive; I’m just exploring options.",
    "If sarcasm was an Olympic sport, I’d win gold.",
    "I’m fluent in three languages: sarcasm, memes, and movie quotes.",
    "I’m a walking “watch your step” sign.",
    "If I had a penny for every “oops,” I’d have a dollar.",
    "I’d stop procrastinating, but then what would I do?",
    "Why be punctual when you can be dramatic?",
    "I wasn’t born to be organized.",
    "If I could sum up my life in one sentence, I’d be confused.",
    "Who needs adventure when you can have snacks?",
    "Why plan when you can “wing it”?",
    "If common sense was currency, I’d be in debt.",
    "I’m not an overthinker; I’m a thought collector.",
    "If laziness was a superpower, I’d be a legend.",
    "Why be productive when you can be artistic?",
    "I’m not bored; I’m creatively unoccupied.",
    "If my sarcasm was art, I’d be Picasso.",
    "If life was fair, I’d be at brunch right now.",
    "I don’t dream big; I dream snack-sized.",
    "I’m not passive-aggressive; I’m just expressive.",
    "Why be precise when you can be approximate?",
    "If thinking too much was a sport, I’d have a gold medal.",
    "I don’t procrastinate; I reschedule energetically.",
    "If I had a dollar for every impulse buy, I’d be rich… but I’d spend it.",
    "I live my life on “shuffle.”",
    "I’m not a quitter—I just postponed indefinitely.",
    "I would take a risk, but that sounds risky.",
    "If yawning was exercise, I’d be in shape.",
    "I’d consider being organized, but I’d rather not.",
    "I’m not lazy; I’m just very relaxed.",
    "I’d tell you a secret, but then I’d have to forget it.",
    "My motivational playlist is one long yawn.",
    "I’d stop being awkward, but that’s my brand.",
    "I’m not lost; I’m just exploring uncharted laziness.",
    "If life was a movie, I’d need a lot of popcorn.",
    "I’m all about positive vibes… and long naps.",
    "My life plan? It’s a loose sketch.",
    "If yawns were words, I’d be an author.",
    "Why be bored when you can overthink?",
    "I’m not ignoring you; I’m contemplating invisibility.",
    "If my thoughts were a playlist, it’d be on shuffle.",
    "I’m just here to avoid responsibilities.",
    "Why be organized when you can be chaotic?",
    "Life’s short; smile awkwardly.",
    "I’d tell you my plans, but I don’t know them.",
    "I’m a professional “Oops” creator."
];

// Function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to get contrasting text color (black or white) based on background
function getContrastColor(hexcolor) {
    const r = parseInt(hexcolor.substr(1,2), 16);
    const g = parseInt(hexcolor.substr(3,2), 16);
    const b = parseInt(hexcolor.substr(5,2), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? 'black' : 'white';
}

// Function to create and show a joke popup
function showJokePopup() {
    // Remove any existing popups
    const existingPopups = document.querySelectorAll('.joke-popup');
    existingPopups.forEach(popup => popup.remove());

    // Create new popup
    const popup = document.createElement('div');
    popup.className = 'joke-popup';
    
    // Random position
    popup.style.top = `${Math.random() * (window.innerHeight - 200)}px`;
    popup.style.left = `${Math.random() * (window.innerWidth - 300)}px`;
    
    // Random background color
    const backgroundColor = getRandomColor();
    popup.style.backgroundColor = backgroundColor;
    popup.style.color = getContrastColor(backgroundColor);
    
    popup.textContent = jokes[Math.floor(Math.random() * jokes.length)];
    document.body.appendChild(popup);

    // Remove popup after animation
    setTimeout(() => {
        popup.remove();
    }, 5000);
}

// popups intervals between 5 and 15 seconds
function startRandomJokePopups() {
    const showPopup = () => {
        showJokePopup();
        const nextInterval = Math.random() * (15000 - 5000) + 5000;
        setTimeout(showPopup, nextInterval);
    };
    showPopup();
}

// Start the popups when the page loads
window.addEventListener('load', startRandomJokePopups);
