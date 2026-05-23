class CountdownTimer {
  constructor(options) {
    this.selector = options.selector;
    this.targetDate = options.targetDate;

    this.timerElement = document.querySelector(this.selector);

    this.updateDisplay();
    setInterval(() => this.updateDisplay(), 1000);
  }

  updateDisplay() {
    const now = new Date();
    const time = this.targetDate - now;

    if (time <= 0) {
      this.setField("days", "000");
      this.setField("hours", "00");
      this.setField("mins", "00");
      this.setField("secs", "00");
      return;
    }

    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

    const secs = Math.floor((time % (1000 * 60)) / 1000);

    this.setField("days", String(days).padStart(3, "0"));

    this.setField("hours", String(hours).padStart(2, "0"));
    this.setField("mins", String(mins).padStart(2, "0"));
    this.setField("secs", String(secs).padStart(2, "0"));
  }

  setField(key, value) {
    const span = this.timerElement.querySelector(`[data-value="${key}"]`);
    if (span) {
      span.textContent = value;
    }
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
});
