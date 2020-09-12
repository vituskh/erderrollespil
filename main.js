var today = new Date()
Date.prototype.getWeekNumber = function(){
    var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
    var dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
  };
  
function getRealWeekNumber() {
    return today.getWeekNumber();
}

function getRollespil() {
	if (today.getDay() == 5) {
		document.getElementById("rollespil?").textContent = "Ja, det er jo fredag."
	} else if (today.getDay() == 4 && getRealWeekNumber() % 2 != 0) {
		document.getElementById("rollespil?").textContent = "Ja, det er en ulige torsdag."
	} else {
		document.getElementById("rollespil?").textContent = "Nej"
	}
}
