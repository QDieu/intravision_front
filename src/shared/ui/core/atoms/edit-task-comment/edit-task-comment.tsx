import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 675px;

    display: flex;
    flex-direction: column;
`;

const FormAddComment = styled.form`
    display: flex;
    flex-direction: column;

    margin-bottom: 40px;
`;

const TitleInput = styled.div`
    color: #9f9ea7;
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;

    margin-bottom: 8px;
`;

const TextInput = styled.textarea`
    margin-bottom: 16px;

    width: 70%;
    min-height: 50px;

    resize: none;
    border: 1px solid #e3e9f4;
    border-radius: 10px;

    &:focus {
        outline: none;
    }
`;

const Button = styled.input`
    box-sizing: border-box;
    width: 150px;
    padding: 8px;

    color: #fff;
    background-color: #008cf0;

    border: none;
    border-radius: 30px;

    cursor: pointer;
`;

const Comment = styled.div`
    display: flex;
    flex-direction: row;
`;

const Avatar = styled.div`
    margin-right: 12px;

    min-width: 40px;
    max-height: 40px;

    border-radius: 20px;

    background-color: #fff;
`;

const BlockInfo = styled.div`
    padding-top: 8px;
`;

const Title = styled.div`
    font-size: 14px;
    line-height: 16px;

    color: #525460;

    margin-bottom: 36px;
`;

const CommentContent = styled.div`
    width: 620px;
    box-sizing: border-box;
    padding-left: 8px;
    padding-right: 32px;

    background-color: #e3e9f4;
    border-radius: 3px;

    box-shadow: 1px 1px rgba(0, 0, 0, 0.2);

    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
`;

type TProps = {
    comment?: string;
    addComment: (value: string) => void;
};

export const EditTaskComment: React.FC<TProps> = ({ comment, addComment }) => {
    const { register, handleSubmit } = useForm<{ comment: string }>();

    const onSubmit = (data: { comment: string }) => {
        addComment(data.comment);
    };

    return (
        <Wrapper>
            <FormAddComment onSubmit={handleSubmit(onSubmit)}>
                <TitleInput>Добавление комментариев</TitleInput>
                <TextInput {...register('comment')} />
                <Button type="submit" value="Сохранить" />
            </FormAddComment>
            {comment && (
                <Comment>
                    <Avatar></Avatar>
                    <BlockInfo>
                        <Title>Иванов Александр</Title>
                        <CommentContent>{comment}</CommentContent>
                    </BlockInfo>
                </Comment>
            )}
        </Wrapper>
    );
};
