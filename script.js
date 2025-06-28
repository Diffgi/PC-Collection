const generations = [
  {
    name: "Photocards Generation 2",
    folder: "Library/Gen2",
    cards: [
        "Kiko Satoru - SSR.png",
        "Kiko Satoru 2 - SSR.png",
        "Howl - SSR.png",
        "Sato Mafuyu - SSR.png",
        "Kageyama Tobio - SSR.png",
        "Tsukishima Kei - SSR.png",
        "Himmel - SSR.png", 
        "Zhongli - SSR.png",
        "Gojo Satoru - SS.png",
        "Gojo Satoru 2 - SS.png",
        "Gojo Satoru 3 - SS.png",
        "Kageyama Tobio - SS.png",
        "Tsukishima Kei - SS.png",
        "Himmel - S.png",
        "Himmel 2 - S.png",
        "Wooin Yoo - S.png",
        "Wooin Yoo - A.png"
    ],
    back: "BackCard.png"
  },
  {
    name: "Photocards Generation 3",
    folder: "Library/Gen3",
    cards: ["Image1.png", "Image2.png", "Image3.png", "Image4.png"],
    back: "BackCard.png"
  }
];

const gallery = document.getElementById('gallery');

generations.forEach(gen => {
  // Buat header untuk generasi
  const header = document.createElement('h2');
  header.textContent = gen.name;
  gallery.appendChild(header);

  gen.cards.forEach((filename) => {
    const card = document.createElement('div');
    card.className = 'card';

    const cardInner = document.createElement('div');
    cardInner.className = 'card-inner';

    const front = document.createElement('div');
    front.className = 'card-front';
    const frontImg = document.createElement('img');
    frontImg.src = `${gen.folder}/${filename}`;
    front.appendChild(frontImg);

    const back = document.createElement('div');
    back.className = 'card-back';
    const backImg = document.createElement('img');
    backImg.src = `${gen.folder}/${gen.back}`;
    back.appendChild(backImg);

    cardInner.appendChild(front);
    cardInner.appendChild(back);
    card.appendChild(cardInner);

    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });

    gallery.appendChild(card);
  });
});
