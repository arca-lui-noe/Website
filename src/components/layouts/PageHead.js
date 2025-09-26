import Head from "next/head";
import Script from "next/script";
import { generateWebsiteSchema } from "@/lib/schema";

const PageHead = ({ headTitle }) => {
  const websiteSchema = generateWebsiteSchema(
    process.env.NEXT_PUBLIC_SITE_URL || "https://arca-lui-noe.ro/"
  );
  
  return (
    <>
      <Head>
        <title>
          {headTitle ? headTitle : "Arca Lui Noe – Clinică Veterinară"}
        </title>
        <meta name="description" content="Clinică veterinară profesională pentru animalele dumneavoastră" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Script
        id="schema-website"
        type="application/ld+json"
        // strategy="beforeInteractive"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};

export default PageHead;