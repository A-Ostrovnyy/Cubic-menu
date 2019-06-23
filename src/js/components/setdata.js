function setData(object) {
  return  `
  <div class="img-wrapper" style="background-image: url(./img/content/${object.img});">
    <div class="info info-wrapper">
      <div class="info__title">
        <p class="info__name">
          /${object.quantity}/
          <span class="info__mountin">${object.name}</span>
        </p>
      </div>
      <div class="info__footer">
        <p>
          <span class="info__location">${object.location}</span>
          ${object.height} m
        </p>
      </div>
    </div>
  </div>
`;
}

export default setData;
