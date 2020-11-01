// // Not working for some reason, check it out later

// import Document, { Html, Head, Main, NextScript } from "next/document";

// // extending a class instead of a func component is because we
// // have to extend our document since it implements certain methods
// // and fucntionalities that are important for NextJs to use

// export default class CustomDocument extends Document {
//   render() {
//     console.log("Hello from _document.tsx");
//     return (
//       <Html>
//         <Head>
//           <meta property="custom" content="cookie" />
//         </Head>
//         <body>
//           <Main />
//         </body>
//         <NextScript />
//       </Html>
//     );
//   }
// }
