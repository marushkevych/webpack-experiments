const createAndAppendCard = (header, body, image) => {
  const cardFragment = document.createDocumentFragment()
  const cardElement = document.createElement('div')
  const cardHeader = `<h2 class="card-header">${header}</h2>`
  const cardBody = `<div class="card-body">${body}</div>`
  const cardImage = `<img src="${image}" width="500"></img>`

  cardElement.innerHTML = `
    <div class="card">
      ${cardHeader}
      ${cardBody}
      ${cardImage}
    </div>
  `

  cardFragment.appendChild(cardElement)
  document.body.appendChild(cardFragment)
}

export default createAndAppendCard