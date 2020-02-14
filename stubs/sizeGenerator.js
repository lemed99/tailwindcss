export default function sizeGenerator(n) {

  let object= {};

  for(let i=0; i<=n; i++) {
    object[i] = `${i}px`
  }
  return object;

}
