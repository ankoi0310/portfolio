export const changeFavicon = mode => {
  let link = document.querySelector('link[rel~="icon"]')
  if (!link) {
    link = document.createElement('link')
    link.rel = 'icon'
    link.type = 'image/png'
    document.head.appendChild(link)
  }
  link.href = mode === 'dark' ? '/white-favicon.png' : '/favicon.png'
}