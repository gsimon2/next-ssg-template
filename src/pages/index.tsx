import Content from "@/components/Content";
import MainContentWrapper from "@/components/MainContentWrapper";
import { siteTitle } from "@/content";
import { Box, Grid, Typography } from "@mui/material";
import Head from "next/head";

export const getStaticProps = async () => {
   return {
      props: {},
   };
};

const Page = () => {
   return (
      <>
         <Head>
            <title>{`Page Title | ${siteTitle}`}</title>
         </Head>
         <MainContentWrapper>
            <Grid item xs={12} sm={12} md={12} lg={12}>
               <Content>
                  <Typography>Home</Typography>
               </Content>
            </Grid>
         </MainContentWrapper>
      </>
   );
};

export default Page;
