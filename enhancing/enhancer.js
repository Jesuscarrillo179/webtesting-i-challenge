module.exports = {
  succeed,
  fail,
  repair,
  get,
  returnZeroIfNegative,
};

function succeed(item) {
  if(item.enhancement === 20){
    return item.enhancement
  } else {
    return item.enhancement + 1
  }
}

function fail(item) {
  if (item.enhancement > 16){
    item.enhancement -= 1
    item.durability = subtractTen(item.durability)
    return item.durability

  } else if (item.enhancement === 15 || item.enhancement === 16){
    item.durability = subtractTen(item.durability)
    return item.durability

  } else {
    console.log(item)
    item.durability = subtractFive(item.durability)
    console.log(item)
    return item.durability
  }
}

function repair(item) {
  item.durability = 100;
  return item.durability
}

function get(item) {
  if(item.enhancement === 0){
    return item.name
  } else {
    return `[+${item.enhancement}] ${item.name}`
  }
}

// extra handy functions

function subtractTen(item){
  //item is item durability
  item -= 10
  item = returnZeroIfNegative(item)
  return item
}

function subtractFive(item){
  //item is item durability
  item -= 5
  item = returnZeroIfNegative(item)
  return item
}

function returnZeroIfNegative(item){
  //item is item durability
  if(item < 0) {
    return item = 0
  } else {
    return item
  }
}