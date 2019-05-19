const images = [
  "https://www.sportengland.org/media/12929/dwarf-sports.jpg",
  "https://www.rnib.org.uk/sites/default/files/Y_41.jpg",
  "https://australianbananas.com.au/files/images/billyslater_background.jpg",
  "http://1.bp.blogspot.com/-jLaydXMKi1c/Vc50z9dgmSI/AAAAAAAAlJA/_kCzgYMAMaw/s1600/wYn7JHh.jpg",
  "https://image.dhgate.com/0x0/f2/albu/g6/M00/2B/BB/rBVaR1oyR5OAM-5iAAOwwm5Z8Zc116.jpg",
  "https://www.dhresource.com/0x0s/f2-albu-g6-M01-6B-53-rBVaR1q8UoGABrFuAADQH4HodmU596.jpg/eva-asuka-cosplay-costume-3d-print-anime.jpg",
  "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwif2IXAz4niAhXD8HMBHec4B_gQjRx6BAgBEAU&url=https%3A%2F%2Fwww.facultyfocus.com%2Farticles%2Fteaching-and-learning%2Fstudents-perceive-feedback%2F&psig=AOvVaw0AR7eAgat4r5SwImSJu0H0&ust=1557325441828340",
  "https://s16815.pcdn.co/wp-content/uploads/2016/04/iStock_000060783206_Medium.160415.jpg",
  "https://tafttribune.org/wp-content/uploads/2018/10/IMG_0252-e1540599656349-900x675.jpg",
  "https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_teaser_image/2018-11/adobestock_169796178.jpeg?itok=g-2UJbGt",
  "https://schools.au.reachout.com/-/media/schools/images/legacy-articles/two-boys-in-school-uniform-laughing.jpg",
  "https://amp.businessinsider.com/images/5914aece1442931f008b475c-750-375.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/2/26/Mam_people.jpg"
];

const randomImage = () => {
  return images[Math.floor(Math.random() * (images.length - 1))];
};

export default randomImage;
