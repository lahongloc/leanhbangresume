import './AdsCard.css';

const cardData = [
  { index: 0, color: '142, 249, 252' },
  { index: 1, color: '142, 252, 204' },
  { index: 2, color: '142, 252, 157' },
  { index: 3, color: '215, 252, 142' },
  { index: 4, color: '252, 252, 142' },
  { index: 5, color: '252, 208, 142' },
  { index: 6, color: '252, 142, 142' },
  { index: 7, color: '252, 142, 239' },
  { index: 8, color: '204, 142, 252' },
  { index: 9, color: '142, 202, 252' },
];

const AdsCard = () => {
  return (
    <div class="cube-container">
  <div class="cube">
    <div class="face front"></div>
    <div class="face back"></div>
    <div class="face right"></div>
    <div class="face left"></div>
    <div class="face top"></div>
    <div class="face bottom"></div>
  <h1 style={{color: '#fff'}}>Advertising Creative Work!</h1>
  </div>

</div>

  );
};

export default AdsCard;
