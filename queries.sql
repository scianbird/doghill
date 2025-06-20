-- the queries used to build the tables in my database
 

-- to fit the theme/function of my app, rather than render a list of posts under their titles, I will instead give them a "location" and when users open the post they will see the storybeat currently taking place in that location. Imagining, for a second, that this app was real & used by a dedicated group of people, their posts would eventually be the catalyst for updating what post is displayed in the location, and the old "post" and related comments would then be moved to an "archive" location -- I think this would be doable by simply updating the location in the table and creating a dedicated archive location 🤔

/* CREATE TABLE IF NOT EXISTS location_blurbs (
  blurb_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  location_name VARCHAR(255) NOT NULL,
  location_img TEXT NOT NULL,
  blurb TEXT NOT NULL,
  comments_id INT)
)
 */

 /*  INSERT INTO location_blurbs (location_name, location_img, blurb) VALUES ('The Riverbank', 'https://images.unsplash.com/photo-1738774974085-cddf4d765b22?mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png', 'As you approach the river a heron turns to pin you with one of its yellow eyes, its elegant neck already curled in preparation to strike at a fish. 
  
  To your side, hidden somewhere in the fog, a fisherman whistles tunelessly: long and low notes as he works. The bird doesn&apost seem to mind his presence, but it still watches you with that round yellow eye as you take another step toward the water. Eventually, you get too close and the bird startles into movement - recoiling its neck even tighter and beating those massive wings; long legs stretched as it hunts for a new wading spot. 
  
  The whistling never stops.' 
) */