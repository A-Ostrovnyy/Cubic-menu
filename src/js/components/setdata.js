function setData(index, data) {
  return  `
  <div class="img-wrapper" style="background-image: url(${data[index].img});">
    <div class="info info-wrapper">
      <div class="info__title">
        <p class="info__name">
          /${data[index].quantity}/
          <span class="info__mountin">${data[index].name}</span>
        </p>
      </div>
      <div class="info__footer">
        <p>
          <span class="info__location">${data[index].location}</span>
          ${data[index].height} m
        </p>
      </div>
    </div>
  </div>
`;
}

export default setData
