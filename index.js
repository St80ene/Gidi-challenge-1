/**Cards for Get Started Section */
const cart = [
  { image: './img/archery-target.png', description: 'Get started' },
  { image: './img/bill.png', description: 'Check video' },
  {
    image: './img/button-circle-play.png',
    description: 'Watch Video',
  },
];

const generateCard = (image, description) => `<div class="img-cont">
<img
  src="${image}"
/>
<hr>
<p><a href="#">${description}</a></p>
</div>`;

const displayCards = () => {
  let cards = '';
  for (let i = 0; i < cart.length; i++) {
    const card = generateCard(cart[i].image, cart[i].description);
    cards += card;
  }
  document.getElementById('start').innerHTML = cards;
};

/**Cards for Why section */
const info = [
  {
    image: './img/family.png',
    title: 'One platform',
    span: 'No more multiple platforms',
    description:
      'Now it had seen unable uneasy. Drawings can followed by improved out sociable not. Earnestly so do instantly pretended.',
  },
  {
    image: './img/b-meeting.png',
    title: 'Communication',
    span: 'No more hassle in communication.',
    description:
      'New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended.',
  },
  {
    image: './img/organization.png',
    title: 'Project Management',
    span: 'Easily manage your projects.',
    description:
      'Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried.',
  },
];

const generateInfoCard = (
  image,
  title,
  span,
  description
) => `<div class="inform">
<div class="info_img">
  <img src="${image}">
  <p class="info_title">${title}</p>
</div>
<p class="info1"><span class="span1">${span}. </span>${description}</p>
</div>`;

const displayInfoCards = () => {
  let cardItems = '';
  for (let i = 0; i < info.length; i++) {
    const card = generateInfoCard(
      info[i].image,
      info[i].title,
      info[i].span,
      info[i].description
    );
    cardItems += card;
  }
  document.getElementById('inform_cont').innerHTML = cardItems;
};

/**Third Section Cards */

const thirdCardSets = [
  {
    image: './img/ICON1.png',
    firstText: 'One Platform,',
    secondText: 'Solves Everything',
    thirdText:
      'Now it had seen unable uneasy. Drawings can followed by improved out sociable not. Earnestly so do instantly pretended.',
    fourthText: 'Get xPider Now',
  },
  {
    image: './img/ICON.png',
    firstText: 'Fastest Management',
    secondText: 'Easy to Organize',
    thirdText:
      'Now it had seen unable uneasy. Drawings can followed by improved out sociable not. Earnestly so do instantly pretended.',
    fourthText: 'Find out more',
  },
];

const generateThirdCard = (
  image,
  firstText,
  secondText,
  thirdText,
  fourthText
) => `<div class="card">
<div class="image_holder">
<img src="${image}">
</div>
<div class="text1">
  <p><span class="span3">${firstText}</span> <br>
    <span class="span1 span2">${secondText}</span>
</div>
<div class="text2">
${thirdText}
</div>
<div class="text_direction">
  <a href="#">${fourthText}</a>
  <img src="./img/tail-right1.png" width="12px" height="8px">
  <div class="dash"></div>
</div>
</div>`;

const displayThirdCards = () => {
  let cardSet = '';
  for (let i = 0; i < thirdCardSets.length; i++) {
    const card = generateThirdCard(
      thirdCardSets[i].image,
      thirdCardSets[i].firstText,
      thirdCardSets[i].secondText,
      thirdCardSets[i].thirdText,
      thirdCardSets[i].fourthText
    );
    cardSet += card;
  }
  document.getElementById('card_holder').innerHTML = cardSet;
};

/**Guide Cards */
const guideCard = [
  {
    image: './img/book.png',
    text: 'Installation Guide',
    description:
      'No more Mulitple Platforms. Now it had seen unable uneasy. Drawings can followed by improved out sociable not. Earnestly so do instantly pretended.',
  },
  {
    image: './img/phone.png',
    text: 'Live call support',
    description:
      'No more Mulitple Platforms. Now it had seen unable uneasy. Drawings can followed by improved out sociable not. Earnestly so do instantly pretended.',
  },
  {
    image: './img/preferences.png',
    text: 'Easy setup process',
    description:
      'No more Mulitple Platforms. Now it had seen unable uneasy. Drawings can followed by improved out sociable not. Earnestly so do instantly pretended.',
  },
];

const generateGuideCards = (image, text, description) => `<div class="inform">
<div class="info_img">
  <img src="${image}">
  <p class="info_title">${text}</p>
</div>
<p class="p-text">${description}</p>
</div>`;

const displayGuideCards = () => {
  let cardSets = '';
  for (let i = 0; i < guideCard.length; i++) {
    const card = generateGuideCards(
      guideCard[i].image,
      guideCard[i].text,
      guideCard[i].description
    );
    cardSets += card;
  }
  document.getElementById('guide_cont').innerHTML = cardSets;
};

/**Loads the code after HTML*/
window.onload = function () {
  displayCards();
  displayInfoCards();
  displayThirdCards();
  displayGuideCards();
};
