function Galaxy( name, age, star_count, novae_activity) {
	this.name = name;
	this.age = age;
	this.star_count = star_count;
	this.novae_activity = novae_activity;

	this.toString = function() {
		var string = ""
        for(var prop in this) {
            if (typeof this[prop] !== "function") {
                string += " "+ prop+": "+this[prop]
            }
		}
        return string;
	}
}

var mygalaxy = new Galaxy("Luna", 2000000, 2000000000, "bright");
console.log(mygalaxy.toString());