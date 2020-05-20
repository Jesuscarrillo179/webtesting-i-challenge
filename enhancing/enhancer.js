module.exports = {
  succeed,
  fail,
  repair,
  get,
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
    return item.enhancement - 1
  } else if (item.enhancement > 14){
    return item.enhancement - 10
  } else if (item.enhancement <= 5){
    item.enhancement = 0
    return item.enhancement
  } else {
    return item.enhancement - 5
  }
}

function repair(item) {
  item.durability = 100;
  return item.durability
}

function get(item) {
  if(item.enhancement === 0){
    return `${item.name}`
  } else {
    return `[+${item.enhancement}] ${item.name}`
  }
}
