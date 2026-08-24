const menuButton = document.querySelector(".menu-button")
const navigation = document.querySelector(".nav")
const navigationLinks = document.querySelectorAll(".nav a")
const revealItems = document.querySelectorAll(".reveal")

const closeMenu = () => {
  navigation.classList.remove("open")
  document.body.classList.remove("menu-open")
  menuButton.setAttribute("aria-expanded", "false")
}

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open")
  document.body.classList.toggle("menu-open", isOpen)
  menuButton.setAttribute("aria-expanded", String(isOpen))
})

navigationLinks.forEach(link => link.addEventListener("click", closeMenu))

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return
    entry.target.classList.add("visible")
    observer.unobserve(entry.target)
  })
}, { threshold: 0.12 })

revealItems.forEach(item => observer.observe(item))
