import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "counter"]
  static values = { max: Number, warning: Number }


  connect() {
    this.updateCounter()
  }

  updateCounter() {
    const length = this.inputTarget.value.length
    const remaining = this.maxValue - length

    this.counterTarget.textContent = `${length}/${this.maxValue}`

    // Remove all status classes
    this.counterTarget.classList.remove('text-gray', 'text-yellow', 'text-red')

    // Add appropriate class based on character count
    if (remaining < 0) {
      this.counterTarget.classList.add('text-red')
    } else if (remaining <= this.warningValue) {
      this.counterTarget.classList.add('text-yellow')
    } else {
      this.counterTarget.classList.add('text-gray')
    }
  }
}
