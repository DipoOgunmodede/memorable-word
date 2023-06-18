const app = Vue.createApp({
    data() {
      return {
        memorableWord: '',
        digits: ['', '', ''],
        selectedLetters: []
      };
    },
    methods: {
      updateSelectedLetters() {
        this.selectedLetters = this.digits.map((digit, index) => {
          const digitIndex = parseInt(digit) - 1;
          return digit && digitIndex >= 0 && digitIndex < this.memorableWord.length ? `${index + 1} letter: ${this.memorableWord.charAt(digitIndex)}` : '';
        });
      },
      handleKeyDown(event, index) {
        if (event.key === 'Enter') {
          event.preventDefault();
          this.focusNextInput(index);
        }
      },
      focusNextInput(index) {
        const nextIndex = index + 1;
        if (nextIndex < this.digits.length) {
          this.$nextTick(() => {
            const nextInput = this.$refs[`digitInput${nextIndex}`];
            nextInput.focus();
          });
        }
      },
    },
    computed: {
      filteredSelectedLetters() {
        return this.selectedLetters.filter(letter => letter !== '').join(', ');
      }
    }
  });
  
  app.mount('#app');
  