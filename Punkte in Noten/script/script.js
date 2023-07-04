      var liste = []; // Leeres Array, um die eingegebenen Werte zu speichern

      function eingabeHinzufuegen() {
        var wert = prompt("Gib einen Wert ein:");
        if (wert !== null) {
          liste.push(parseFloat(wert)); // Den eingegebenen Wert in das Array hinzufügen
          document.getElementById("ausgabe").textContent = liste.join(", ");
        }
      }

      function durchschnittBerechnen() {
        var summe = liste.reduce(function(a, b) {
          return a + b;
        }, 0);
        var anzahl = liste.length;
        var durchschnitt = summe / anzahl;
		var endergebnis = (17 - durchschnitt) / 3;
		
	var drgerundet = durchschnitt.toFixed(2);
	var engerundet = endergebnis.toFixed(2);
        alert("Deine durchnittliche Punktzahl ist : " + drgerundet + ".  Dein Schnitt wäre dann : " + engerundet);
	
  }