import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["toggleable"]
  static classes = ["hidden", "highlight"]

  toggle() {
    this.toggleableTargets.forEach(element => {
      element.classList.toggle(this.hiddenClass)
    })
  }
}
