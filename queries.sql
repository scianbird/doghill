-- the queries used to build the tables in my database
 

-- to fit the theme/function of my app, rather than render a list of posts under their titles, I will instead give them a "location" and when users open the post they will see the storybeat currently taking place in that location. Imagining, for a second, that this app was real & used by a dedicated group of people, their posts would eventually be the catalyst for updating what post is displayed in the location, and the old "post" and related comments would then be moved to an "archive" location -- I think this would be doable by simply updating the location in the table and creating a dedicated archive location 🤔

/* CREATE TABLE IF NOT EXISTS location_blurbs (
  blurb_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  location_name VARCHAR(255) NOT NULL,
  location_img TEXT NOT NULL,
  blurb TEXT NOT NULL) 
)
 */

 /*  ('The Riverbank', 'https://images.unsplash.com/photo-1738774974085-cddf4d765b22?mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png', 'As you approach the river a heron turns to pin you with one of its yellow eyes, its elegant neck already curled in preparation to strike at a fish. 
  
  To your side, hidden somewhere in the fog, a fisherman whistles tunelessly: long and low notes as he works. The bird doesn&apost seem to mind his presence, but it still watches you with that round yellow eye as you take another step toward the water. Eventually, you get too close and the bird startles into movement - recoiling its neck even tighter and beating those massive wings; long legs stretched as it hunts for a new wading spot. 
  
  The whistling never stops.' 
) */

-- I inserted one just to test that the mapping would work, and once I had that functionality working I added the comments table: 
/*
CREATE TABLE IF NOT EXISTS doghill_comments (
    comment_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(255) NOT NULL,
    profile_image TEXT NOT NULL,
    comment TEXT NOT NULL,
    location_name TEXT REFERENCES "location_blurbs" < this is because the param is passed as a string so using the id will not work. I had to changet the primary key of the location table to be location name so the relation would work, but I did this using the GUI so I could keep track of everything
)
INSERT INTO doghill_comments (username, profile_image, comment) VALUES ('Amelia', 'https://openmoji.org/data/color/svg/1F64D-200D-2640-FE0F.svg', 'Did you hear? People are saying that the fishermen are leaving their catches to rot on the banks of the river') */

/* Now it's time to add more locations - I have to be careful with the location name and make sure that the space doesn't mess anything up
 INSERT INTO location_blurbs (location_name, location_img, blurb) VALUES ('the_butchers', 'https://c7.alamy.com/comp/B6JTNJ/traditional-butchers-shop-in-ramsbottom-high-street-lancashire-englandunited-B6JTNJ.jpg', 'When you were young, it was common for children to dare one another to sneak into the back room of the butcher building. The rumours all said the same thing: if you made it past the glass display-case and through the door marked STAFF ONLY without the butcher catching you you would see rows of wolf corpses, all strung up by their tails and dripping blood onto the tiled floor.

There was a boy two years older than you, Sacha, who swore he had seen it, and the entire school believed him. He would tell anyone who listened that there was a dead wolf with blue eyes, and that he had reached a hand into its lax mouth to touch a fang. 

Your friend Gráinne got a job in the butchers after she left school and she laughed as she told you she honestly expected all those stories to be true. But all that's behind that door, she said, is a bathroom and a little table the staff eat their lunch at.')



INSERT INTO location_blurbs (location_name, location_img, blurb) VALUES ('the_town_hall', 'https://c7.alamy.com/comp/2J0F12D/sundial-at-the-town-hall-of-the-small-saxon-town-of-pirna-germany-2J0F12D.jpg', '
Town meetings happen once a month, at midday on Thursday. 

The mayor will greet the town, thank them for staying strong, and read a list of people lost to the wolves. It's a fact you have lived with your whole life: the wolves are here, and they cannot be driven away. 

Today, there is no meeting. 

There are posters on the notice board advertising theme nights at the local dive bar, and a few others advertising missing people or pets. You scan over them quickly, trying not to think that you will hear the mayor say those names sooner rather than later. 
')


INSERT INTO location_blurbs (location_name, location_img, blurb) VALUES ('the_town_hall', 'https://c7.alamy.com/comp/2J0F12D/sundial-at-the-town-hall-of-the-small-saxon-town-of-pirna-germany-2J0F12D.jpg', '
Town meetings happen once a month, at midday on Thursday. 

The mayor will greet the town, thank them for staying strong, and read a list of people lost to the wolves. It's a fact you have lived with your whole life: the wolves are here, and they cannot be driven away. 

Today, there is no meeting. 

There are posters on the notice board advertising theme nights at the local dive bar, and a few others advertising missing people or pets. You scan over them quickly, trying not to think that you will hear the mayor say those names sooner rather than later. 
')


INSERT INTO location_blurbs (location_name, location_img, blurb) VALUES ('DIY_shop', 'https://c7.alamy.com/comp/2AJCYYF/outdoor-display-at-grundy-diy-hardware-shop-poulton-street-kirkham-lancashire-england-united-kingdom-2AJCYYF.jpg', '
The bell above the door rings as you enter. There is the drone of a radio playing, and the sound of the old electric fan that Clara relies on to get through the humid summer months. 

"If you&apos;re here for saws or hammers, they&apos;re all gone," she calls out. Years of smoking has ruined her voice so much that the words sound like they hurt. "Bunch&apos;a boys came in this morning and sold me out. Going hunting, I think." 

You look at the aisles and notice how many impromptu weapons are gone. Saws and hammers, but also wrenches, crowbars and even some of the heavier pipes. The men she&apos;s talking about are more than likely from out of town: every year or two a bus full of men think they can get the job that DOGHILL can&apos;t complete done. Every year or two there&apos;s a night so full of screaming that you can&apos;t sleep, even after a lifetime of sleeping through the howls.
')
 */

 -- to make the delete function I was originally kind of stuck between a rock and a hard place: the comments are relying on the location name being passed, but if i delete based on that then i'm clearing the entire location. I wrote a couple of attempts at accessing the comment id via a db query delete from doghill_comments where comment_id = commentData.comment_id and I think I could have eventually accessed the correct data I needed but ... well, by way of me writing this you can assume I did not. 
 --Still, the delete functionality was necessary for the requirements, so in a little "out-of-the-box" thinking I created a hidden route for the users who would be playing as characters who eventually rose into a position of power in the town countil: the truth about the town (that the werewolves are the council members) would have to be a tightly-kept secret, so any suspicious conversation in a location can be deleted. in the future, when I have user authentication I could just delete all comments made by the suspicious user, but for now you can just nuke all comments in one location .. well, anything to keep the secret!