import React from "react";
import { WithUrqlClient, withUrqlClient } from "next-urql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { Layout } from "../../components/Layout";
import { Heading, Box } from "@chakra-ui/core";
import { useGetPostFromUrl } from "../../utils/useGetPostFromUrl";
import { EditDeletePostButton } from "../../components/EditDeletePostButtons";

const Post = ({}) => {
  const [{ data, error, fetching }] = useGetPostFromUrl();

  if (fetching) {
    return (
      <Layout>
        <div>loading...</div>
      </Layout>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!data?.post) {
    return (
      <Layout>
        <Box>could not find post</Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <Heading mb={4}>{data.post.title}</Heading>
      <Box mb={4}>{data.post.text}</Box>
      <EditDeletePostButton
        id={data.post.id}
        creatorId={data.post.creator.id}
      />
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Post);
