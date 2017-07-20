let removePunctuations = function(input) {
      return input.replace(/[&\/\\#,+()$~%.'":;*?<>{}\^\@\-\=\`\!]/g, '');
    }
    let generateHashtag = function(message) {
      let input = document.getElementById("message").value.trim();
      let cleanString = removePunctuations(input);

      let words = cleanString.split(" ");
      let results = words.map( word => ` #${word}` )
        .filter(word => word.length > 2)
        .join(" ")
        .toLowerCase();

      // display results
      document.getElementById("results").innerHTML = results;
    };
    let handleClick = function() {
      document.getElementById("message").placeholder = "";
    }
    function handleKeyPress(e){
        if(e.keyCode === 13){
            e.preventDefault(); // Ensure it is only this code that rusn
            generateHashtag();
        }
    }
    function handleBlur(e){
        e.preventDefault(); // Ensure it is only this code that rusn
        document.getElementById("message").placeholder =
          "Enter your message or paste some text here.";
    }
