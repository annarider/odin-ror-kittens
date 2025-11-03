import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["toggleable"]
  static classes = ["hidden", "highlight"]

  toggle() {
    this.toggleableTargets.forEach(element => {
      element.classList.toggle(this.hiddenClass)
    })
  }

  hide(event) {
    event.currentTarget.classList.add(this.hiddenClass)
    this.toggleableTargets.forEach(element => {
      element.classList.remove(this.hiddenClass)
    })
  }

  toggleHighlight(event) {
    const container = event.currentTarget.closest('[data-toggle-container]')
    if (container) {
      container.classList.toggle(this.highlightClass)
    }
  }
}
