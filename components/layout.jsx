import Navbar from "./navbar";
import Head from "next/head";
import Footer from "./footer";

const Layout = ({ children, title, description, url, photo }) => {
  return (
    <div>
      <Head>
        <title>{title ? title : "DataNeuron"}</title>
        <link rel="icon" type="image/png" href="/favicon.png" />

        <meta name="twitter:card" content="summary" />

        <meta
          property="og:image"
          content={photo ? photo : "/img/dataneuron.jpg"}
        />
        <meta
          name="description"
          content={
            description
              ? description
              : "Advanced platform for complex data annotations, model training, prediction & lifecycle management."
          }
        />
        <meta
          property="og:title"
          content={
            title
              ? title
              : "DataNeuron | Advanced platform for complex data annotations, model training, prediction & lifecycle management."
          }
        />
        <meta
          property="og:description"
          content={
            description
              ? description
              : "Advanced platform for complex data annotations, model training, prediction & lifecycle management."
          }
        />
        <meta property="og:url" content={"https://dataneuron.io" + url} />
        <meta property="og:type" content="website" />
        <script
          async
          src={"https://www.googletagmanager.com/gtag/js?id=G-DLKMD4E44H"}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DLKMD4E44H', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <div className={"min-h-screen flex flex-col justify-between"}>
        <div>
          <Navbar />
          <div
            className={"pt-24 md:pt-36"}
            style={{
              paddingBottom: 100,
              overflowX: "hidden",
              width: "100%",
            }}
          >
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
