let lastEvaluated = false;
    let mode = 'RAD'; // default mode is radians

    function setMode(m) {
      mode = m;
    }

    function append(value) {
      const display = document.getElementById("display");
      if (lastEvaluated) {
        display.value = "";
        lastEvaluated = false;
      }
      display.value += value;
    }

    // Only allow operators if display is not empty (except "-")
    function appendIfAllowed(value) {
      const display = document.getElementById("display");
      if (display.value === "" && value !== '-') return;
      append(value);
    }

    function clearDisplay() {
      document.getElementById("display").value = "";
      lastEvaluated = false;
    }

    function backspace() {
      const display = document.getElementById("display");
      display.value = display.value.slice(0, -1);
    }

    function calculate() {
      const display = document.getElementById("display");
      try {
        // Define functions for Math.js including rad/deg conversion
        const scope = {
          sin: (x) => mode==='DEG' ? Math.sin(x * Math.PI/180) : Math.sin(x),
          cos: (x) => mode==='DEG' ? Math.cos(x * Math.PI/180) : Math.cos(x),
          tan: (x) => mode==='DEG' ? Math.tan(x * Math.PI/180) : Math.tan(x),
          csc: (x) => 1 / (mode==='DEG' ? Math.sin(x * Math.PI/180) : Math.sin(x)),
          sec: (x) => 1 / (mode==='DEG' ? Math.cos(x * Math.PI/180) : Math.cos(x)),
          cot: (x) => 1 / (mode==='DEG' ? Math.tan(x * Math.PI/180) : Math.tan(x)),
          sqrt: (x) => Math.sqrt(x)
        };
        const result = math.evaluate(display.value, scope);
        display.value = result;
        lastEvaluated = true;
      } catch (e) {
        display.value = "Error";
      }
    }