//importing images here so that I don't have to mess around with next.config.js since the first few attempts did not work for me..
import riverside from "@/../public/images/riverside.png";
import DIY from "@/../public/images/claraDIY.png";
import townhall from "@/../public/images/townhall.png";
import butcher from "@/../public/images/butcher.png";
//I need to set the alt text here, so that they will be correctly paired to the image .. I will do this by creating an array of objects

const imageGallery = [
  {
    id: 1,
    img_var: riverside,
    img_alt:
      "A clip-art view of a riverside. Bull rushes are growing by the water",
    location_name: "the_riverbank",
  },
  {
    id: 2,
    img_var: DIY,
    img_alt:
      "A clip-art drawing of a DIY hardware store. The storefront has a poster on the front, advertising help for hunters",
    location_name: "DIY_shop",
  },
  {
    id: 3,
    img_var: townhall,
    img_alt:
      "A clip-art drawing of a town hall. There is a clock on the top of the hall, and a sign outside with TOWN HALL written in all-caps",
    location_name: "the_town_hall",
  },
  {
    id: 4,
    img_var: butcher,
    img_alt:
      "A clip-art drawing of a butcher. There is a striped awning over the door",
    location_name: "the_butchers",
  },
];

export default imageGallery;
