export default function main(): void {
  const testPromise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Coming in after 2 seconds');
    }, 2000);
  });

  testPromise
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.log(error);
    });
}
