function applyInputRangeStyle() {
    const inputRange = document.querySelector("#range-price");
  
    inputRange.addEventListener("input", (event) => {
      const currentInputValue = event.target.value;
      const runnableTrackProgress = (currentInputValue / inputRange.max) * 100;
  
      inputRange.style.background = `linear-gradient(to right, var(--color-brand1) ${runnableTrackProgress}%, var(--color-gray5) ${runnableTrackProgress}%)`;
    });
  }


export default applyInputRangeStyle;