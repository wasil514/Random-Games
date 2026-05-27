let jokes =[`How do you stop a bull from charging?
Cancel its credit card`,
`What do you call a snobbish criminal going down the stairs?
A condescending con descending`,
`Why can't your nose be 12 inches long?
Because then it would be a foot`,
`What is the difference between a poorly-dressed man on a tricycle and a well-dressed man on a bicycle?
Attire`,
`What do you call an angry carrot?
A steamed veggie`,
`Why did the golfer bring two pairs of pants?
In case he got a hole-in-one`,
`What did the horse say after it tripped?
Help, I've fallen and I can't giddyup`,
`Why can't you trust the king of the jungle?
Because he's always lion`,
`Why did the stadium get hot after the game?
All of the fans left`,
`What kind of cheese isn't yours?
Nacho cheese`,
`I couldn't figure out why the baseball kept getting larger?
Then it hit me`,
`Why wouldn't the shrimp share his treasure?
He was a little shellfish`,
`Did you hear about the population of Ireland's capital?
It's Dublin`,
`What's a bear with no teeth called?
A gummy bear`,
`What kind of music do mummies listen to?
Wrap music`,
`How do you make a Venetian blind?
Poke him in the eyes`,
`What do you call it when Batman skips church?
Christian Bales`,
`What would bears be without bees?
Ears`,
`Did you hear about the sensitive burglar?
He takes things personally`,
`Why couldn't the pirate learn the alphabet?
Because he was always lost at C`,
`Why do seagulls fly over the sea?
Because otherwise they'd be called a bagel`,
`What do you call a sleeping bull?
A bulldozer`,
`What's brown and sticky?
A stick`,
`Why are elephants wrinkly?
Have you ever tried to iron one?`,
`How do you make a Swiss roll?
Push him down a hill`,
`How do you impress a female baker?
Bring her flours`,
`What do Olympic sprinters eat before a race?
Nothing They fast`,
`What did the yoga instructor say when her landlord tried to evict her?
Namaste?`,
`How does a rancher keep track of his cattle?
With a cow-culator`,
`How many lips does a flower have?
Tu-lips`,
`Why are there gates around cemeteries?
Because people are dying to get in`,
`What's that restaurant on the moon like?
It's OK, but there is no atmosphere`,
`What's a pepper that won't leave you alone?
Jalapeño business`,
`Where was King David's temple located?
Beside his ear`,
`What job did the frog have at the hotel?
Bellhop`,
`What did the cake say to the fork?
Want a piece of me?`,
`What do you call a group of unorganized cats?
Cat-astrophe`,
`When does a duck wake up?
At the quack of dawn`,
`How do you make an egg roll?
You push it`,
`When is a door not a door?
When it's ajar`,
`Why did the baby strawberry cry?
Because his parents were in a jam`,
`Why do bees have sticky hair?
Because they use a honeycomb`,
`How do you make an octopus laugh?
With ten-tickles`,
`What's red and bad for your teeth?
A brick`,
`I ordered a chicken and an egg online?
I'll let you know what comes first`,
`Why can't you trust duck doctors?
Because they're all quacks`,
`Why don't eggs tell jokes?
Because crack up too easily`,
`What do sea monsters eat?
Fish and ships`,
`How do you make a tissue dance?
You put a little boogie in it`,
`What do lawyers wear to work?
Their lawsuits`,
`What did the bartender say to the ham sandwich who tried to order a glass of wine?
Sorry, we don't serve food here?`,
`What did one tomato say to the other tomato during a race?
C'mon, ketchup`,
`What do you call an alligator detective?
An investi-gator`,
`What does a baby computer call his father?
Data`,
`Why did the scarecrow win an award?
Because he was outstanding in his field`,
`Why did the invisible man turn down the job offer?
Because he couldn't see himself doing it`,
`What has four wheels and flies?
A garbage truck`,
`Why did the robber jump in the shower?
Because he wanted a clean getaway`,
`What do you get from a pampered cow?
Spoiled milk`,
`How do you fix a cracked pumpkin?
With a pumpkin patch`,
`What did one hat say to the other?
You stay here, I'll go ahead`,
`Why did the restaurant hire a pig?
Because he was good at bacon`,
`Why did the student eat his homework?
Because the teacher told him it would be a piece of cake`,
`What lights up a soccer stadium?
A soccer match`,
`Time flies like an arrow?
Fruit flies like a banana`,
`How did the duck buy lipstick?
She just put it on her bill`,
`What has more lives than a cat?
A frog, because it croaks every day`,
`Why should you avoid products with velcro?
Because they're a total rip-off`,
`Why does Waldo only wear striped shirts?
Because he doesn't want to be spotted`,
`Why was the man hit by a bike every day?
Because he was stuck in a vicious cycle`,
`What did the termite say after walking into the bar?
Is the bar tender here?`,
`What happens when frogs park illegally?
They get toad`,
`Why shouldn't you write with a broken pencil?
Because it's pointless`,
`What did one wall say to the other?
I'll meet you at the corner?`,
`Why did the kid cross the playground?
To get to the other slide`,
`Why did the poor man stock up on yeast?
To make some dough`,
`How does the moon cut his hair?
Eclipse it`,
`What do you call a fake spaghetti?
An impasta`]


let random_choice=Math.floor(Math.random()*jokes.length)

let comp_choice=jokes[random_choice]
document.getElementById("jokebox").innerHTML=comp_choice

