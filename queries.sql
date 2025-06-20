-- the queries used to build the tables in my database
 

-- to fit the theme/function of my app, rather than render a list of posts under their titles, I will instead give them a "location" and when users open the post they will see the storybeat currently taking place in that location. Imagining, for a second, that this app was real & used by a dedicated group of people, their posts would eventually be the catalyst for updating what post is displayed in the location, and the old "post" and related comments would then be moved to an "archive" location -- I think this would be doable by simply updating the location in the table and creating a dedicated archive location 🤔

/* CREATE TABLE IF NOT EXISTS location_blurbs (
  blurb_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  location_name VARCHAR(255) NOT NULL,
  location_img TEXT NOT NULL,
  blurb TEXT NOT NULL) 
)
 */

 /*  INSERT INTO location_blurbs (location_name, location_img, blurb) VALUES ('The Riverbank', 'https://images.unsplash.com/photo-1738774974085-cddf4d765b22?mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png', 'As you approach the river a heron turns to pin you with one of its yellow eyes, its elegant neck already curled in preparation to strike at a fish. 
  
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