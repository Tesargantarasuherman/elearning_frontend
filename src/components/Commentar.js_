import React from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";

const Commentar = (props) => {
  return (
    <>
      <Comment.Group>
        <Header as="h3" dividing>
          Komentar( {parseInt(props.totalResult)})
        </Header>

        {props.isiKomentar && props.isiKomentar.length > 0
          ? props.isiKomentar.map((komentar) => {
              return (
                <>
                  <Comment>
                    <Comment.Avatar src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                    <Comment.Content>
                      <Comment.Author as="a">{komentar.user.nama}</Comment.Author>
                      <Comment.Metadata>
                        <div>{komentar.created_at}</div>
                      </Comment.Metadata>
                      <Comment.Text>{komentar.isi_komentar}</Comment.Text>
                      <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                </>
              );
            })
          : null}
        {props.page > 1 ? (
          <Button
            content={'Sebelumnya'}
            disabled={props.isLoading}
            onClick={() => props.setPage((c) => c - 1)}
          />
        ) : null}
        {props.toResult < props.totalResult ? (
          <Button
            content={'Selanjutnya'}
            disabled={props.isLoading}
            onClick={() => props.setPage((c) => c + 1)}
          />
        ) : null}
        <Form reply onSubmit={props.submitKomentar}>
          <Form.TextArea
            name="isi_komentar"
            onChange={props.handleFormKomentar}
            value={props.formKomentar.isi_komentar}
          />
          <Button
            type="submit"
            content="Add Reply"
            labelPosition="left"
            icon="edit"
            primary
          />
        </Form>
      </Comment.Group>
    </>
  );
};

export default Commentar;
