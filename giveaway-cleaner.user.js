// ==UserScript==
// @name          Giveaway Cleaner
// @namespace     http://userstyles.org
// @description	  优化一些Steam福利网站的界面
// @author        deluxghost
// @homepage      https://userstyles.org/styles/146723
// @include       *
// @run-at        document-start
// @version       0.20180223104926
// ==/UserScript==
(function() {var css = "";
if (false || (document.domain == "embloo.net" || document.domain.substring(document.domain.indexOf(".embloo.net") + 1) == "embloo.net"))
	css += [
		"body {",
		"    background: #212121 !important;",
		"}",
		"",
		"a#landRegBtn,",
		"input#_regBtn{",
		"    color: #373737 !important;",
		"}",
		"",
		".content {",
		"	background-image: none !important;",
		"}",
		"",
		".space {",
		"	display: none !important;",
		"}"
	].join("\n");
if (false || (document.domain == "chubbykeys.com" || document.domain.substring(document.domain.indexOf(".chubbykeys.com") + 1) == "chubbykeys.com"))
	css += [
		"body {",
		"    background: #00bfff !important;",
		"}",
		"",
		"h4.text-center {",
		"    color: black;",
		"}",
		"",
		"h5.text-center img {",
		"	width: 15%;",
		"}",
		"",
		".hvr-grow-rotate:hover,",
		".hvr-grow-rotate:focus,",
		".hvr-grow-rotate:active {",
		"    -webkit-transform: none !important;",
		"    transform: none !important;",
		"}"
	].join("\n");
if (false || (document.domain == "giveawayhopper.com" || document.domain.substring(document.domain.indexOf(".giveawayhopper.com") + 1) == "giveawayhopper.com"))
	css += [
		"body {",
		"    background: #2b3e50 !important;",
		"}",
		"",
		"a.dmca-badge {",
		"    display: none !important;",
		"}",
		"",
		"div#MicrosoftTranslatorWidget {",
		"   ",
		"    display: none !important;",
		"}",
		"div.col-md-12 h3.text-center a img {",
		"    display: none !important;",
		"}"
	].join("\n");
if (false || (document.domain == "marvelousga.com" || document.domain.substring(document.domain.indexOf(".marvelousga.com") + 1) == "marvelousga.com"))
	css += [
		"body {",
		"    background: #313131 !important;",
		"	overflow: auto !important;",
		"}",
		"",
		"body[class^=g] {",
		"    background: #313131 !important;",
		"	overflow: auto !important;",
		"}",
		"",
		"body::before {",
		"	display: none !important;",
		"}",
		"",
		"w-div {",
		"	display: none !important;",
		"	visibility: hidden !important;",
		"}",
		"",
		".animation-target {",
		"    -webkit-animation: none !important;",
		"    animation: none !important;",
		"}",
		"",
		"a.dmca-badge {",
		"	display: none !important;",
		"}",
		"",
		"#onesignal-bell-container {",
		"	display: none !important;",
		"}",
		"",
		".hvr-grow-rotate:hover,",
		".hvr-grow-rotate:focus,",
		".hvr-grow-rotate:active {",
		"    -webkit-transform: none !important;",
		"    transform: none !important;",
		"}",
		"",
		".text-center.footertxt img {",
		"	display: none !important;",
		"}"
	].join("\n");
if (false || (document.domain == "indiegala.com" || document.domain.substring(document.domain.indexOf(".indiegala.com") + 1) == "indiegala.com"))
	css += [
		"div.giveaway-social-cont#giveaway-social-cont {",
		"	display: none !important;",
		"}"
	].join("\n");
if (false || (new RegExp("^https?://gleam\\.io/[^/]+/embed(\\?.*)?$")).test(document.location.href))
	css += [
		"html.enter {",
		"    height: auto;",
		"    min-height: 100%;",
		"    width: 100%;",
		"    overflow: auto;",
		"    max-width: none;",
		"    background-attachment: fixed;",
		"}",
		"",
		"html.enter body {",
		"    height: auto;",
		"    overflow: visible;",
		"    width: auto;",
		"    padding-bottom: 100px;",
		"    background: transparent;",
		"}",
		"",
		"html.enter body .campaign.reward,",
		"html.enter body .campaign.competition {",
		"    max-width: 540px;",
		"    min-width: 320px;",
		"    margin: 10px auto;",
		"}",
		"",
		"@media only screen and (max-width: 579px) {",
		"    html.enter .campaign.reward,",
		"	html.enter.facebook-page .campaign.reward,",
		"	html.enter .campaign.competition,",
		"	html.enter.facebook-page .campaign.competition {",
		"        border-top: solid 1px #E5E5E5;",
		"		border-bottom: 5px solid rgba(240,240,240,0.5);",
		"    }",
		"}",
		"",
		"@media only screen and (min-width: 580px) {",
		"    html.enter body,",
		"	html.enter.facebook-page body {",
		"        max-width: 550px;",
		"    }",
		"",
		"    html.enter body .campaign.reward,",
		"	html.enter.facebook-page body .campaign.reward,",
		"	html.enter body .campaign.competition,",
		"	html.enter.facebook-page body .campaign.competition {",
		"		border: 5px solid rgba(240,240,240,0.5);",
		"    }",
		"}"
	].join("\n");
if (false || (new RegExp("^https?://gleam\\.io/.+$")).test(document.location.href))
	css += [
		"html {",
		"    background-color: #557187 !important;",
		"    background-image: none !important;",
		"}",
		"",
		".site-header-logo {",
		"	display: none !important;",
		"}"
	].join("\n");
if (false || (document.domain == "alienwarearena.com" || document.domain.substring(document.domain.indexOf(".alienwarearena.com") + 1) == "alienwarearena.com"))
	css += [
		"body {",
		"    background: #3d3937 !important;",
		"}"
	].join("\n");
if (false || (document.domain == "steamgifts.com" || document.domain.substring(document.domain.indexOf(".steamgifts.com") + 1) == "steamgifts.com"))
	css += [
		"div.featured__outer-wrap {",
		"    background-image: none !important;",
		"    background-color: #3d424c !important;",
		"}",
		"",
		"body {",
		"    margin-top: 38px;",
		"}",
		"",
		".header__error {",
		"	margin-top: 0 !important;",
		"}",
		"",
		".featured__container {",
		"	margin-top: 0 !important;",
		"}",
		"",
		".page__outer-wrap {",
		"	margin-top: 0 !important;",
		"}",
		"",
		"body header {",
		"    position: fixed;",
		"    width: 100%;",
		"    z-index: 100;",
		"    top: 0px;",
		"}"
	].join("\n");
if (false || (new RegExp("^https?://bundle\\.ccyycn\\.com(/.*)?$")).test(document.location.href))
	css += [
		"div.bd-bg {",
		"    background-image: none !important;",
		"}"
	].join("\n");
if (false || (new RegExp("^https?://bundle\\.ccyycn\\.com/(point|free)game.*$")).test(document.location.href))
	css += [
		"div.fire {",
		"    opacity: 0.7 !important;",
		"}",
		"",
		".container.free_game_header {",
		"	display: none !important;",
		"}",
		"",
		"img[id|=\"free-game-is-gone\"] {",
		"    content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAwCAMAAADZyI/9AAAA2FBMVEX0dXv0dZT0dav0j5T0j6v0j8L0qML0qNf2dXv2j3v2j5T2j6v2qKv2qML2qNf2wNf2wOv4dXv4dZT4j3v4j5T4j8L4qJT4qKv4qML4wNf4wOv41uv41v/6j3v6j5T6qHv6qJT6qKv6wML6wNf6wOv61tf61uv66+v66//7qHv7qJT7qKv7wJT7wKv7wML71sL71tf71uv76+v76//7///9wJT9wKv91qv91sL91tf969f96+v96//9/9f9/+v9////1qv/1sL/68L/69f/6+v//9f//+v///+YlTQrAAACBUlEQVR4Ae2Vb1PTQBCHL1hsOAoWGzmlqSJarFVsMIRioybUkt/3/0bubYiXM4Ol6Stn7pkJJG0mz2b/bIXD4XD8T0jxMJ2zU7EtfRSfxQN4IZCIR/E0+ouZLxhvgruRCFEjF4YhMH+UoJtaZFjeC7oAiqknCVIFktij1KiKD+mFKgk2yksl2LlCfgLM/fJUMKxdpRZA0krQx92ROIS+3M3w0Qjo4zreZI3A66mgIeBIb5RPCfxxpoYoPin1cjZoJ5jg1m8IKOjbCZ2anHxHMWJBcaGOZcW+ogLl6wRJ4w065xQoSfIqZK1kARX9IIOBk7exwAzCiAXP0m9TFrSBBDa1HFNfsqBLpm0E19LQU8dcg69mMEhARyVo7g/pb5Ciis6Yp+hVBtiCLpokLQSmCu/p4X0jeFI2T4xcnmAZSM1eWwFPmI4+pMpbNaDZTqx+aCHYTReBbnESPNf/LYE2by0o068FL+hxtkC3VWtBHzeD8iE8RQdRFKP4uXgta/2jc/ZHIDcUhLgPNWSBNuJLbPXKob4yW2X1Zo0gF4ZygVbfUIq8IZDw3+VAMHzu1wRr1kUIFIuIuaSVBvw6MmXID2JgyuIMxakneu/0LXO/fLNrpeiawvgnvfFlWhHN3ta6mvdaVdtOjGRHXAHFvLzFO89ArKhk7fHGM9/46Ngvfz0cDofD8RtTdIfnh2JIYwAAAABJRU5ErkJggg==) !important;",
		"}",
		"",
		"img[id|=\"free-game-is-have\"] {",
		"    content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAwCAMAAADZyI/9AAAAz1BMVEUAgAAAgEgAgHQAl0gAl3QAl5wAr5wAr79IgABIlwBIl0hIr3RIr5xIr79IxL9IxN90gAB0gEh0lwB0l0h0l5x0r0h0r3R0r5x0xL90xN902N902P+clwCcl0icr0icr3Scr5ycxJycxN+c2L+c2N+c7P+/rwC/r0i/r3S/xEi/xHS/xJy/2Jy/2L+/2N+/7N+/7P+////fxEjfxHTf2HTf2Jzf2L/f7L/f7N/f7P/f/7/f/9/f////2HT/2Jz/7Jz/7L//7N///7///9/////dLCSlAAACHUlEQVR4Ae2V8XKTQBCHl5oKklQqsac2tbUmJFZDpcYYotCU3r7/M7nLkh4pM6Ek4x9O+WZob+bY+47fkgNaWlpa/idc+Ld4qK9gA4ukhlfwJF6Gj5g6xWoB3p/BAEtkkKBh5cBTsOMNkoc6GxH1xHIJUvXXe/bw/hjIu1InLtNVfsNcCsHBDaYfEH86MgTBCBgdx0vE8U4CWegoD+IwwXFFkJJ2DDSnz2ArVlf1qwIOaK4cCvD3pTpF/UWpd1O/EFBcDwKbfDWCAG+dioA2fRvwkE1ZTCxRtuqhkFLhWO6vFfyoPEFnRBsjSWq2KFmUIpJCGkBjgRnTmix4Hf+aVATg0cU51Qs2KWXK7yULbDJVBTzDV71g5hq66iTvwXfzw5BljEBfKBWQgF+uAT1wg4gMneFXRbxPECsCbjpiypUZOWAngenCZ1qcY6lGBHZu30fAIfDuOYiqgEu5dkfBYbzoB9LKN/z/sQBJOthLIPGz4C0nXRJ8GvFcduUh0bwHHs59IGyp7oVhhPrP4qPrArxQwwiJbIkpH1SzAHHSVDCQM4EHLGAjfovyMA7gBlHP+3kPPHmTyOLUCVIoIQeozHBE1imvzX9XPj3Ppb+Wy31suDuHLfC9ehHmXPPxjnfHpg1pLypCOEpQn5eLin2wegZb6Q6v4zXh9KL0qXV7CUpgRCcqZVk+47g5O2MNpyZhs5A1ivlT19LS0vKc+Qt5LpGD07nfIwAAAABJRU5ErkJggg==) !important;",
		"}"
	].join("\n");
if (false || (document.domain == "whosgamingnow.net" || document.domain.substring(document.domain.indexOf(".whosgamingnow.net") + 1) == "whosgamingnow.net"))
	css += [
		".intro {",
		"	background: #7ac1a3 !important;",
		"}",
		"",
		".intro-text {",
		"    padding: 10px 0 !important;",
		"	height: 100px !important;",
		"}",
		"",
		".intro-text a img {",
		"	height: 95% !important;",
		"}"
	].join("\n");
if (false || (document.domain == "dogebundle.com" || document.domain.substring(document.domain.indexOf(".dogebundle.com") + 1) == "dogebundle.com"))
	css += [
		"body {",
		"    background: #2eaca9 !important;",
		"}",
		"",
		"div[aria-label=\"cookieconsent\"] {",
		"	display: none !important;",
		"}",
		"",
		"center img.img-responsive {",
		"	width: 25%;",
		"}"
	].join("\n");
if (false || (document.domain == "dupedornot.com" || document.domain.substring(document.domain.indexOf(".dupedornot.com") + 1) == "dupedornot.com"))
	css += [
		"body {",
		"    background: #444 !important;",
		"	overflow: auto !important;",
		"}",
		"",
		"body[class^=g] {",
		"    background: #444 !important;",
		"	overflow: auto !important;",
		"}",
		"",
		"body::before {",
		"	display: none !important;",
		"}",
		"",
		"w-div {",
		"	display: none !important;",
		"	visibility: hidden !important;",
		"}",
		"",
		"li.active-page a {",
		"	color: #222 !important;",
		"}",
		"",
		".btn:hover, .btn:focus",
		"button:hover, button:focus {",
		"    color: #999 !important;",
		"}",
		"",
		".text-center.footertxt img {",
		"	display: none !important;",
		"}"
	].join("\n");
if (false || (document.domain == "giveaway.su" || document.domain.substring(document.domain.indexOf(".giveaway.su") + 1) == "giveaway.su"))
	css += [
		"div.wrapper-outer {",
		"	background: #246 !important;",
		"}"
	].join("\n");
if (false || (document.domain == "prys.ga" || document.domain.substring(document.domain.indexOf(".prys.ga") + 1) == "prys.ga"))
	css += [
		"#header-image {",
		"	display: none !important;",
		"}"
	].join("\n");
if (false || (new RegExp("^https?://free(trial)?.ubisoft.com/promotions/.*$")).test(document.location.href))
	css += [
		"body {",
		"    background-color: #1C2127 !important;",
		"    background-image: none !important;",
		"}",
		"",
		".ratings {",
		"    display: none !important;",
		"}"
	].join("\n");
if (false || (document.domain == "bananagiveaway.com" || document.domain.substring(document.domain.indexOf(".bananagiveaway.com") + 1) == "bananagiveaway.com"))
	css += [
		"body {",
		"    background-color: #153c38 !important;",
		"	background-image: none !important;",
		"}",
		"",
		".character-left, .character-right {",
		"	display: none !important;",
		"}",
		"",
		"#giveaway .giveaway .head a {",
		"	visibility: hidden !important;",
		"}",
		"",
		"#onesignal-bell-container {",
		"	display: none !important;",
		"}"
	].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
