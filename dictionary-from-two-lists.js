keys = ['a', 'b', 'c', 'd']
values = [1, 2, 3]

obj = {}
for (let i = 0; i < keys.length; i++) {
  obj[keys[i]] = (values[i] === undefined) ? values[i] = null : values[i];
}

console.log(obj);