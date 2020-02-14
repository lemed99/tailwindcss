export default function percentageGenerator(k) {

  let object= {};

  for(let i=1; i<=k; i++) {
    for(let n=1; n<=k; n++) {
      if (i >= n) continue;
      object[`${i}/${n}`] = `${(i/n)*100}%`
    }
  }
  return object;

}
