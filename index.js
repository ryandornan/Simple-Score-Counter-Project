let homeScore = 0
let homeScoreCount = document.getElementById("homeScore")

let awayScore = 0
let awayScoreCount = document.getElementById("awayScore")

function plusOne () {
    console.log("Plus One Button Clicked")
    homeScoreCount.innerText = homeScore += 1
    return homeScore
}

function plusTwo () {
    console.log("Home Two Button Clicked")
    homeScoreCount.innerText = homeScore += 2
    return homeScore
}

function plusThree () {
    console.log("Home Three Button Clicked")
    homeScoreCount.innerText = homeScore += 3
    return homeScore
}
function awayPlusOne () {
    console.log("Home One Button Clicked")
    awayScoreCount.innerText = awayScore += 1
    return awayScore
}

function awayPlusTwo () {
    console.log("Away Two Button Clicked")
    awayScoreCount.innerText = awayScore += 2
    return awayScore
}

function awayPlusThree () {
    console.log("Away Three Button Clicked")
    awayScoreCount.innerText = awayScore += 3
    return awayScore
}