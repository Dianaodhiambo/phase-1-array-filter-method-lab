// Code your solution here
function findMatching(drivers,name){
    return drivers = drivers.filter(driver => driver === name || driver == name.toLowerCase())

}

function fuzzyMatch(drivers, letters){
    return drivers.filter(driver => driver.indexOf(letters) == 0)
}

function matchName(drivers, name){
    return drivers.filter(drivers => drivers.name === name);
}