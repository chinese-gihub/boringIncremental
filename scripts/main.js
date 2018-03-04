/* main.js
 *
 * Copyright (C) 2018 epic8009, Leaf
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

"use strict";

var game = undefined;
var tickspeed = 30;
var chocolateBarDec = 0.0;
var actualChocolate = 0;
var titleFrame = 0;
var dts = calcDts ();
var titleFrames = [
	"-==Boring Incremental==-",
	"--=Boring Incremental=--",
	"---Boring Incremental---",
	"--=Boring Incremental=--",
	"-==Boring Incremental==-",
	"===Boring Incremental===" //aaaaaaaaaaaaaaa
];
function calcDts () {
	return (new Date ().getTime ());
}
function addChocolate (amount) {
	chocolateBarDec += amount;
	actualChocolate = Math.floor (chocolateBarDec);
}
onload = function () {

	var yourChocoIsMyMotto = document.createElement ("p");
	document.removeChild (document.getElementById ('nojs'));

	game = document.getElementById ("game");
	game.style.display = "";
	game.appendChild (yourChocoIsMyMotto);
	setInterval(()=>{
		titleFrame ++;
		document.title = titleFrames[titleFrame % titleFrames.length];
	},1000/2);
	setInterval(()=>{
		var dt = (new Date ().getTime ()) - dts;
		dts = calcDts ();
		addChocolate (1 / (tickspeed / dt));
		yourChocoIsMyMotto.innerText = "Actual Chocolate: " + actualChocolate;
	},1000/tickspeed);
	
}
