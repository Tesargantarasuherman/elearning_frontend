import React from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";

const Commentar = (props) => (
  <Comment.Group>
    <Header as="h3" dividing>
      Comments
    </Header>

    {props.isiKomentar && props.isiKomentar.length > 0 ? (
      props.isiKomentar.map((komentar) => {
        return (
          <Comment>
            <Comment.Avatar src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
            <Comment.Content>
              <Comment.Author as="a">{komentar.nama}</Comment.Author>
              <Comment.Metadata>
                <div>Today at 5:42PM</div>
              </Comment.Metadata>
              <Comment.Text>{komentar.isi_komentar}</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        );
      })
    ) : (
      <Header as="h3" dividing>
        Tidak Ada Komentar
      </Header>
    )}

    <Form reply>
      <Form.TextArea />
      <Button content="Add Reply" labelPosition="left" icon="edit" primary />
    </Form>
  </Comment.Group>
);

export default Commentar;
